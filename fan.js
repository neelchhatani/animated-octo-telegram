img2 = "";
status_1neel = "";
object = [];
function preload(){
img2 = loadImage('fan.jpeg');
}
function setup(){
canvas = createCanvas(640 , 420);
canvas.position(350,150);
object_detecter_1 = ml5.objectDetector('cocossd' , modelLoaded);
document.getElementById("status").innerHTML = "status : detecting objects";
}
function draw(){
image(img2 , 0 , 0 , 640 , 420);
if(status_1neel != ""){
    for(i = 0; i < object.length;i++){
    document.getElementById("status").innerHTML = "status : object detected";
    fill("blue");
    percentage = floor(object[i].confidence * 100);
    text(object[i].label+","+percentage+"%",object[i].x,object[i].y);
    noFill();
    stroke("lavender");
    rect(object[i].x,object[i].y,object[i].width,object[i].height);
    }
    }
}
function modelLoaded(){
console.log("cocossd is intialized");
status_1neel = true;
object_detecter_1.detect(img2 , gotResult);
}
function gotResult(error , results){
if(error){
console.log(error);
}
console.log(results);
object = results;
}