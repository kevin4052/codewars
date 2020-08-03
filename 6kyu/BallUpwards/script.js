// my solution
function maxBall(v0) {
    v0 = v0 / 3.6; //converted to m/s
    let h = 0;
    let t = 0;
    while (true){
      let h1 = v0 * t - 0.5 * 9.81 * t * t;
      if (h > h1) return Math.round(Number(t.toFixed(2) - 0.1) * 10);
      h = h1;
      t += 0.1;
    }
  }

// best practice
function maxBall(v0) {
    const g = 9.81, mpsToKph = 3.6, secondsToTenths = 10;
    return Math.round(secondsToTenths * v0 / mpsToKph / g);
  }

// most clever
const maxBall = v => Math.round(v / 3.5316)