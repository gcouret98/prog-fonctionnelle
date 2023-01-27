const datas = [{
    'name': 'Hello',
    'tree': [{
        'name': 'Cyril'
    }],
}, {
    'name': 'Bonjour',
    'tree': [{
        'name': 'Elies',
        'tree': [{
            'name': 'David'
        }, {
            'name': 'Tutu',
            'tree': [{
                'name': 'Toto'
            }]
        }]
    }]
}];

const tree = (datas, spaces = ' ') => {
    spaces += '  '

    datas.forEach(data => {
        displayTree(data.name, spaces)

        if (data.tree) {
            tree(data.tree, spaces)
        }
    })
}

const displayTree = (name, spaces) => console.log(`${spaces}|-- ${name}`)

tree(datas)

