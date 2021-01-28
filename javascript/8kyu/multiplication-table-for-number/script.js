// my solution
const multiTable = (number) => {
    let result = '';
    
    for (let i = 1; i <= 10; i++) {
      result += `${i} * ${number} = ${i * number}${i === 10 ? '' : '\n'}`;
    }
  
    return result;
}

// best practice
const multiTable = (number) => {
    let table = '';
    
    for(let i = 1; i <= 10; i++) {
      table += `${i} * ${number} = ${i * number}${i < 10 ? '\n' : ''}`; 
    }
  
    return table;
}

// most clever
function multiTable(n) {
    return [...Array(10)].map((_,i)=>`${i+1} * ${n} = ${n*i+n}`).join('\n')
}