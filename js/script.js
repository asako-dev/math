const btn = document.querySelector('#button');
const random = document.querySelector('#random');

btn.addEventListener('click', () => {
    const randomNumber = Math.floor(Math.random() * 100);
    if (randomNumber < 10) {
        randomNumber = '0' + randomNumber;
    }
    random.textContent = randomNumber;
    
});

const btn02 = document.querySelector('#button02');
const random02 = document.querySelector('#random02');

btn02.addEventListener('click', () => {
    const randomNumber02 = Math.floor(Math.random() * 1000);
    // if (randomNumber02 < 10) {
    //     randomNumber02 = '00' + randomNumber02;
    // }
    if (randomNumber02 < 100) {
            randomNumber02 = '0' + randomNumber02;
    }
    random02.textContent = randomNumber02;
    
});