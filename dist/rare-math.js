export const PHI=(1+Math.sqrt(5))/2;
export const GOLDEN_ANGLE=360/(PHI*PHI);
export function birthdayChance(n){if(n>365)return 1;let different=1;for(let i=0;i<n;i++)different*=(365-i)/365;return 1-different}
export function collatz(seed,limit=500){let n=seed;const values=[n];while(n!==1&&values.length<=limit){n=n%2===0?n/2:3*n+1;if(!Number.isSafeInteger(n))break;values.push(n)}return{values,steps:values.length-1,reachedOne:values.at(-1)===1,peak:Math.max(...values)}}
export function harmonic(n){let total=0;for(let i=1;i<=n;i++)total+=1/i;return total}
export function fibonacci(n){let a=0,b=1;const values=[0];for(let i=1;i<=n;i++){values.push(b);[a,b]=[b,a+b]}return values}
export function logistic(r,x,n){const values=[x];for(let i=0;i<n;i++){x=r*x*(1-x);values.push(x)}return values}
export function squareFourier(x,terms){let y=0;for(let k=0;k<terms;k++){const n=2*k+1;y+=Math.sin(n*x)/n}return 4/Math.PI*y}
export function primeSpiral(count){const composite=new Uint8Array(count+1);for(let p=2;p*p<=count;p++)if(!composite[p])for(let k=p*p;k<=count;k+=p)composite[k]=1;let x=0,y=0,dx=1,dy=0,length=1,walk=0,turns=0;const points=[];for(let n=1;n<=count;n++){points.push({n,x,y,prime:n>=2&&!composite[n]});x+=dx;y+=dy;if(++walk===length){walk=0;[dx,dy]=[-dy,dx];if(++turns%2===0)length++}}return points}
export function montyOutcomes(pick){return[0,1,2].map(prize=>{const opened=[0,1,2].find(d=>d!==pick&&d!==prize);const switched=[0,1,2].find(d=>d!==pick&&d!==opened);return{prize,pick,opened,switched,stayWins:pick===prize,switchWins:switched===prize}})}
export const complexProduct=(x,y,scale,angle)=>{const t=angle*Math.PI/180;return[scale*(x*Math.cos(t)-y*Math.sin(t)),scale*(x*Math.sin(t)+y*Math.cos(t))]};
