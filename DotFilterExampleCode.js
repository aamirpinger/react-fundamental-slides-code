// Filter function

// Example of imparative code

const names = ['Aamir', 'Ali', 'Javed', 'Aziz', 'Irfan', 'Muneeb']
const selectedNames = []
for (let i = 0; i < names.length; i++) {
  if (names[i].length >= 5) {
    selectedNames.push(names[i])
  }
}

//* *********************************************
// run one at a time

// Example of declarative code using .filter function

/*
const names = ['Aamir', 'Ali', 'Javed', 'Aziz', 'Irfan', 'Muneeb']

const selectedNames = names.filter(name => name.length >= 5)

*/
