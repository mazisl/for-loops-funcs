const bankAccounts = [
  {
    id: 1,
    name: "Susan",
    balance: 100.32,
    deposits: [150, 30, 221],
    withdrawals: [110, 70.68, 120],
  },
  { id: 2, name: "Morgan", balance: 1100.0, deposits: [1100] },
  {
    id: 3,
    name: "Joshua",
    balance: 18456.57,
    deposits: [4000, 5000, 6000, 9200, 256.57],
    withdrawals: [1500, 1400, 1500, 1500],
  },
  { id: 4, name: "Candy", balance: 0.0 },
  { id: 5, name: "Phil", balance: 18, deposits: [100, 18], withdrawals: [100] },
];

//bank acc ex 10
function getClientsWithLetterInName(array, letter) {
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

  // console.log(namesArrSp)

  // let newNamesArr = []
  // for (let i = 0; i < namesArrSp.length; i++) {
  //   for (let j = 0; j < namesArrSp[i].length; j++) {
  //     if (namesArrSp[i][j].toLowerCase() == letter || namesArrSp[i][j] == letter.toUpperCase()) {
  //       newNamesArr.push(namesArrSp[i].join(''))
  //     }
  //   }
  // }

  // return newNamesArr

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
    
  // for(let i of nameWithLetterArr) {
  //   if(nameWithLetterArrFinal.indexOf(i) === -1) {
  //     nameWithLetterArrFinal.push(i);
  //   }
  // }

  //indexOf method replacement start
  let nameWithLetterArrFinal = [];

  for (let i = 0; i < nameWithLetterArr.length; i++) {
    if (!nameWithLetterArrFinal.length) {
      nameWithLetterArrFinal.push(nameWithLetterArr[i])
    }

    for (let j = 0; j < nameWithLetterArrFinal.length; j++) {
      if (nameWithLetterArrFinal[j] != nameWithLetterArr[i]) {
        nameWithLetterArrFinal.push(nameWithLetterArr[i])
      }
    }
  }
  //indexOf method replacement end

  return nameWithLetterArrFinal;

}

// console.log(getClientsWithLetterInName(bankAccounts, 's'))



//bank acc ex 20
function separateNamesWithAFromRest(array) {
  // Your code goes here...
  let stringArr
  let namesArrSp = []
  for (let elm of array) {
    stringArr = elm.split('')
    namesArrSp.push(stringArr)
  }
  console.log(namesArrSp)

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
  console.log(namesWithA)

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
  console.log(namesWithLtrA)

  let namesWithAFinal = [];
    
  for(let i of namesWithLtrA) {
    if(namesWithAFinal.indexOf(i) === -1) {
      namesWithAFinal.push(i);
    }
  }

  //indexOf method replacement start
  // let namesWithAFinal = [];

  // for (let i = 0; i < namesWithLtrA.length; i++) {
  //   if (!namesWithAFinal.length) {
  //     namesWithAFinal.push(namesWithLtrA[i])
  //   }

  //   for (let j = 0; j < namesWithAFinal.length; j++) {
  //     if (namesWithAFinal[j] != namesWithLtrA[i] && !namesWithAFinal.includes(namesWithLtrA[i])) {
  //       namesWithAFinal.push(namesWithLtrA[i])
  //     }
  //   }
  // }
  //indexOf method replacement end
  console.log(namesWithAFinal)

  let namesWithoutA = []
  for(let i of array) {
    if (namesWithAFinal.indexOf(i) === -1) {
      namesWithoutA.push(i);
    }
  }

  //indexOf method replacement start
  // let namesWithoutA = [];

  // for (let i = 0; i < array.length; i++) {
  //   if (!namesWithoutA.length) {
  //     namesWithoutA.push(array[i])
  //   }

  //   for (let j = 0; j < namesWithoutA.length; j++) {
  //     if (namesWithoutA[j] != array[i] && !namesWithAFinal.includes(array[i])) {
  //       namesWithoutA.push(array[i])
  //     }
  //   }
  // }
  //indexOf method replacement end
  console.log(namesWithoutA)

  let newArr = []
  newArr.push(namesWithAFinal, namesWithoutA)

  return newArr
}

console.log(separateNamesWithAFromRest(["jon", "alicia", "andrew", "mark", "jimmy"]))