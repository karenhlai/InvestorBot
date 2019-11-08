let inputs = {
  "Bonds": 250, 
  "Stocks": 200, 
  "Real Estate": 600, 
  "International Stocks": 300, 
  "Cars": 150
} 

let idealPercentages = {
  "Bonds": 35,
  "Stocks": 25,
  "Real Estate": 10,
  "International Stocks": 10,
  "Cars": 20
}




function balance(inputs, idealPercentages) {
  let statements = [];
  const total = Object.values(inputs).reduce((acc, curr) => curr + acc);
  const categories = Object.keys(inputs);
  let unbalanced = [];
  let unbalancedCategories = [];

  let sortedCategories = categories.sort((cat1, cat2) => inputs[cat1] - inputs[cat2]);
  console.log(sortedCategories)

  sortedCategories.forEach((category, i) => {
    let idealPercent = idealPercentages[category];
    let idealValue = (total * idealPercent) / 100;
    let remainingValue = inputs[category] - idealValue;
    if (remainingValue !== 0) {
      unbalanced.push(remainingValue);
      unbalancedCategories.push(sortedCategories[i])
    }
  });

  let i = 0; 
  let j = unbalanced.length - 1;
  
  while (i < j) {
    let currentEl = unbalanced[j];

    let flip = -(currentEl); 
    let flipIdx = unbalanced.indexOf(flip);

    if (flipIdx !== -1 && currentEl > 0) { //if flip exists and j is positive
      statements.push(`Transfer $${currentEl} from ${unbalancedCategories[j]} to ${unbalancedCategories[flipIdx]}`);
      unbalanced[j] = null, unbalanced[flipIdx] = null;
      unbalancedCategories[j] = null, unbalancedCategories[flipIdx] = null;


      unbalanced = unbalanced.filter(el => el !== null);
      unbalancedCategories = unbalancedCategories.filter(el => el !== null);
    } else {
      unbalanced[j - 1] = unbalanced[j - 1] + currentEl;
      statements.push(`Transfer $${currentEl} from ${unbalancedCategories[j]} to ${unbalancedCategories[j - 1]}`);
    } 

    j--;
  }
  console.log(statements)
  return statements;

}

balance(inputs, idealPercentages)


