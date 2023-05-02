noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;


function setup()
{
    video = createCapture(VIDEO);
    video.size(650, 600);

    canvas = createCanvas(650, 600);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw()
{
    background('#21AD7E');
    document.getElementById("square_side").innerHTML = "width and height of the square will be = " + difference + "px";
    fill('#E2A2D4');
    stroke('#E2A2D4');
    square(noseX, noseY, difference);
}



function modelLoaded()
{
    console.log('PoseNet is initialized.')
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX + "noseY = " + noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("leftWristX = " + leftWristX + "rightWristX = " + rightWristX + "difference = " + difference);
    }
}