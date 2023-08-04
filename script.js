//1. print the odd number in array 

// let  arr = [1,2,3,4,5,6,7,8,9];
// let result = [];
// function odd(arr)
// {
//     for(let i=0;i<arr.length;i++)
//     {
//         if(arr[i]%2!=0){
//             result.push(arr[i])
//         }
//     }
//     return result;
// }
// console.log(odd(arr)); 

// Anonoyomus Function 
// let arr = [11,14,15,18,20];
// let result = [];                                               
// let odd = function(arr)
// {
//     for(let i=0;i<arr.length;i++)
//     {
//         if(arr[i]%2!=0){
//             result.push(arr[i])
//         }
//     }
//     return result;
// }
// console.log(odd(arr));    

//IIFE  

//   (function odd(arr)
// {
//     var result =[];
//     for(var i =0;i<arr.length;i++){
//         if(arr[i]%2!=0)
//         {
//             result.push(arr[i])
//         }
//     }
//     console.log(result);
// })([12,13,14,15,16])

//Arrow ES6
// const od = (arr) =>{
//     var result = [];
//     for(var i =0;i<arr.length;i++){
//         if(arr[i]%2!=0){
//             result.push(arr[i])

//         }
//     }
//     return result;
// }
// console.log(od([1,2,3,4,5,6,7,8,9]));







 




//2.convert all the string to tittle caps in a string array
// function toWord(arr){
//     arr = arr.toLowerCase().split(' ');
//     for(var i=0; i<arr.length; i++){
//         arr[i] =  arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
//     }
//     return arr.join(' ');
// }
// console.log(toWord("WELCOME TO GUVI"));


//anonoyomus functin
// function (arr){
//     arr = arr.toLowerCase().split(' ');
//     for(var i=0; i<arr.length; i++){
//         arr[i] =  arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
//     }
//     return arr.join(' ');
// }
// console.log(toWord("WELCOME TO GUVI"));
 






// 3. sum of all numbers in an array 

// let arr = [10 , 20, 30, 40];                              
// let sum = arr.reduce(function (a,b){           
//     return a+b; 

// });
// console.log(sum); 



