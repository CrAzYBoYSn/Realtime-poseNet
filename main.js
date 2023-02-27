function preload (){

}

function setup (){
    video=createCapture(VIDEO);
    video.size(500,500);
    video.position(200,100)

    canvas=createCanvas(600,500);
    canvas.position(900,100);

    posenet=ml5.poseNet(video,modeloaded);
    posenet.on('pose',gotpose);
}

function modeloaded(){
    console.log("PoseNet is initialized!!")
}

function gotpose(results){
    if(results.length>0){
        console.log(results);
    }
}

function draw (){
    background("#808080")
}