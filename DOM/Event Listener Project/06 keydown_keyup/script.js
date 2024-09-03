let display = document.getElementById("display");

document.addEventListener("keydown", function (a) {
    display.style.color = "#FF671F";
    display.innerText = "Key " + a.key + " is Pressed";
});

document.addEventListener("keyup", function (a) {
    display.style.color = "#046A38";
    display.innerText = "Key " + a.key + " is Released";
});