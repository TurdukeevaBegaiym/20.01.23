let lightSwitchIson = false;
let todayIsCloudy = false;

let example1 = 5 > 10;
let example2 = 5 < 10;
let example3 = 10 >= 10;
let example4 = 5 <= 4;
let example5 = 5 === 6;//равняется ли 
let example6 = 5 !== 6;

let a = 5;
let b = 6;
let result = a < b;

//если число A меньше числа B то вывести число A,
//иначе вывести число B
if ( a < b) {
   console.log(a);
}
else {
   console.log(b);
}

//25  студентов(students) пришли на курс программирования.Поместятся ли они в комнату с 20 местами(Capacity).
let students = 25;
let capacity = 20;
if (students <= capacity) {
    console.log(true);
}
else {
  console.log(false);
}

let example7 = 5 < 10 && 5 > 8;//false и true = false
let example8 = 5 < 10 && 5 > 3;//true и true = true


let example9 = 5 > 3 || 5 < 3;//Или
let example10 = 5 < 1 || 5 > 1;

console.log("Столица Кр ? ");
let answer = "бишкек";
if (answer === "Бишкек" || answer === "бишкек") {
  console.log(answer + "- правильно");
}
else {
  console.log (answer + " - не правильно");
}

let weekday = 1;
if (weekday === 1){
   console.log("Дуйшомбу");
}
else if (weekday === 2) {
  console.log("Шаршемби");
}
else if (weekday === 3) {
  console.log("Шейшемби");
}
else if (weekday === 4) {
  console.log("Бейшемби");
}

else if (weekday === 5) {
  console.log("Жума");
}
else {
  console.log("Билбейм") 
}



console.log(example7);
console.log(example8);
console.log(example9);
console.log(example10);




