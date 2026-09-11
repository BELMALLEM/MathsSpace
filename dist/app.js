import {arrangeWorld,regions,regionFor,nearestRegion,galaxies} from './world.js';
import {discoveries} from './discoveries.js';
import {Experiment} from './experiments.js';
import {validValues,sampleBernoulli,waveAmplitude,secant,tangent,branchCount,hypotenuse,relayOffset,relaySignal,courseTarget,courseMatch,recursionTarget,recursionMatch} from './math.js';
import {GOLDEN_ANGLE,repeatedSpokes,goldenMatch} from './rare-math.js';
arrangeWorld(discoveries);
const $=s=>document.querySelector(s);const byId=id=>discoveries.find(d=>d.id===id);let selected=null,atlasView='discoveries';let universe=null,current=null,values={},depth='intuition',samples={values:[],hits:0,total:0},last=performance.now(),ticker=0,ambient=true,paused=false;
function read(key,fallback){try{return JSON.parse(localStorage.getItem(key))??fallback}catch{return fallback}}
function write(key,value){try{localStorage.setItem(key,JSON.stringify(value));return true}catch{toast('Storage is unavailable. This session still works.');return false}}
let catches=read('axiom-catches-v1',[]);if(!Array.isArray(catches))catches=[];catches=catches.filter(c=>c&&typeof c.key==='string'&&byId(c.id)).slice(-500);let solved=read('axiom-solved-v1',[]);if(!Array.isArray(solved))solved=[];solved=solved.filter(id=>byId(id));let understanding=read('axiom-understanding-v1',{});if(!understanding||typeof understanding!=='object'||Array.isArray(understanding))understanding={};for(const id of Object.keys(understanding))if(!byId(id))delete understanding[id];let pendingSignal=null;
let notes=read('axiom-journal-v1',[]);if(!Array.isArray(notes))notes=[];notes=notes.filter(n=>n&&byId(n.id)&&typeof n.at==='number'&&Number.isFinite(n.at));let visited=read('axiom-visited-v1',[]);if(!Array.isArray(visited))visited=[];visited=visited.filter(x=>byId(x));let prefs=read('axiom-prefs-v1',{});if(!prefs||typeof prefs!=='object')prefs={};ambient=typeof prefs.reduced==='boolean'?!prefs.reduced:!matchMedia('(prefers-reduced-motion: reduce)').matches;let toastTimeout;
const resonancePath=['waves','unitcircle','fractals','golden'];
$('#routePanel').open=!matchMedia('(max-width:700px)').matches;
const savedRelay=understanding.waves?.relay;
let relay={seed:Number.isInteger(savedRelay?.seed)&&savedRelay.seed>=0&&savedRelay.seed<=1000000?savedRelay.seed:428,correction:typeof savedRelay?.correction==='number'?savedRelay.correction:null,firstPrediction:typeof savedRelay?.firstPrediction==='number'?savedRelay.firstPrediction:null};
function relayRestored(){return relaySignal(relayOffset(relay.seed),relay.correction).restored}
const savedCourse=understanding.unitcircle?.course;
let course={seed:Number.isInteger(savedCourse?.seed)&&savedCourse.seed>=0&&savedCourse.seed<=1000000?savedCourse.seed:618,angle:typeof savedCourse?.angle==='number'?savedCourse.angle:null,firstPrediction:typeof savedCourse?.firstPrediction==='number'?savedCourse.firstPrediction:null};
function courseCalibrated(){return courseMatch(course.seed,course.angle)}
const savedRecursion=understanding.fractals?.recursion;
let recursion={seed:Number.isInteger(savedRecursion?.seed)&&savedRecursion.seed>=0&&savedRecursion.seed<=1000000?savedRecursion.seed:903,count:Number.isInteger(savedRecursion?.count)?savedRecursion.count:null,firstPrediction:Number.isInteger(savedRecursion?.firstPrediction)?savedRecursion.firstPrediction:null};
function recursionSolved(){return recursionMatch(recursion.seed,recursion.count)}
const savedGolden=understanding.golden?.golden;
let golden={angle:typeof savedGolden?.angle==='number'?savedGolden.angle:null,n:typeof savedGolden?.n==='number'?savedGolden.n:null,firstPrediction:savedGolden?.firstPrediction&&typeof savedGolden.firstPrediction.angle==='number'?savedGolden.firstPrediction:null};
function goldenSolved(){return goldenMatch(golden.angle,golden.n)}
function renderCourse(){
 const calibrated=courseCalibrated(),active=current?.id==='unitcircle',target=courseTarget(course.seed);
 $('#courseTask').hidden=!active;
 universe?.compass?.setCourse(active?values.angle:course.angle,target,calibrated);
 if(!active)return;
 $('#courseQuestion').textContent=`The scanner reports a unit direction: horizontal ${target.x.toFixed(3)}, vertical ${target.y.toFixed(3)} (rounded). Which angle points there? Zero degrees is right; angles increase counterclockwise in this local scanner plane.`;
 $('#courseTransmit').textContent=`Transmit ${values.angle}° bearing`;
 $('#courseTransmit').disabled=!relayRestored()||calibrated;
 $('#courseRepair').hidden=relayRestored();$('#courseFollow').hidden=!calibrated;$('#courseReplay').hidden=!calibrated;
 $('#courseFeedback').textContent=calibrated?'Scanner calibrated. You connected circle coordinates to a direction. A violet beam now marks the recursion field.':!relayRestored()?'The relay must supply a clear signal before the scanner can transmit.':course.angle===null?'Compare the signs and sizes of sine and cosine before transmitting.':`Your last bearing, ${course.angle}°, gave (${Math.cos(course.angle*Math.PI/180).toFixed(3)}, ${Math.sin(course.angle*Math.PI/180).toFixed(3)}). The beacon remains unresolved. Which quadrant matches the reported signs?`;
}
$('#courseTransmit').onclick=()=>{
 if(current?.id!=='unitcircle'||!relayRestored()||courseCalibrated())return;
 course.angle=values.angle;if(course.firstPrediction===null)course.firstPrediction=course.angle;
 markProgress('unitcircle',{course:{...course},...(courseCalibrated()?{connected:['fractals']}: {})});renderJournal();
};
$('#courseRepair').onclick=()=>openDiscovery('waves');
$('#courseFollow').onclick=()=>{if(!courseCalibrated())return;leave();selectDiscovery('fractals');universe?.approach('fractals')};
$('#courseReplay').onclick=()=>{course={seed:(course.seed+1)%1000001,angle:null,firstPrediction:null};markProgress('unitcircle',{course:{...course}});renderJournal()};
function renderRecursion(){
 const solved=recursionSolved(),active=current?.id==='fractals',target=recursionTarget(recursion.seed);
 $('#recursionTask').hidden=!active;
 if(!active)return;
 $('#recursionQuestion').textContent=`The recursion lock asks for the number of segments in a finite binary tree at depth ${target.depth}, including the trunk. Count the levels before transmitting.`;
 $('#recursionCount').disabled=!courseCalibrated()||solved;$('#recursionTransmit').disabled=!courseCalibrated()||solved;
 $('#recursionRepair').hidden=courseCalibrated();$('#recursionFollow').hidden=!solved;$('#recursionReplay').hidden=!solved;
 $('#recursionFeedback').textContent=solved?`Lock opened. Depth ${target.depth} contains ${target.count} segments, so the golden-angle archive is now mapped.`:!courseCalibrated()?'The scanner must reveal the recursion field before this lock can read your tree.':recursion.count===null?'Add the finite levels: 1, then 2, then 4, and keep going only to the requested depth.':`Your last count, ${recursion.count}, does not match depth ${target.depth}. Remember that depth zero is still the trunk.`;
}
$('#recursionTransmit').onclick=()=>{
 if(current?.id!=='fractals'||!courseCalibrated()||recursionSolved())return;
 const input=$('#recursionCount');if(input.value===''||!input.reportValidity())return;
 recursion.count=input.valueAsNumber;if(recursion.firstPrediction===null)recursion.firstPrediction=recursion.count;
 const connected=recursionSolved()?[...new Set([...(understanding.fractals?.connected||[]),'golden'])]:understanding.fractals?.connected;
 markProgress('fractals',{recursion:{...recursion},...(connected?{connected}: {})});renderJournal();
};
$('#recursionRepair').onclick=()=>openDiscovery('unitcircle');
$('#recursionFollow').onclick=()=>{if(!recursionSolved())return;leave();selectDiscovery('golden');universe?.approach('golden')};
$('#recursionReplay').onclick=()=>{recursion={seed:(recursion.seed+1)%1000001,count:null,firstPrediction:null};markProgress('fractals',{recursion:{...recursion}});renderJournal();$('#recursionCount').focus()};
function renderGolden(){
 const solved=goldenSolved(),active=current?.id==='golden',spokes=Number.isFinite(values.angle)?repeatedSpokes(values.angle):null;
 $('#goldenTask').hidden=!active;
 if(!active)return;
 $('#goldenQuestion').textContent='A scanner sends one pulse per seed. First predict which directions it revisits in Test an idea. Then find a turn near the golden angle that avoids short repeating spokes, using at least 200 seeds.';
 $('#goldenTransmit').textContent=`Test ${values.angle.toFixed(1)}° spiral`;
 $('#goldenTransmit').disabled=!recursionSolved()||solved||!isGoldenPredictionReady();
 $('#goldenRepair').hidden=recursionSolved();$('#goldenFollow').hidden=!solved;$('#goldenReplay').hidden=!solved;
 $('#goldenFeedback').textContent=solved?`Pattern accepted. ${golden.angle.toFixed(1)} degrees avoided a small repeat cycle in this finite test, so the Fibonacci ratio beacon is mapped.`:!recursionSolved()?'The branch lock must map this archive before the spiral test can transmit.':golden.angle===null?'Try common turns first, then move toward the golden angle and compare the spokes.':repeatedSpokes(golden.angle)?`Your last angle, ${golden.angle.toFixed(1)} degrees, repeats every ${repeatedSpokes(golden.angle)} directions. That is visible structure, but not the spread this archive asks for.`:`Your last angle, ${golden.angle.toFixed(1)} degrees, avoided the tiny repeat test but missed the golden-angle target. Tune closer to ${GOLDEN_ANGLE.toFixed(3)} degrees and use at least 200 seeds.`;
 if(!solved&&recursionSolved()&&!isGoldenPredictionReady())$('#goldenFeedback').textContent='The scanner needs your direction prediction before it can accept a spread pattern. Test an idea below; a good-looking spiral alone does not explain why directions repeat.';
 if(spokes)$('#goldenQuestion').textContent+=` Current slider setting shows a ${spokes}-spoke repeat.`;
}
function isGoldenPredictionReady(){return solved.includes('golden')}
$('#goldenTransmit').onclick=()=>{
 if(current?.id!=='golden'||!recursionSolved()||goldenSolved()||!isGoldenPredictionReady())return;
 golden.angle=values.angle;golden.n=values.n;if(!golden.firstPrediction)golden.firstPrediction={angle:golden.angle,n:golden.n};
 const connected=goldenSolved()?[...new Set([...(understanding.golden?.connected||[]),'fibonacci'])]:understanding.golden?.connected;
 markProgress('golden',{golden:{...golden},...(connected?{connected}: {})});renderJournal();
};
$('#goldenRepair').onclick=()=>openDiscovery('fractals');
$('#goldenFollow').onclick=()=>{if(!goldenSolved())return;leave();selectDiscovery('fibonacci');universe?.approach('fibonacci')};
$('#goldenReplay').onclick=()=>{golden={angle:null,n:null,firstPrediction:null};markProgress('golden',{golden:{...golden}});renderJournal()};
function renderRelay(){
 const active=current?.id==='waves';$('#relayTask').hidden=!active;
 const result=relaySignal(relayOffset(relay.seed),relay.correction),restored=result.restored;
 universe?.relay.setRestored(restored);
 if(!active)return;
 $('#relayQuestion').textContent=`Two equal-frequency, equal-amplitude interference waves block the beacon. The relay adds ${relayOffset(relay.seed)} degrees to your correction. What correction makes their total phase cancel the interference?`;
 $('#relayCorrection').value=relay.correction??0;$('#relayCorrection').disabled=restored;
 $('#relayTransmit').disabled=restored;$('#relayFollow').hidden=!restored;$('#relayReplay').hidden=!restored;
 $('#relayFeedback').textContent=restored?`Beacon restored. The phases sum to ${result.phase} degrees modulo 360; opposite waves cancel. The green signal now leads to the unit-circle planet.`:result.amplitude===null?'Use the Wave Garden to investigate cancellation, then predict a correction here.':`Received phase: ${result.phase} degrees. Residual amplitude: ${result.amplitude.toFixed(3)}. The beacon is still obscured. Account for the relay offset as well as your correction.`;
}
$('#relayTransmit').onclick=()=>{
 const input=$('#relayCorrection');if(input.value===''||!input.reportValidity())return;
 relay.correction=input.valueAsNumber;if(relay.firstPrediction===null)relay.firstPrediction=relay.correction;
 const restored=relayRestored();
 markProgress('waves',{relay:{...relay},...(restored?{connected:['unitcircle']}: {})});
 renderRelay();renderJournal();
};
$('#relayFollow').onclick=()=>{if(!relayRestored())return;leave();selectDiscovery('unitcircle');universe?.approach('unitcircle')};
$('#relayReplay').onclick=()=>{relay={seed:(relay.seed+1)%1000001,correction:null,firstPrediction:null};markProgress('waves',{relay:{...relay}});renderRelay();$('#relayCorrection').focus()};
function statusFor(id){return understanding[id]?.connected?.length?'APPLIED':solved.includes(id)?'SOLVED':understanding[id]?.observed?'OBSERVED':visited.includes(id)?'VISITED':'UNEXPLORED'}
function markProgress(id,patch={}){const previous=understanding[id]||{};understanding[id]={...previous,...patch,at:Date.now()};write('axiom-understanding-v1',understanding);renderRoute();updateCompanion()}
function nextLead(){return !relayRestored()?'waves':!courseCalibrated()?'unitcircle':!recursionSolved()?'fractals':!goldenSolved()?'golden':'fibonacci'}
const routeCopy={
 waves:['Restore the signal','The relay has lost its signal. Can you silence the interference?','Investigate relay'],
 unitcircle:['Signal restored','The beacon is clear. Follow it to the Circular Signal.','Follow beacon'],
 fractals:['Recursion beacon found','Your scanner has resolved the recursion field. Follow the violet beam.','Follow recursion beacon'],
 golden:['Golden anomaly mapped','The branch count unlocked an optional golden-angle archive.','Investigate golden surprise'],
 fibonacci:['Ratio beacon awake','The golden-angle archive now points toward the Fibonacci ratio beacon.','Follow ratio beacon']
};
function renderRoute(){const root=$('#routeSteps');if(!root)return;const lead=nextLead(),leadDiscovery=byId(lead),active=current?.id;const [title,message,action]=routeCopy[lead];$('#routePanel h2').textContent=title;$('#exploreIntro p').textContent=message;$('#investigateRelay').textContent=action;let stage='notice',prompt=`Notice ${leadDiscovery.name.toLowerCase()} nearby, then choose Investigate.`;if(active){stage=understanding[active]?.prediction?'apply':understanding[active]?.observed?'predict':'notice';prompt=stage==='notice'?'Change the experiment and watch for a relationship.':stage==='predict'?'Make a prediction before transmitting your answer.':'Use what you found to open the next beacon.'}else if(lead==='waves'&&understanding.waves?.observed){stage='predict';prompt='Predict the correction that will silence the relay, then transmit it.'}else if(leadDiscovery)prompt=`Next lead: ${leadDiscovery.name}. Select it or follow Dr. Mira.`;$('#routeLead').textContent=prompt;document.querySelectorAll('#routeLoop [data-loop]').forEach(node=>node.classList.toggle('active',node.dataset.loop===stage));root.replaceChildren();for(const id of resonancePath){const d=byId(id),button=document.createElement('button'),status=id===lead&&understanding[id]?.connected?.length?'REPLAY':statusFor(id);button.className='route-step';button.style.setProperty('--c',d.color);button.innerHTML=`<span>${d.concept}</span><small>${status}</small>`;button.onclick=()=>selectDiscovery(id);root.appendChild(button)}}
const miraHints={
 waves:'These waves have equal amplitude and frequency. Compare peaks and troughs. Would your cancellation still work if one wave were twice as tall?',
 unitcircle:'The unit circle has radius one. Its coordinates define cosine and sine. Compare opposite points: what happens to both coordinates after half a turn?',
 fractals:'Count one level at a time, including the trunk. Each branch produces two children. This is a finite tree; the drawing cannot establish a claim about infinity.',
 golden:'Compare a rational fraction of a turn with the golden angle. Rational turns repeat directions; the golden angle is an irrational fraction of a turn. A finite picture illustrates this distinction but does not prove irrationality.'
};
function updateCompanion(){
 const next=byId(nextLead()),d=current||selected;
 let message=d?d.question:next.id==='waves'?'The Wave Garden has two signals that can erase each other. What phase would make that happen?':`Next question: ${next.question}`;
 if(current){
  const record=understanding[current.id];
  message=solved.includes(current.id)?'That answer fits this challenge. Can you explain why it works, and when it would stop working?':record?.prediction?'Compare your prediction with the result. Which assumption explains the difference?':'Make a prediction before changing the experiment. What do you expect to stay the same?';
  $('#miraLessonText').textContent=message;
  $('#miraHint').textContent=miraHints[current.id]||'Look for the assumptions in the explanation. Try a boundary value, then explain why the result should follow. A matching picture is evidence to investigate, not a proof.';
  if(current.id==='waves')$('#miraHint').textContent+=' The damaged relay adds another phase shift. Add that offset to your correction before testing for cancellation.';
  if(current.id==='unitcircle')$('#miraHint').textContent+=' Your scanner uses this same local coordinate plane. Start with the signs: left or right, then above or below. A phase angle can also specify a direction.';
  if(current.id==='fractals')$('#miraHint').textContent+=' The lock is asking for a finite geometric sum: each level doubles, and depth zero already has one segment.';
  if(current.id==='golden')$('#miraHint').textContent+=' A finite seed spiral cannot prove irrationality, but it can expose small rational repeat cycles and point toward the golden ratio.';
 }
 $('#companionText').textContent=message;
 $('#companionNext').onclick=()=>selectDiscovery(next.id);
 renderRelay();
 renderCourse();
 renderRecursion();
 renderGolden();
}
function setMira(){
 document.body.classList.toggle('mira-hidden',prefs.miraHidden===true);
 $('#showMira').checked=prefs.miraHidden!==true;
}
$('#companionDismiss').onclick=()=>{prefs.miraHidden=true;setMira();write('axiom-prefs-v1',prefs);$('#settingsBtn').focus()};
$('#showMira').onchange=e=>{prefs.miraHidden=!e.target.checked;setMira();write('axiom-prefs-v1',prefs)};
setMira();
function toast(message){$('#toast').textContent=message;$('#toast').classList.add('visible');clearTimeout(toastTimeout);toastTimeout=setTimeout(()=>$('#toast').classList.remove('visible'),3600)}
function modal(id){clearSelection();universe?.stop();document.querySelectorAll('dialog[open]').forEach(d=>d.close());$(id).showModal()}
function returnToSpace(){universe?.stop();document.querySelectorAll('dialog[open]').forEach(d=>d.close());if(current)leave();clearSelection();document.body.classList.remove('flying')}
$('#brand').onclick=e=>{e.preventDefault();returnToSpace()};
document.querySelectorAll('[data-close]').forEach(b=>b.onclick=()=>b.closest('dialog').close());document.querySelectorAll('dialog').forEach(d=>d.addEventListener('click',e=>{if(e.target===d){const r=d.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)d.close()}}));
function setAmbient(){if(universe)universe.motion=ambient;$('#motionBtn').textContent=ambient?'Motion on':'Motion off';$('#reduceMotion').checked=!ambient;prefs.reduced=!ambient;}
$('#motionBtn').onclick=()=>{ambient=!ambient;setAmbient();write('axiom-prefs-v1',prefs)};$('#reduceMotion').onchange=e=>{ambient=!e.target.checked;setAmbient();write('axiom-prefs-v1',prefs)};
$('#quality').value=String(prefs.quality===1.75?1.75:1);$('#quality').onchange=e=>{prefs.quality=Number(e.target.value);universe?.setQuality(prefs.quality);write('axiom-prefs-v1',prefs)};setAmbient();
for(const region of regions){const option=document.createElement('option');option.value=region.id;option.textContent=region.name;$('#regionFilter').appendChild(option)}
function renderAtlas(){const query=$('#search').value.trim().toLowerCase(),region=$('#regionFilter').value,kind=$('#kindFilter').value;const list=discoveries.filter(d=>`${d.name} ${d.concept} ${d.field} ${d.question}`.toLowerCase().includes(query)&&(!region||d.region===region)&&(!kind||d.kind===kind));$('#atlasGrid').replaceChildren();for(const d of list){const b=document.createElement('button');b.className='atlas-card';b.style.setProperty('--c',d.color);b.innerHTML=`<span class="number">${d.rare?'RARE ARCHIVE':d.kind.toUpperCase()} / ${d.field}</span><h3>${d.concept}</h3><p>${d.question}</p><small>${regionFor(d.region).name}${solved.includes(d.id)?' · Challenge solved':''}</small>`;b.onclick=()=>selectDiscovery(d.id);$('#atlasGrid').appendChild(b)}$('#emptySearch').hidden=!!list.length||atlasView==='regions';$('#atlasGrid').hidden=atlasView!=='discoveries';$('#atlasFilters').hidden=atlasView!=='discoveries';$('#search').hidden=atlasView!=='discoveries';$('#regionGrid').hidden=atlasView!=='regions';$('#discoveriesTab').classList.toggle('active',atlasView==='discoveries');$('#regionsTab').classList.toggle('active',atlasView==='regions')}
function renderRegions(){for(const r of regions){const card=document.createElement('article');card.className=`region-card${r.members.length?'':' frontier'}`;card.style.setProperty('--c',r.color);const h=document.createElement('h3');h.textContent=r.name;const p=document.createElement('p');p.textContent=r.field;const meta=document.createElement('small'),galaxy=galaxies.find(g=>g.regions.includes(r.id)).name;meta.textContent=r.members.length?`${r.members.length} discoveries · ${galaxy}`:`${r.status||'unmapped frontier'} · ${galaxy}`;const travel=document.createElement('button');travel.textContent=r.members.length?'Travel here':'Scan frontier';travel.onclick=()=>{if(current)leave();clearSelection();document.querySelectorAll('dialog[open]').forEach(d=>d.close());if(universe){universe.travelRegion(r.id);toast(`${r.members.length?'Travelling to':'Scanning'} ${r.name}. Drag or move to interrupt.`)}else{atlasView='discoveries';$('#regionFilter').value=r.id;renderAtlas();modal('#atlas')}};card.append(h,p,meta,travel);$('#regionGrid').appendChild(card)}}
$('#discoveriesTab').onclick=()=>{atlasView='discoveries';renderAtlas()};$('#regionsTab').onclick=()=>{atlasView='regions';renderAtlas()};$('#regionFilter').onchange=renderAtlas;$('#kindFilter').onchange=renderAtlas;renderRegions();
function clearSelection(){selected=null;$('#objectPreview').hidden=true;document.body.classList.remove('selected');universe?.select(null);updateCompanion()}
function selectDiscovery(id,encounterKey=null){if(!id){clearSelection();return}const d=byId(id);if(!d)return;if(current)leave();document.querySelectorAll('dialog[open]').forEach(x=>x.close());const encounter=encounterKey?universe?.living.get(encounterKey):null;selected={...d,encounter};document.body.classList.add('selected','flying');$('#objectPreview').hidden=false;$('#previewKind').textContent=encounter?'TRAVELLING ARCHIVE / RARE DISCOVERY':`${d.kind.toUpperCase()} / ${d.concept}`;$('#previewName').textContent=encounter?'A question in the dark':d.name;$('#previewQuestion').textContent=d.question;$('#previewRegion').textContent=encounter?`${regionFor(encounter.region).name} · catch to reveal the experiment`:regionFor(d.region).name;$('#objectPreview').style.setProperty('--c',d.color);$('#approachBtn').hidden=!universe;$('#exploreBtn').textContent=encounter?'Catch & explore':'Explore';universe?.select(id,encounterKey);updateCompanion()}
$('#dismissPreview').onclick=clearSelection;$('#approachBtn').onclick=()=>{if(selected)universe?.approach(selected.id,selected.encounter?.key)};$('#exploreBtn').onclick=()=>{if(!selected)return;const d=selected,e=d.encounter;if(e){if(!catches.some(c=>c.key===e.key)){catches.push({key:e.key,id:d.id,at:Date.now()});catches=catches.slice(-500);write('axiom-catches-v1',catches)}openDiscovery(d.id,e.variant,e.key);const note={id:d.id,values:{...values},at:Date.now()};notes=notes.filter(n=>n.id!==d.id);notes.push(note);write('axiom-journal-v1',notes);renderJournal();toast(`Captured: ${d.concept}. Experiment settings saved.`)}else openDiscovery(d.id)};
$('#signalBtn').onclick=()=>{if(pendingSignal)selectDiscovery(pendingSignal.id,pendingSignal.key)};


