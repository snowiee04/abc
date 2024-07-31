const noButton = document.getElementById('no-btn');
const container = document.querySelector('.container');

noButton.addEventListener('mouseover', moveNoButton);

function moveNoButton() {
    const containerRect = container.getBoundingClientRect();
    const noButtonRect = noButton.getBoundingClientRect();

    const maxX = containerRect.width - noButtonRect.width;
    const maxY = containerRect.height - noButtonRect.height;

    let randomX = Math.random() * maxX;
    let randomY = Math.random() * maxY;

    randomX += 30; // Adjust offset as necessary
    randomY += 30; // Adjust offset as necessary

    randomX = Math.min(randomX, maxX);
    randomY = Math.min(randomY, maxY);

    noButton.style.position = 'absolute';
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
}

document.getElementById('yes-btn').addEventListener('click', function() {
    container.innerHTML = `<h1>I knew we were meant to be soulmates🥹</h1>`;
});


document.getElementById('yes-btn').addEventListener('click', function() {
    container.innerHTML = `<h1>I knew we were meant to be soulmates🥹</h1>`;
});
