// Example usage:
// const inputMatrix =["1011", "0010"];
// const inputMatrix =["10111", "10101", "11101", "11111"];
const inputMatrix =["01111", "01101", "00011", "11110"];

console.log(
  "Total number of contiguous regions of 0 (holes):",
  countConsecutiveZeros(inputMatrix)
);

function countConsecutiveZeros(inputArray) {
  const totalArrayLength = inputArray.length;

  //terminating funtion execution if it is empty array
  if (!totalArrayLength) {
    return "Input array is empty";
  }

  //counting length of child inside array
  const stringLength = totalArrayLength > 0 ? inputArray[0].length : 0;

  let holesCount = 0;

  //performing nested loop for every value in array
  for (let i = 0; i < totalArrayLength; i++) {
    for (let j = 0; j < stringLength; j++) {
      if (inputArray[i][j] === "0") {
        holesCount++;
        dfs(i, j);
      }
    }
  }
  return holesCount;

  //Recursive function
  function dfs(arrayIndex, stringIndex) {
    if (
      arrayIndex < 0 ||
      stringIndex < 0 ||
      arrayIndex >= totalArrayLength ||
      stringIndex >= stringLength ||
      inputArray[arrayIndex][stringIndex] !== "0"
    ) {
      return;
    }

    // Marking  "0"  visited by changing it to '1'
    let updatedArrayItem = "";
    for (let i = 0; i < stringLength; i++) {
      if (i === stringIndex) {
        updatedArrayItem += "1";
      } else {
        updatedArrayItem += inputArray[arrayIndex][i];
      }
    }

    //updating array
    inputArray[arrayIndex] = updatedArrayItem;

    // Performing Depth First Search in all four directions
    dfs(arrayIndex + 1, stringIndex); // down
    dfs(arrayIndex - 1, stringIndex); // up
    dfs(arrayIndex, stringIndex + 1); // right
    dfs(arrayIndex, stringIndex - 1); // left
  }
}
