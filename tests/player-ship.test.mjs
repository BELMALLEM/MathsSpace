import test from 'node:test';
import assert from 'node:assert/strict';
import * as T from '../dist/vendor/three.module.js';
import {PlayerShip} from '../dist/player-ship.js';

test('scout stays inside desktop and phone frames without covering the aiming center',()=>{
 for(const [width,height,mobile] of [[1280,800,false],[390,844,true],[844,390,false]]){
  const camera=new T.PerspectiveCamera(mobile?72:58,width/height,.1,3500),ship=new PlayerShip(camera);
  ship.update({dt:1,speed:60,mobile});camera.updateMatrixWorld(true);
  const box=new T.Box3().setFromObject(ship.group);
  for(const x of [box.min.x,box.max.x])for(const y of [box.min.y,box.max.y])for(const z of [box.min.z,box.max.z]){
   const p=new T.Vector3(x,y,z).project(camera);assert.ok(Math.abs(p.x)<.8);assert.ok(p.y>-.9&&p.y<-.1);assert.ok(p.z>-1&&p.z<1);
  }
  ship.dispose();
 }
});

test('scout thrust follows speed, banks within bounds and clears lessons',()=>{
 const camera=new T.PerspectiveCamera(),ship=new PlayerShip(camera),count=ship.group.children.length;
 ship.update({dt:1,speed:0});const idle=ship.engines[0].scale.y;
 ship.update({dt:1,speed:60,turn:100,strafe:30});assert.ok(ship.engines[0].scale.y>idle);assert.ok(Math.abs(ship.group.rotation.z)<=.3);
 ship.update({dt:1,speed:60,mobile:true,visible:false,motion:false});assert.equal(ship.group.visible,false);assert.ok(Math.abs(ship.group.rotation.z)<.001);
 for(let i=0;i<100;i++)ship.update({dt:.016,speed:i});assert.equal(ship.group.children.length,count);
 let disposed=0;ship.engineMaterial.addEventListener('dispose',()=>disposed++);ship.dispose();assert.equal(disposed,1);assert.equal(camera.children.length,0);
});
