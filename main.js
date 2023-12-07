function preload() {
	world_start = loadSound("world_start.wav");
	mario_coin = loadSound("coin.wav");
	mario_jump = loadSound("jump.wav");
	mario_kill = loadSound("kick.wav");
	mario_died = loadSound("mariodie.wav");
	mario_gameover = loadSound("gameover.wav")
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	instializeInSetup(mario);
	canvas.parent("canvas")
	video = createCapture(VIDEO);
	video.size(800,400);
	video.parent("camera");
	poseNet = ml5.poseNet(video, modelloaded);
  poseNet.on("pose", gotPoses);
}

function draw() {
	game()
}

function modelloaded()
{
  console.log("Model loaded succesfully")
}

function gotPoses(results)
{
  if (results.length > 0)
    {
      noseX = results[0].pose.nose.x;
      noseY = results[0].pose.nose.y;
      console.log("noseX : " + noseX)
    }
}