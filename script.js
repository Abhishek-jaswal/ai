/* console.log("hello java");

async function loadDqata(){
    const data = await fetchData();
    console.log(data);

}
loadDqata()

 */
//what is diffrence between map and for each
/* for each:- performs an operation foe each element but doestnt return anything
map:- performs an operation for each element and return a new array
 */

//for each() performs an operation for each element but doest'n return anyrthing 
// map() performs  a transformation and return a new array.

/* const nums = [1 , 2 , 3];

const doubled = nums.map(n => n * 2);
nums.forEach(n=> console.log(n*2)); */


// what are some common methods in javaScript
// i) push() it works adding new array item in the end of array.
// ii) pop() it works deleting item in the eend of erray
// iii) shift() it works delete array item at the starting 
// iv) unshift() it add the new element in the starting array 
// v) map() perform a operation in each element and then create a new array 
// vi) filter() it selected the item according to to the condition
// vii) reduce() it converts the array into one value.
// viii) forEach() for  perform a operation for each element but doesn't return anything.
// ix) includes() checks if the value exists
// x)  find() first element that matches condition.


/* const numbers = [2,3,4,5,6];
const double = numbers.map((num)=>num*2);
console.log (double);
const even = numbers.filter((num)=>num%2===0)
console.log(even)
const eve = numbers.filter((num)=>num<4)
console.log(eve)
const total = numbers.reduce((sum,num)=>sum+num,0)
console.log(total) */

//reverse a string 
/* let num = "hello";
let reverse = num.split('').reverse().join('');
console.log(reverse); */

/* function reverse(str){
   let reve = '';
   for(let i=str.length-1;i>=0;i--){
    reve +=str[i]; */
/* 
   }
   return reve;
}
console.log(reverse("abhishek"))


// count vowels in a string 
function count(str){
  let count = 0;
  const vowels = "aeiouAeiou";
  for (let char of str){
    if(vowels.includes(char)){
        count++;
    }
  }
  return count;
}
console.log(count("abhAAishek"))


//check is dtring is a palindrom or not 

function palindrom(str){
    let check = str.split('').reverse().join('');
    return str === check;
}
console.log(palindrom("madam"))

// find the max number in an array
let arr = [1,2,3,4,5,6,7,8,9];
let arr1 = [12,4,5,78,4,1];
let maxi = Math.max(...arr,...arr1);
console.log(maxi)

//find maximum num in an array without using javascript methods
let arr_1 = [1,2,3,4,5,6,7,8,9];
let max = arr_1[0];
for(let num of arr_1){
    if(num>max){
        max = num;
    }
}
console.log(max)

//remove duplicated fronm an array
let arr_2 = [6,7,8,9,1,2,3,4,5,6,7,8,9];
let remove = [...new Set(arr_2)
]
console.log(remove)

//check if two string are anagrams
function amagram(str,str1){
   return str.split('').sort().join('')===str1.split('').sort().join('');

}
console.log(amagram('listen','silent'))

//write a function to flatten a nested array

function flatten(arr){
    let result = [ ];
    for (let item of arr){
        if (Array.isArray(item)){
            result = result.concat(flatten(item))
        }
        else{
            result.push(item)
        }
    }
    return result
}
console.log(flatten([1,[2,[3,4]],5])); */


// what will be the code output
/* console.log(1 + '1'); //11
console.log(1 - '1');// undefined
console.log('2' - true); //undefined
console.log('2' + true); // undefined */


// what is the difference between object.freeze() and object.seal()?
/* 
object freeze means it vonverts the object into immutable (unmodified).
object seal means we can't remove the property but we can change the value */
/* const user = {name: "abhishek"};
Object.seal(user);
user.name = "rahul";
console.log(user.name) */


//how to clone an object in javascript
/* const obj = {a:1};
const clone = {...obj};
console.log(clone);
 */
/* what is the use of Object.entries/Object.keys/Object.values */
// const user = { name: "abhishek", age:23}


//what is destructuring in javaScript?
/* const objj = { naame:"abhishek", age:24};
const { naame, age} = objj;
//this is the short syntax which the object or array we assign diffrent diffrent values.
console.log(naame);
console.log(age); */