$('#atlasBtn').onclick=()=>{renderAtlas();modal('#atlas')};$('#fallbackAtlas').onclick=()=>{renderAtlas();modal('#atlas')};$('#search').oninput=renderAtlas;$('#settingsBtn').onclick=()=>modal('#settings');
$('#frontierBtn').onclick=()=>{atlasView='regions';renderAtlas();modal('#atlas')};
function renderJournal(){
 const records=Object.values(understanding);
 $('#expeditionStats').textContent=`${visited.length}/${discoveries.length} visited · ${records.filter(x=>x?.observed).length} observed · ${records.filter(x=>x?.prediction).length} predictions · ${solved.length} challenges solved · ${catches.length} archives caught`;
 const entries=new Map(notes.map(n=>[n.id,n]));
 for(const id of [...Object.keys(understanding),...solved]){
  if(!entries.has(id))entries.set(id,{id,values:understanding[id]?.lastValues,at:understanding[id]?.at});
 }
 const list=$('#journalList');list.replaceChildren();
 $('#journalCount').textContent=entries.size;$('#journalBtn').setAttribute('aria-label',`Journal ${entries.size}`);
 if(!entries.size){
  const p=document.createElement('p');p.className='muted';p.textContent='Your journal starts with a question.';
  const b=document.createElement('button');b.className='primary';b.textContent='Investigate the Wave Garden';b.onclick=()=>openDiscovery('waves');list.append(p,b);return;
 }
 for(const n of [...entries.values()].reverse()){
  const d=byId(n.id),record=understanding[n.id],row=document.createElement('div');row.className='journal-entry';
  const info=document.createElement('div'),h=document.createElement('h3'),p=document.createElement('p'),badge=document.createElement('small');
  h.textContent=d.concept;p.textContent=solved.includes(n.id)?d.challenge.explain:`Open question: ${d.challenge.q}`;
  badge.textContent=statusFor(n.id);badge.className='journal-status';info.append(h,p,badge);
  if(n.id==='waves'&&record?.relay){
   const connection=document.createElement('p');connection.textContent=record.connected?.includes('unitcircle')?'Applied connection: interference and circle angles. Phase offsets add modulo 360; opposite equal waves cancel.':'Unfinished: repair the relay by compensating for its phase offset.';
   info.appendChild(connection);
   if(Number.isFinite(record.relay.firstPrediction)){const prediction=document.createElement('p');prediction.textContent=`Relay prediction: ${record.relay.firstPrediction} degrees with a ${relayOffset(relay.seed)} degree offset.`;info.appendChild(prediction)}
  }
  if(n.id==='unitcircle'&&record?.course){
   const connection=document.createElement('p');connection.textContent=record.connected?.includes('fractals')?'Applied connection: (cos angle, sin angle) sets a unit direction. Calibrating the scanner revealed the recursion beacon.':'Unfinished: match the scanner direction using sine and cosine.';
   info.appendChild(connection);
   if(Number.isFinite(record.course.firstPrediction)){const prediction=document.createElement('p'),target=courseTarget(record.course.seed);prediction.textContent=`Scanner prediction: ${record.course.firstPrediction} degrees for (${target.x.toFixed(3)}, ${target.y.toFixed(3)}).`;info.appendChild(prediction)}
  }
  if(n.id==='fractals'&&record?.recursion){
   const connection=document.createElement('p');connection.textContent=record.connected?.includes('golden')?'Applied connection: a finite recursive tree is a geometric sum. The branch lock mapped the golden-angle surprise.':'Unfinished: count the finite branch levels before treating the tree like infinity.';
   info.appendChild(connection);
   if(Number.isInteger(record.recursion.firstPrediction)){const prediction=document.createElement('p'),target=recursionTarget(record.recursion.seed);prediction.textContent=`Branch prediction: ${record.recursion.firstPrediction} segments for depth ${target.depth}.`;info.appendChild(prediction)}
  }
  if(n.id==='golden'&&record?.golden){
   const connection=document.createElement('p');connection.textContent=record.connected?.includes('fibonacci')?'Applied connection: irrational turn spacing points toward Fibonacci ratios and the golden ratio.':'Unfinished: test whether the seed angle avoids small rational spoke cycles.';
   info.appendChild(connection);
   if(record.golden.firstPrediction){const prediction=document.createElement('p');prediction.textContent=`Spiral prediction: ${record.golden.firstPrediction.angle.toFixed(1)} degrees with ${record.golden.firstPrediction.n} seeds.`;info.appendChild(prediction)}
  }
  if(Number.isInteger(record?.prediction?.answer)&&d.challenge.options[record.prediction.answer]){
   const prediction=document.createElement('p');prediction.textContent=`First prediction: ${d.challenge.options[record.prediction.answer]}`;info.appendChild(prediction);
  }
  const buttons=document.createElement('div'),revisit=document.createElement('button');revisit.textContent='Revisit';revisit.onclick=()=>openDiscovery(n.id,n.values);buttons.appendChild(revisit);
  if(notes.some(note=>note.id===n.id)){
   const remove=document.createElement('button');remove.textContent='×';remove.setAttribute('aria-label',`Remove saved settings for ${d.concept}`);
   remove.onclick=()=>{notes=notes.filter(x=>x.id!==n.id);write('axiom-journal-v1',notes);renderJournal()};buttons.appendChild(remove);
  }
  row.append(info,buttons);list.appendChild(row);
 }
}
$('#journalBtn').onclick=()=>{renderJournal();modal('#journal')};renderJournal();
const exp=new Experiment($('#mathCanvas'),v=>{values=validValues(current.controls,v);syncControls();updateExplanation();exp.v=values;if(current)markProgress(current.id,{observed:true,lastValues:{...values}});renderJournal();});
function resetSamples(){samples={values:[],hits:0,total:0};exp.samples=samples;}
function controls(){const root=$('#lessonControls');root.replaceChildren();for(const c of current.controls){const label=document.createElement('label');label.className='control';label.innerHTML=`<span class="control-head"><span>${c.label}</span><output id="out-${c.id}" for="input-${c.id}"></output></span><input id="input-${c.id}" type="range" min="${c.min}" max="${c.max}" step="${c.step}" aria-label="${c.label}">`;const input=label.querySelector('input');input.value=values[c.id];input.oninput=()=>{values[c.id]=Number(input.value);if(current.id==='probability')resetSamples();exp.v=values;syncControls();updateExplanation();markProgress(current.id,{observed:true,lastValues:{...values}});renderJournal()};root.appendChild(label)}if(current.id==='probability'){const b=document.createElement('button');b.className='primary experiment-action';b.textContent='Release 100 trials';b.onclick=()=>{if(samples.total>=10000){toast('10,000 trials reached. Reset to start a new experiment.');return}const batch=sampleBernoulli(values.p/100,100);samples.hits+=batch.hits;samples.total+=100;samples.values.push(...batch.values);samples.values=samples.values.slice(-1500);exp.samples=samples;updateExplanation();markProgress(current.id,{observed:true,lastValues:{...values}});renderJournal()};root.appendChild(b);const note=document.createElement('div');note.className='metric';note.id='trialCount';root.appendChild(note)}syncControls()}
function syncControls(){if(!current)return;for(const c of current.controls){const input=$(`#input-${c.id}`),out=$(`#out-${c.id}`);if(input)input.value=values[c.id];if(out)out.textContent=`${Number(values[c.id].toFixed(2))}${c.unit||''}`}}
function updateExplanation(){if(!current)return;renderCourse();renderRecursion();renderGolden();const v=values;let txt='';if(current.feedback){$('#liveExplanation').textContent=current.feedback(v);return}switch(current.id){case'waves':txt=v.phase===180?'Perfect cancellation. Both waves still exist, but their sum is flat. Silence by addition.':`At ${v.phase}°, the combined amplitude is ${waveAmplitude(v.phase*Math.PI/180).toFixed(2)}. Try 180° to make the white wave disappear.`;break;case'vectors':txt=`Your vector (${v.x.toFixed(1)}, ${v.y.toFixed(1)}) plus (2, 1) reaches (${(v.x+2).toFixed(1)}, ${(v.y+1).toFixed(1)}). Try (−2, −1) to bring the result home.`;break;case'fractals':txt=`Depth ${v.depth} creates ${branchCount(v.depth).toLocaleString()} branches. Each child is ${(v.ratio*100).toFixed(0)}% as long as its parent. A tiny instruction, a rather large family.`;break;case'derivatives':txt=`The secant slope is ${secant(v.x,v.h).toFixed(2)}. The tangent slope is ${tangent(v.x).toFixed(2)}. Their difference is ${v.h.toFixed(2)}. Shrink h to close that gap.`;break;case'probability':txt=samples.total?`${samples.hits} of ${samples.total} trials were pink: ${(samples.hits/samples.total*100).toFixed(1)}%, compared with a ${v.p}% chance. Another batch may move closer—or temporarily farther away.`:'No trials yet. Choose a probability and release a batch. Changing the probability starts a fresh experiment.';if($('#trialCount'))$('#trialCount').textContent=`${samples.total.toLocaleString()} trials · showing up to the latest 1,500`;break;case'pythagoras':txt=`The areas are ${(v.a*v.a).toFixed(2)} and ${(v.b*v.b).toFixed(2)}. Together they make ${(v.a*v.a+v.b*v.b).toFixed(2)}. The hypotenuse has length ${hypotenuse(v.a,v.b).toFixed(2)}.`;break;case'volume':txt=`Scaling by ${v.s.toFixed(1)} makes the surface area ${(v.s*v.s).toFixed(2)} times larger and the volume ${(v.s**3).toFixed(2)} times larger. Length, area, and volume grow differently.`;break}$('#liveExplanation').textContent=txt;}
function renderDepth(){$('#depthContent').innerHTML=current[depth];if(current.source&&depth==='why'){const a=document.createElement('a');a.href=current.source.url;a.textContent='Read the reference';a.target='_blank';a.rel='noopener noreferrer';a.className='source-link';$('#depthContent').appendChild(a)}document.querySelectorAll('[data-depth]').forEach(b=>b.classList.toggle('active',b.dataset.depth===depth))}
document.querySelectorAll('[data-depth]').forEach(b=>b.onclick=()=>{depth=b.dataset.depth;renderDepth()});
function openDiscovery(id,restore,encounterKey=null){const d=byId(id);if(!d)return;clearSelection();current=d;values=validValues(d.controls,restore);depth='intuition';paused=!ambient;exp.paused=paused;resetSamples();document.querySelectorAll('dialog[open]').forEach(d=>d.close());$('#fallback').hidden=true;document.body.classList.add('focus');document.body.dataset.lesson=id;document.body.classList.remove('guide-collapsed');$('#guide').classList.remove('collapsed');$('#guideBody').hidden=false;$('#collapseGuide').textContent='−';$('#collapseGuide').setAttribute('aria-expanded','true');$('#lesson').hidden=false;$('#lessonCategory').textContent=`${d.field} / ${d.concept.toUpperCase()}`;$('#lessonTitle').textContent=d.name;$('#lessonSubtitle').textContent=d.invitation;$('#experimentCaption').textContent=d.caption;$('#mathCanvas').setAttribute('aria-label',`${d.concept}. ${d.invitation} Equivalent controls are in the field guide.`);document.documentElement.style.setProperty('--accent',d.color);$('#challenge').hidden=true;$('#challengeBtn').textContent='Test an idea ';$('#pauseBtn').textContent=paused?'▶ Play':'Ⅱ Pause';$('#pauseBtn').hidden=id!=='waves';$('#saveBtn').textContent=notes.some(n=>n.id===id)?'Update saved discovery':'＋ Save discovery';$('#discoveryStatus').textContent=d.concept;universe?.focus(id,encounterKey);controls();renderDepth();updateExplanation();renderRelay();renderCourse();renderRecursion();renderGolden();exp.set(id,values,samples);if(!visited.includes(id)){visited.push(id);write('axiom-visited-v1',visited)}renderRoute();updateCompanion();$('#leaveBtn').focus({preventScroll:true});}
function leave(){if(!current)return;current=null;$('#lesson').hidden=true;document.body.classList.remove('focus','guide-collapsed');delete document.body.dataset.lesson;universe?.unfocus();$('#discoveryStatus').textContent=`${visited.length} / ${discoveries.length} visited · keep exploring`;if(!universe)$('#fallback').hidden=false;renderRoute();updateCompanion();}
$('#leaveBtn').onclick=leave;window.addEventListener('keydown',e=>{if(e.key==='Escape'&&!document.querySelector('dialog[open]')){if(selected)clearSelection();else leave()}});
$('#collapseGuide').onclick=()=>{const hide=!$('#guideBody').hidden;$('#guideBody').hidden=hide;$('#guide').classList.toggle('collapsed',hide);document.body.classList.toggle('guide-collapsed',hide);$('#collapseGuide').textContent=hide?'+':'−';$('#collapseGuide').setAttribute('aria-expanded',String(!hide));setTimeout(()=>exp.resize(),20)};
$('#resetBtn').onclick=()=>{values=validValues(current.controls);resetSamples();exp.v=values;exp.t=0;syncControls();updateExplanation();toast('Experiment reset.')};$('#pauseBtn').onclick=()=>{paused=!paused;exp.paused=paused;$('#pauseBtn').textContent=paused?'▶ Play':'Ⅱ Pause'};
$('#challengeBtn').onclick=()=>{const root=$('#challenge');root.hidden=!root.hidden;$('#challengeBtn').textContent=root.hidden?'Test an idea ':'Close challenge';if(root.hidden)return;root.replaceChildren();const q=document.createElement('p');q.textContent=current.challenge.q;const answers=document.createElement('div');answers.className='answers';const result=document.createElement('p');result.id='challengeResult';result.setAttribute('aria-live','polite');current.challenge.options.forEach((label,i)=>{const b=document.createElement('button');b.textContent=label;b.onclick=()=>{if(!understanding[current.id]?.prediction)markProgress(current.id,{prediction:{answer:i,values:{...values},at:Date.now()}});answers.querySelectorAll('button').forEach(x=>x.classList.remove('active'));b.classList.add('active');if(i===current.challenge.correct){if(!solved.includes(current.id)){solved.push(current.id);write('axiom-solved-v1',solved)}markProgress(current.id,{solved:true,lastValues:{...values}});renderJournal()}renderJournal();result.textContent=i===current.challenge.correct?`Exactly. ${current.challenge.explain}`:`Try again. ${current.challenge.explain}`};answers.appendChild(b)});root.append(q,answers,result)};
$('#saveBtn').onclick=()=>{const note={id:current.id,values:{...values},at:Date.now()};notes=notes.filter(n=>n.id!==current.id);notes.push(note);const saved=write('axiom-journal-v1',notes);renderJournal();$('#saveBtn').textContent='Update saved discovery';if(saved)toast('Discovery and settings saved on this device.')};$('#relatedBtn').onclick=()=>openDiscovery(current.related);
$('#surpriseBtn').onclick=()=>{const unvisited=discoveries.filter(d=>!visited.includes(d.id));const pool=unvisited.length?unvisited:discoveries;selectDiscovery(pool[Math.floor(Math.random()*pool.length)].id)};
$('#investigateRelay').onclick=()=>!relayRestored()?openDiscovery('waves'):!courseCalibrated()?$('#relayFollow').click():!recursionSolved()?$('#courseFollow').click():!goldenSolved()?$('#recursionFollow').click():$('#goldenFollow').click();
$('#homeBtn').onclick=()=>{clearSelection();universe?.home();document.body.classList.remove('flying')};
const nearbyButtons=new Map();
function renderNearby(){if(universe){pendingSignal=universe.living.nearby(universe.camera.position,new Set(catches.map(c=>c.key)));$('#signalBtn').hidden=!pendingSignal; if(pendingSignal)$('#signalDistance').textContent=`${Math.round(pendingSignal.distance)} units · tap to intercept`;}const list=universe?universe.nearest().slice(0,3):discoveries.slice(0,3);const root=$('#nearbyList');const desired=new Set(list.map(d=>d.id));for(const [id,b] of nearbyButtons){if(!desired.has(id)){b.remove();nearbyButtons.delete(id)}}for(const [index,d] of list.entries()){let b=nearbyButtons.get(d.id);if(!b){b=document.createElement('button');b.style.setProperty('--c',d.color);b.innerHTML=`<span class="orb"></span><span>${d.concept}<small></small></span>`;b.onclick=()=>selectDiscovery(d.id);nearbyButtons.set(d.id,b)}const text=`${d.distance?Math.round(d.distance)+' units · ':''}${statusFor(d.id)}`;const small=b.querySelector('small');if(small.textContent!==text)small.textContent=text;if(root.children[index]!==b)root.insertBefore(b,root.children[index]||null)}if(universe){const p=universe.camera.position;$('#position').textContent=nearestRegion([p.x,p.y,p.z]).name.toUpperCase()}}

renderNearby();renderAtlas();renderRoute();updateCompanion();
try{const{Universe}=await import('./universe.js');universe=new Universe($('#universe'),discoveries,selectDiscovery,()=>document.body.classList.add('flying'));universe.motion=ambient;universe.relay.setRestored(relayRestored());renderCourse();renderRecursion();renderGolden();universe.setQuality(prefs.quality===1.75?1.75:1);renderNearby()}catch(error){console.error('3D initialization failed',error);$('#fallback').hidden=false;$('#exploreIntro').hidden=true;toast('3D is unavailable. The Atlas and experiments still work.')}
function animate(now){const dt=Math.min((now-last)/1000,.05);last=now;if(!document.hidden){universe?.update(dt);if(current)exp.render(dt);ticker+=dt;if(ticker>1){ticker=0;if(!current)renderNearby()}}requestAnimationFrame(animate)}requestAnimationFrame(animate);
window.addEventListener('pagehide',()=>universe?.stop());
