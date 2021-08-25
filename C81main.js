let canvas=document.getElementById("myCanvas");
let ctx=canvas.getContext("2d");

let color;

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e){
color=document.getElementById("color").value ;
console.log(color);

mouse_x=e.clientX-canvas.offsetLeft;

circle(mouse_x,mouse_y);
}

function circle(mouse_x,mouse_y){
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=5;
ctx.arc(mouse_x,mouse_y,50,0, 2*Math.PI);

ctx.stroke();


}