// Generate random color

const randomColor = function () {
    const hex = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16 + 1)];
    }
    return color;
};

let intervalId;
const startColorChange = function () {

    if (!intervalId) {
        intervalId = setInterval(changeBgColor, 1000);
    }

    function changeBgColor() {
        document.body.style.backgroundColor = randomColor();
    }
};

const stopColorChange = function () {
    clearInterval(intervalId);
    intervalId = null;
}

document.querySelector("#start").addEventListener('click', startColorChange);
document.querySelector("#stop").addEventListener('click', stopColorChange);