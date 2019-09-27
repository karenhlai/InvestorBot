let idealPercentages = [20, 20, 40, 10, 10];
let categories = ["Bonds", "Stocks", "Real Estate", "International Stocks", "Cars"];
let inputs = [100, 200, 300, 400, 500];
let inputs = [100, 200, 300, 400, 500];

let total = 1500;
let correctAmount = [];
let queue = [];
let leftoverSurplus = [];
let leftoverDeficit = [];

for (let i = 0; i < inputs.length; i++) {
  let input = inputs[i];
  let category = categories[i];

  let idealPercent = idealPercentages[i];
  let idealVal = (total * idealPercent) / 100;
  
  if (idealVal === input) {
    correctAmount.push(input);
    inputs.splice(i, 1); //splice away the correct amount
  } else if (input > idealVal) {
    let leftover = input - idealVal;
    // leftoverSurplus.push({category, input, leftover})
    
  } else if (input < idealVal) {
    let missing = input - idealVal;
    // leftoverDeficit.push({category, input, missing})
  }

};
// console.log(leftoverSurplus) //should hold neg value
// console.log(leftoverDeficit) //should hold pos value
// console.log(correctAmount)

function balance(arr) {
  
  
  let i = 0;
  
  while (arr.length > 0) {
    let maxVal = Math.max(...arr);
    let minVal = Math.min(...arr);

    if (maxVal - minVal === 0) {
      correctAmount.push(maxVal, maxVal);
      let newArr = correctAmount.filter(el => el !== minVal && el !== maxVal);
      balance(newArr);
    } else if ()
  }
}