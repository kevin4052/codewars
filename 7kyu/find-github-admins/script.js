// my solution
function findAdmin(list, lang) {
    return list.filter(dev => dev.githubAdmin === 'yes' && dev.language === lang);
}

// best practice
function findAdmin(list, lang) {
    return list.filter(function(dev){return dev.language == lang && dev.githubAdmin == 'yes'});
}
