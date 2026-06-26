let age=25;
// console.log("Age:", age);
// console.log("Type of Age:", typeof age);
let ageString=String (age);
// console.log("Age as String:", ageString);
// console.log("Type of Age as String:", typeof ageString);

console.log(typeof null); //object
console.log(typeof undefined); //undefined

let isActive=true;
console.log(typeof isActive); //boolean

let isActiveString=String(isActive);
console.log("isActive as String:", isActiveString);//"true"
console.log("Type of isActive as String:", typeof isActiveString);

let isActiveNumber=Number(isActive);
console.log("isActive as Number:", isActiveNumber);//1
console.log("Type of isActive as Number:", typeof isActiveNumber);

let a=null;
console.log("Value of a:", a);

let aString=String(a);
console.log("a as String:", aString);//"null"
console.log("Type of a as String:", typeof aString);

let aNumber=Number(a);
console.log("a as Number:", aNumber);//0
console.log("Type of a as Number:", typeof aNumber);

let b=undefined;
console.log("Value of b:", b);

let bString=String(b);  
console.log("b as String:", bString);//"undefined"
console.log("Type of b as String:", typeof bString);

let bNumber=Number(b);
console.log("b as Number:", bNumber);//NaN
console.log("Type of b as Number:", typeof bNumber);

let name="jyoti";
let nameNumber=Number(name);//NaN
console.log("name as Number:", nameNumber);
console.log("Type of name as Number:", typeof nameNumber);

let nameBoolean=Boolean(name);//true
console.log("name as Boolean:", nameBoolean);
console.log("Type of name as Boolean:", typeof nameBoolean);

let emptyString="";
let emptyStringBoolean=Boolean(emptyString);//false
console.log("emptyString as Boolean:", emptyStringBoolean);
console.log("Type of emptyString as Boolean:", typeof emptyStringBoolean);

let emptyStringNumber=Number(emptyString);//0
console.log("emptyString as Number:", emptyStringNumber);
console.log("Type of emptyString as Number:", typeof emptyStringNumber);

let doubleValue=3.14;
let doubleasNumber=Number(doubleValue);
console.log("doubleValue as Number:", doubleasNumber);//3.14
console.log("Type of doubleValue as Number:", typeof doubleasNumber);

let doubleasBoolean=Boolean(doubleValue);
console.log("doubleValue as Boolean:", doubleasBoolean);//true
console.log("Type of doubleValue as Boolean:", typeof doubleasBoolean);

let value=0.1;
let valueasBoolean=Boolean(value);
console.log("value as Boolean:", valueasBoolean);//true
console.log("Type of value as Boolean:", typeof valueasBoolean);

let val=0;
let valasBoolean=Boolean(val);
console.log("val as Boolean:", valasBoolean);//false
console.log("Type of val as Boolean:", typeof valasBoolean);