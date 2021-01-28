// my solution
function titleCase(title, minorWords) {
    if (title === "") return "";
    const outPut = title.toLowerCase().split(" ").map((word, index) => {
      if (minorWords){
        if (!minorWords.toLowerCase().split(" ").includes(word) || index === 0) {
          word = word[0].toUpperCase() + word.slice(1);
        }
      } else {
        word = word[0].toUpperCase() + word.slice(1);
      }    
      return word;
    });
    return outPut.join(" ");
  }

// best practice solution
function titleCase(title, minorWords) {
    var minorWords = typeof minorWords !== "undefined" ? minorWords.toLowerCase().split(' ') : [];
    return title.toLowerCase().split(' ').map(function(v, i) {
      if(v != "" && ( (minorWords.indexOf(v) === -1) || i == 0)) {
        v = v.split('');
        v[0] = v[0].toUpperCase();
        v = v.join('');
      }
      return v;
    }).join(' ');
  }

// most clever solution
String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
}

function titleCase(title, minorWords) {  
  var titleAr = title.toLowerCase().split(' '),
      minorWordsAr = minorWords ? minorWords.toLowerCase().split(' ') : [];
    
  return titleAr.map(function(e, i){return minorWordsAr.indexOf(e) === -1 || i === 0 ? e.capitalize() : e })
                .join(' ');
}