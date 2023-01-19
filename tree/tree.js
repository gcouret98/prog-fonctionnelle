const datas = [
  {
    name: "Hello",
    tree: [{
      name: "Cyril"
    }],
  }, {
    name: "Bonjour",
    tree: [{
      name: "Elies",
      tree: [{
        name: "David"
      }, {
        name: "Tutu",
        tree: [{
          name: "Toto"
        }]
      }]
    }]
  }
];

function recursive(array, index, ul) {
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(array[index].name));
  if (array[index].hasOwnProperty("tree")) {
    let ulChild = document.createElement("ul");
    let tree = recursive(array[index].tree, 0, ulChild);
    li.appendChild(tree);
  }
  ul.appendChild(li);

  if (index == array.length - 1)
    return ul;
  else {
    return recursive(array, index + 1, ul);
  }
}

let ul = document.createElement("ul");
let tree = recursive(datas, 0, ul);
document.body.appendChild(tree);