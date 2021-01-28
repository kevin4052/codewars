// my solution
function greetDevelopers(list) {
    return list.map(dev => {
        const { firstName, language } = dev;
        dev.greeting = `Hi ${firstName}, what do you like the most about ${language}?`
        return dev
    });
}

// best practice
function greetDevelopers(list) {
    list.forEach(function(developer) {
      developer.greeting = `Hi ${developer.firstName}, what do you like the most about ${developer.language}?`;
    });
    
    return list;
}