let scale = 250;
let offset = 0;
let tileSize = 15;
let noiseOffset = 0.2;
let deepocean = "#0066B6";
let ocean = "#0C83CF";
let sand = "#f8c680";
let grass = "#6EBD6E";
let mounone = "#AF8467";
let mountwo = " #7F4F4B";
let mounthree = "#5E3942";
let mounfour = "#422B3E";

function setup() {
  createCanvas(displayWidth * pixelDensity(), displayHeight * pixelDensity());
  frameRate(10);
  noStroke();
}

function draw() {
  background(0);
  drawTerrain();
  offset+=0.1;
  updatePixels();
  fill(0, 0, 0, 167);
  rect(0, 0, width, height);
}

function drawTerrain() {
  for (x = 0; x < width; x+=tileSize) {
    for (y = 0; y < height; y+=tileSize) {
      const v = noise(x / scale + offset, y / scale + offset) - noiseOffset;
      let terrainColor;
      if(v <= 0.1) {
        terrainColor = deepocean;
      }
      else if (v <= 0.2) {
        terrainColor = ocean;
      } else if (v <= 0.3) {
        terrainColor = sand;
      } else if (v <= 0.4) {
        terrainColor = grass;
      } else if (v <= 0.5) {
        terrainColor = mounone;
      } else if (v <= 0.6) {
        terrainColor = mountwo;
      } else if(v <= 0.7){
        terrainColor = mounthree;
      }
      else {
        terrainColor = mounfour;
      }
      fill(terrainColor);
      rect(x, y, tileSize, tileSize);
    }
  }
}
