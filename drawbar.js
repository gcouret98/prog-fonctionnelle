const elGenerator = function elGenerator(params) {
    const el = document.createElement(params.el);
    const keys = Object.keys(params);

    for (let i = 0; i <= keys.length; i += 1) {
        el.style[keys[i]] = params[keys[i]];
    }

    return el;
}

const drawBar = function drawBar(sum, segment) {
    const el1 = elGenerator({
        el: 'div',
        width: '100%',
        height: '30px',
        border: '1px solid black',
        display: 'flex'
    });

    const el2 = elGenerator({
        el: 'div',
        width: ((segment * 100) / sum) + "%",
        height: '30px',
        backgroundColor: 'green'
    });

    const el3 = elGenerator({
        el: 'div',
        width: 100 - ((segment * 100) / sum) + "%",
        height: '100%',
        backgroundColor: 'white'
    });

    el1.appendChild(el2);
    el1.appendChild(el3);

    return el1;
}

document.body.appendChild(drawBar(1245, 722));
document.body.appendChild(drawBar(100, 20));
document.body.appendChild(drawBar(45, 22));