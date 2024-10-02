canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
rover_width=100;
rover_height=90;
rover_x=10;
rover_y=10;
bg_img="mars.jpg";
rover_img="rover.png";

function add(){
    bg_imgTag = new Image();
    bg_imgTag.onload = uploadBackground;
    bg_imgTag.src=bg_img;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadRover;
    rover_imgTag.src=rover_img;
}

function uploadBackground(){
    ctx.drawImage(bg_imgTag, 0, 0, canvas.width,canvas.height);
}

function uploadRover(){
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width,rover_height);
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keyPressed=e.keyCode;
    console.log("key pressed : " + keyPressed);
    if(keyPressed=="38") {
        up();
        console.log("up");
    }
    if(keyPressed=="40") {
        down();
        console.log("down");
    }
    if(keyPressed=="39") {
        right();
        console.log("right");
    }
    if(keyPressed=="37") {
        left();
        console.log("left");
    }
}

function up(){
    if(rover_y >= 0) {
        rover_y = rover_y - 10;
        console.log("when up arrow is pressed : x = " + rover_x + " y = " + rover_y);
        uploadBackground();
        uploadRover();
    }
}

function down(){
    if(rover_y <= 500) {
        rover_y = rover_y + 10;
        console.log("when down arrow is pressed : x = " + rover_x + " y = " + rover_y);
        uploadBackground();
        uploadRover();
    }
}

function left (){
    if(rover_x >= 0) {
        rover_x = rover_x - 10;
        console.log("when left arrow is pressed : x = " + rover_x + " y = " + rover_y);
        uploadBackground();
        uploadRover();
    }
}

function right (){
    if(rover_x <= 700) {
        rover_x = rover_x + 10;
        console.log("when right arrow is pressed : x = " + rover_x + " y = " + rover_y);
        uploadBackground();
        uploadRover();
    }
}