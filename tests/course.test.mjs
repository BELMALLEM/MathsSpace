import test from 'node:test';
import assert from 'node:assert/strict';
import {branchCount,courseTarget,courseMatch,recursionTarget,recursionMatch} from '../dist/math.js';
import {GOLDEN_ANGLE,repeatedSpokes,goldenMatch} from '../dist/rare-math.js';
import * as T from '../dist/vendor/three.module.js';
import {CompassStation} from '../dist/compass-station.js';

test('scanner bearings are reproducible, unit length and distinguish nearby angles',()=>{
 assert.equal(courseTarget().angle,135);
 const quadrants=new Set();
 for(let seed=0;seed<100;seed++){
  const t=courseTarget(seed);assert.deepEqual(t,courseTarget(seed));assert.ok(Math.abs(t.x*t.x+t.y*t.y-1)<1e-12);
  assert.equal(courseMatch(seed,t.angle),true);assert.equal(courseMatch(seed,(t.angle+1)%360),false);
  if(t.angle===0)assert.equal(courseMatch(seed,360),true);
  quadrants.add(Math.floor(t.angle/90));
 }
 assert.equal(quadrants.size,4);
 for(const invalid of [null,'30',NaN,Infinity,-1,361])assert.equal(courseMatch(617,invalid),false);
});
test('scanner points at the mathematical target and preserves bounded scene resources',()=>{
 const scene=new T.Scene(),scanner=new CompassStation(scene),target=courseTarget(617);
 scanner.setCourse(target.angle,target,true);assert.equal(scanner.beam.visible,true);
 assert.ok(Math.abs(scanner.target.position.x-4*target.x)<1e-12);
 const count=scanner.group.children.length;
 for(let i=0;i<100;i++)scanner.update(new T.Vector3(i,0,0),new T.Vector3(50,60,70));
 assert.equal(scanner.group.children.length,count);assert.deepEqual(Array.from(scanner.beam.geometry.attributes.position.array),[83,12,12,50,60,70]);
 scanner.setCourse(0,target,false);assert.equal(scanner.beam.visible,false);scanner.dispose();assert.equal(scene.children.length,0);
});

test('recursion lock uses a finite geometric branch count',()=>{
 assert.deepEqual(recursionTarget(),{depth:4,count:31});
 for(let seed=0;seed<80;seed++){
  const target=recursionTarget(seed);
  assert.ok(target.depth>=3&&target.depth<=6);
  assert.equal(target.count,branchCount(target.depth));
  assert.equal(recursionMatch(seed,target.count),true);
  assert.equal(recursionMatch(seed,target.count+1),false);
 }
 for(const invalid of [null,'31',31.5,NaN,Infinity])assert.equal(recursionMatch(903,invalid),false);
});

test('golden archive distinguishes small rational spokes from golden spread',()=>{
 assert.equal(repeatedSpokes(180),2);
 assert.equal(repeatedSpokes(120),3);
 assert.equal(repeatedSpokes(144),5);
 assert.equal(repeatedSpokes(GOLDEN_ANGLE),0);
 assert.equal(goldenMatch(137.5,300),true);
 assert.equal(goldenMatch(180,300),false);
 assert.equal(goldenMatch(137.5,190),false);
 for(const invalid of [null,'137.5',NaN,Infinity])assert.equal(goldenMatch(invalid,300),false);
});
