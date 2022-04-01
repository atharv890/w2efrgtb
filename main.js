status1=true;
object=[];
modal="";
function setup(){
    canvas=createCanvas(500,400);
    canvas.position(500,250);
video.hide();
}
function preload(){
    video=createVideo("video.mp4");
}
function submit(){
modal=ml5.objectDetector("cocossd",modelloaded);
document.getElementById("status").innerHTML="Status: Detecting objects";
}
function modelloaded(){
    console.log("model is loaded");
video.loop();
status1=true;
video.speed(1);
video.volume(1);
}
function slider(){
    slider1=document.getElementById("slider").value;
    video.speed(slider1);

}
function draw(){
    image(video,0,0,500,400);
    if(status1==true){
modal.detect(video,gotResults);
for(i=0;i<object.length;i++){
document.getElementById("status").innerHTML="Status: Objects detected";
document.getElementById("number").innerHTML="Number of the objects-"+object.length;
   fill(250,0,0);
   stroke(0,0,250);
   text(object[i].label +" "+floor(object[i].confidence*100),object[i].x,object[i].y);
noFill();
   rect(object[i].x,object[i].y,object[i].width,object[i].height);
}
}
}
function gotResults(error,results){
if(error){
console.log(error);
}
else{
    console.log(results);
    object=results;
}
}