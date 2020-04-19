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


const scale = document.getElementById('mood');
const form = scale.parentNode;
const emoji = scale.nextElementSibling;

let value;

function updateVal() {
    const newval = +scale.value;

    form.style.setProperty('--val', value = newval);
    emoji.textContent = emotions[+value]

    return false;
};

updateVal();

addEventListener('change', updateVal);
addEventListener('input', updateVal);