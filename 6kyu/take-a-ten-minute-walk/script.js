// my solution
const isValidWalk = (walk) => {
    if (walk.length !== 10) return false;
    
    let directions = {};
    
    walk.forEach(d => {
      directions[d] === undefined
      ? directions[d] = 1
      : directions[d] += 1
    });
    
    return directions['n'] === directions['s'] && directions['e'] === directions['w'];
}

// best practice
function isValidWalk(walk) {
    var dx = 0
    var dy = 0
    var dt = walk.length
    
    for (var i = 0; i < walk.length; i++) {
      switch (walk[i]) {
        case 'n': dy--; break
        case 's': dy++; break
        case 'w': dx--; break
        case 'e': dx++; break
      }
    }
    
    return dt === 10 && dx === 0 && dy === 0
}