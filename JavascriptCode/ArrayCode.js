let arr=[1,2,3,4,5,"hello",true,false,null,undefined,NaN];

// console.log(arr);

// console.log(arr.length);

// console.log(arr[0]);

// console.log(arr[arr.length-1]);
// console.log(arr.__proto__);

let myarr=[1,2,3,4,5,6,7,8,9,10];

// myarr.forEach((value,index)=>{
//     console.log(`The value at index ${index} is ${value}`);
// }
// );

// console.log(myarr.map((value,index)=>{
//     return value*2;
// }));

// console.log(myarr.filter((value,index)=>{
//     return value%2===0;
// }));

// console.log(myarr.reduce((accumulator,currentValue)=>{
//     return accumulator+currentValue;
// }));

// console.log(myarr.push(11));

// console.log(myarr);

// console.log(myarr.pop());
// console.log(myarr)

// console.log(myarr.unshift(0));
// console.log(myarr);

// console.log(myarr.shift());
// console.log(myarr);

// console.log("A",myarr);

// console.log(myarr.slice(0,4));
// console.log(myarr);

// console.log(myarr.splice(0,4));
// console.log(myarr);

let arr2=myarr.join();
// console.log(arr2);

// console.log(typeof(arr2));

// console.log(myarr.includes(10));
// console.log(myarr.indexOf(7));
// console.log(myarr.concat(11,12,13,14,15));
// console.log(myarr);


let arr3=["jyoti","pathade",[1,,23,32,4],[3,4,5]];
console.log(arr3[2][2]);

let arr4=arr3.flat(Infinity);
console.log(arr4);

console.log(Array.isArray("jyoti"));
console.log(Array.from("jyoti"));
console.log(Array.from({name:"jyoti"}));//

console.log(Array.of(1,2,3,"school","ice",{name :"jyoti",email:"abc@gmail.com"}));

let arr5=[12,21,23,32,22,33];
let arr6=[11,12,21,24,25,35,45,54,53];
let newarr=[...arr5,...arr6];
console.log(newarr);


