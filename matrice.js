'use strict';
document.body.innerHTML = '';

function gridGenerator(xAxis, yAxis) {
  // Générer une grille vide de dimensions xAxis * yAxis
  const grid = document.createElement("table");
  grid.setAttribute('id', 'grid-container');
  grid.setAttribute("border", "1");
  for (let i = 0; i < yAxis; i++) {
    const row = grid.insertRow();
    for (let j = 0; j < xAxis; j++) {
      const cell = row.insertCell();
      const delay = Math.random() * 1000 + 1000; // Nombre aléatoire compris entre 1 et 2 secondes
      setInterval(function () {
        cell.style.backgroundColor = getRandomColor();
      }, delay);
    }
  }

  return grid;
}

function getRandomColor() {
  // Générer une couleur aléatoire
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const grid = gridGenerator(10, 10); // Générer une grille 10 x 10

// Ajouter la grille à un élément de la page HTML
const container = document.getElementById("grid-container");
document.body.appendChild(grid);