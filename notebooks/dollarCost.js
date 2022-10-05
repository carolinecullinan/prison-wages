const canvasSketch = require('canvas-sketch');
const math = require('canvas-sketch-util/math');
const random = require ('canvas-sketch-util/random');

const settings = {
  dimensions: [ 1080, 1080 ]
};

const sketch = ({ context, width, height }) => {
  const agents = [];

  for (let i = 0; i < 1100; i++) {
    const x = random.range(width/2, width/5);
    const y = random.range(height/2, height/5)

    agents.push(new Agent(x,y));
  };

  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);
    
    agents.forEach(agent => {
      agent.draw(context);
    });
  };
};

canvasSketch(sketch, settings);

//classes
class Point {
  constructor(x,y) {
    this.x = x;
    this.y = y;
  };
};

class Agent { 
  constructor(x,y) {
    this.position = new Point(x,y);
    this.radius = 5;
  }

  draw(context) {
    //context.save();
    context.beginPath();
    context.fillStyle = 'black'; 
    context.arc(this.position.x, this.position.y, this.radius, math.degToRad(0), math.degToRad(360))
    context.fill();
    //context.restore();
  };
}
