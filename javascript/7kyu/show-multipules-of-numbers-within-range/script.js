// my solution
function multiples(s1,s2,s3){
    let result = [];
    for (let i = 1; i < s3; i++) {
      if (i % s1 === 0 && i % s2 === 0) result.push(i);
    }
    return result;
}

// best practice
const multiples = (s1, s2, s3) =>
  [...Array(s3 - s1)].map((_, idx) => idx + s1).filter(val => !(val % s1 || val % s2));