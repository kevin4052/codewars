// my solution
const solve = (a, b, c, alpha, beta, gamma) => {
    beta += 90;
    gamma += 180;
    let position = [0, 0];
    let points = [
      [a, alpha], 
      [b, beta], 
      [c, gamma]
    ];
    
    points.forEach(point => {
      position[0] += point[0] * Math.cos(point[1] * Math.PI / 180);
      position[1] += point[0] * Math.sin(point[1] * Math.PI / 180);
    });
  
    let distance = Math.round(Math.sqrt(Math.pow(position[0], 2) + Math.pow(position[1], 2)));
    let angle = Math.atan(position[1] / position[0]) * 180 / Math.PI;
    angle = angle > 0 ? angle : angle + 180;
    let angleMinutes = Math.floor(angle % 1 * 60);
    let angleSeconds = Math.floor((angle % 1 * 60) % 1 * 60);
  
    const result = [
      distance,
      Math.floor(angle),
      angleMinutes,
      angleSeconds
    ];
    
    return result;
  }

//best practice
const cos = deg => Math.cos(deg * Math.PI / 180);
const sin = deg => Math.sin(deg * Math.PI / 180);

const solve = (a, b, c, alpha, beta, gamma) => {

  const x = a * cos(alpha) - b * sin(beta) - c * cos(gamma);
  const y = a * sin(alpha) + b * cos(beta) - c * sin(gamma);
  const t = Math.atan2(y, x) * 180 / Math.PI;

  return [
    Math.round(Math.hypot(x, y)),
    t | 0,
    t * 60 % 60 | 0,
    t * 3600 % 60 | 0,
  ];
 
};

//most clever
function solve(a, b, c, alpha, beta, gamma) {
    alpha = alpha * Math.PI / 180; beta = beta * Math.PI / 180; gamma = gamma * Math.PI / 180;
    let x = a * Math.cos(alpha) - b * Math.sin(beta) - c * Math.cos(gamma);
    let y = a * Math.sin(alpha) + b * Math.cos(beta) - c * Math.sin(gamma);
    let r = Math.sqrt(x * x + y * y);
    let theta = Math.acos(x / r) * 180 * 3600 / Math.PI;
    let d = Math.trunc(theta / 3600);
    let mm = theta % 3600;
    let m = Math.trunc(mm / 60);
    let s = mm % 60;
    return [Math.round(r), d, m, Math.floor(s)];
}