const button = document.querySelector("button");
const body = document.querySelector("body");

button.onclick = function() {
    let helloworld = document.createElement("p");
    helloworld.textContent = "Hello world!";
    helloworld.classList.add("hello");
    body.appendChild(helloworld);
    console.log("Test worked!");
}