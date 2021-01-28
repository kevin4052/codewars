// my solution
const duplicateCount = (text) =>{
    let count = {};
    
    Array.from(text.toLowerCase()).forEach(char => {
      count[char] === undefined 
      ? count[char] = 1 
      : count[char] += 1;
    })
    
    return Object.keys(count).filter(key => count[key] > 1).length
}

// best practice
function duplicateCount(text){
    return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
}