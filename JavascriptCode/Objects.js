

let mysym=Symbol("key");
let jsuser={
    name : "jyoti",
    "fullname ":"jyotiPathade",
    [mysym] :{lastname :"pathade"},
    email : "abc@gmail.com",
    pass : 123242,
    branch : "computer science",
    
};

// console.log(jsuser);

// console.log(jsuser.name);

// console.log(jsuser["fullname "]);

// console.log(jsuser[mysym]);

// console.log(typeof jsuser[mysym]);

jsuser.pass=11111;
console.log(jsuser);

// console.log(Object.freeze(jsuser));

// jsuser.name="sakshi";
// console.log(jsuser);

// jsuser.greeting=function(){
//     console.log("hello , how are you ? ");
// };

// console.log(jsuser.greeting());

// jsuser.greetingone=function(){
//     console.log(`hey my name is ${this.name}`)
// }

// jsuser.greetingone();

// console.log(jsuser[mysym]);

// console.log(jsuser[mysym].lastname);

//const myobj=new Object()//singleton object

const myobj={
    name : "yogesh",
    pass :1212123,
    fullname :{
        username :{
            firstname :"yogesh",
            lastname :"pathade"
        }
    },
    email :"yogesh@google.com"
};

console.log(myobj.fullname.username.lastname)

const myobj1={a :1 , b : 2};
const myobj2={c :3 , d : 4};


// let myobj3=Object.assign({},myobj1,myobj2);
// console.log(myobj3);

// let myobj3={...myobj1, ...myobj2};
// console.log(myobj3);

const obj={
    arr : [1,3,44,2,21],
    fun : ()=>{console.log("hey , how are you ")},
    ob : {
        name : "jyoti",
        pass :12123132
    }
};
// console.log(obj);

// console.log(Object.keys(myobj));
// console.log(Object.values(myobj));
// console.log(Object.entries(myobj));

// console.log(myobj.hasOwnProperty("email"))

const course={
    coursename : "dsa",
    price : 12222,
    courseInstructor : "jyoti pathade"
};

console.log(course);

const {courseInstructor :instructor}=course//object destructuring
console.log(instructor);
console.log(course);
