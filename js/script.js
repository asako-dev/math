const button = document.querySelector('#button');
const random = document.querySelector('#random');

button.addEventListener('click', () => {
    const randomNumber = Math.floor(Math.random() * 100);
    if (randomNumber < 10) {
        randomNumber = '0' + randomNumber;
    }
    random.textContent = randomNumber;
});