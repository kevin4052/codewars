// my solution
function songDecoder(song){
    return song.split('WUB').filter(ele => ele !== '').join(' ')
}

// best practice
function songDecoder(song){
    return song.replace(/(WUB)+/g," ").trim()
}