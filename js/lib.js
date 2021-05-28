function randomizar(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

class Sky{
constructor() {
}

BackSky() {
if(this.ctx){
let ctx = this.ctx;

let CoordSky = {x:WIDTH,y:HEIGHT};
let Colors = ["rgb(140,60,89)","rgb(30,53,118)"];

let grd = ctx.createLinearGradient(0,(HEIGHT-200),0,0);
grd.addColorStop(0,Colors[0]);
grd.addColorStop(1,Colors[1]);

ctx.fillStyle = grd;
ctx.fillRect(0,0,CoordSky.x,CoordSky.y);

};

}

Stars()  {
function drawStar(ctx) {
[ctx.strokeStyle,ctx.fillStyle]  = ["rgba(255,255,255,0.2)","rgba(255,255,255,0.2)"];
let coords = {x:randomizar(0,WIDTH),y:randomizar(50,(HEIGHT-300))};
let e = 4;
let star = [
{x:(coords.x+(e)),y:(coords.y-(e*2))},
{x:(coords.x+(e*2)),y:coords.y},
{x:(coords.x+(e/5)),y:(coords.y-(e+(e/2)))},
{x:(coords.x+(e*2)),y:(coords.y-(e+(e/2)))},
{x:(coords.x),y:(coords.y)}
];

ctx.moveTo(coords.x,coords.y);
star.map(s=> {ctx.lineTo(s["x"],s["y"]);  });

ctx.stroke();
ctx.fill();

};

if(this.ctx) {
let ctx = this.ctx;
for(let i =0; i <20;i++) {
drawStar(ctx);
};};
}



};

class Floor {
constructor() {

this.colorMountain = "rgb(0,0,0)";
}


Mountain() {

if(this.ctx) {
let ctx = this.ctx;
let init = {x:0,y:(HEIGHT)};
let cp1 = {x:0,y:init.y};
let cp2 = {x:(WIDTH/2),y:(HEIGHT-500)};
let cp3 = {x:WIDTH,y:init.y};

ctx.beginPath();
ctx.moveTo(init.x,init.y);
ctx.bezierCurveTo(cp1.x,cp1.y,cp2.x,cp2.y,cp3.x,cp3.y);
ctx.strokeStyle=this.colorMountain;
ctx.fillStyle=this.colorMountain;
ctx.stroke();
ctx.fill();
};


}

drawMan() {
if(this.ctx) {
let ctx= this.ctx;
let img = document.createElement("img");
img.src=Png["man"];
ctx.drawImage(img,(WIDTH/2),(HEIGHT-290));
};
}

};
