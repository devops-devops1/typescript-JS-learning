




let o = { x: 1,  y: 2 , z: 3 }; 

let a = [ ], i=0;

for(a[i++] in o ) ;;




const o = { x: 1,  y: 2 , z: 3 }; // Object {}

const a = []; // Array []

const string = 'toto' // String '' 

const number = 5 // Number

const bool = true // Boolean

const somefunction = () => {} // Function

const map = new Map([[key,value],[key2,value2]])

const set = new Set([1,2,3])

const input = 'const func = ()=> { call http... }; func();'

// JSON: string avec une structure JSON => parse => Object Javascript // Array Javascript
JSON.stringify({1: true}) // {"1": true} - conserve boolean number string, object, array /// function enlevee

JSON.stringify({method: () => {}})  // {}

eval(input)

for(const prop in o ) {
    a.push(o[prop]);
};

// a = [1,2,3]

for(const prop in o ) {
    a.push(prop);
};

// a = ['x','y','z']

++n;
a[i++] = 0;
a[++i] = 99;
n++;

interface IPerson {
    name: string;
}


class Person implements IPerson {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}

const personne = new Person(name, age)

const PersonFactory = (name, age) => {
    return {
        name,
        age
    }
}

const personne2 = PersonFactory(name, age)

