function setup() {
  createCanvas(400, 400);
  colorMode(HSB, width, height, 100);
}

function draw() {
  // var x = random(width);
  var y = random(height);


  for (var x = 0; x < 400, x = x + 100)
  stroke(x, y, 100)
   point(x,y)

}

// had trouble figuring this out, p5 also kept glitching for some reason.
