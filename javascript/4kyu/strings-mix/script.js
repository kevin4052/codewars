// my solution
const count = str => {
    let result = {};
    
    str.split('').forEach(char => {
      if (/[a-z]/.test(char)) {
        result[char] !== undefined
        ? result[char] += 1
        : result[char] = 1
      }
    })
    
    return result;
  }
  
  const createRefer = (obj1, obj2) => {
    let referArry = Object.keys(obj1).concat(Object.keys(obj2));
    return [...new Set(referArry)].sort((a, b) => a.localeCompare(b));
  }
  
  const mix = (s1, s2) => {
    let count1 = count(s1);
    let count2 = count(s2);
    let charRefer = createRefer(count1, count2);
    let resultArry = [];
    let groupArry = [];
    
    charRefer.forEach(char => {
      let check = '';
      if (count1[char] > 1 || count2[char] > 1) {
        if (count1[char] === count2[char]) check = `=:${char.repeat(count1[char])}`
        else if (count1[char] > (count2[char] || 0)) check = `1:${char.repeat(count1[char])}`
        else if (count2[char] > (count1[char] || 0)) check = `2:${char.repeat(count2[char])}`      
      }    
      if (check !== '') resultArry.push(check);
    })
  
    if (resultArry.length === 0) return '';
    
    resultArry.sort((a,b) => b.length - a.length);
    
    for (let i = resultArry[0].length; i >= 4; i--) {
      let equaledCharacters = [];
      let group = resultArry.filter(ele => ele.length === i).sort((a, b) => a.localeCompare(b));    
      for (let i = 0; i < group.length; i++) {
        if (group[i].charAt(0) === '=') equaledCharacters.push(group[i]);
      }
      groupArry = groupArry.concat(group.filter(ele => !equaledCharacters.includes(ele)).concat(equaledCharacters));
    }
      
    return groupArry.join('/');
}

// best practice
const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

function mix(s1, s2) {
  return alphabet
    .map(char => {
      const s1Count = s1.split('').filter(x => x === char).length,
            s2Count = s2.split('').filter(x => x === char).length,
            maxCount = Math.max(s1Count, s2Count);

      return {
        char: char,
        count: maxCount,
        src: maxCount > s1Count ? '2' : maxCount > s2Count ? '1' : '='
      };
    })
    .filter(c => c.count > 1)
    .sort((objA, objB) => objB.count - objA.count || (objA.src + objA.char > objB.src + objB.char ? 1 : -1))
    .map(c => `${c.src}:${c.char.repeat(c.count)}`)
    .join('/');
}

//most clever
function mix(s1, s2) {
    var counter = s => s.replace(/[^a-z]/g,'').split('').sort().reduce((x,y)=> (x[y] = 1 + (x[y]||0), x),{});
    s1 = counter(s1); s2 = counter(s2);
    var res = [], keys = new Set(Object.keys(s1).concat(Object.keys(s2)));
    keys.forEach(key => {
      var c1 = s1[key]||0, c2 = s2[key]||0, count = Math.max(c1, c2);
      if (count>1) {
        var from = [1, '=', 2][Math.sign(c2-c1)+1];
        var str = [...Array(count)].map(_=>key).join('');
        res.push(from+':'+str);
      }
    });
    return res.sort((x, y) => y.length - x.length || (x < y ? -1 : 1)).join('/');
}