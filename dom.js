const ele1 = document.querySelector("h1");
const ele2 = document.querySelector("div");

ele1.innerText = "Love";
ele2.innerHTML = "<h1>Awesomeness</h1>";

console.dir(ele1);

document.getElementsByTagName("h1");

// Element click handler

function stop() {
    alert('Pls Stop');
}

// Changing the classes of an element
// Adding classes to elements

function disappear(){
    document.getElementById("shape").classList.add("hide");
}

// removing classes to elements
function change(){
    document.getElementById("shape").classList.remove("blue");
}

// Toggling classes
function changeVisibility(){
    document.getElementById("shape").classList.toggle("hide");
}

// Manipulating attributes
function changeAttr(){
    let el = document.getElementById("shape");
        el.setAttribute("style", "background-color:red;border:1px solid black");
        el.setAttribute("id", "new");
        el.setAttribute("class", "circle");
    }

