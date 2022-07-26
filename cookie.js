function setCookie(e) {
    document.cookie = "name=" + e.value + ";";
}

function sayHi(key) {
    let name = getCookie(key);
    document.getElementById("hi").innerHTML = "Hi " + name;
}

function getCookie(key) {
    let cookie = decodeURIComponent(document.cookie);
    let cookieList = cookie.split(";");
    for (let i = 0; i < cookieList.length; i++) {
        let c = cookieList[i];
        if (c.charAt(0) == " ") {
            c = c.trim();
        }
    if (c.startsWith(key)) {
        console.log("hi" + c);
        return c.substring(key.length + 1, c.length);
        }
    }
}