"use strict";

// // Coding Challenge 1

// // TASK 1: Store mass & height
// // Check for test data 1
// // const markMass = 78;
// // const johnMass = 92;

// // const markHeight = 1.69;
// // const johnHeight = 1.95;

// // Check for test data 2
// const markMass = 95;
// const johnMass = 85;

// const markHeight = 1.88;
// const johnHeight = 1.76;

// // TASK 2: Calculate their BMIs
// const markBMI = markMass / markHeight ** 2;
// const johnBMI = johnMass / johnHeight ** 2;

// // TASK 3:
// // Compaire them
// const markHigherBMI = markBMI > johnBMI;

// // Take a decision who has higher BMI
// // Syntax 1
// if (markHigherBMI) {
//   console.log(`Mark has a higher BMI than John`);
// } else {
//   console.log(`John has a higher BMI than Mark`);
// }

// // Syntax 2
// if (markHigherBMI) console.log(`Mark has a higher BMI than John`);
// else console.log(`John has a higher BMI than Mark`);

// // Syntax 3
// markHigherBMI
//   ? console.log(`Mark has a higher BMI than John`)
//   : console.log(`John has a higher BMI than Mark`);

///////////////////////////////
//////////////////////////////
// Coding Challenge 2

// Data 1
const dolphinScore = [96, 108, 89];
const koalaScore = [88, 91, 110];

// // Data 2
// const dolphinScore = [97, 112, 101];
// const koalaScore = [109, 95, 123];

// // Data 3
// const dolphinScore = [97, 112, 101];
// const koalaScore = [109, 95, 106];

// // Data 4
// const dolphinScore = [107, 112, 101];
// const koalaScore = [109, 95, 106];

// Task 1:
const avgScoreFn = (scores) => {
  let avg = 0;
  for (let i = 0; i <= scores.length - 1; i++) {
    avg += scores[i] / 3;
  }
  return avg;
};
const dolphinAvgScore = avgScoreFn(dolphinScore);
const KoalaAvgScore = avgScoreFn(koalaScore);

console.log(dolphinAvgScore);
console.log(KoalaAvgScore);

// Task 2, 3 & 4
if (
  dolphinAvgScore > KoalaAvgScore &&
  (dolphinAvgScore >= 100 || KoalaAvgScore >= 100)
) {
  console.log(
    `Dolphins team is higher scorer than Koalas team. So, Dolphins team WIN TROPHY!`
  );
} else if (
  dolphinAvgScore < KoalaAvgScore &&
  (dolphinAvgScore >= 100 || KoalaAvgScore >= 100)
) {
  console.log(
    `Koalas team is higher scorer than Dolphins team. So, Koalas team WIN TROPHY!`
  );
} else if (
  dolphinAvgScore === KoalaAvgScore &&
  (dolphinAvgScore >= 100 || KoalaAvgScore >= 100)
) {
  console.log(`Dolphins and Koalas both team has same score. So, It's DRAW!`);
} else {
  console.log(`No WIN, no DRAW, It's PENALTY!`);
}
//////////////////////////////////
const resturant = {
  name: "Classico Bangla",
  location: "Bangla Bazar, New City 27, Dhaka",
  categories: ["Bangladeshi", "Chines", "Italiano"],
  mainMenu: ["Garlic Bread", "Fried Rice", "Vegetable Rice", "Gril Chiken"],
  drinks: ["7-up", "Coca Cola", "Lemon", "RC Cola", "Nomal Water"],
};

const [cat1, , cat3] = resturant.categories;
console.log(cat1, cat3);
//////////////////////////////////
const names = [
  "Mahmudul Hasan",
  "Afifa Sultana",
  "Mahanaz Hasan",
  "Tasdid Hasan",
  "Abdul Hye",
  "Khodeja Khatun",
  "Rozi Hasna",
  "Farhana Akter",
  "Sharmin Hye",
  "Fakhar Uddin",
  "Aklima Khatun",
  "Khadiza Tahera",
  "Nazir Ahmed",
];

const maxLengthName = (arr) => {
  let maxLenName = "";
  for (let i = 0; i <= arr.length - 1; i++) {
    const item = arr[i];
    if (item.length > maxLenName.length) console.log((maxLenName = arr[i]));
  }
  return maxLenName;
};
maxLengthName(names);

const sentence = "I am a frontend web developer";

const maxLengthWord = (str) => {
  const words = str.split(" ");
  let maxLength = "";
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > maxLength.length) maxLength = words[i];
  }
  return maxLength;
};
console.log(maxLengthWord(sentence));

///////////////////////////////
//////////////////////////////
// Coding Challenge 3

50 < bill > 300;
bill;

const tip = bill * 0.15;
//  if(bill >= 50 && bill <= 300)
