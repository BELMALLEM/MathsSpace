export const linear=(x,a,b)=>a*x+b;
export const inverseLinear=(y,a,b)=>(y-b)/a;
export const rotate=(x,y,degrees)=>{const t=degrees*Math.PI/180;return[x*Math.cos(t)-y*Math.sin(t),x*Math.sin(t)+y*Math.cos(t)]};
export const determinant=(a,b,c,d)=>a*d-b*c;
export const midpointSquare=(end,n)=>{let area=0;const dx=end/n;for(let i=0;i<n;i++)area+=((i+.5)*dx)**2*dx;return area};
export const geometricSum=(r,n)=>(1-r**n)/(1-r);
export const mean=xs=>xs.reduce((a,b)=>a+b,0)/xs.length;
export const median=xs=>{const a=[...xs].sort((x,y)=>x-y),m=Math.floor(a.length/2);return a.length%2?a[m]:(a[m-1]+a[m])/2};
export function choose(n,k){if(!Number.isInteger(n)||!Number.isInteger(k)||k<0||k>n)return 0;let result=1;for(let i=1;i<=Math.min(k,n-k);i++)result=result*(n-i+1)/i;return Math.round(result)}
export const modulo=(a,n)=>((a%n)+n)%n;
export const graphEdges=shortcut=>[['A','B',3],['B','C',4],['A','D',6],['D','E',2],['E','C',3],['B','E',shortcut]];
export function shortestPath(edges,start,end){const vertices=[...new Set(edges.flatMap(e=>e.slice(0,2)))],dist=Object.fromEntries(vertices.map(v=>[v,Infinity])),previous={},pending=new Set(vertices);dist[start]=0;while(pending.size){const u=[...pending].sort((a,b)=>dist[a]-dist[b])[0];pending.delete(u);if(!Number.isFinite(dist[u])||u===end)break;for(const[a,b,w]of edges){const v=a===u?b:b===u?a:null;if(v&&pending.has(v)&&dist[u]+w<dist[v]){dist[v]=dist[u]+w;previous[v]=u}}}const path=[];if(Number.isFinite(dist[end])){let u=end;while(u!==undefined){path.unshift(u);u=previous[u]}}return{distance:dist[end],path}}
