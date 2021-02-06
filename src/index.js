// complete the function
function palindrom(str) {
  // code goes here
  if(str.split("").join() == str.split("").reverse().join())
  return true;
  else
  return false;
}

function solution(arg) {
  return palindrom(arg);
}

if (typeof require !== "undefined" && require.main === module) {
  if (process.argv.length <= 2) {
    throw Error("Require argument");
  }

  const arg = process.argv[2];
  console.log(solution(arg));
}

// process.argv[2];
module.exports = { solution };
