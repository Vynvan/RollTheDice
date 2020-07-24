//Function to get the random number
let RollTheDice = () => {
    let value = Math.random() * 5 + 1;
    value = Math.round(value);
    return value;
};

//App main function
let pips = document.getElementById('pips');
let button = document.getElementById('roll');
button.addEventListener('click', () => {
    pips.innerHTML = RollTheDice();
});

//Serviceworker registration
if('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
        .then(reg => {
            console.log('Registered! ', reg);
        }).catch(err => {
            console.log('Registration failed: ', err);
        });
    });
};

//Catch the BeforeInstall prompt
let biPrompt;
window.addEventListener('beforeinstallprompt', event => {
    event.preventDefault();
    biPrompt = event;
});

//Configure the "Add to homescreen"-button to use the BeforeInstall prompt if it exists
let ibtn = document.getElementById('installBtn');
ibtn.addEventListener('click', () => {
    if(typeof(biPrompt) !== 'undefined') {
        biPrompt.prompt();
        biPrompt.userChoice.then((choiceResult) => {
            if(choiceResult.outcome === 'accepted') {
                console.log('Added to homescreen');
        }   
            biPrompt = null;
        })
    }
});