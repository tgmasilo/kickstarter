// Automatically generated with Reach 0.1.9 (1f9218bd)
/* eslint-disable */
export const _version = '0.1.9';
export const _versionHash = '0.1.9 (1f9218bd)';
export const _backendVersion = 11;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Array(ctc0, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 3));
  
  return {
    infos: {
      },
    views: {
      3: [ctc0, ctc1, ctc1, ctc2, ctc1, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Admin(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Admin expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Admin expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Object({
    deadline: ctc0,
    minimumContribution: ctc0
    });
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Array(ctc3, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 3));
  
  
  const v166 = stdlib.protect(ctc1, await interact.getParams(), {
    at: './index.rsh:36:78:application',
    fs: ['at ./index.rsh:35:15:application call to [unknown function] (defined at: ./index.rsh:35:19:function exp)'],
    msg: 'getParams',
    who: 'Admin'
    });
  const v167 = v166.minimumContribution;
  const v168 = v166.deadline;
  
  const txn1 = await (ctc.sendrecv({
    args: [v167, v168],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:37:11:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:37:11:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v170, v171], secs: v173, time: v172, didSend: v30, from: v169 } = txn1;
      
      ;
      const v175 = [v169, v169, v169];
      const v177 = v175;
      const v178 = stdlib.checkedBigNumberify('./index.rsh:43:46:decimal', stdlib.UInt_max, 0);
      const v179 = true;
      const v180 = v172;
      const v183 = stdlib.checkedBigNumberify('./index.rsh:31:19:after expr stmt semicolon', stdlib.UInt_max, 0);
      
      if (await (async () => {
        
        return v179;})()) {
        const v193 = stdlib.add(v180, v171);
        sim_r.isHalt = false;
        }
      else {
        const v218 = stdlib.mod(v183, stdlib.checkedBigNumberify('./index.rsh:5:24:decimal', stdlib.UInt_max, 3));
        const v222 = stdlib.sub(v183, v218);
        sim_r.txns.push({
          amt: v218,
          kind: 'from',
          to: v169,
          tok: undefined /* Nothing */
          });
        const v224 = stdlib.div(v222, stdlib.checkedBigNumberify('./index.rsh:5:24:decimal', stdlib.UInt_max, 3));
        const v225 = v177[stdlib.checkedBigNumberify('reach standard library:101:21:application', stdlib.UInt_max, 0)];
        const v226 = v177[stdlib.checkedBigNumberify('reach standard library:101:21:application', stdlib.UInt_max, 1)];
        const v227 = v177[stdlib.checkedBigNumberify('reach standard library:101:21:application', stdlib.UInt_max, 2)];
        sim_r.txns.push({
          amt: v224,
          kind: 'from',
          to: v225,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          amt: v224,
          kind: 'from',
          to: v226,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          amt: v224,
          kind: 'from',
          to: v227,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v170, v171], secs: v173, time: v172, didSend: v30, from: v169 } = txn1;
  ;
  const v175 = [v169, v169, v169];
  let v177 = v175;
  let v178 = stdlib.checkedBigNumberify('./index.rsh:43:46:decimal', stdlib.UInt_max, 0);
  let v179 = true;
  let v180 = v172;
  let v183 = stdlib.checkedBigNumberify('./index.rsh:31:19:after expr stmt semicolon', stdlib.UInt_max, 0);
  
  while (await (async () => {
    
    return v179;})()) {
    const v193 = stdlib.add(v180, v171);
    const txn2 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc2],
      timeoutAt: ['time', v193],
      waitIfNotPresent: false
      }));
    if (txn2.didTimeout) {
      const txn3 = await (ctc.sendrecv({
        args: [v169, v170, v171, v177, v178, v183, v193],
        evt_cnt: 0,
        funcNum: 3,
        lct: v180,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:59:19:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn3) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v214, time: v213, didSend: v99, from: v212 } = txn3;
          
          ;
          const cv177 = v177;
          const cv178 = v178;
          const cv179 = false;
          const cv180 = v213;
          const cv183 = v183;
          
          await (async () => {
            const v177 = cv177;
            const v178 = cv178;
            const v179 = cv179;
            const v180 = cv180;
            const v183 = cv183;
            
            if (await (async () => {
              
              return v179;})()) {
              const v193 = stdlib.add(v180, v171);
              sim_r.isHalt = false;
              }
            else {
              const v218 = stdlib.mod(v183, stdlib.checkedBigNumberify('./index.rsh:5:24:decimal', stdlib.UInt_max, 3));
              const v222 = stdlib.sub(v183, v218);
              sim_r.txns.push({
                amt: v218,
                kind: 'from',
                to: v169,
                tok: undefined /* Nothing */
                });
              const v224 = stdlib.div(v222, stdlib.checkedBigNumberify('./index.rsh:5:24:decimal', stdlib.UInt_max, 3));
              const v225 = v177[stdlib.checkedBigNumberify('reach standard library:101:21:application', stdlib.UInt_max, 0)];
              const v226 = v177[stdlib.checkedBigNumberify('reach standard library:101:21:application', stdlib.UInt_max, 1)];
              const v227 = v177[stdlib.checkedBigNumberify('reach standard library:101:21:application', stdlib.UInt_max, 2)];
              sim_r.txns.push({
                amt: v224,
                kind: 'from',
                to: v225,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                amt: v224,
                kind: 'from',
                to: v226,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                amt: v224,
                kind: 'from',
                to: v227,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }})();
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: undefined /* mto */,
        tys: [ctc3, ctc0, ctc0, ctc4, ctc0, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v214, time: v213, didSend: v99, from: v212 } = txn3;
      ;
      const cv177 = v177;
      const cv178 = v178;
      const cv179 = false;
      const cv180 = v213;
      const cv183 = v183;
      
      v177 = cv177;
      v178 = cv178;
      v179 = cv179;
      v180 = cv180;
      v183 = cv183;
      
      continue;
      }
    else {
      const {data: [v200], secs: v202, time: v201, didSend: v73, from: v199 } = txn2;
      const v205 = stdlib.add(v183, v170);
      ;
      const v207 = stdlib.mod(v178, stdlib.checkedBigNumberify('./index.rsh:5:24:decimal', stdlib.UInt_max, 3));
      const v209 = stdlib.Array_set(v177, v207, v199);
      const v210 = stdlib.add(v178, stdlib.checkedBigNumberify('./index.rsh:57:56:decimal', stdlib.UInt_max, 1));
      const cv177 = v209;
      const cv178 = v210;
      const cv179 = true;
      const cv180 = v201;
      const cv183 = v205;
      
      v177 = cv177;
      v178 = cv178;
      v179 = cv179;
      v180 = cv180;
      v183 = cv183;
      
      continue;}
    
    }
  const v218 = stdlib.mod(v183, stdlib.checkedBigNumberify('./index.rsh:5:24:decimal', stdlib.UInt_max, 3));
  const v222 = stdlib.sub(v183, v218);
  ;
  const v224 = stdlib.div(v222, stdlib.checkedBigNumberify('./index.rsh:5:24:decimal', stdlib.UInt_max, 3));
  const v225 = v177[stdlib.checkedBigNumberify('reach standard library:101:21:application', stdlib.UInt_max, 0)];
  const v226 = v177[stdlib.checkedBigNumberify('reach standard library:101:21:application', stdlib.UInt_max, 1)];
  const v227 = v177[stdlib.checkedBigNumberify('reach standard library:101:21:application', stdlib.UInt_max, 2)];
  ;
  ;
  ;
  stdlib.protect(ctc2, await interact.showOutcome(v177), {
    at: './index.rsh:33:55:application',
    fs: ['at ./index.rsh:33:11:application call to [unknown function] (defined at: ./index.rsh:33:32:function exp)', 'at ./index.rsh:69:16:application call to "showOutcome" (defined at: ./index.rsh:32:35:function exp)'],
    msg: 'showOutcome',
    who: 'Admin'
    });
  
  return;
  
  
  };
export async function Backer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Backer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Backer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Array(ctc3, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 3));
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v170, v171], secs: v173, time: v172, didSend: v30, from: v169 } = txn1;
  ;
  const v175 = [v169, v169, v169];
  let v177 = v175;
  let v178 = stdlib.checkedBigNumberify('./index.rsh:43:46:decimal', stdlib.UInt_max, 0);
  let v179 = true;
  let v180 = v172;
  let v183 = stdlib.checkedBigNumberify('./index.rsh:31:19:after expr stmt semicolon', stdlib.UInt_max, 0);
  
  while (await (async () => {
    
    return v179;})()) {
    const v193 = stdlib.add(v180, v171);
    const v197 = stdlib.protect(ctc1, await interact.shouldBackCampaign(v170), {
      at: './index.rsh:49:57:application',
      fs: ['at ./index.rsh:48:14:application call to [unknown function] (defined at: ./index.rsh:48:14:function exp)', 'at ./index.rsh:48:14:application call to [unknown function] (defined at: ./index.rsh:48:14:function exp)'],
      msg: 'shouldBackCampaign',
      who: 'Backer'
      });
    
    const txn2 = await (ctc.sendrecv({
      args: [v169, v170, v171, v177, v178, v183, v193, null],
      evt_cnt: 1,
      funcNum: 2,
      lct: v180,
      onlyIf: v197,
      out_tys: [ctc2],
      pay: [v170, []],
      sim_p: (async (txn2) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v200], secs: v202, time: v201, didSend: v73, from: v199 } = txn2;
        
        const v205 = stdlib.add(v183, v170);
        sim_r.txns.push({
          amt: v170,
          kind: 'to',
          tok: undefined /* Nothing */
          });
        
        const v207 = stdlib.mod(v178, stdlib.checkedBigNumberify('./index.rsh:5:24:decimal', stdlib.UInt_max, 3));
        const v209 = stdlib.Array_set(v177, v207, v199);
        const v210 = stdlib.add(v178, stdlib.checkedBigNumberify('./index.rsh:57:56:decimal', stdlib.UInt_max, 1));
        const cv177 = v209;
        const cv178 = v210;
        const cv179 = true;
        const cv180 = v201;
        const cv183 = v205;
        
        await (async () => {
          const v177 = cv177;
          const v178 = cv178;
          const v179 = cv179;
          const v180 = cv180;
          const v183 = cv183;
          
          if (await (async () => {
            
            return v179;})()) {
            const v193 = stdlib.add(v180, v171);
            sim_r.isHalt = false;
            }
          else {
            const v218 = stdlib.mod(v183, stdlib.checkedBigNumberify('./index.rsh:5:24:decimal', stdlib.UInt_max, 3));
            const v222 = stdlib.sub(v183, v218);
            sim_r.txns.push({
              amt: v218,
              kind: 'from',
              to: v169,
              tok: undefined /* Nothing */
              });
            const v224 = stdlib.div(v222, stdlib.checkedBigNumberify('./index.rsh:5:24:decimal', stdlib.UInt_max, 3));
            const v225 = v177[stdlib.checkedBigNumberify('reach standard library:101:21:application', stdlib.UInt_max, 0)];
            const v226 = v177[stdlib.checkedBigNumberify('reach standard library:101:21:application', stdlib.UInt_max, 1)];
            const v227 = v177[stdlib.checkedBigNumberify('reach standard library:101:21:application', stdlib.UInt_max, 2)];
            sim_r.txns.push({
              amt: v224,
              kind: 'from',
              to: v225,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              amt: v224,
              kind: 'from',
              to: v226,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              amt: v224,
              kind: 'from',
              to: v227,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }})();
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: ['time', v193],
      tys: [ctc3, ctc0, ctc0, ctc4, ctc0, ctc0, ctc0, ctc2],
      waitIfNotPresent: false
      }));
    if (txn2.didTimeout) {
      const txn3 = await (ctc.sendrecv({
        args: [v169, v170, v171, v177, v178, v183, v193],
        evt_cnt: 0,
        funcNum: 3,
        lct: v180,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:59:19:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn3) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v214, time: v213, didSend: v99, from: v212 } = txn3;
          
          ;
          const cv177 = v177;
          const cv178 = v178;
          const cv179 = false;
          const cv180 = v213;
          const cv183 = v183;
          
          await (async () => {
            const v177 = cv177;
            const v178 = cv178;
            const v179 = cv179;
            const v180 = cv180;
            const v183 = cv183;
            
            if (await (async () => {
              
              return v179;})()) {
              const v193 = stdlib.add(v180, v171);
              sim_r.isHalt = false;
              }
            else {
              const v218 = stdlib.mod(v183, stdlib.checkedBigNumberify('./index.rsh:5:24:decimal', stdlib.UInt_max, 3));
              const v222 = stdlib.sub(v183, v218);
              sim_r.txns.push({
                amt: v218,
                kind: 'from',
                to: v169,
                tok: undefined /* Nothing */
                });
              const v224 = stdlib.div(v222, stdlib.checkedBigNumberify('./index.rsh:5:24:decimal', stdlib.UInt_max, 3));
              const v225 = v177[stdlib.checkedBigNumberify('reach standard library:101:21:application', stdlib.UInt_max, 0)];
              const v226 = v177[stdlib.checkedBigNumberify('reach standard library:101:21:application', stdlib.UInt_max, 1)];
              const v227 = v177[stdlib.checkedBigNumberify('reach standard library:101:21:application', stdlib.UInt_max, 2)];
              sim_r.txns.push({
                amt: v224,
                kind: 'from',
                to: v225,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                amt: v224,
                kind: 'from',
                to: v226,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                amt: v224,
                kind: 'from',
                to: v227,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }})();
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: undefined /* mto */,
        tys: [ctc3, ctc0, ctc0, ctc4, ctc0, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v214, time: v213, didSend: v99, from: v212 } = txn3;
      ;
      const cv177 = v177;
      const cv178 = v178;
      const cv179 = false;
      const cv180 = v213;
      const cv183 = v183;
      
      v177 = cv177;
      v178 = cv178;
      v179 = cv179;
      v180 = cv180;
      v183 = cv183;
      
      continue;
      }
    else {
      const {data: [v200], secs: v202, time: v201, didSend: v73, from: v199 } = txn2;
      const v205 = stdlib.add(v183, v170);
      ;
      stdlib.protect(ctc2, await interact.showContribution(v199), {
        at: './index.rsh:53:56:application',
        fs: ['at ./index.rsh:53:24:application call to [unknown function] (defined at: ./index.rsh:53:28:function exp)', 'at ./index.rsh:51:15:application call to [unknown function] (defined at: ./index.rsh:51:15:function exp)'],
        msg: 'showContribution',
        who: 'Backer'
        });
      
      const v207 = stdlib.mod(v178, stdlib.checkedBigNumberify('./index.rsh:5:24:decimal', stdlib.UInt_max, 3));
      const v209 = stdlib.Array_set(v177, v207, v199);
      const v210 = stdlib.add(v178, stdlib.checkedBigNumberify('./index.rsh:57:56:decimal', stdlib.UInt_max, 1));
      const cv177 = v209;
      const cv178 = v210;
      const cv179 = true;
      const cv180 = v201;
      const cv183 = v205;
      
      v177 = cv177;
      v178 = cv178;
      v179 = cv179;
      v180 = cv180;
      v183 = cv183;
      
      continue;}
    
    }
  const v218 = stdlib.mod(v183, stdlib.checkedBigNumberify('./index.rsh:5:24:decimal', stdlib.UInt_max, 3));
  const v222 = stdlib.sub(v183, v218);
  ;
  const v224 = stdlib.div(v222, stdlib.checkedBigNumberify('./index.rsh:5:24:decimal', stdlib.UInt_max, 3));
  const v225 = v177[stdlib.checkedBigNumberify('reach standard library:101:21:application', stdlib.UInt_max, 0)];
  const v226 = v177[stdlib.checkedBigNumberify('reach standard library:101:21:application', stdlib.UInt_max, 1)];
  const v227 = v177[stdlib.checkedBigNumberify('reach standard library:101:21:application', stdlib.UInt_max, 2)];
  ;
  ;
  ;
  stdlib.protect(ctc2, await interact.showOutcome(v177), {
    at: './index.rsh:33:55:application',
    fs: ['at ./index.rsh:33:11:application call to [unknown function] (defined at: ./index.rsh:33:32:function exp)', 'at ./index.rsh:69:16:application call to "showOutcome" (defined at: ./index.rsh:32:35:function exp)'],
    msg: 'showOutcome',
    who: 'Backer'
    });
  
  return;
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAJAAEDIAigASiQAZgBJgMBAAEBACI1ADEYQQJDKmRJIls1ASEEWzUCNhoAF0lBAAciNQQjNQYANhoCFzUENhoDNhoBF0mBAgxAAM9JJAxAAE0kEkQkNAESRDQESSISTDQCEhFEKGQpZFA1A4AEp2XEtLAyBjQDIQVbD0Q0A1cAIDQDJVs0AyEGWzQDVzBgNAMhB1siMgY0AyEIW0IAyEgkNAESRDQESSISTDQCEhFEKGQpZFBJNQNJJVs1/yEHWzX+STUFNf2ABBxPU280/VCwMgY0AyEFWwxENP+IAYo0A1cAIDT/NAMhBls0A1cwYEkiJTT+JBgLUjEAUEwlSTT+JBgLCIFgUlA0/iMIIzIGNAMhCFs0/whCAEwiEkQiNAESRDQESSISTDQCEhFESTUFSSJbNf8hBFs1/oAErNEfwzT/FlA0/hZQsIGgjQaIARgxADT/NP4xADEAUDEAUCIjMgYiQgAANf81/jX9Nfw1+zX6Nfk1+DT9QQA5NP40+gg19zT4NPkWUDT6FlA0+1A0/BZQNP8WUDT3FlAoSwFXAH9nKUsBV38pZ0gkNQEyBjUCQgB3NP8kGDX3sSKyATT3sggjshA0+LIHszT/NPcJJAo19rEisgE09rIII7IQNPtXACCyB7OxIrIBNPayCCOyEDT7VyAgsgezsSKyATT2sggjshA0+1dAILIHs0IAADEZgQUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCo0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjUBIjUCQv/DNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 168,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v170",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v171",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v170",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v171",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v200",
                "type": "bool"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v200",
                "type": "bool"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x60806040526040516200147a3803806200147a83398101604081905262000026916200059d565b6000805543600355620000386200038d565b604080518351815260208085015180518284015201518183015290517f80c0078efe412e5091172e0df54decefb16131f320816d23b64aede2bf8e9e4b9181900360600190a16200008c341560076200010c565b805133908190528151602001819052815160400152620000ab620003a7565b8051339052602080840180515183518301525181015182516040908101919091528351828401805191909152805160009301839052805160019201919091528051436060909101525160800152620001038162000136565b5050506200074a565b81620001325760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b6200015b60405180606001604052806000815260200160008152602001600081525090565b81602001516040015115620002245781516040015160208301516060015162000185919062000613565b815262000191620003d9565b8251516001600160a01b03168152825160209081015181830152835160409081015181840152818501805151606085015280518301516080808601919091529051015160a0840152835160c084015260036000554360015551620001f8918391016200062e565b604051602081830303815290604052600290805190602001906200021e92919062000427565b50505050565b60038260200151608001516200023b9190620006c5565b602082018190528251516040516001600160a01b039091169180156108fc02916000818181858888f193505050501580156200027b573d6000803e3d6000fd5b5060038160200151836020015160800151620002989190620006dc565b620002a49190620006f6565b60408281018290526020840151515190516001600160a01b039091169180156108fc02916000818181858888f19350505050158015620002e8573d6000803e3d6000fd5b5060208281015151015160408083015190516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156200032e573d6000803e3d6000fd5b506020820151516040908101518282015191516001600160a01b039091169180156108fc02916000818181858888f1935050505015801562000374573d6000803e3d6000fd5b50600080805560018190556200013290600290620004b6565b6040518060200160405280620003a2620004f8565b905290565b6040805160a081018252600091810182815260608201839052608082019290925290815260208101620003a262000516565b6040518060e0016040528060006001600160a01b0316815260200160008152602001600081526020016200040c620004f8565b81526020016000815260200160008152602001600081525090565b82805462000435906200070d565b90600052602060002090601f016020900481019282620004595760008555620004a4565b82601f106200047457805160ff1916838001178555620004a4565b82800160010185558215620004a4579182015b82811115620004a457825182559160200191906001019062000487565b50620004b29291506200054f565b5090565b508054620004c4906200070d565b6000825580601f10620004d5575050565b601f016020900490600052602060002090810190620004f591906200054f565b50565b60405180606001604052806003906020820280368337509192915050565b6040518060a001604052806200052b620004f8565b81526020016000815260200160001515815260200160008152602001600081525090565b5b80821115620004b2576000815560010162000550565b604080519081016001600160401b03811182821017156200059757634e487b7160e01b600052604160045260246000fd5b60405290565b60008183036060811215620005b157600080fd5b620005bb62000566565b835181526040601f1983011215620005d257600080fd5b620005dc62000566565b60208581015182526040909501518582015293810193909352509092915050565b634e487b7160e01b600052601160045260246000fd5b60008219821115620006295762000629620005fd565b500190565b81516001600160a01b03908116825260208084015181840152604080850151908401526060808501516101208501939291850160005b60038110156200068557825185168252918301919083019060010162000664565b5050505050608083015160c083015260a083015160e083015260c083015161010083015292915050565b634e487b7160e01b600052601260045260246000fd5b600082620006d757620006d7620006af565b500690565b600082821015620006f157620006f1620005fd565b500390565b600082620007085762000708620006af565b500490565b600181811c908216806200072257607f821691505b602082108114156200074457634e487b7160e01b600052602260045260246000fd5b50919050565b610d20806200075a6000396000f3fe60806040526004361061004b5760003560e01c80631e93b0f1146100545780633e59bac41461007857806373b4522c1461008b578063832307571461009e578063ab53f2c6146100b357005b3661005257005b005b34801561006057600080fd5b506003545b6040519081526020015b60405180910390f35b6100526100863660046109a0565b6100d6565b6100526100993660046109a0565b6102b0565b3480156100aa57600080fd5b50600154610065565b3480156100bf57600080fd5b506100c8610445565b60405161006f9291906109c3565b6100e660036000541460096104e2565b610100813515806100f957506001548235145b600a6104e2565b60008080556002805461011290610a20565b80601f016020809104026020016040519081016040528092919081815260200182805461013e90610a20565b801561018b5780601f106101605761010080835404028352916020019161018b565b820191906000526020600020905b81548152906001019060200180831161016e57829003601f168201915b50505050508060200190518101906101a39190610ad3565b90506101b68160c001514310600b6104e2565b7fd87af78abaccc59d995cd712c21929e42321bf30f94e6164c3f52c0c14084d52826040516101e59190610b96565b60405180910390a16101fe8160200151341460086104e2565b6102066107dc565b815181516001600160a01b03909116905260208083015182519091015260408083015182519091015260608201516080830151610250919061024a90600390610bcd565b3361050b565b602082015152608082015161026790600190610bf7565b602080830180518201929092528151600160409091015290514360609091015282015160a08301516102999190610bf7565b6020820151608001526102ab8161059b565b505050565b6102c0600360005414600d6104e2565b6102da813515806102d357506001548235145b600e6104e2565b6000808055600280546102ec90610a20565b80601f016020809104026020016040519081016040528092919081815260200182805461031890610a20565b80156103655780601f1061033a57610100808354040283529160200191610365565b820191906000526020600020905b81548152906001019060200180831161034857829003601f168201915b505050505080602001905181019061037d9190610ad3565b90506103918160c00151431015600f6104e2565b7f25e9400ad0fddc8c71fc4eb2845b4d0fc13ca66f2a17e1b7e0f544d275234c09826040516103c09190610b96565b60405180910390a16103d43415600c6104e2565b6103dc6107dc565b815181516001600160a01b039091169052602080830151825182015260408084015183518201526060808501518385018051919091526080808701518251909501949094528051600093019290925281514391015260a08401519051909101526102ab8161059b565b60006060600054600280805461045a90610a20565b80601f016020809104026020016040519081016040528092919081815260200182805461048690610a20565b80156104d35780601f106104a8576101008083540402835291602001916104d3565b820191906000526020600020905b8154815290600101906020018083116104b657829003601f168201915b50505050509050915091509091565b816105075760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b610513610811565b60005b600381101561056d5784816003811061053157610531610c0f565b602002015182826003811061054857610548610c0f565b6001600160a01b0390921660209290920201528061056581610c25565b915050610516565b508181846003811061058157610581610c0f565b6001600160a01b0390921660209290920201529392505050565b6105bf60405180606001604052806000815260200160008152602001600081525090565b8160200151604001511561067f578151604001516020830151606001516105e69190610bf7565b81526105f061082f565b8251516001600160a01b03168152825160209081015181830152835160409081015181840152818501805151606085015280518301516080808601919091529051015160a0840152835160c08401526003600055436001555161065591839101610c40565b6040516020818303038152906040526002908051906020019061067992919061087b565b50505050565b60038260200151608001516106949190610bcd565b602082018190528251516040516001600160a01b039091169180156108fc02916000818181858888f193505050501580156106d3573d6000803e3d6000fd5b50600381602001518360200151608001516106ee9190610cbf565b6106f89190610cd6565b60408281018290526020840151515190516001600160a01b039091169180156108fc02916000818181858888f1935050505015801561073b573d6000803e3d6000fd5b5060208281015151015160408083015190516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610780573d6000803e3d6000fd5b506020820151516040908101518282015191516001600160a01b039091169180156108fc02916000818181858888f193505050501580156107c5573d6000803e3d6000fd5b5060008080556001819055610507906002906108ff565b6040805160a08101825260009181018281526060820183905260808201929092529081526020810161080c61093c565b905290565b60405180606001604052806003906020820280368337509192915050565b6040518060e0016040528060006001600160a01b031681526020016000815260200160008152602001610860610811565b81526020016000815260200160008152602001600081525090565b82805461088790610a20565b90600052602060002090601f0160209004810192826108a957600085556108ef565b82601f106108c257805160ff19168380011785556108ef565b828001600101855582156108ef579182015b828111156108ef5782518255916020019190600101906108d4565b506108fb929150610973565b5090565b50805461090b90610a20565b6000825580601f1061091b575050565b601f0160209004906000526020600020908101906109399190610973565b50565b6040518060a0016040528061094f610811565b81526020016000815260200160001515815260200160008152602001600081525090565b5b808211156108fb5760008155600101610974565b60006040828403121561099a57600080fd5b50919050565b6000604082840312156109b257600080fd5b6109bc8383610988565b9392505050565b82815260006020604081840152835180604085015260005b818110156109f7578581018301518582016060015282016109db565b81811115610a09576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c90821680610a3457607f821691505b6020821081141561099a57634e487b7160e01b600052602260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b60405160e0810167ffffffffffffffff81118282101715610a8e57610a8e610a55565b60405290565b6040516060810167ffffffffffffffff81118282101715610a8e57610a8e610a55565b80516001600160a01b0381168114610ace57600080fd5b919050565b60006101208284031215610ae657600080fd5b610aee610a6b565b610af783610ab7565b8152602080840151818301526040840151604083015284607f850112610b1c57600080fd5b610b24610a94565b8060c0860187811115610b3657600080fd5b606087015b81811015610b5957610b4c81610ab7565b8452928401928401610b3b565b506060850191909152516080840152505060e083015160a08201526101009092015160c083015250919050565b80358015158114610ace57600080fd5b8135815260408101610baa60208401610b86565b1515602083015292915050565b634e487b7160e01b600052601260045260246000fd5b600082610bdc57610bdc610bb7565b500690565b634e487b7160e01b600052601160045260246000fd5b60008219821115610c0a57610c0a610be1565b500190565b634e487b7160e01b600052603260045260246000fd5b6000600019821415610c3957610c39610be1565b5060010190565b81516001600160a01b03908116825260208084015181840152604080850151908401526060808501516101208501939291850160005b6003811015610c95578251851682529183019190830190600101610c76565b5050505050608083015160c083015260a083015160e083015260c083015161010083015292915050565b600082821015610cd157610cd1610be1565b500390565b600082610ce557610ce5610bb7565b50049056fea2646970667358221220f8393f9b394fe485ce71fdb5b3c476a8bfa98812c0cce97abe1d9ffaaa8b345964736f6c634300080c0033`,
  BytecodeLen: 5242,
  Which: `oD`,
  version: 6,
  views: {
    }
  };
export const _stateSourceMap = {
  2: {
    at: './index.rsh:68:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:43:21:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Admin": Admin,
  "Backer": Backer
  };
export const _APIs = {
  };
