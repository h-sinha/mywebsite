var x=0;
var operand1=0;
var operator;
function num(arg){
	x=x*10+arg;
	document.getElementById("disp").innerHTML+=arg ;
}
function op(o){
	if(o==1)
	{
		operator=1;
		operand1=x;
		document.getElementById("disp").innerHTML=operand1+"+";
		x=0;
	}
	if(o==2)
	{
		operator=2;
		operand1=x;
		document.getElementById("disp").innerHTML=operand1+"-";
		x=0;
	}
	if(o==3)
	{
		operator=3;
		operand1=x;
		document.getElementById("disp").innerHTML=operand1+"&divide;";
		x=0;
	}
	if(o==4)
	{
		operator=4;
		operand1=x;
		document.getElementById("disp").innerHTML=operand1+"&#215;";
		x=0;
	}
	if(o==5)
	{
		operator=5;
		operand1=x;
		document.getElementById("disp").innerHTML=operand1+"^";
		x=0;
	}
}
function output(){
	if(operator==1){
		var n=(x*1)+(operand1*1);
		document.getElementById("disp").innerHTML=n;
		operand1=n;
		x=operand1;
	}
	if(operator==2){
		document.getElementById("disp").innerHTML=(operand1-x).toFixed(5);
		operand1=(operand1-x).toFixed(5);
		x=operand1;
	}
	if(operator==3){
		if(x==0){
			document.getElementById("disp").innerHTML="Error";	
			x=0;
			operand1=x;
		}
		else{

			document.getElementById("disp").innerHTML=(operand1/x).toFixed(5);
			operand1=(operand1/x).toFixed(5);
			x=operand1;
		}
	}
	if(operator==4){
		document.getElementById("disp").innerHTML=(operand1*x).toFixed(5);
		operand1=(operand1*x).toFixed(5);
		x=operand1;
	}
	if(operator==5){
		document.getElementById("disp").innerHTML=Math.pow(operand1,x).toFixed(5);
		operand1=pow(operand1,x).toFixed(5);
		x=operand1;
		operand1=x;
	}
}
function clr(){
		document.getElementById("disp").innerHTML="  ";
		x=0;
		operand1=x;
}