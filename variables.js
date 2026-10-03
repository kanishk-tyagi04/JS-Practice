var n=5;
console.log(n);

var n=23; //Reassignment allowed
console.log(n);

let b=101;
console.log(b);
// let b = 24 (redeclaration is not allowed)
b=45; //can assign new values
console.log(b);

const k = 600;
console.log (k);

// can not redeclare or assign
//string
let str = "hello, world";
console.log(str);

let bool=true;
if(bool===true){
    console.log("happy");
}
let notAssigned;
console.log(notAssigned);

let obj = {
    name: "Kanishk",
    age: 22,
    gender: "Male"
};
console.log(obj);
//'let' is block-scoped, while 'var' is function-scoped.

