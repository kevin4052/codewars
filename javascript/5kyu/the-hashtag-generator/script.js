// my solution
const generateHashtag = (str) => {
    const newStr = str.split(' ').map(word => word.slice(0, 1).toUpperCase() + word.slice(1)).join("");
  
    const hashTag = `#${newStr}`;
  
    return hashTag.length > 140 || newStr.length === 0 ? false : hashTag;
  }

// best practice
function generateHashtag (str) {
    return str.length > 140 || str === '' ? false :
      '#' + str.split(' ').map(capitalize).join('');
  }
  
  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }