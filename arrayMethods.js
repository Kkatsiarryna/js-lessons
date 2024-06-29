// push, pop, shift, unshift

//push()
/*const name = ["Bob", "Alex", "Igor"];
name.push("Lena", "Sveta"); // добавление эл-та в конец массива
const result = name.push("Lena", "Sveta"); // длина массива
console.log(name);
console.log(result)*/

//pop() - удаляет последний эл-т массива
/*
const name = ["Bob", "Alex", "Igor"];
name.pop();
const resultPop = name.pop(); // удаляемый эл-т
console.log(name);
console.log(resultPop);*/


//shift() - удаляет первый эл-т
/*
const names = ["Bob", "Alex", "Igor", "Victor"];
names.shift();
const shiftresult = names.shift();
console.log(names)
console.log(shiftresult)*/

/*
const arr = [];
const res = arr.shift();
console.log('res', res);
*/

//unshift - добвляет эл-то в начало массива
/*const names = ["Bob", "Alex", "Igor", "Victor"];
const unshiftedResult = names.unshift('tes1'); // длина массива
console.log(names);
console.log(unshiftedResult);*/

//reverse() - метод массива, мутабельный
/*const telephoneNumber = [1, 2, 3, 4, 5, 6];
const result = telephoneNumber.reverse();
console.log(result); // 6 5 4 3 2 1*/

//split() - метод для работы со строками
//1)
/*const str = 'ab-cd-ef';
const res = str.split("-");
console.log(res);*/

//2)
/*
const str = 'ab-cd-ef';
const res = str.split("-", 1); // сколько элементов войдет в массив
console.log(res);
*/

//3)
/*const str = 'ab-cd-ef';
const res = str.split("");
console.log(res)*/

//4)
/*const str = 'ab-cd-ef';
const res = str.split(); // получится один эл-т массива
console.log(res);*/

//test example

/*
const str = "New Test Value";
const res = str.split(" ");
console.log(res);*/


//join() - Метод массива, объдиняет в строку
/*const names = ['Alex', 'Bob', 'Ivan', 'Sasha'];

const joinResult = names.join("-");
console.log(joinResult); // Alex-Bob-Ivan-Sasha*/

/*
//2) если нет разделителя - будет запятая
const names = ['Alex', 'Bob', 'Ivan', 'Sasha'];
const res = names.join(); //Alex,Bob,Ivan,Sasha
console.log(res)*/

//3) если в условии пустая строка - объдинение без разделителя
/*
const names = ['Alex', 'Bob', 'Ivan', 'Sasha'];
const res = names.join(" "); //Alex Bob Ivan Sasha
console.log(res);*/

// question
/*const telephoneNumber = '123-456-789';

const result = telephoneNumber.split("").reverse().join("");
const result2 = [...telephoneNumber].reverse().join("");
console.log(result);
console.log(result2);*/

//concat - слить массивы
/*const arr1 = [1, 2];
const arr2 = [3, 4];
const arr3 = [5, 6];

const res = arr1.concat(arr2, arr3);
console.log(res);*/

//example2
/*
const arr1 = [1, 2];
const arr2 = [3, 4];
const arr3 = [5, 6];

const res = arr1.concat(arr2, arr3, 7, 8, 9);
console.log(res)*/

//example3
/*const arr1 = [1, 2];
const arr2 = [3, 4];

const nestedArr = [['val1', 'val2']];

const res = arr1.concat(arr2, nestedArr);
console.log(res);

console.log(res.flat(Infinity)); // раскрыть вложенность*/

//test task
/*let usersFromAPI1 = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
];

let usersFromAPI2 = [
    { id: 3, name: 'Charlie' },
    { id: 4, name: 'David' },
];

const result = usersFromAPI1.concat(usersFromAPI2); //  { id: 1, name: 'Alice' },
                                                            // { id: 2, name: 'Bob' },
                                                            // { id: 3, name: 'Charlie' },
                                                            // { id: 4, name: 'David' }

console.log(result);
const result2 = [...usersFromAPI1, usersFromAPI2]; //  { id: 1, name: 'Alice' },
                                                            // { id: 2, name: 'Bob' },
                                                            // [ { id: 3, name: 'Charlie' }, { id: 4, name: 'David' } ]

console.log(result2);*/


