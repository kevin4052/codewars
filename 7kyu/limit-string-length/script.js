// my solution
const solution = (string,limit) => {
    return string.length <= string.slice(0, limit).length 
      ? string
      : `${string.slice(0, limit)}...`;
}

// best practice
function solution(string,limit){
    return string.length > limit ? string.substr(0,limit) + "..." : string;
}