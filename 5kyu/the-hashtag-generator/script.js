// my solution
const generateHashtag = (str) => {
    if (str.replace(/\s/g, "") === "") return false;
  
    const arry = str.split(' ')
                    .filter(word => word !== "")
                    .map(word => word[0].toUpperCase() + word.slice(1));
  
    const newStr = "#" + arry.join("");
  
    return newStr.length <= 140 ? newStr : false;
}

// best practice
function generateHashtag (str) {
    return str.length > 140 || str === '' ? false :
      '#' + str.split(' ').map(capitalize).join('');
  }
  
  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }