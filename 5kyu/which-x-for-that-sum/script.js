// my solution
const solve = (m) => {
    return (2 * m + 1 - Math.sqrt(4 * m + 1)) / (2 * m);
}

// best practice
const solve = m => 1 - ((4*m + 1)**.5 - 1) / (2*m);

// most clever
solve = _ => ((Z = 2 * _) + 1 - (2 * Z + 1)**.5) / (Z)