function numCheck() {
    message("Number: " + !isNaN(event.key));
    return !isNaN(event.key);
}
function numCheck2() {
    message("Not a number: " + isNaN(event.key));
    return isNaN(event.key);
}
function message(m) {
    document.getElementById('wrapper').innerHTML = m;
}