//forEach() - перебирает эл-ты массиваб не возвр новый массив
//forEach( functional(el, index, arr) => {})

/*const arr = [1,2,3,4,5];
let sum = 0;
arr.forEach( el => { // не работает
    sum += el;
} );
console.log(sum);*/

/*let users = [
    { id: 1, name: 'Alice', lastActive: '2023-06-01', isActive: false },
    { id: 2, name: 'Bob', lastActive: '2024-05-25', isActive: false },
    { id: 3, name: 'Charlie', lastActive: '2024-06-20', isActive: false },
];

let oneMonthAgo = new Date();

oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
//console.log(oneMonthAgo);

users.forEach(user => {
    let lastActiveDate = new Date(user.lastActive);
    //console.log(lastActiveDate)
    if (lastActiveDate > oneMonthAgo){
        user.isActive = true;
    }
})
console.log(users);*/


//indexOf() - поиск эл-та в массиве
/*const arr = [1,2,3,4,5,6,3,6,3];
const res = arr.indexOf(3);
console.log(res) // 2 (индекс)*/

/*const arr  = [1,2,3,4];
const res = arr.indexOf(5);

console.log(res); // -1 так как эл-та нет в массиве*/
 //indexOf - поиск по элементу
/*const arr = [1, 2, 3, 4, 5, 6, 3, 6, 3];
const res = arr.indexOf(3,4);
console.log(res); // 6 индекс*/


/*let allowedIPs = ['192.168.1.1', '192.168.1.2', '192.168.1.3'];
let userIP = '192.168.1.4';

if ( allowedIPs.indexOf(userIP) !== -1) {
    console.log('Access granted');
} else {
    console.log('Access denied') // эл-та нет в массиве
}*/

//lastIndexOf() -обратный порядок

/*const arr = [1, 2, 3, 4, 5, 6, 3, 6, 3];
const res = arr.lastIndexOf(3);
console.log(res); // 8 индекс*/

/*const arr = [1, 2, 3, 4, 5, 6, 3, 6, 3];
const res = arr.lastIndexOf(3,-3);
console.log(res); // 6 индекс */

//find() - найти первое совпадение по условию
/*const arr = ['abc', 'derfgf', 'afgdggdsg', 'frtrtr'];

const res = arr.find(el => {
    return el.length === 6; // найти эл-т с такой длинной
})
console.log(res)*/
/*
let usersArr = [
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com' },
    { id: 3, name: 'Charlie', email: 'charlie@example.com' },
];
function finduserById(userId){
    let user = usersArr.find( user => user.id === userId );

    if(user) {
        return user;
    } else {
        return 'User not found'
    }
}
console.log(finduserById(2));
console.log(finduserById(5));*/

//findIndex(), findLastIndex() -

/*const arr = [1,2,3,4,5];
const res = arr.findIndex( el => {
    return el%2 == 0
})
console.log(res); // 1 инжекс, эл-т 2 подошел под условие*/

/*const arr = [1,2,3,4,2];
const res = arr.findLastIndex( el => {
    return el%2 == 0
})
console.log(res); //4 индекс*/

//includes
/*let arr = [1,2,3,4,5];
const res= arr.includes(4);
const res2= arr.includes(8);
console.log(res)
console.log(res2)*/

//test value

/*let usersValues = ["user", "editor"];
let requiredRoles = ['admin', 'editor'];

function hasAccess(userRoles, requiredRoles) {
    return requiredRoles.some(role => userRoles.includes(role));
}
console.log(hasAccess(usersValues, requiredRoles)); // true
console.log(hasAccess(usersValues, ['admin'])); // false
console.log(hasAccess(usersValues, ['admin', 'guest'])); // false*/

//filter -возвращает новый массив
/*const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result); //[ 'exuberant', 'destruction', 'present' ]*/

//sort() - мутабельный

