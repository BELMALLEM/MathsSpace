import * as T from './vendor/three.module.js';

export class CompassStation{
 constructor(scene){
  this.group=new T.Group();this.group.name='Circular Signal scanner';scene.add(this.group);
  const frame=new T.MeshStandardMaterial({color:'#d2dfdc',metalness:.55,roughness:.45});
  const rim=new T.Mesh(new T.TorusGeometry(4,.16,8,64),frame);this.group.add(rim);
  for(let i=0;i<4;i++){
   const tick=new T.Mesh(new T.BoxGeometry(.15,.7,.25),frame);const a=i*Math.PI/2;tick.position.set(4*Math.cos(a),4*Math.sin(a),0);tick.rotation.z=a-Math.PI/2;this.group.add(tick);
  }
  this.needle=new T.Group();this.group.add(this.needle);
  const arm=new T.Mesh(new T.BoxGeometry(4,.12,.12),new T.MeshBasicMaterial({color:'#88dacc'}));arm.position.x=2;this.needle.add(arm);
  this.target=new T.Mesh(new T.OctahedronGeometry(.45),new T.MeshBasicMaterial({color:'#f0bb7d'}));this.group.add(this.target);
  this.beam=new T.Line(new T.BufferGeometry().setAttribute('position',new T.Float32BufferAttribute(new Float32Array(6),3)),new T.LineBasicMaterial({color:'#c2a4ed',transparent:true,opacity:.8}));
  this.beam.frustumCulled=false;this.beam.visible=false;scene.add(this.beam);
 }
 setCourse(angle,target,calibrated){
  this.needle.rotation.z=(Number.isFinite(angle)?angle:0)*Math.PI/180;
  this.target.position.set(target.x*4,target.y*4,0);
  this.target.material.color.set(calibrated?'#a9f0c7':'#f0bb7d');this.beam.visible=calibrated;
 }
 update(source,destination){
  this.group.position.set(source.x-16,source.y+12,source.z+12);
  const p=this.beam.geometry.attributes.position;p.setXYZ(0,this.group.position.x,this.group.position.y,this.group.position.z);p.setXYZ(1,destination.x,destination.y,destination.z);p.needsUpdate=true;
 }
 dispose(){
  const geometries=new Set(),materials=new Set();for(const root of [this.group,this.beam]){root.traverse(o=>{if(o.geometry)geometries.add(o.geometry);if(o.material)materials.add(o.material)});root.removeFromParent()}
  geometries.forEach(g=>g.dispose());materials.forEach(m=>m.dispose());
 }
}
