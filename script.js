const startButton = document.getElementById('start-btn');
const splashScreen = document.querySelector('.splash-screen');
const container = document.querySelector('.container');
const noButton = document.getElementById('no-btn');

startButton.addEventListener('click', function() {
    splashScreen.classList.add('hidden');
    container.classList.remove('hidden');
});

noButton.addEventListener('mouseover', moveNoButton);

function moveNoButton() {
    const containerRect = container.getBoundingClientRect();
    const noButtonRect = noButton.getBoundingClientRect();

    const maxX = containerRect.width - noButtonRect.width;
    const maxY = containerRect.height - noButtonRect.height;

    let randomX = Math.random() * maxX;
    let randomY = Math.random() * maxY;

    randomX += 30;
    randomY += 30;

    randomX = Math.min(randomX, maxX);
    randomY = Math.min(randomY, maxY);

    noButton.style.position = 'absolute';
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
}

document.getElementById('yes-btn').addEventListener('click', function() {
    container.innerHTML = `<h1>I knew we were meant to be soulmates🥹</h1>`;
});


