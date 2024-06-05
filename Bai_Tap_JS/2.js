// //Câu 01

// function findMax(a, b){
//     if(a > b){
//         return a;
//     }
//     else{
//         return b;
//     }
// }
// console.log(findMax(10, 5));

// // Câu 02

// function FizzBuzzCheck(arg){
//     if(typeof arg != "number"){
//         console.log("Vui lòng nhập số");
//     }
//     else if(arg % 3 == 0){
//         console.log("Fizz");
//     }
//     else if(arg % 5 == 0){
//         console.log("Buzz");
//     }
//     else if(arg % 3 == 0 || arg % 5 == 0){
//         console.log("FizzBuzz");
//     }
//     else if( arg % 3 != 0 && arg % 5 != 0){
//         console.log(arg);
//     }
// }
// FizzBuzzCheck("one");

// // Câu 03
// const money = 30000;
// const fine = 5;
// const limit = 70;
// function SpeedCheck(x){
//     if(x < limit){
//         return "Bạn đã an toàn";
//     }
//     else{
//         const finepoint = Math.floor((x - limit) / fine);
//         if(finepoint < 10){
//             return "Bạn đã bị phạt " + finepoint * money;

//         }
//         else{
//             return "Bạn đã bị cấm lái xe";
//         }
//     }
// }

//  var S1 = SpeedCheck(99);
//     console.log(S1);

// Câu 04 

// const person = {
//     name: "Le Van A",
//     age: 40,
//     height: 175,
//     country: "Viet Nam",
//     designation: "UI Developer",
//   };

//   const technology = {
//     name: "JavaScipt",
//     version: 6,
//     purpose: "Scripting language for Web",
//     developer: "Netscape Corporation",
//   };

// function showStringkey(obj){
//     for(let key in obj){
//         if(typeof obj[key] == "string"){
//             console.log(key, ":", obj[key]); 
//         }
//     }
// }

// showStringkey(person);

// var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// function sum(arr) {
//   let sum = 0;
//   for(let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }   

// console.log(sum(arr));

// Câu 07

// function checkExtension(str){
//   var ex = str.split(".");
//   var ext = ex[ex.length - 1];
//   return ext;
// }

// var str1 = checkExtension("index.html");
// var str2 = checkExtension(prompt(""));
// console.log(str1);
// console.log(str2);


// Câu 12
// const myFriends = [1, 2, "Nam", "Hùng", 3, 4, "Hòa", 6, "Long"];
// var output = [];
// for(key in myFriends){
//   if( typeof myFriends[key] == "string"){
//     output.push(myFriends[key]);
//   }
// }

// console.log(output);


// Example:

// var input = prompt("Enter the input: ");
// var res = 0;
// var cnt = 0;
// if(input <= 0){
//   console.log("Input is Invalid: ");
//   exit;
// }

// for(let key = 0; key <= input; key++){
//   res += key/ input;
// }

// console.log(res);


// var Human = {
//   name : "Nakroth",
//   age : 20,
//   skills : ["HTML", "CSS", "JS"],
// }
// console.log(Human);

// var key = prompt("Enter the key: ");
// var input = prompt("Enter the value: ");
// Human[key] = input;

// console.log(Human);

// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// arr.forEach(function(item, index){-
//   arr[index] = item + 2;
// });

// console.log(arr);

// var arr = ["HTML", 15, true, "CSS", 25, false, "JS", 35, true];
// var res = arr.every(function(item){
// });

// console.log(res);

// var ScoreSubject = [
//   {
//     name: "Math",
//     score: 9,

//   },
//   {
//     name: "Biology",
//     score: 5,
//   },
//   {
//     name: "History",
//     score: 8.5,
//   }
// ]

// var sum = 0;
// ScoreSubject.forEach(index => {
//   sum += index.score;
// });

// console.log(sum);


// var condition = ScoreSubject.map(function(index){
//   return index.score;
// }); 
// console.log(condition);

// if(condition == false){
//   console.log("Không phải học sinh giỏi");
// }
// else{
//   console.log("Học sinh giỏi");
// }

// var input = prompt("Enter the input: ");

// if(input > 0){
//   console.alert("YES");
// }
// else{
//   console.alert("NO");
// }



// var input = prompt("Enter the number: ");


// if (n < 3 ){
//   return false

// function sum(arr){
//   return arr.reduce((acc, curr) => acc + curr, 0);
// }
// const Check = (input, array) => {
//     if( input < 3){
//       return false;
//     }
//     if(array.some(function(index){
//       index <= 0 || index >= 180})){
//         return false;
//       }
//     return sum(array) === (input - 2) * 180;
//   };

// const test = Check(4, [90,90,90,90]);
// console.log(test);

// const sum = (array) => array.reduce((acc, val) => acc + val, 0);

// const Check = (input, array) => {
//   if (input < 3) {
//     return false;
//   }
//   if (array.some(function (index) {
//     return index <= 0 || index >= 180;
//   })) {
//     return false;
//   }
//   return sum(array) === (input - 2) * 180;
// };

// const test = Check(4, [90, 90, 90, 90]);
// console.log(test);


// Câu 