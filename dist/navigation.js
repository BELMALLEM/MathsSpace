// Frame-rate independent approach to a target, plus exact integrated travel.
export function smoothStep(value,target,rate,dt){return target+(value-target)*Math.exp(-rate*dt)}
export function integrateMotion(value,target,rate,dt){const decay=Math.exp(-rate*dt);return{velocity:target+(value-target)*decay,distance:target*dt+(value-target)*(1-decay)/rate}}
export function normalizedInput(keys){
 let x=Number(keys.has('arrowright')||keys.has('d'))-Number(keys.has('arrowleft')||keys.has('a'));
 let y=Number(keys.has('e')||keys.has('pageup'))-Number(keys.has('q')||keys.has('pagedown'));
 let z=Number(keys.has('arrowdown')||keys.has('s'))-Number(keys.has('arrowup')||keys.has('w'));
 const length=Math.hypot(x,y,z);if(length>1){x/=length;y/=length;z/=length}return{x,y,z}
}
export function placeLabels(candidates,width,height,{mobile=false,intro=false}={}){
 const accepted=[],limit=mobile?2:4,labelW=mobile?172:210,labelH=50;
 const top=mobile?210:110,bottom=mobile?height-220:height-125;
 for(const c of candidates){if(accepted.length>=limit)break;if(c.behind||c.x<labelW/2+12||c.x>width-labelW/2-12||c.y<top||c.y+labelH>bottom)continue;
 if(intro&&!mobile&&c.x-labelW/2<Math.min(425,width*.42)&&c.y<360)continue;
 if(!mobile&&c.x+labelW/2>width-290&&c.y+labelH>height-360)continue;
 const rect={left:c.x-labelW/2,right:c.x+labelW/2,top:c.y,bottom:c.y+labelH};
 if(accepted.some(a=>rect.left<a.rect.right+12&&rect.right>a.rect.left-12&&rect.top<a.rect.bottom+8&&rect.bottom>a.rect.top-8))continue;
 accepted.push({...c,rect});
 }return accepted;
}

// The same gesture state machine handles mouse, touch and pen without emulated clicks.
export class GestureTracker{
 constructor(){this.reset()}
 reset(){this.points=new Map();this.origin=null;this.multi=false;this.moved=false}
 down(id,x,y){this.points.set(id,{x,y});if(this.points.size===1){this.origin={x,y};this.moved=false;this.multi=false}else{this.multi=true;this.moved=true}}
 move(id,x,y){if(!this.points.has(id))return null;const before=[...this.points.values()],old=this.points.get(id);this.points.set(id,{x,y});if(this.points.size>1){const after=[...this.points.values()];const center=p=>({x:(p[0].x+p[1].x)/2,y:(p[0].y+p[1].y)/2}),a=center(before),b=center(after);return{type:'travel',panX:b.x-a.x,panY:b.y-a.y,zoom:Math.hypot(after[0].x-after[1].x,after[0].y-after[1].y)-Math.hypot(before[0].x-before[1].x,before[0].y-before[1].y)}}if(this.multi)return null;if(Math.hypot(x-this.origin.x,y-this.origin.y)>7)this.moved=true;return{type:'look',x:x-old.x,y:y-old.y,moved:this.moved}}
 up(id){const point=this.points.get(id);const tap=this.points.size===1&&!this.multi&&!this.moved?point:null;this.points.delete(id);if(!this.points.size)this.reset();return tap}
}
