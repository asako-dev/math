const btn = document.querySelector('#button');
const random = document.querySelector('#random');
const sum = document.querySelector('#sum');

btn.addEventListener('click', () => {
    const randomNumber = Math.floor(Math.random() * 100);
    if (randomNumber < 10) {
        randomNumber = '0' + randomNumber;
    }
    random.textContent = randomNumber;
    // btn.style.opacity= 0.8;
});