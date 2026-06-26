const name="jyoti";
const age=25;
const isActive="active";

console.log(`hey..my name is ${name} and my age is ${age} and my status is ${isActive}`);

let str=new String("hello");
console.log(str.toUpperCase());
console.log(str.slice(-5.-1));

console.log(str.substring(0,3));

console.log(str.__proto__);

console.log(str.charAt(0));

console.log(str.charCodeAt(0));

console.log(str.concat(" world"));

console.log(str.endsWith("lo"));

console.log(str.includes("lo"));

console.log(str.indexOf("l"));

console.log(str.lastIndexOf("l"));

console.log(str.length);

let str1="hello";
console.log(str1.repeat(3));

console.log(str1.replace("h","H"));

console.log(str1.search("e"));

console.log(str1.split(""));

console.log(str1.startsWith("h"));

let str2="   hello   ";
console.log(str2.trim());

console.log(str2.trimStart());

console.log(str2.trimEnd());

console.log(str1===str2);
console.log(str===str1);
console.log(str==str1);

// console.log(str1.equals(str2));

//console.log(str.equals(str1));//error

let str3=new String("hello");

console.log(str===str3);
