const noButton = document.getElementById('no-btn');
const container = document.querySelector('.container');

noButton.addEventListener('mouseover', moveNoButton);

function moveNoButton() {
    const containerRect = container.getBoundingClientRect();
    const noButtonRect = noButton.getBoundingClientRect();

    const maxX = containerRect.width - noButtonRect.width;
    const maxY = containerRect.height - noButtonRect.height;

    let randomX, randomY;
    
    // Ensure the new position is different from the current one
    do {
        randomX = Math.floor(Math.random() * maxX);
        randomY = Math.floor(Math.random() * maxY);
    } while (
        Math.abs(randomX - noButtonRect.left) < noButtonRect.width &&
        Math.abs(randomY - noButtonRect.top) < noButtonRect.height
    );

    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
}

document.getElementById('yes-btn').addEventListener('click', function() {
    container.innerHTML = `<h1>I knew we were meant to be soulmates🥹</h1>`;
});
