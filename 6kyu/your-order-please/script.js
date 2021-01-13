// my solution
function order(words){
    const regex = /[1-9]/;  
    return words.split(' ').sort((a, b) => a[a.search(regex)] - b[b.search(regex)]).join(' ')
}

// best practice
function order(words){
  
    return words.split(' ').sort(function(a, b){
        return a.match(/\d/) - b.match(/\d/);
     }).join(' ');
}