// my solution
function findShort(s){
    return Array.from(s.split(' '), word => word.length).reduce((a, b) => a < b ? a : b);  
}

// best practice
function findShort(s){
    return Math.min.apply(null, s.split(' ').map(w => w.length));
}