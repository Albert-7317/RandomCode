var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");



function drawBall(r) {
  init_x = Math.floor((Math.random() * (canvas.width/2)) + 1);  
  init_y = Math.floor((Math.random() * ((canvas.height/2)-35)) + 1);
  
  dx = Math.floor((Math.random() * 5) + 1);
  dy = -2
  
  ballRadius = Math.floor((Math.random() * 10) + 5);

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.arc(init_x, init_y, r, 0, Math.PI*2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}



function draw(){
  drawBall(ballRadius)
  drawBall(ballRadius)
  
  if(init_x + dx > canvas.width-ballRadius || init_x + dx < ballRadius) {
    dx = -dx;
  }
  if(init_y + dy < ballRadius) {
    dy = -dy;
  }
  if(init_y + dy > canvas.height-ballRadius) {
    dy = -dy;
  }
  
  init_x += dx;
  init_y += dy;
  requestAnimationFrame(draw);
}

draw()