document.getElementById("unique").onclick = function() { magic(); };
document.getElementById("unique").addEventListener("click", magic);

// The onload event handler
// window.onload = function() {}

document.addEventListener("DOMContentLoaded", (e) => {
    console.log(e);
});

function triggerSomething() {
    console.dir(event.target);
}