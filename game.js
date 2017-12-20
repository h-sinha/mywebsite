function load()
{
  setTimeout(loader,3000);
}
function loader()
{
  document.getElementById("loadwrap").style.display="none";
  document.getElementById("hp").style.display="block";
  begin();
}
function selectRedirect(selectBlog) {
    var newLink = selectBlog.value;
    window.location= newLink;
  }
function instruction(){
	document.getElementById("col1").style.display="inline";
	document.getElementById("col1").style.height="70"+"vh";
	document.getElementById("col1").style.width="30"+"vw";

	document.getElementById("start").style.display="none";
	document.getElementById("reset").style.display="none";
	document.getElementById("info").style.display="none";
}
function cl(){
	document.getElementById("col1").style.display="none";
	document.getElementById("start").style.display="block";
	document.getElementById("reset").style.display="block";
	document.getElementById("info").style.display="block";
}

function begin(){
	var canvas=document.getElementById("myCanvas");
	var ctx = canvas.getContext("2d");
	var x=canvas.width/2;
	var y=canvas.height-10;
	var ballRadius=8;
	var paddleHeight = 10;
	var paddleWidth = 75;
	var paddleX = (canvas.width-paddleWidth)/2;
	var score=0;
	drawScore();
	drawPaddle();
	function drawScore() {
    	ctx.font = "1vw Arial";
    	ctx.fillStyle = "#0095DD";
    	ctx.fillText("Score: "+score, 8,20 );
	}
	function drawPaddle(){
    	ctx.beginPath();
    	ctx.rect(paddleX,canvas.height-paddleHeight,paddleWidth,paddleHeight);
    	ctx.fillStyle = "#0095DD";
    	ctx.fill();
    	ctx.closePath();
	}
	function drawBall() {
		drawScore();
    	ctx.beginPath();
   		ctx.arc(60,60 , ballRadius, 0, Math.PI*2);
    	ctx.fillStyle = "#0095DD";
    	ctx.fill();
    	ctx.closePath();
    	drawPaddle();
	}
}
function game(){
	var canvas=document.getElementById("myCanvas");
	var ctx = canvas.getContext("2d");
	var x=canvas.width/2;
	var y=canvas.height-10;
	var ballRadius=10;
	var dx=2;
	var dy =-2;
	var paddleHeight = 10;
	var paddleWidth = 75;
	var paddleX = (canvas.width-paddleWidth)/2;
	var rightPressed=false;
	var leftPressed=false;
	var score=0;
	var count=0;
	var c=0;
	document.addEventListener("keydown", keyDown, false);
	document.addEventListener("keyup", keyUp, false);
	function drawScore() {
    	ctx.font = "1vw Arial";
    	ctx.fillStyle = "#0095DD";
    	ctx.fillText("Score: "+score, 8, 20);
	}
	function keyDown(e){
		if(e.keyCode==37){
			leftPressed=true;
		}
		else if(e.keyCode==39){
			rightPressed=true;
		}
	}
	function keyUp(e){
		if(e.keyCode==37){
			leftPressed=false;
		}
		else if(e.keyCode==39){
			rightPressed=false;
		}
	}
	function drawBall() {
		count++;
		if(count==100){
			score+=10;
			count=0;
		}
		drawScore();
    	ctx.beginPath();
   		ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    	ctx.fillStyle = "#0095DD";
    	ctx.fill();
    	ctx.closePath();
    	drawPaddle();
	}
	function drawPaddle(){
		if(rightPressed){
    		if(paddleX+3<canvas.width-paddleWidth){
    			paddleX+=3;
    		}
    	}
    	if(leftPressed){
    		if(paddleX-3>0){
    		paddleX-=3;
    		}
    	}
    	ctx.beginPath();
    	ctx.rect(paddleX,canvas.height-paddleHeight,paddleWidth,paddleHeight);
    	ctx.fillStyle = "#0095DD";
    	ctx.fill();
    	ctx.closePath();
	}
	function draw(){
	ctx.clearRect(0, 0, canvas.width, canvas.height);
     if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if(y+dy<ballRadius){
    	dy=-dy;
    }
    if(y + dy > canvas.height-ballRadius){
    	if(x>paddleX && x<paddleX+paddleWidth){
    		dy=-dy
    	}
    	else{
    		gameOver();
    	}
    }
    if( y + dy < ballRadius) {
        dy = -dy;
    }
    x += dx;
    y += dy;
    	drawBall();
	}
	setInterval(draw,10);
	function gameOver(){
		c=1;
		ctx.beginPath();
    	ctx.rect(0,0,canvas.width,canvas.height);
		ctx.fillStyle="rgba(143,244,207,0.7)";
		ctx.fill();
		ctx.closePath();
		overText();
	}
	function overText(){
		ctx.font = "2vw Courier";
		var gradient = ctx.createLinearGradient(75,112,60,60);
		gradient.addColorStop("0", "magenta");
		gradient.addColorStop("0.5", "blue");
		gradient.addColorStop("1", "red");
    	ctx.fillStyle = gradient;
    	ctx.fillText("GAME OVER",75,60);
    	ctx.fillText("YOUR SCORE:"+score,55, canvas.height/2+16);
		setInterval(window.location.reload(),100000);	
	}

}