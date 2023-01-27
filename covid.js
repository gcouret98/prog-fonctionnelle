class Person {
    constructor(name, age, infected) {
        this.name = name;
        this.age = age;
        this.infected = infected;
    }
}

class Group {
    constructor(people) {
        this.people = people;
    }

    spreadVirus() {
        for (let person of this.people) {
            if (person.infected) {
                for (let otherPerson of this.people) {
                    if (!otherPerson.infected) {
                        otherPerson.infected = true;
                    }
                }
                break;
            }
        }
    }
}

class Tree {
    constructor(root) {
        this.root = root;
    }

    spreadVirus() {
        let queue = [this.root];
        while (queue.length > 0) {
            let current = queue.shift();
            if (current instanceof Group) {
                current.spreadVirus();
                queue = queue.concat(current.people);
            }
        }
    }
}

let person1 = new Person("Person 1", 30, true);
let person2 = new Person("Person 2", 40, false);
let person3 = new Person("Person 3", 50, false);
let group1 = new Group([person1, person2]);
let group2 = new Group([person3, group1]);
let tree = new Tree(group2);
tree.spreadVirus();
console.log(person2.infected); // true
console.log(person3.infected); // true
