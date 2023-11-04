// let message = document.getElementById("coding");
// console.log(message);

// let user = document.getElementsByName("user");
// console.log(user);
// let heading = document.getElementsByTagName("h1");
// console.log(heading);
// let head = document.getElementsByClassName("head");
// console.log(head);
// const cont = document.getElementById("container");
// console.log(cont);
// let query = document.querySelectorAll(".head");
// console.log(query);

// let msg = document.querySelectorAll("div, h1");
// console.log(msg);
// let text = document.querySelectorAll(". wlcm");
// console.log(text.parentNode);


// let parent = document.querySelector(".title");
// console.log(parent.childNodes);

// let div = document.createElement("div");
// div.innerHTML = "<p> Welcome to My Page </P>";

// document.body.appendChild(div);
// div .className = "class";
// console.log(div);\


let nav = document.getElementById("nav")

let list =document.createElement("li");
list.innerHTML = "Contacts";
nav.appendChild(list);

let add = document.createElement("li");
add.innerHTML = "Services";
nav.appendChild(add);

// console.log(nav.textContent);
//  nav.insertAdjacentHTML("afterbegin ","<li>Appoint</li>");
 

//  nav.replaceChild("okay", "Home");
