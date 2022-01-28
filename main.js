leftWrist=0
rightWrist=0
difference=0

function setup(){
    video=createCapture(VIDEO)
    video.size(550,500)
    canvas=createCanvas(550,550)
    canvas.position(560,150)
    console.log(canvas.width+" "+canvas.height)
    poseNet=ml5.poseNet(video,modelLoaded)
    poseNet.on("pose",gotPoses)
}

function modelLoaded(){
console.log("Pose Net Initialized")
}

function gotPoses(results){
if(results.length>0){
    console.log(results)
    leftWrist=results[0].pose.leftWrist.x
    rightWrist=results[0].pose.rightWrist.x
    difference=floor(leftWrist - rightWrist)
}
}

function draw(){
    background("#FF6666")
    textSize(difference)
    fill("#AAF2D1")
    text("Matthew",30,500)
    document.getElementById("text").innerHTML = difference
}