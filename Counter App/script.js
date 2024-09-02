const decrementbtn = document.getElementById("decrementbtn");
const incrementbtn = document.getElementById("incrementbtn");
const resetbtn = document.getElementById("resetbtn");
const display = document.getElementById("display");

decrementbtn.addEventListener("click", () => {
  const value = Number(display.innerText);
  display.innerText = value - 1;
});

incrementbtn.addEventListener("click", () => {
    const value = Number(display.innerText)
    display.innerText = value + 1;
})

resetbtn.addEventListener("click", () => {
    display.innerText = 0;
});