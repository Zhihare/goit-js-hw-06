let counterValue = 0;
const el = document.getElementById("value");
const plus = document.querySelector('[data-action="increment"]');
const minus = document.querySelector('[data-action= "decrement"]');


plus.addEventListener("click", (event) => {
    counterValue += 1;
    el.textContent = counterValue;
});

minus.addEventListener("click", (event) => {
    counterValue -= 1;
    el.textContent = counterValue;
});

