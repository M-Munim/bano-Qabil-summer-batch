




// TDZ

// console.log(a);
// let a = 30;

// greet("kifayat")
// greet("kifayat")
// greet("sana")

function greet(name) {
    console.log("hello " + name);
}

// greet("kifayat")
// greet("kifayat")
// greet("sana")

// will give u error 
// abc("kifayat")
// abc("kifayat")
// abc("sana")

let abc = function (name) {
    console.log("hello " + name);
}

// abc("kifayat")
// abc("kifayat")
// abc("sana")


let arrF = (age) => {
    // return  ("hello " + age);
    console.log("hello " + age);
}
arrF(8)






let arrFunOneLiner = (totalVal, discount) => console.log(totalVal - discount);
arrFunOneLiner(4000, 200);





(function () {
    console.log("hi");
})()



console.log("--------------------------------------")


//              0       1           2       3      4        5       6
let stdsArr = ["ali", "kamran", "ayesha", 6000, null, undefined, {}]; // 7

// console.log(typeof stds);
// console.log(stdsArr.length);
// console.log(stdsArr[2])
// console.log(stdsArr[0])

console.log(stdsArr.push("kifayat"));
console.log(stdsArr.pop());
console.log(stdsArr.indexOf("kamran"));
console.log(stdsArr.slice(1, 4));
console.log(stdsArr.splice(1, 2, "munim"));
console.log(stdsArr);