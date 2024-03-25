let val;

val = document;
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;

// console.log(val);

const myForm = document.getElementById("my-form");
// console.log(document.querySelectorAll(".container"));
// console.log(document.querySelector("h1"));
// console.log(document.querySelector(".items"));
// console.log(document.querySelector("ul"));
// console.log(document.getElementsByTagName("li")[1]);
// console.log(document.getElementsByClassName('item'));
// console.log(document.querySelectorAll(".item"));

const ul = document.querySelector(".items");

// ul.remove();

ul.lastElementChild.remove();

ul.firstElementChild.innerText = "Hello";

ul.children[1].innerText = "The Bridge";

ul.lastElementChild.innerHTML = "<h1>Hello</h1>";

const contenedor = document.querySelector(".container");

contenedor.innerHTML =
  "<p class='text'>hola</p> <span>Esto es un span</span> <ul>  <li>Yey</li> <li>Yey2</li> </ul>";

const btn = document.querySelector(".btn");
btn.style.background = "red";
// btn.classList.remove("btn")
// btn.classList.add("text2")

function onSubmit(e) {
  e.preventDefault();
  document.getElementById("my-form").style.background = "#ccc";
  ul.lastElementChild.innerHTML = "<h1>Changed</h1>";
btn.setAttribute("disabled","")
}

btn.addEventListener("click",onSubmit)

let listaSinOrden = document.createElement("ul");

console.log(document.body);
document.body.children[0].appendChild(listaSinOrden)
// console.log(document.body.children.length);

let elemento1Lista = document.createElement("li");
elemento1Lista.textContent = "It's funny";

let elemento2Lista = document.createElement("li");
elemento2Lista.textContent = "It's Awesome";

listaSinOrden.appendChild(elemento1Lista)
listaSinOrden.appendChild(elemento2Lista)

const btn2 = document.querySelector("button");

btn2.setAttribute("name", "helloButton");
btn2.setAttribute("disabled", "");




