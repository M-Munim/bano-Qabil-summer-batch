// let userAge = 18;
let userAge = Number(prompt("Enter your age"));


if (userAge >= 18) {
    console.log("you can drive");
}else{
    console.log("you can't drive");
}

let res = userAge >= 18 ? "you can drive" : "you can't drive";
console.log(res);
