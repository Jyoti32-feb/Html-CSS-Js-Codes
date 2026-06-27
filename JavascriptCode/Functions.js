function check(username , validation){
    if(!validation){
        console.log("enter valid value :")
        return;
    }
    console.log(`hey , ${username} is logged in : ${validation}`);
};


check( "jyoti" ,);

const cal=function(num1,num2){
    return num1+num2;
};
console.log(cal(2,3));

function calculator(...num){
    return num;
}
console.log(calculator(1100,1200,13000));

const obj={
    name :"jyoti",
    email : "abc@gmail.com"
};

function print(getanyobj){
    return getanyobj;
};
//console.log(print(obj));
console.log(print({name :"yogesh",lastname:"Pathade"}));


function printArray(getArray){
    return getArray;
}
const arr=[{name :"mauli ",lastname :"Pathade "},100, 70];
//console.log(printArray(arr));

console.log(printArray([1,2,3,4,5]));

function one(){
    const username ="jyoti";
    function two(){
        const website=" google";
        console.log(username + website);

    }
    //console.log(website);//scoping problem 
    two();
}
one();

greet();
function greet (){
    console.log("hey ...welcome to google !");
}

//greettwo();// not allowed in case of function expression
const greettwo=function(){
    console.log("hey .. how are you");
}
greettwo()


const calci=function(username){
    //console.log(`hey ${this.username}`);// this can not used inside the function
};
calci("jyoti");

const user={
    name :"jyoti",
    email :"abc@gmail.com",
    welcomemess:function(){
        console.log(`hey ${this.name}, how are you `);// used for current object reference
    }
}
user.welcomemess();

const chai=(num1, num2)=>(num1+num2);

console.log(chai(5,7));


const cal1 = () => ({
    name: "jyoti",

    mess: function () {
        console.log(`Hey new user entered ${this.name}`);
    }
});




console.log(cal1.name);//print  the function name

const anyobject=cal1();
anyobject.mess();
console.log(anyobject.name);

const chaiaurcode=function(){
    console.log(`welcome to our website `);
}();

((name)=>{
    console.log(`chatting with ai...${name}`);
})("chatgpt");
