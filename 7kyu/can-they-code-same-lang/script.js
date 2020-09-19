// my solution
function isSameLanguage(list) {
    const lang = list[0].language;  
    return list.filter(dev => lang === dev.language).length === list.length;
}

// best practice
function isSameLanguage(list) {
    return list.every(e => e.language === list[0].language);
}