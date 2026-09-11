import test from 'node:test';import assert from 'node:assert/strict';import{Experiment}from'../dist/experiments.js';import{discoveries}from'../dist/discoveries.js';import{validValues}from'../dist/math.js';
globalThis.devicePixelRatio=1;globalThis.ResizeObserver=class{observe(){}};
test('a same-size canvas reset redraws a cached static experiment',()=>{
 const harness=drawingHarness(365,225),exp=new Experiment(harness.canvas,()=>{});
 exp.set('golden',{angle:137.5,n:300});exp.render(.016);
 const drawn=harness.calls();exp.render(.016);assert.equal(harness.calls(),drawn);
 exp.resize();const reset=harness.calls();exp.render(.016);
 assert.ok(harness.calls()>reset+300,'resize clears pixels even when CSS dimensions stay unchanged');
});
function drawingHarness(w,h){let calls=0;const ctx=new Proxy({}, {get(t,k){if(k in t)return t[k];return(...args)=>{calls++;for(const v of args)if(typeof v==='number')assert.ok(Number.isFinite(v),`${k} received nonfinite coordinate`)}},set(t,k,v){t[k]=v;return true}});return{canvas:{getContext:()=>ctx,getBoundingClientRect:()=>({width:w,height:h}),addEventListener(){}},calls:()=>calls}}
test('all experiments produce finite drawing operations at desktop and mobile sizes',()=>{for(const [w,h]of[[850,540],[365,225]])for(const d of discoveries)for(const edge of['value','min','max']){const harness=drawingHarness(w,h),exp=new Experiment(harness.canvas,()=>{});const values=Object.fromEntries(d.controls.map(c=>[c.id,c[edge]]));exp.set(d.id,validValues(d.controls,values),{values:[true,false,true],hits:2,total:3});exp.render(.016);assert.ok(harness.calls()>10,`${d.id} should draw a useful model`)}});
