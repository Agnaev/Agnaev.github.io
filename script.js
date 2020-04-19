const emotions = new Proxy({
    '🤬': { max: 1 },
    '😡': { max: 10 },
    '😠': { max: 20 },
    '😦': { max: 30 },
    '☹️': { max: 40 },
    '🙁': { max: 50 },
    '😐': { max: 60 },
    '🙂': { max: 70 },
    '😊': { max: 80 },
    '😄': { max: 90 },
    '😃': { max: 100 },
    '😍': { min: 100 }
}, {
    get: (target, prop) => 
        Object.entries(target).map(x => x[0])[parseInt(prop / 10) + (prop == 0 ? 0 : 1)]
})


const scale = document.querySelector('#mood');
const form = scale.closest('form');
const emoji = form.querySelector('output');

function updateValue() {
    const newval = +scale.value;

    form.style.setProperty('--val', newval);
    emoji.textContent = emotions[newval]

    return false;
};

updateValue();

addEventListener('change', updateValue);
addEventListener('input', updateValue);