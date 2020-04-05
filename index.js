let sp=' ';
let parts1=['Kill','play', 'Be', 'Marry','dont let', 'Tare', 'Cry', 'Laugh','give', 'Suck', 'when', 'if','Life' ,'do','try'];
let parts2=['her','','him','yourself','them','my','me','your','he','she','you','I','if'];
let parts3=['for','with','without','alone','lemons','if','life','for','its'];
let parts4=['free','money','no reason','reason','you want to','anyone','yourself','yours'];
let complete1=['if they love you'  ,'when life gives you ','feel sad ' ,'being smart has nothing to do with'];
let complete2=['theyre gay ' ,'thats fine' ,' go on alone ','sadness ' ,'lemons','that sucks'];

let title = document.getElementById('title');
let tab1 = document.getElementById('tab1');
let tab2 = document.getElementById('tab2');
let tab3 = document.getElementById('tab3');

 console.log(parts1.length);
function generate1(){
    let place1 = Math.floor((Math.random() * parts1.length )+ 0);
    let place2 = Math.floor((Math.random() * parts2.length )+ 0);
    let place3 = Math.floor((Math.random() * parts3.length )+ 0);
    let place4 = Math.floor((Math.random() * parts4.length )+ 0);
    let product = parts1[place1] + sp + parts2[place2]+ sp + parts3[place3]+ sp + parts4[place4];
 
     document.getElementById('title').innerHTML = product;
    
 }

 function generate2(){
    let place1 = Math.floor((Math.random() * complete1.length )+ 0);
    let place2 = Math.floor((Math.random() * complete2.length )+ 0);
    let product = complete1[place1]+sp+complete2[place2];
 
     document.getElementById('title').innerHTML = product;
     console.log(place1);
 }

 function generate3(){
    let place1 = Math.floor((Math.random() * parts1.length )+ 0);
    let place2 = Math.floor((Math.random() * parts2.length )+ 0);
    let place3 = Math.floor((Math.random() * parts3.length )+ 0);
    let place4 = Math.floor((Math.random() * parts4.length )+ 0);
    let product = parts1[place1] + sp + parts2[place2]+ sp + parts3[place3]+ sp + parts4[place4];
 
     document.getElementById('title').innerHTML = product;
     console.log(place1);
 }

