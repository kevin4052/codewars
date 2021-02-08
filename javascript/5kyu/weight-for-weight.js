// https://www.codewars.com/kata/55c6126177c9441a570000cc/javascript

// ----------my solution----------
const orderWeight = (str) => {
  const sum = (numStr) => numStr.split("").reduce((a, b) => +a + +b, 0);
  return str
    .split(" ")
    .sort((a, b) => sum(a) - sum(b) || a.localeCompare(b))
    .join(" ");
};

// ----------best practice----------
function orderWeight(strng) {
  const sum = (str) => str.split("").reduce((sum, el) => sum + +el, 0);
  function comp(a, b) {
    let sumA = sum(a);
    let sumB = sum(b);
    return sumA === sumB ? a.localeCompare(b) : sumA - sumB;
  }
  return strng.split(" ").sort(comp).join(" ");
}
