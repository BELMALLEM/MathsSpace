import * as T from './vendor/three.module.js';

// One reusable landmark; geometry is allocated once, including the signal line.
export class RelayStation{
 constructor(scene){
  this.group=new T.Group();this.group.name='Resonance relay';scene.add(this.group);
  this.frame=new T.MeshStandardMaterial({color:'#dae1dc',metalness:.65,roughness:.35});
  this.panels=new T.MeshStandardMaterial({color:'#367991',metalness:.4,roughness:.5});
  this.lamp=new T.MeshBasicMaterial({color:'#ed986d'});
  const core=new T.Mesh(new T.CylinderGeometry(1.2,1.2,4,12),this.frame);core.rotation.z=Math.PI/2;this.group.add(core);
  const boom=new T.Mesh(new T.BoxGeometry(14,.22,.22),this.frame);this.group.add(boom);
  for(const sign of [-1,1]){
   const panel=new T.Mesh(new T.BoxGeometry(4.5,.12,5),this.panels);panel.position.x=sign*5;this.group.add(panel);
   for(let i=-1;i<=1;i++){
    const strip=new T.Mesh(new T.BoxGeometry(.06,.15,5.05),this.frame);strip.position.x=sign*5+i*1.3;this.group.add(strip);
   }
  }
  this.ring=new T.Mesh(new T.TorusGeometry(2.8,.14,8,40),this.lamp);this.ring.rotation.x=.4;this.group.add(this.ring);
  const antenna=new T.Mesh(new T.ConeGeometry(.65,3,12),this.frame);antenna.position.y=2.8;this.group.add(antenna);
  const light=new T.Mesh(new T.SphereGeometry(.45,12,8),this.lamp);light.position.y=4.5;this.group.add(light);
  this.line=new T.Line(new T.BufferGeometry().setAttribute('position',new T.Float32BufferAttribute(new Float32Array(6),3)),new T.LineBasicMaterial({color:'#a9f0c7',transparent:true,opacity:.65}));
  this.line.frustumCulled=false;this.line.visible=false;scene.add(this.line);this.restored=false;
 }
 setRestored(value){this.restored=!!value;this.line.visible=this.restored;this.lamp.color.set(this.restored?'#a9f0c7':'#ed986d')}
 update(source,target,time){
  this.group.position.set(source.x+17,source.y+8,source.z+10);
  this.ring.rotation.z=time*.15;
  const p=this.line.geometry.attributes.position;p.setXYZ(0,this.group.position.x,this.group.position.y+4.5,this.group.position.z);p.setXYZ(1,target.x,target.y,target.z);p.needsUpdate=true;
 }
 dispose(){
  const geometries=new Set(),materials=new Set();
  for(const root of [this.group,this.line]){root.traverse(o=>{if(o.geometry)geometries.add(o.geometry);if(o.material)materials.add(o.material)});root.removeFromParent()}
  geometries.forEach(g=>g.dispose());materials.forEach(m=>m.dispose());
 }
}
