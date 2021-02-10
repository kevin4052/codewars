// https://www.codewars.com/kata/57b06f90e298a7b53d000a86/javascript

// ----------my solution----------
const queueTime = (customers, n) => {
  const tills = Array(n).fill(0);

  customers.forEach((customer) => {
    let till = tills.indexOf(Math.min(...tills));
    tills[till] += customer;
  });

  return Math.max(...tills);
};

// ----------best practice----------
function queueTime(customers, n) {
  var w = new Array(n).fill(0);
  for (let t of customers) {
    let idx = w.indexOf(Math.min(...w));
    w[idx] += t;
  }
  return Math.max(...w);
}
