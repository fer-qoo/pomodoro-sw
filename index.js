const duration = 25 * 60; // duración en segundos
let remaining = duration;
let interval = null;

const display = document.getElementById('timer');
const startBtn = document.getElementById('start');
const resetBtn = document.getElementById('reset');

function updateDisplay() {
    const minutes = String(Math.floor(remaining / 60)).padStart(2, '0');
    const seconds = String(remaining % 60).padStart(2, '0');
    display.textContent = `${minutes}:${seconds}`;
}

function start() {
    if (interval) return;
    interval = setInterval(() => {
        remaining--;
        updateDisplay();
        if (remaining <= 0) {
            clearInterval(interval);
            interval = null;
            remaining = duration;
            alert('¡Tiempo terminado!');
            updateDisplay();
        }
    }, 1000);
}

function reset() {
    clearInterval(interval);
    interval = null;
    remaining = duration;
    updateDisplay();
}

startBtn.addEventListener('click', start);
resetBtn.addEventListener('click', reset);

updateDisplay();
