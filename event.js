window.onload = function() {
    document.getElementById("square").addEventListener("click",
    changeColor);
}

function changeColor(){
        let red = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 256);
        this.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}


// Creating new elements
function addRandomNumber(){
    let el = document.createElement("p");
    el.innerText = Math.floor(Math.random() * 100);
    document.body.appendChild(el);
}