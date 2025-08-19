// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


// // for (initialization; condition; inc/dec) {
// // }

// //       0            0<10         1
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i])
// }



// let students = ["kifayat", "kamran", "ayesha", "munim"];

// for (const student of students) {
//     console.log(student);
// }




// let person = {
//     name: "Munim",
//     age: 55
// };

// for (let key in person) {
//     console.log(person[key]);
// }

// ------------------------------------------


// let student = {
//     name: "ali",
//     age: 20,
//     gender: "male",
//     isMarried: false,
//     address: {
//         city: "Lahore",
//         country: "Pakistan"
//     },
//     skills: ["html", "css", "js", "react"],
//     greet: function () {
//         console.log("hello " + this.age);
//     }
// }

// student.greet();
// student.fathername = "kifayat";
// student.age = 21
// delete student.isMarried
// console.log(student);




// let user = { name: "Ali", age: 25 };
// let { name, age } = user;

// console.log(name, age); // Ali




// -----------------------

let currDate = new Date();
console.log(currDate);
console.log(currDate.getDate());
console.log(currDate.getDay());
console.log(currDate.getTime());

// let specific = new Date(2023, 3, 28, 14, 30);
// console.log(specific);