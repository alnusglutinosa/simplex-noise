import sayHello from './lib/sayHello.js';
import SimplexNoise from './lib/simplex-noise.js';

sayHello();

// var simplex = new SimplexNoise(),
//   canvas = document.getElementById('c'),
//   ctx = canvas.getctx('2d'),
//   imgdata = ctx.getImageData(0, 0, canvas.width, canvas.height),
//   data = imgdata.data,
//   t = 0;

// window.setInterval(function() {
//   for (var x = 0; x < 256; x++) {
//     for (var y = 0; y < 256; y++) {
//       var r = simplex.noise3D(x / 16, y / 16, t/16) * 0.5 + 0.5;
//       var g = simplex.noise3D(x / 8, y / 8, t/16) * 0.5 + 0.5;
//       data[(x + y * 256) * 4 + 0] = r * 255;
//       data[(x + y * 256) * 4 + 1] = (r + g) * 200;
//       data[(x + y * 256) * 4 + 2] = 0;
//       data[(x + y * 256) * 4 + 3] = 255;
//     }
//   }
//   t++;
//   ctx.putImageData(imgdata, 0, 0);
// }, 1000/60);




var simplex = new SimplexNoise();

var t = 0;

var period = 13;
var radius = 20;
var centX = 250;
var centY = 150;
var offset = 3;
var n = 1900;
var count_circle = 1;

// window.setInterval(function() {

// // Круг
//   ctx.beginPath();
//   ctx.fillStyle = '#333333';
//   ctx.strokeStyle = '#000000';
//   period =1;

//   for(let j = 10; j < n; j += 10) {

//     for (var i = 0; i < n; i++) {

//       var n0 = simplex.noise2D( 12, offset + 1)/10;
//       var n1 = simplex.noise2D( 1, offset + 1)/10;

//       var x = centX + (offset *radius+10*Math.sin(period*i*2*Math.PI/(n-1)))*Math.sin(i*2*Math.PI/(n-1));
//       var y = centY + (offset *radius+10*Math.sin(period*i*2*Math.PI/(n-1)))*Math.cos(i*2*Math.PI/(n-1));

//       ctx.lineTo(x,y);
//       period = offset * (12 + (n0 + n1)/300);
//     }

//     count_circle ++;
//     radius = 10 * j;

//   }

//   t++;
//   offset += 0.07;
//   ctx.stroke();
//   ctx.closePath();

// }, 7000/60);



var canvas = document.getElementById('mycanvas');
var ctx = canvas.getContext('2d');
var x=800;
var y=400;

var settings = {
  amp: 69,
  // period: 16,
  period: 14,
  hsl: true,
  speed: 4,
  stroke: false,
  mouse: false
};


function drawCircle(n,radius,delay,color,centerX,centerY) {
  ctx.fillStyle = color;
  let centX = centerX;
  let centY = centerY;
  ctx.beginPath();

  var n0 =1;
  var n1=1;

  let period =1;
  for (var i = 0; i < n; i++) {

    var n0 = simplex.noise2D( n0, offset + 1)/10;
    var n1 = simplex.noise2D( n1, offset + 1)/10;

    var x = centX + (offset*radius+1*Math.sin(period*i*2*Math.PI/(n-1)))*Math.sin(i*2*Math.PI/(n-1));
    var y = centY + (offset*radius+1*Math.sin(period*i*2*Math.PI/(n-1)))*Math.cos(i*2*Math.PI/(n-1));


    ctx.lineTo(x,y);
    period = 20 * ((n0 + n1)*22);
  }

  count_circle ++;

  t++;
  offset += 0.0007;

  console.log(period);

  ctx.closePath();

  // if(settings.stroke) {
  ctx.fillStyle='#000000';
  ctx.strokeStyle = color;
  ctx.stroke();
  ctx.fill();

  // ctx.fill();

}



var time = 0;
function draw() {
  time++;
  ctx.clearRect(0,0,1800,1800);
  ctx.fillStyle = '#000000';
  ctx.fillRect(0,0,1800,1800);

  var offset;


  x=400;
  y=400;


  for (var i = 0; i < 130; i++) {
    var col = (i%2)?'black':'white';
    col = 'hsl('+i*9+', 70%, 66%)';

    drawCircle(400+i, 130-i*1.17, 300, col, 700,400);

  // function drawCircle(n,radius,delay,color,centerX,centerY)
  }

  window.requestAnimationFrame(draw);
}

draw();




