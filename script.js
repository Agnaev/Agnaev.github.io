const emotions = new Proxy([ 
    '🤬', '😡', '😠', '😦', '☹️', '🙁', '😐', '🙂', '😊', '😄', '😃', '😍'
], {
    get(target, prop){  
        const key = parseInt(prop / 10) + (prop == 0 ? 0 : 1);
        return key in target ? target[key] : target[6];
    }
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