idealPercentages = [20, 20, 40, 10, 10];
categories = ["Bonds", "Stocks", "Real Estate", "International Stocks", "Cars"];
inputs = [100, 200, 300, 400, 500];


let total = 1500;
let leftovers = []
// let leftoversPos = [];
// let leftoversNeg = [];

for (let i = 0; i < inputs.length; i++) {
  let input = inputs[i];
  let category = categories[i];
  let idealPercent = idealPercentages[i];

  let idealVal = (total * idealPercent) / 100;


  let j = i+1;

  if (input === idealVal) {
    continue;
  }
  // } else if (input > idealVal) {
  //   let leftoverVal = idealVal - input;
  //   leftoversPos.push({category, input, idealPercent, leftoverVal});
  // } else if (input < idealVal) {
  //   let leftoverVal = idealVal - input;
  //   leftoversNeg.push({category, input, idealPercent, leftoverVal});
  // }
  else {
        let leftoverVal = idealVal - input;
        leftovers.push({category, leftoverVal});
  }
};
// console.log(leftoversPos)
// console.log(leftoversNeg)
console.log(leftovers)


// function rebalanceValues(leftoverPos, leftoverNeg) {
  
// };