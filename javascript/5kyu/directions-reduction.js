// https://www.codewars.com/kata/550f22f4d758534c1100025a/javascript

// ----------my solution----------
const dirReduc = (arr) => {
  const dir = [];
  let i = 0;

  while (i < arr.length) {
    if (
      (arr[i] === "NORTH" && arr[i + 1] === "SOUTH") ||
      (arr[i] === "SOUTH" && arr[i + 1] === "NORTH") ||
      (arr[i] === "EAST" && arr[i + 1] === "WEST") ||
      (arr[i] === "WEST" && arr[i + 1] === "EAST")
    ) {
      i++;
    } else {
      dir.push(arr[i]);
    }
    i++;
  }

  return dir.length === arr.length ? dir : dirReduc(dir);
};

// ----------best practice----------
function dirReduc(plan) {
  var opposite = {
    NORTH: "SOUTH",
    EAST: "WEST",
    SOUTH: "NORTH",
    WEST: "EAST",
  };
  return plan.reduce(function (dirs, dir) {
    if (dirs[dirs.length - 1] === opposite[dir]) dirs.pop();
    else dirs.push(dir);
    return dirs;
  }, []);
}
