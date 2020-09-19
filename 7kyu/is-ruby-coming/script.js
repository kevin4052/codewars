// my solution
const isRubyComing = list => {
    return list.filter(dev => dev.language === "Ruby").length !== 0;
}

// best practice
function isRubyComing(list) {
    return list.some(e => e.language === 'Ruby');
}