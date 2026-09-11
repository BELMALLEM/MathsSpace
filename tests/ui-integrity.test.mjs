import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';

const html=await readFile(new URL('../dist/index.html',import.meta.url),'utf8');

test('MathsGalaxy first-screen labels and constrained route input are valid',()=>{
 assert.match(html,/<title>MathsGalaxy - A universe of ideas<\/title>/);
 assert.match(html,/FIRST ROUTE IN A WIDER GALAXY/);
 assert.match(html,/32 discoveries \/ 13 territories/);
 assert.match(html,/id="frontierBtn"[\s\S]*Frontier sweep[\s\S]*5 distant math territories/);
 assert.match(html,/id="routePanel"[^>]*aria-label="Resonance route"[^>]*>.*FIELD MISSION/s);
 assert.match(html,/id="routeLoop"[^>]*>.*data-loop="notice".*data-loop="predict".*data-loop="apply"/s);
 assert.match(html,/id="recursionCount"[^>]*min="1"[^>]*value="1"/);
 const playerSurface=html.replace(/<dialog id="settings">[\s\S]*?<\/dialog>/,'');
 for(const artifact of ['Â·','Ã—','âœ§','âˆ’','ï¼‹','â€¦'])assert.equal(playerSurface.includes(artifact),false,`found corrupted label ${artifact}`);
});

test('mobile mission and lesson hierarchy remain intentional',async()=>{
 const css=await readFile(new URL('../dist/style.css',import.meta.url),'utf8');
 const app=await readFile(new URL('../dist/app.js',import.meta.url),'utf8');
 const universe=await readFile(new URL('../dist/universe.js',import.meta.url),'utf8');
 assert.match(css,/body\.focus #guideBody>#relayTask[\s\S]*order:-1/);
 assert.match(css,/\.frontier-marker/);
 assert.match(css,/#signalBtn\{top:auto;bottom:calc\(242px \+ env\(safe-area-inset-bottom\)\)/);
 assert.match(html,/<details id="routePanel"[\s\S]*?<summary>Expedition &amp; Dr\. Mira<\/summary>/);
 assert.match(app,/document\.body\.dataset\.lesson=id/);
 assert.match(app,/delete document\.body\.dataset\.lesson/);
 assert.match(app,/\$\(\'#frontierBtn\'\)\.onclick=\(\)=>\{atlasView='regions';renderAtlas\(\);modal\('#atlas'\)\}/);
 assert.match(universe,/className='marker frontier-marker'/);
 assert.match(universe,/marker\.onclick=\(\)=>this\.travelRegion\(region\.id\)/);
});
