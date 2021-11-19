function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(450, 250);
    video = createCapture(VIDEO);
    video.hide();
}

function take_picture() {
    save('PhotoFromDevice.png');
}

function draw() {
    image(video, 0, 0, 700, 480);
}