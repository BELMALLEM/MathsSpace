import test from 'node:test';
import assert from 'node:assert/strict';
import {relayOffset,relaySignal,wave} from '../dist/math.js';
import * as T from '../dist/vendor/three.module.js';
import {RelayStation} from '../dist/relay-station.js';

test('every reproducible relay offset has a reachable pointwise cancellation',()=>{
 for(let seed=0;seed<100;seed++){
  const offset=relayOffset(seed),correction=(180-offset+360)%360;
  assert.equal(offset,relayOffset(seed));
  assert.equal(relaySignal(offset,correction).restored,true);
  assert.equal(relaySignal(offset,(correction+1)%360).restored,false);
  assert.equal(relaySignal(offset,180).restored,false);
  for(let x=-4;x<4;x+=.17)assert.ok(Math.abs(wave(x,(offset+correction)*Math.PI/180))<1e-8);
 }
 for(const invalid of [NaN,Infinity,-1,361,'120',null])assert.equal(relaySignal(60,invalid).restored,false);
 assert.equal(relaySignal(180,360).restored,true);
});
test('relay landmark follows its source, restores a signal and disposes shared resources',()=>{
 const scene=new T.Scene(),relay=new RelayStation(scene),source=new T.Vector3(2,3,4),target=new T.Vector3(50,5,6);
 const count=relay.group.children.length;
 relay.update(source,target,10);assert.deepEqual(relay.group.position.toArray(),[19,11,14]);
 assert.equal(relay.line.visible,false);relay.setRestored(true);assert.equal(relay.line.visible,true);
 assert.deepEqual(Array.from(relay.line.geometry.attributes.position.array),[19,15.5,14,50,5,6]);
 for(let i=0;i<100;i++)relay.update(source,target,i);
 assert.equal(relay.group.children.length,count);
 let disposed=0;relay.frame.addEventListener('dispose',()=>disposed++);relay.dispose();assert.equal(disposed,1);assert.equal(scene.children.length,0);
});
