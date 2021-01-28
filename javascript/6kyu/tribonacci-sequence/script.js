// my solution
function tribonacci(signature,n){
    if (signature.length >= n) {
      return signature.slice(0, n);
    } else {
      let next = [...signature].slice(-3).reduce((a, b) => a + b);
      signature.push(next);
      return tribonacci(signature, n);
    }
}

// best practice
function tribonacci(signature,n){  
    for (var i = 0; i < n-3; i++) { // iterate n times
      signature.push(signature[i] + signature[i+1] + signature[i+2]); // add last 3 array items and push to trib
    }
    return signature.slice(0, n); //return trib - length of n
}