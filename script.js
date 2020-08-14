const button = document.querySelector("button");
const body = document.querySelector("body");
const postlist = document.querySelector("ul");

button.onclick = function() {
    let helloworld = document.createElement("p");
    helloworld.textContent = "Hello world!";
    helloworld.classList.add("hello");
    body.appendChild(helloworld);
    console.log("Test worked!");
}

const posts = [
    {title: "Post One", body: "This is post one."},
    {title: "Post Two", body: "This is post two."}
];

function getPosts() {
    setTimeout(() => {
        let output = "";
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        postlist.innerHTML = output;
    }, 1000);
}

function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}

createPost({title: "Post Three", body: "This is post three."}, getPosts);

