
// EXERCISE 20
// Return and array of 2 arrays
// (1 - an array of names that contain "a" in name, 2 - an array of names that don't have 'a' in name)
// separateNamesWithAFromRest(["jon", "alice", "andrew", "mark", "jimmy"]) -> [["alice", "andrew", "mark"], ["jon", "jimmy"]]
// NOTE: You MUST use double/nested FOR loop to solve this exercise. The array.includes() method is NOT allowed.

export function separateNamesWithAFromRest(array) {
  // Your code goes here...
  let stringArr
  let namesArrSp = []
  for (let elm of array) {
    stringArr = elm.split('')
    namesArrSp.push(stringArr)
  }

  // let namesWithA = []
  // for (let i = 0; i < namesArrSp.length; i++) {
  //   for (let j = 0; j < namesArrSp[i].length; j++) {
  //     if (namesArrSp[i][j] == 'a') {
  //       namesWithA.push(namesArrSp[i].join(''))
  //     }
  //   }
  // }

  let namesWithA = []
  for (let i = 0; i < namesArrSp.length; i++) {
    for (let j = 0; j < namesArrSp[i].length; j++) {
      if (namesArrSp[i][j] == 'a') {
        namesWithA.push(namesArrSp[i])
      }
    }
  }
  // console.log(namesWithA)

  //join method replacement start
  let namesWithLtrA = []
  for (let i = 0; i < namesWithA.length; i++) {
    let nameWithLetter = '';
    for (let j = 0; j < namesWithA[i].length; j++) {
      nameWithLetter += `${namesWithA[i][j]}`      
    }
    namesWithLtrA.push(nameWithLetter)
  }
  //join method replacement end

  //make sure a name isn't repeated in the array
  let namesWithAFinal = [];
  for(let i of namesWithLtrA) {
    if(namesWithAFinal.indexOf(i) === -1) {
      namesWithAFinal.push(i);
    }
  }

  //create array of names without A
  let namesWithoutA = []
  for(let i of array) {
    if (namesWithAFinal.indexOf(i) === -1) {
      namesWithoutA.push(i);
    }
  }

  let newArr = []
  newArr.push(namesWithAFinal, namesWithoutA)

  return newArr
}


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-20"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
