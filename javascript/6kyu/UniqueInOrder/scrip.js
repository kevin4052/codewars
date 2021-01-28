// my solution
const uniqueInOrder = (iterable) => {
    let lastEle = null;
    if (!Array.isArray(iterable)) iterable = iterable.split("");
    
    return iterable.filter(ele => {
      if (ele !== lastEle) {
        lastEle = ele;
        return ele;
      }
    });
  }

//best practice
function uniqueInOrder(it) {
var result = []
var last

for (var i = 0; i < it.length; i++) {
    if (it[i] !== last) {
    result.push(last = it[i])
    }
}

return result
}

//most clever
var uniqueInOrder = function (iterable)
{
  return [].filter.call(iterable, (function (a, i) { return iterable[i - 1] !== a }));
}