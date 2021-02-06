//

// ------------my solution------------
function ipsBetween(start, end) {
  const startIP = start.split(".");
  const endIP = end.split(".");
  let diff = 0;

  for (let i = 0; i < startIP.length; i++) {
    diff += (endIP[i] - startIP[i]) * 256 ** (3 - i);
  }

  return diff;
}

// -----------best practice-----------
function ipsBetween(start, end) {
  start = start.split(".");

  return end.split(".").reduce(function (sum, x, i) {
    return (sum << 8) + Number(x) - Number(start[i]);
  }, 0);
}
