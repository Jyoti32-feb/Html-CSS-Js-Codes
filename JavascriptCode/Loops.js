const arr=[1,2,3,4,5];
for (const element of arr) {
    console.log(element);
};

const myarr=[{name:"jyoti",email:"abc@gmail.com"},{id:101,pass:1212121}];

for(const ele of myarr){
    console.log(ele);
}

const map=new Map();
map.set("IN","India");
map.set("USA","United States Of America");
map.set("UK","United Kingdom");
map.set("Fr","France");
map.set("IN","India");
for(const val of map){
    console.log(val);

}

const obj={
    name : "jyoti",
    email :"abc@gmail.com",
    id:101,
    pass :121212121
}

for(const key in obj){
    console.log(` ${key} : ${obj[key]}`);
}

// arr.forEach((val)=>{
//     console.log(val);
// })

const cal=function(item){
    console.log(item);
}

arr.forEach(cal);


map.forEach((key , value)=>{
    console.log(`${key}=>${value}`);
})