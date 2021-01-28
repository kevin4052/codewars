// my solution
function moonRating(rating) {
    let moons = '';
    const ratingArry = (Math.round(rating) / 2).toString().split(".");
    
    moons = "o".repeat(ratingArry[0]);
    moons += ratingArry[1] ? "c" : "";
    moons += "x".repeat(5 - moons.length);  
    
    return moons
}

// best practice
const moonRating = (r, c, o) => {
    r = Math.round(r);
    o = ~~(r / 2);
    c = r % 2;
    return 'o'.repeat(o) + (c ? 'c' : '') + 'x'.repeat(5 - o - c);
}

// most clever
const moonRating = rating => `${ 'o'.repeat(Math.round(rating) / 2) }${ 'c'.repeat(Math.round(rating) % 2) }xxxxx`.slice(0, 5);