var x = [230, 250];
var y = [220, 220];

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  noStroke();

  var i = 0;



  // draw pipe
  rect(0, 200, x[i], 20);

  for (var i = 0; i < x.length; i++) {
    // draw drip
    ellipse(x[i], y[i], 10);


    // down 3 pixels each frame, but maybe should be accelerating?
    y[i] = y[i] + 3

    // if invisible for a full “height” amount…
    if (y[i] > height * 2) {
      // reset
      y[i] = 220;
    }
  }
}
