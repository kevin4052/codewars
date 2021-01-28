// my solution
function getFirstPython(list) {
    const python = list.filter(dev => dev.language === 'Python');
    
    return python.length 
      ? `${python[0].firstName}, ${python[0].country}` 
      : 'There will be no Python developers'
}

// best practice
function getFirstPython(list) {
    const dev = list.find(x => x.language === "Python")
    return dev ? `${dev.firstName}, ${dev.country}` : "There will be no Python developers"
}