var capture;

function preload() {

}

function setup() {
  createCanvas(windowWidth, windowHeight)
  capture = createCapture(VIDEO);
  capture.size(windowWidth, windowHeight);
  capture.hide();

}

function draw() {
  background('teal');
  var myImage = capture.loadPixels();

  image(myImage, 0, 0, windowWidth, windowHeight);
  filter(INVERT);

  // TEXT

    var myText = "Press 'S' to save your selfie!";

   drawingContext.font = "bold 40px khand";
   drawingContext.textAlign = "center";
   fill(255);
   text(myText,width/2,900);


}

// save pic function
function keyTyped() {
  if (key == 's' || key == 'S') save('heyYou.jpg')
}
