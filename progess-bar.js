'use strict';
document.body.innerHTML = '';

function drawBar(sum, nbr) {
    const percent = (nbr / sum) * 100;

    const progressBar = document.createElement("div");
    progressBar.setAttribute('id', 'bar-container');
    progressBar.style.width = '100%';
    progressBar.style.height = '20px';
    progressBar.style.backgroundColor = '#ddd';

    const filledDiv = document.createElement("div");
    filledDiv.style.width = `${percent}%`;
    filledDiv.style.height = '100%';
    filledDiv.style.backgroundColor = '#4CAF50';
    progressBar.appendChild(filledDiv);

    return progressBar;
}

const bar = drawBar(100, 70);
const container = document.getElementById('bar-container');
document.body.appendChild(bar);
