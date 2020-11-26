// my solution
const consecutive = (arr) => {
    return arr.length ? Math.max(...arr) - Math.min(...arr) + 1 - arr.length : 0;
}

// best practice
function consecutive(arr){
    let l = arr.length;
    return l ? Math.max(...arr) - Math.min(...arr) - l + 1 : 0;
}