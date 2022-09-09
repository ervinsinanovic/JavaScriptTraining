console.log("hello kind");

var x = 123;

console.log(x.toString());

function countingValleys(s) {
  var count = 0;
  var level = 0;
  var currentInValley = false;
  for (let i = 0; i <= s.length; i++) {
    let direction = s.substring(i, i + 1);
    if (direction.equals("U")) {
      level++;
      if (currentInValley == true && level >= 0) {
        currentInValley = false;
        count++;
      }
    } else {
      if (direction.equals("D")) {
        level--;
        if (currentInValley == false && level < 0) {
          currentInValley = true;
        }
      }
    }
  }
}

console.log(countingValleys("UFFDDFDUDFUFU"));
