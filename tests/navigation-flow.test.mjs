import test from 'node:test';
import assert from 'node:assert/strict';
import * as T from '../dist/vendor/three.module.js';
import {Universe} from '../dist/universe.js';

function flight(){
 const u=Object.create(Universe.prototype);
 Object.assign(u,{keys:new Set(['arrowup']),velocity:new T.Vector3(3,4,5),panVelocity:new T.Vector2(2,3),scrollVelocity:12,destination:new T.Vector3(900,0,0),tracking:{id:'waves'},yaw:.2,pitch:.1,lookYaw:1,lookPitch:.8,camera:new T.PerspectiveCamera(),selectionRing:{visible:true},focused:false,markers:[],data:[{id:'waves',size:8}],living:{target:()=>new T.Vector3(0,0,-65)},onTravel:()=>{}});
 return u;
}

test('stopping cancels autopilot, tracking, momentum and pending camera turn',()=>{
 const u=flight();u.savedPose={position:new T.Vector3(4,5,6),yaw:0,pitch:0};
 u.stop();u.stop();
 assert.equal(u.destination,null);assert.equal(u.tracking,null);assert.equal(u.keys.size,0);
 assert.equal(u.velocity.length()+u.panVelocity.length()+u.scrollVelocity,0);
 assert.equal(u.lookYaw,u.yaw);assert.equal(u.lookPitch,u.pitch);
 assert.deepEqual(u.savedPose.position.toArray(),[4,5,6]);
});

test('approach and region travel can start afresh after cancellation',()=>{
 const u=flight();u.stop();u.approach('waves');
 assert.deepEqual(u.destination.toArray(),[0,0,-25]);assert.equal(u.tracking.id,'waves');
 u.stop();u.travelRegion('aurelia');
 assert.deepEqual(u.destination.toArray(),[920,142,-700]);assert.equal(u.tracking,null);
});

test('stopping lesson travel retains the exploration return pose',()=>{
 const u=flight();u.camera.position.set(4,5,6);u.focus('waves');
 u.stop();assert.equal(u.focused,true);u.unfocus();
 assert.deepEqual(u.destination.toArray(),[4,5,6]);assert.equal(u.focused,false);
});
