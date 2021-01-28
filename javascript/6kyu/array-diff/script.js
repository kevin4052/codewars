//my solution
function array_diff(a, b) {
    return a.filter(ele => !b.includes(ele));
  }

//best practice
function array_diff(a, b) {
    return a.filter(e => !b.includes(e));
  }