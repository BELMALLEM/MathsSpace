export const wave=(x,phase)=>Math.sin(x)+Math.sin(x+phase);
export const waveAmplitude=phase=>2*Math.abs(Math.cos(phase/2));
export function relayOffset(seed=428){return [30,60,90,120,210,240,270,300][Math.floor(seeded(seed)()*8)]}
export function relaySignal(offset,correction){
 if(!Number.isFinite(offset)||!Number.isFinite(correction)||correction<0||correction>360)return {phase:null,amplitude:null,restored:false};
 const phase=((offset+correction)%360+360)%360;
 const amplitude=waveAmplitude(phase*Math.PI/180);
 return {phase,amplitude,restored:amplitude<1e-8};
}
export const secant=(x,h)=>2*x+h;
export function courseTarget(seed=618){
 const angle=[0,30,60,120,135,210,240,300][Math.floor(seeded(seed)()*8)];
 return {angle,x:Math.cos(angle*Math.PI/180),y:Math.sin(angle*Math.PI/180)};
}
export function courseMatch(seed,angle){
 if(!Number.isFinite(angle)||angle<0||angle>360)return false;
 const target=courseTarget(seed),r=angle*Math.PI/180;
 return Math.hypot(Math.cos(r)-target.x,Math.sin(r)-target.y)<1e-6;
}
export function recursionTarget(seed=903){
 const depth=[3,4,5,6][Math.floor(seeded(seed)()*4)];
 return {depth,count:branchCount(depth)};
}
export function recursionMatch(seed,count){
 return Number.isInteger(count)&&count===recursionTarget(seed).count;
}
export const tangent=x=>2*x;
export const magnitude=(x,y)=>Math.hypot(x,y);
export const volume=(w,h,d,s=1)=>w*h*d*s**3;
export const hypotenuse=(a,b)=>Math.hypot(a,b);
export const branchCount=depth=>2**(depth+1)-1;
export function sampleBernoulli(p,n,rng=Math.random){let hits=0;const values=[];for(let i=0;i<n;i++){const hit=rng()<p;hits+=Number(hit);values.push(hit)}return{hits,values}}
export function seeded(seed){return()=>{seed|=0;seed=seed+0x6D2B79F5|0;let t=Math.imul(seed^seed>>>15,1|seed);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}
export function validValues(config,values={}){return Object.fromEntries(config.map(c=>[c.id,typeof values[c.id]==='number'&&Number.isFinite(values[c.id])?Math.max(c.min,Math.min(c.max,values[c.id])):c.value]))}
