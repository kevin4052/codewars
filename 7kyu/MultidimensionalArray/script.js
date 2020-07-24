//my solution
function getElement(array, indexes) {
    indexes.forEach(index => array = array[index]);
    return array;
}

//best practice solution
function getElement(array, indexes) {
    return indexes.reduce((a, i) => a[i], array);
}