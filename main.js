var RollTheDice = () => {
    var value = Math.random() * 5 + 1;
    value = Math.round(value);
    return value;
};

var pips = document.getElementById('pips');
var button = document.getElementById('roll');

button.addEventListener('click', () => {
    pips.innerHTML = RollTheDice();
});

//Serviceworker registration
if('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js')
        .then(reg => {
            console.log('Registered! ', reg);
        }).catch(err => {
            console.log('Registration failed: ', err);
        });
    });
};