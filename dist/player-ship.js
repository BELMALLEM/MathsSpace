import * as T from './vendor/three.module.js';

export class PlayerShip{
 constructor(camera){
  this.group=new T.Group();this.group.name='Player scout';camera.add(this.group);
  const hull=new T.MeshStandardMaterial({color:'#d8e4df',metalness:.55,roughness:.4});
  const trim=new T.MeshStandardMaterial({color:'#368e89',metalness:.6,roughness:.35});
  const canopy=new T.MeshStandardMaterial({color:'#102e38',metalness:.8,roughness:.15});
  this.engineMaterial=new T.MeshBasicMaterial({color:'#ffd492',transparent:true,opacity:.25});
  const body=new T.Mesh(new T.ConeGeometry(.7,3,4),hull);body.rotation.x=-Math.PI/2;body.scale.set(.72,1,.42);this.group.add(body);
  const glass=new T.Mesh(new T.SphereGeometry(.46,12,8),canopy);glass.scale.set(.7,.35,1.5);glass.position.set(0,.22,-.1);this.group.add(glass);
  this.engines=[];
  for(const sign of [-1,1]){
   const wing=new T.Mesh(new T.BoxGeometry(1.2,.12,1.1),hull);wing.position.set(sign*.95,-.08,.55);wing.rotation.y=sign*.3;this.group.add(wing);
   const pod=new T.Mesh(new T.CylinderGeometry(.2,.24,1.2,12),trim);pod.rotation.x=Math.PI/2;pod.position.set(sign*.85,0,.6);this.group.add(pod);
   const jet=new T.Mesh(new T.ConeGeometry(.16,1,12),this.engineMaterial);jet.rotation.x=Math.PI/2;jet.position.set(sign*.85,0,1.5);this.group.add(jet);this.engines.push(jet);
  }
 }
 update({dt,speed,turn=0,strafe=0,mobile=false,visible=true,motion=true}){
  this.group.visible=visible;
  const thrust=Math.min(1,Math.max(0,speed)/60),rate=1-Math.exp(-12*Math.max(0,dt));
  this.group.scale.setScalar(mobile ? .27 : .38);
  this.group.position.set(0,mobile?-.55:-1.05,-3.4);
  const bank=motion?T.MathUtils.clamp(-turn*.5-strafe*.008,-.3,.3):0;
  this.group.rotation.z=T.MathUtils.lerp(this.group.rotation.z,bank,rate);
  this.engineMaterial.opacity=.18+thrust*.72;
  for(const jet of this.engines)jet.scale.y=.25+thrust*1.4;
 }
 dispose(){
  const geometries=new Set(),materials=new Set();this.group.traverse(o=>{if(o.geometry)geometries.add(o.geometry);if(o.material)materials.add(o.material)});
  this.group.removeFromParent();geometries.forEach(g=>g.dispose());materials.forEach(m=>m.dispose());
 }
}
