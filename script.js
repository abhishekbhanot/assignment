console.log('hello abhishek');
// age= 20;
// console.log(typeof (age));
// Symbol a="abhi";

// console.log(typeof(5<8));
// let age;
// console.log(age)
//data types
// const profile={
//   name: "keyboard",
//   userName: "hyy",
//   follow:99,
//   following:2222,


// }
// profile.fullName= "bhanot";
// console.log(profile["age"]+1);
// let a= 25;
// let b = 100;
// console.log(25% 100);

//  let x= prompt("enter any no.");

// if (x % 5 ==0){
//   console.log("true");
// }

//enter no and get grade
// let x = prompt("enter no");
// if ( x > 90){
//   console.log("excellent")
// }
//  else if ( x > 80){
//   console.log("very good")
// }

// else if ( x > 70){
//   console.log("good")
// }

// else if ( x > 60){
//   console.log("average")
// }

// else {
//   console.log("better luck next time")
// }

//take input from user genrate a user name for them based on the input start user name with the @   followed by theri fullname and ending with fullname length
// let nam = prompt("enter your full name");
// console.log("@"+nam + nam.length);

//compariosn 
// == , != , === , !==
// let a = 10;
// let b = "10";
// console.log( a !== b);

// let namee = 12;
// let an= "12";
// console.log(namee !== an);

// let x = prompt("enter age");
// if ( x > 18){
//     console.log("adult")
// }
// else{
//     console.log("kid")
// }


//for looops practicle
// for ( let x = 0; x<11; x++){
//   console.log(x)
// }




//table from using input
//while loop
// let x = prompt("enter any no");
// let y= 1;
// while( y<11){
//   console.log(x ,"*", y,"=", x * y)
//   y++;
// }

//for loop
// let x = prompt("no");
// let y = 1;
// for( y = 1; y<11;y++){
//   console.log(x * y)
// }

//create a game where uou start with any no ask the suer to keep gusing the game no until you enter the correct value
//  let x = prompt("enter ant number between");
// let y= 12;
// while(x!=y){
//   x= prompt("reenter no");

// }
// console.log("congo")

//for a given array with marks of students 85,97,35,66,76,60 find the average marks of the entrie classz

// let num =[85,97,35,66,76,60];
// let sum=0;
// for (let x of num){
//     sum += x;
// }
// console.log(sum)

//for a given array swith prices of items 250,645,300,900,50 then all items have an ofer of 10% chnage the arrray to final price after discount
// let items=[250,645,300,900,50];
// for(let i = 0; i<items.length;i++){
//     let dis=items[i]*0.10;
//     items[i]-=dis;
// }
// console.log(items)


//aray.to string
//array.push(add item at last of array)asp
//Array.concate(joins multipe array in one array)
//array.unshift(add item in startof array)
//array.shift(remove item in first no of  array )
//The splice() method can be used to add new items to an array:
//The slice() method slices out a piece of an array into a new array:

// let x=["abhishek","harsh","raghav","tamanna","muskan"];
// let slice= x.slice(1,4);
// console.log(slice);
// let splice=x.splice(2,1,"muskan");
// console.log(splice);

// let array=["netflix","google","microsoft","uber","zomato"]
// let shift=array.shift();
// console.log(array)

// let remove=array.splice(3,1,"amazon")
// console .log(array);

//functions
// function abhi (){
//     console.log(2*8)
// }
// abhi();

//create a function using the function that atkes a string as an argument and return of vovels in the string by prompt when I enter name then code run and check if name contains any vowels










//assignment
//Use a loop to print numbers from 10 down to 1.
// let num= 0;
// for(let i=10;i>=num;i--){
//     console.log(i)
// }

//Use a loop to calculate the sum of all odd numbers from 1 to 50.
// let x = 0;
// for(let i = 0;i<=50;i++){
//     if(i%2!==0){
//         x+=i;
//     }
// }
// console.log(x)


//Use a loop to print numbers from 30 down to 0, counting down by 3 each time.

// for(let i =33;i<=0,i-=3;){
//     console.log(i);
// }


//Use a loop to find the first multiple of 7 greater than 100, and print that number.
// for(let i=100;i<110;i++){
//     if(i%7==0){
//         console.log(i)
//     }
    
// }

//Use a loop to calculate the factorial of 5 (i.e., 5!=5×4×3×2×1)

// let num=1;
// for(let i=1;i<=5;i++){
//     num*=i;
// }
// console.log(num)

//Use a loop to calculate the sum of all multiples of 3 from 1 to 30.
// let num=0;
// for(let i=0;i<=30;i++){
//     if(i%3==0){
//         num+=i
//     }
// }
// console.log(num);






//assignmnet 2
//Write an arrow function square that takes a number as input and returns its square.

// let numb = (num) => num * num;
// console.log(numb(7));

//Create an arrow function isEven that takes a number and returns true if the number is even, and false otherwise.
// let even=(digit)=>
//     digit%2===0;
//  console.log(even(10));

//Write an arrow function toFahrenheit that converts a temperature from Celsius to Fahrenheit. The formula is: Fahrenheit=Celsius×9/5+32

// let far=(cel)=>
//      cel*9/5+32;

// console.log(far(91));


//Create an arrow function max that takes two numbers and returns the larger one.
// let maxx=(a,b)=>
//     Math.max(a,b);

// console.log(maxx(2,8));


//Write an arrow function sumArray that takes an array of numbers and returns the sum of its elements.
// let array=[1,2,3,4,5];
// let sum=0;
// for(let i=0;i<array.length;i++){
//  sum+=array[i]
// }
// console.log(sum);

//Write an arrow function factorial that calculates the factorial of a number.

// let fact=(num) =>{
// let res=1;

//     for(let i=2;i<=num;i++){
//         res*=i;

//     }
//     return res;
// }
// console.log(fact(5));

//Write an arrow function toUpperCaseArray that takes an array of strings and returns a new array with each string in uppercase.
// let upper=(arr)=>{
//     let array=[];
//     for(let i=0;i<arr.length;i++){

//         array.push(arr[i].toUpperCase());
//     }
//     return array;
// }
// console.log(upper(["abhi","bhanot"]));

//Create an arrow function squareElements that takes an array of numbers and returns a new array with each element squared.
// let square=(arr)=>{
//         let array=[];
//         for(let i=0;i<arr.length;i++){

//             array.push(arr[i]**2)
//         }
//         return array;
//     }
//     console.log(square([1,5,9]));

//Write an arrow function filterOdds that takes an array of numbers and returns a new array with only the even numbers.
// let even=(arr)=>{
//     let aray=[];
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]%2==0){
//             aray.push(arr[i]);

//         }
        
//     }
// return aray;
// };
// console.log(even([1,2,3,4,5,67]))

//Write an arrow function countWords that takes a sentence as a string and returns the number of words in it. Assume words are separated by spaces.

// let count=(arr)=>
//     arr.split(" ").length;
// console.log(count("hello abhishek bhanot"))