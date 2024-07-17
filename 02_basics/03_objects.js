// singleton
// Object.create
// object literals

const mysym=Symbol("key1")

const JsUser={
    name:"Deep",
    "full name":"Deep Joshi",
    [mysym]:"mykey1",
    age:18,
    location:"Jaipur",
    email:"deep@google.com",
    isLoggedIn:false,
    lastloginDays:["Monday","Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mysym])

JsUser.email="deep123@gmail.com"
// Object.freeze(JsUser)
JsUser.email="deep@microsoft.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello js user");
}

JsUser.greetingTwo = function(){
    console.log(`hello JS user, ${this.name}`);
}

console.log(JsUser.greeting()); 
console.log(JsUser.greetingTwo()); 
