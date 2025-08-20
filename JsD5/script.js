// // // DOM
// // // document.body.style.backgroundColor = "lightblue"; 
// // // document.body.style.color = "green"; 
// // // document.body.innerHTML += "<h2>Welcome to JavaScript DOM!</h2>"; 


// // let heading = document.getElementById("para");

// // heading.innerText = "hi changed"
// // heading.style.color = "yellow"
// // heading.style.fontSize = "30px"

// // console.log(heading);
// // console.log(heading.innerText);
// // console.log(heading.getAttribute("class"));
// // 

// let images = document.getElementsByClassName("image");

// console.log(images[1].getAttribute("src"));
// images[1].setAttribute("alt", "this is an image");

//  let date = new Date();
// let aikVar = document.getElementById("myEmptyul");

// let newElem = document.createElement("li");
// newElem.innerText = date;

// aikVar.appendChild(newElem);




let form = document.getElementById("myForm");
let errorMessage = document.getElementById("error-message");

// Adding submit event listener
form.addEventListener("submit", function (event) {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if (name === "" || email === "") {
        errorMessage.innerText = "All fields are required!";
        event.preventDefault(); 		// Prevent form submission 
    } else {
        alert("Form submitted successfully!");
    }
});
