// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  // Your code goes here...
  let depArr = []
  let withdrArr = []

  for (let i = 0; i < array.length; i++) {
    let depSum = 0
    let withdrSum = 0

    if (array[i].deposits && array[i].withdrawals) {

      for (let j = 0; j < array[i].deposits.length; j++) {
        depSum += array[i].deposits[j]
      }

      depArr.push(depSum)

      for (let k = 0; k < array[i].withdrawals.length; k++) {
        withdrSum += array[i].withdrawals[k]
      }

      withdrArr.push(withdrSum)
    }
  }

  let accsWithDepAndWithdr = []
  
  for (let elm of array) {    
    if (elm.deposits && elm.withdrawals) {
      accsWithDepAndWithdr.push(elm)
    }
  }

  let accsWithWrongBal = []

  for (let m = 0; m < accsWithDepAndWithdr.length && m < depArr.length && m < withdrArr.length; m++) {
    if (depArr[m] - withdrArr[m] !== accsWithDepAndWithdr[m].balance) {
      accsWithWrongBal.push(accsWithDepAndWithdr[m])
    }
  }

  return accsWithWrongBal

}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
