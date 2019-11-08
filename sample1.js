function bSearch(array, target) {
  if (array.length <= 1) return null; 
  let mid = Math.floor(array.length / 2);

  if (array[mid] === target) {
    return array[mid];
  } else if (array[mid] > target) {
    return bSearch(array.slice(0, mid), target);
  } else {
    return bSearch(array.slice(mid, array.length), target);
  }
}

// total = input - ideal
// sort the array of surplus and deficits
// eliminate zeros
// take largest pos to largest neg
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
  const categories = Object.keys(inputs);
  const total = Object.values(inputs).reduce((acc, curr) => curr + acc);
  let remainders = {};
  let sortedR = {};
  // get array of remainders
  categories.forEach((category) => {
    let idealVal = (total * idealPercentages[category]) / 100;
    remainders[category] = inputs[category] - idealVal;
  })
  
  let keys = Object.keys(remainders).sort((a, b) => remainders[a] - remainders[b]);
  keys.forEach(k => sortedR[k] = remainders[k]);
  
  let cats = Object.keys(sortedR);
  let vals = Object.values(sortedR);
  vals.forEach((val, i) => {
    let flip = -(val);
    let flipIdx = vals.indexOf(flip);
    if (flipIdx !== -1 && val > 0) {
      statements.push(`Transfer ${val} from ${cats[i]} to ${cats[flipIdx]}`)
    }
  })
  
  
  console.log(statements);
}
balance(inputs, idealPercentages);