/*const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
words.sort();
console.log(words)//[ 'destruction', 'elite', 'exuberant', 'present', 'spray' ]*/

/*const numbers = [-100, 10, 25, 30, 45, 44, 1, 2, 11];
numbers.sort();
console.log(numbers); //[
                        // -100,  1, 10, 11,
                        //     2, 25, 30, 44,
                        //     45
                        // ]*/


//arr.sort()
/*const numbers = [-100, 10, 25, 30, 45, 44, 1, 2, 11];
const campareFunction = (a,b) => {
    // > 0 -a
    // = 0 не меняем
    // < 0 - b
}

const result = numbers.sort((a,b) => a -b); // a - b по возрастанию ( от большего отнимаю меньшее)
//b - a по убыванию
console.log(result)*/

/*const users = [
    {
        id: 1,
        name: 'Bob',
        isStudent: true,
    },
    {
        id: 2,
        name: 'Alex',
        isStudent: true,
    },
    {
        id: 3,
        name: 'alex',
        isStudent: true,
    },
];

const res = users.sort((a,b) => a.name.localeCompare(b.name)); // в приоритете нижний регистр
console.log(res);
const res2 = users.sort((a,b) => b.name.localeCompare(a.name)); // в приоритете верхний регистр
console.log(res2);*/

//toSorted() - иммутабельная версия метода sort

//Polyfills
/*const users1 = [
    {
        id: 1,
        name: 'Bob',
        isStudent: true,
    },
    {
        id: 2,
        name: 'Alex',
        isStudent: true,
    },
    {
        id: 3,
        name: 'Ann',
        isStudent: true,
    },
    {
        id: 4,
        name: 'Donald',
        isStudent: false,
    },
]; //["Bob", "Alex", "ann", "Donald"]

function newMap(arr, callback) {
    const result = [];

    for(let i=0; i < arr.length; i++){
        result.push(callback(arr[i])); // в callback передаем объект
    }
    return result;
}

const userANmeArr = newMap(users1, user => user.name);
console.log(userANmeArr)*/

//HOMEWORK

//push
/*let fruits = ['apple', 'banana', 'orange'];
fruits.push("peach");
console.log(fruits); //[ 'apple', 'banana', 'orange', 'peach' ]*/


//pop()
/*
const users = [
    { id: 1, name: 'Bob', isStudent: true,},
    {id: 2, name: 'Alex', isStudent: true,},
    {id: 3, name: 'Ann', isStudent: true,},
    {id: 4, name: 'Donald', isStudent: false,},
];

let lastUser = users.pop();
console.log(lastUser);
console.log(users);*/

//shift()
/*
const users = [
    { id: 1, name: 'Bob', isStudent: true,},
    {id: 2, name: 'Alex', isStudent: true,},
    {id: 3, name: 'Ann', isStudent: true,},
    {id: 4, name: 'Donald', isStudent: false,},
];

let firstUser = users.shift();
console.log(firstUser);
console.log(users);*/

//unshift():
/*const users = [
    { id: 1, name: 'Bob', isStudent: true,},
    {id: 2, name: 'Alex', isStudent: true,},
    {id: 3, name: 'Ann', isStudent: true,},
    {id: 4, name: 'Donald', isStudent: false,},
];
users.unshift({id:0, name:'Katya', isStudent: true});
console.log(users);*/

//reverse(), join(), split():
/*
const str = 'JavaScript is awesome';
let res = str.split("").reverse().join("");
console.log(res);
*/
//concat
/*const mergeArrays = (arr1, arr2) => {
    return arr1.concat(arr2);
}
console.log(mergeArrays([1, 2, 3], [4, 5, 6])); // Output: [1, 2, 3, 4, 5, 6]
console.log(mergeArrays(['apple', 'banana'], ['orange', 'kiwi'])); // Output: ["apple", "banana", "orange", "kiwi"]*/

