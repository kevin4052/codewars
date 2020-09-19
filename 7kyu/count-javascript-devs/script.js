// my solution
function countDevelopers(list) {  
    const numberOfDevs = list.filter(dev => dev.continent === 'Europe' && dev.language === 'JavaScript');
    return numberOfDevs.length;
}

// best practice
function countDevelopers(list) {
    return list.filter(x=>x.continent=='Europe'&&x.language=='JavaScript').length
}
