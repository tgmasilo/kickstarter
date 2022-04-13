'reach 0.1';
'use strict';

// number of contributors
const NUM_OF_BACKERS = 3;

const CommonInterface = {
  showOutcome: Fun([Array(Address, NUM_OF_BACKERS)], Null),
};

// crowdfund owner or admin
const OwnerInterface = {
  ...CommonInterface,
  getParams: Fun([], Object({
    deadline: UInt, // relative deadline
    minimumContribution: UInt,
  })),
};

const BackerInterface = {
  ...CommonInterface,
  shouldBackCampaign: Fun([UInt], Bool),
  showContribution: Fun([Address], Null),
};

export const main = Reach.App(
  { },
  [
    Participant('Admin', OwnerInterface), ParticipantClass('Backer', BackerInterface),
  ],
  (Admin, Backer) => {
    const showOutcome = (backers) =>
      each([Admin, Backer], () => interact.showOutcome(backers));

    Admin.only(() => {
      const { minimumContribution, deadline } = declassify(interact.getParams()); });
    Admin.publish(minimumContribution, deadline);

    const initialBackers = Array.replicate(NUM_OF_BACKERS, Admin);

    // Until deadline, allow buyers to buy ticket
    const [ keepGoing, backers, contributions ] =
      parallelReduce([ true, initialBackers, 0 ])
        .invariant(balance() == contributions * minimumContribution)
        .while(keepGoing)
        .case(
          Backer,
          () => ({
            when: declassify(interact.shouldBackCampaign(minimumContribution)) }),
          (_) => minimumContribution,
          (_) => {
            const backer = this;
            Backer.only(() => interact.showContribution(backer));
            const idx = contributions % NUM_OF_BACKERS;
            const newBackers =
              Array.set(backers, idx, backer);
            return [ true, newBackers, contributions + 1 ]; })
        .timeout(relativeTime(deadline), () => {
          Anybody.publish();
          return [ false, backers, contributions ]; });

    transfer(balance() * (80/100)).to(Admin);
    const bonus = balance() * (20/100);

    // transfer(balance() % NUM_OF_BACKERS).to(Admin);
    // const bonus = balance() / NUM_OF_BACKERS;

    backers.forEach(backer =>
      transfer(bonus).to(backer));

    commit();
    showOutcome(backers);
  });

  // backers = 10, min = 50, balance = 500
