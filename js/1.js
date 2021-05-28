const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;

function start() {
const canvas = document.querySelector("#screen");
canvas.width=WIDTH;
canvas.height=HEIGHT;
let ctx = canvas.getContext("2d");




try{

let sky = new Sky();
sky.ctx = ctx;
sky.BackSky();
sky.Stars();
}catch(e) { console.log(e); };


try{

let floor = new Floor();
floor.ctx=ctx;
floor.Mountain();
floor.drawMan(); 

}catch(e) {console.log(e);};

};

window.onload=function() { setInterval(()=>{window.requestAnimationFrame(start); },400); };
