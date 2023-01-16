class DrawBar {
    constructor(sum, segment) {
        this.sum = sum;
        this.segment = segment;
    }

    draw() {
        const percent = (this.segment / this.sum) * 100;

        const progressBar = document.createElement("div");
        progressBar.style.width = '100%';
        progressBar.style.height = '20px';
        progressBar.style.backgroundColor = '#ddd';

        const filledDiv = document.createElement("div");
        filledDiv.style.width = percent;
        filledDiv.style.height = '100%';
        filledDiv.style.backgroundColor = '#4CAF50';
        progressBar.appendChild(filledDiv);

        return progressBar;
    }
}
const bar = new DrawBar(100, 90).draw();
const container = document.getElementById('bar-container');
container.appendChild(bar);