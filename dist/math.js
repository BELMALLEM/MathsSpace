export const wave=(x,phase)=>Math.sin(x)+Math.sin(x+phase);
export const waveAmplitude=phase=>2*Math.abs(Math.cos(phase/2));
export const secant=(x,h)=>2*x+h;
export const tangent=x=>2*x;
export const magnitude=(x,y)=>Math.hypot(x,y);
export const volume=(w,h,d,s=1)=>w*h*d*s**3;
export const hypotenuse=(a,b)=>Math.hypot(a,b);
export const branchCount=depth=>2**(depth+1)-1;
export function sampleBernoulli(p,n,rng=Math.random){let hits=0;const values=[];for(let i=0;i<n;i++){const hit=rng()<p;hits+=Number(hit);values.push(hit)}return{hits,values}}
export function seeded(seed){return()=>{seed|=0;seed=seed+0x6D2B79F5|0;let t=Math.imul(seed^seed>>>15,1|seed);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}
export function validValues(config,values={}){return Object.fromEntries(config.map(c=>[c.id,typeof values[c.id]==='number'&&Number.isFinite(values[c.id])?Math.max(c.min,Math.min(c.max,values[c.id])):c.value]))}
