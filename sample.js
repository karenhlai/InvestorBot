let idealPercentages = [20, 20, 40, 10, 10];
// let categories = ["Bonds", "Stocks", "Real Estate", "International Stocks", "Cars"];
// let inputs = [100, 200, 300, 400, 500];
let inputs = {
  "Bonds": 100, 
  "Stocks": 200, 
  "Real Estate": 300, 
  "International Stocks": 400, 
  "Cars": 500
} 


function balance(inputs, idealPercentages) {
  let total = 1500;
  const categories = Object.keys(inputs);

  let sortedCategories = categories.sort((cat1, cat2) => inputs[cat1] - inputs[cat2]);
  // console.log(sortedCategories)
  const sortedValues = sortedCategories.map((category, i) => {
    let idealValue = (total * idealPercentages[i]) / 100;
    return inputs[category] - idealValue;
  });
  // console.log(sortedValues) [ -200, -100, -300, 250, 350 ]

  let i = 0; 
  let j = sortedValues.length - 1;
  
  while (i < j) {
    
  }


}

balance(inputs, idealPercentages)




// 

const payments = {
  John: 400,
  Jane: 1000,
  Bob: 100,
  Dave: 900,
};

function splitPayments(payments) {
  const people = Object.keys(payments);
  const valuesPaid = Object.values(payments);

  const sum = valuesPaid.reduce((acc, curr) => curr + acc);
  const mean = sum / people.length;
  // console.log(mean)

  const sortedPeople = people.sort((personA, personB) => payments[personA] - payments[personB]);
  // console.log(sortedPeople)
  const sortedValuesPaid = sortedPeople.map((person) => payments[person] - mean);
  // console.log(sortedValuesPaid)

  let i = 0;
  let j = sortedPeople.length - 1;
  let debt;

  while (i < j) {
    debt = Math.min(-(sortedValuesPaid[i]), sortedValuesPaid[j]);
    console.log(debt)
    sortedValuesPaid[i] += debt;
    sortedValuesPaid[j] -= debt;

    console.log(`${sortedPeople[i]} owes ${sortedPeople[j]} $${debt}`);

    if (sortedValuesPaid[i] === 0) {
      i++;
    }

    if (sortedValuesPaid[j] === 0) {
      j--;
    }
  }
}

splitPayments(payments);

/*
  C owes B $400
  C owes D $100
  A owes D $200
*/
