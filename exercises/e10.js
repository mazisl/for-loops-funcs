// EXERCISE 10
// Return an array of account holders names that contains a given letter
// Array example: bankAccounts in /data/data.js
// getClientsWithLetterInName(bankAccounts, 'e') => ['Kevin', 'Steven', ...]

export function getClientsWithLetterInName(array, letter) {
  // Your code goes here...
  let namesArr = []
  for (let elm of array) {
    namesArr.push(elm.name)
  }

  let stringArr
  let namesArrSp = []
  for (let elm of namesArr) {
    stringArr = elm.split('')
    namesArrSp.push(stringArr)
  }

  let newNamesArr = []
  for (let i = 0; i < namesArrSp.length; i++) {
    for (let j = 0; j < namesArrSp[i].length; j++) {
      if (namesArrSp[i][j].toLowerCase() == letter || namesArrSp[i][j] == letter.toUpperCase()) {
        newNamesArr.push(namesArrSp[i])
      }
    }
  }  

  let nameWithLetterArr = []

  for (let i = 0; i < newNamesArr.length; i++) {
    let nameWithLetter = '';
    for (let j = 0; j < newNamesArr[i].length; j++) {
      nameWithLetter += `${newNamesArr[i][j]}`      
    }
    nameWithLetterArr.push(nameWithLetter)
  }

  //make sure a name isn't repeated in the array
  let nameWithLetterArrFinal = [];
  for(let i of nameWithLetterArr) {
    if(nameWithLetterArrFinal.indexOf(i) === -1) {
      nameWithLetterArrFinal.push(i);
    }
  }

  return nameWithLetterArrFinal;
  
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-10"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
