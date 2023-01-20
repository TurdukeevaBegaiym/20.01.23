// У Пети 344 сомов, хватит ли это на мороженное,которое стоит 20сом.  
let som = 344;
let icecrim = 20;
if (som >= icecrim) {
  console.log("yes");
}
else {
  console.log("no");
}

// Проверить является ли  23 четным числом.
let number = 23;
if (number % 2 === 0) {
  console.log(number + "is even");
}
else {
  console.log(number + "is odd");
}

// Является ли вода в жидком состоянии при температуре 101 градусов цельсия.
let watertemperature = 101;
if(watertemperature > 0 && watertemperature < 100 ) {
  console.log("water is liguid");
}
else{
  console.log("water is not liguid");
}

// Проверить является 2000 високосным годом.
let year = 2000;
if (year % 4 === 0) {
  console.log("Is leap year");
}
else {
  console.log("Is not a leap year");
}

// У Васи средня балл по всем урока 4. вывести кем он является(Отличник, Ударник,Троешник,Двоешник,Отчислен)
let ball = 0;

if (ball === 5) {
  console.log("отличник")
}

if (ball === 4) {
  console.log("ударник")
}
else if(ball === 3) {
  console.log("Троешник")
}
else if(ball === 2) {
  console.log("Двоешник")
}
else if(ball === 0) {
  console.log("Отчислен")
}
 
//Сколько дней в Феврале(month)?
let month = "february";
if (month === "february") {
  console.log("29 days");
}
else if (month === "April" || month ==="June" || month === "september" || month === "November") {
  console.log("31 days");
}
