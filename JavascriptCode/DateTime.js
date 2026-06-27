let date = new Date();

// console.log(date);

// console.log(date.getDate());

// console.log(date.getDay()); 

// console.log(date.getFullYear());

// console.log(date.getHours());

// console.log(date.getMilliseconds());

// console.log(date.getMinutes());

// console.log(date.getMonth());

// console.log(date.getSeconds());


// console.log(date.toDateString());

// console.log(date.toISOString());

// console.log(date.toJSON());

// console.log(date.toLocaleDateString());

// console.log(date.toLocaleString());

let date1=new Date ();
console.log(date1.toLocaleString('en-US', { timeZone: 'America/New_York' }));

console.log(date1.toLocaleDateString('default', { timeZone: 'Asia/Kolkata' }));

console.log(date1.getDay()+1);

console.log(`Today is ${date1.toLocaleDateString()} and the time is ${date1.toLocaleTimeString()}`);

console.log(`Today is ${date1.toLocaleDateString('default', { timeZone: 'Asia/Kolkata' })} and the time is ${date1.toLocaleTimeString('default', { timeZone: 'Asia/Kolkata' })}`);

console.log(date1.toLocaleTimeString('default', { timeZone: 'Asia/Kolkata' }));

console.log(date1.getMilliseconds());
console.log(date1.toString());