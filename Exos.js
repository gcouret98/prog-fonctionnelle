'use strict';
document.body.innerHTML = '';

//Ex1
const myPutStr = function myPutStr(a) {
  if (typeof a == "number") {
    return 'Et pourquoi pas 42 ?';
  }
}

//Ex2
const computeSurfaceM2 = function computeSurfaceM2(long, larg) {
  return long * larg;
}

//Ex3
const detectMyAgeByNight = function detectMyAgeByNight(age) {
  if (age < 0) return 'Pas possible';
  if (age <= 17) return `Vous ne pouvez pas entrez vous n’êtes pas majeur vous avez${age}`;
  if (age < 42) return `Vous pouvez entrer vous êtes majeur vous avez ${age}`;

  return 'vous devenez le patron de la boite !'
}

const createMyButton = function createMyButton(callback) {
  const btn = document.createElement("button");
  btn.textContent = "Click me";
  btn.addEventListener('click', function () {
    callback(detectMyAgeByNight(45));
  })
  return btn;
}

//document.body.appendChild(createMyButton(function (age){
//    console.log(age);
//}));

//Ex4
const matrice = [
  [1, 1, 1, 1, 1],
  [0, 1, 0, 1, 0],
  [1, 0, 0, 1, 1]
];
const body = document.body;
const matrixGenerator = function (input) {
  const tbl = document.createElement('table');
  tbl.style.width = '100px';
  tbl.style.border = '1px solid black';

  for (let i = 0; i < input.length; i++) {
    const tr = tbl.insertRow();
    for (let j = 0; j < input[i].length; j++) {
      const td = tr.insertCell();
      td.textContent = `${input[i][j]}`;
      td.style.border = '1px solid black';
    }
  }
  return tbl;
}

//body.appendChild(matrixGenerator(matrice));

//Ex5
const displayTime = function displayTime(callback) {
  setInterval(function (params) {
    callback(new Date().toLocaleTimeString("fr-FR"))
  }, 1000)
}

//displayTime(function(time) {
//    console.log(time);
//});


//Ex6
const MyElementGenerator = function MyElementGenerator(balise, content = null, css) {
  const el = document.createElement(balise);
  el.textContent = !!content ? content : null;

  //Rajouter les propriétés css
  Object.assign(el.style, css);

  return el;
}

//console.log(MyElementGenerator('span', 'test', {
//    color: "red",
//    width: '23px'
//}));

//Ex7
const fiboNieme = function fiboNieme(niemeElt) {
  if (niemeElt <= 1)
    return 0
  if (niemeElt == 2)
    return 1
  return fiboNieme(niemeElt - 1) + fiboNieme(niemeElt - 2)
}

const tableFibo = function tableFibo(nbElt) {
  return Array(nbElt)
    .fill("")
    .map(function (elt, idx) {
      return fiboNieme(idx + 1)
    })
    .reverse()
  // let myArrayFibo = []
  // for (let i = 1; i <= nbElt; i++) {
  //   myArrayFibo.push(fiboNieme(i))
  // }
  // return(myArrayFibo.reverse())
}

const sumFibo = function sumFibo(arrayFibo) {
  return arrayFibo.reduce((partialSum, a) => partialSum + a, 0);
}

console.log(tableFibo(10))
console.log(sumFibo(tableFibo(10)))
