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

const nums = [1 , 2 , 3];

const doubled = nums.map(n => n * 2);
nums.forEach(n=> console.log(n*2));