//flat()
/*const flattenArray = (arr) => {
    return arr.flat(Infinity);
}
console.log(flattenArray([1, [2, 3], [[4], [5, 6]]])); // Output: [1, 2, 3, 4, 5, 6]
console.log(flattenArray([1, [2, [3, [4, [5]]]]])); // Output: [1, 2, 3, 4, 5]*/

//find()
/*const findFirstElement = (arr, condition) => {
    return arr.find(condition);
}
let numbers = [10, 20, 30, 40, 50]
let firstNumberGreaterThan25 = findFirstElement( numbers,  num => num > 25);
console.log(firstNumberGreaterThan25);
let fruits =  ['apple', 'orange', 'banana'];
let firstFruitStartingWithO = findFirstElement(fruits, fruit => fruit.startsWith('o'));
console.log(firstFruitStartingWithO);*/

//filter()
/*const filterGreaterThan = (arr, value) => {
    return arr.filter( item  => item > value);
}
let numbers1 = [10, 20, 30, 40, 50];
let numbers2 = [5, 15, 25, 35, 45];
console.log(filterGreaterThan(numbers1, 25)); // Output: [30, 40, 50]
console.log(filterGreaterThan(numbers2, 20)); // Output: [25, 35, 45]*/

//sort()
/*const sortAlphabeticallyByProperty = (arr, condition) => {
    return arr.sort((a, b) => a[condition].localeCompare(b[condition]));
}

let people = [
    { name: 'John', age: 30 },
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 35 },
];

console.log(sortAlphabeticallyByProperty(people, 'name')); // [ { name: 'Alice', age: 25 },{ name: 'Bob', age: 35 },{ name: 'John', age: 30 }]*/


/*const sortDescending = (arr) => {
    return arr.sort((a, b) => b - a);
}
let numbers = [5, 2, 8, 1, 4];
console.log(sortDescending(numbers)); // Output: [8, 5, 4, 2, 1]*/

/*
//изменение объекта
let data = [
    { value: 1, name: 'Option 1' },
    { value: 2, name: 'Option 2' },
    { value: 3, name: 'Option 3' },
];
const formattedData = (arr) => {
    return arr.map( item => ({
        value: item.value,
        label: item.name} ))
}
console.log(formattedData(data));*/

//добавление эл-та в объект
/*let products = [
    { id: 1, name: 'Apple', price: 1.99 },
    { id: 2, name: 'Banana', price: 0.99 },
    { id: 3, name: 'Orange', price: 2.49 },
];
let productsWithDiscount = products.map( item => ({...item, discountPrice: item.price *0.9}) );
console.log(productsWithDiscount);*/

//функция Палиндром

/*const isPalindrome = (str) => {
    return str === str.split("").reverse().join("");
}
console.log(isPalindrome('level')); // Вернет true
console.log(isPalindrome('racecar')); // Вернет true
console.log(isPalindrome('hello')); // Вернет false*/

//Выведите все дублирующиеся элементы массива(filter, indexOf)
/*const removeDublicates = (arr) => {
    return arr.filter((item, index) =>  arr.indexOf(item) !== index ); //первое вхождение (индекс) не соответствует текущему индексу
};
let arr = [1, 1, 5, 6, 7, 8, 9, 9, 3, 4, 0, 19];

console.log(removeDublicates(arr));//[ 1, 9 ]*/


//сортировкa массива объектов по определенному свойству в порядке возрастания, используя метод Array.prototype.sort()
/*const persons = [
    { name: 'Alice', age: 30 },
    { name: 'Charlie', age: 35 },
    { name: 'Bob', age: 25 },

];
function sortByProperty(array, property) {
    return array.sort((a,b) =>
        a[property] - b[property]
    )
}

console.log(sortByProperty(persons, 'age'));
// [{ name: 'Bob', age: 25 }, { name: 'Alice', age: 30 }, { name: 'Charlie', age: 35 }]*/

const users1 = [
    {id: 1, name: 'Bob', sStudent: true,},
    {id: 2, name: 'Alex', isStudent: true,},
    {id: 3, name: 'Ann', isStudent: true,},
]
function newMap(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i]));
    }
    return result;
}

console.log('User names: '  + newMap(users1, user => user.name))


