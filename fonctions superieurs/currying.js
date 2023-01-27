const somme = (a) => (b) => a + b;
const add5 = somme(5);
console.log(add5(3)); //8
console.log(add5(2)); //7

const mergeWords = string => nextString => (nextString === undefined) ? string : mergeWords(`${string} ${nextString}`);
console.log(mergeWords("Bonjour")("tout")("le")("monde")());
console.log(mergeWords("Bonjour")("tout")("le")("monde")("comment")("allez-")("vous ?")());
