'use strict';

const gridGenerator = function gridGenerator(xAxis, yAxis) {
  const table = document.createElement('table');

  for (let i = 0; i <= xAxis; i += 1) {
    const row = table.insertRow(0);

    for (let j = 0; j <= yAxis; j += 1) {
      const column = row.insertCell(0);

      column.width = 50;
      column.height = 50;
      column.bgColor = randomColor(column);
    }
  }

  return table;
};

const getRandomColor = function getRandomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const randomColor = function randomColor(column) {
  const randomTimer = (Math.random() * (2000 - 1000) + 1000);

  column.bgColor = getRandomColor();

  setTimeout(() => randomColor(column), randomTimer);
};

document.body.appendChild(gridGenerator(4, 4));