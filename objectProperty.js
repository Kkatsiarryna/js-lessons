// у объекта ключ только string
// const obj = {
//     car: 'BMW',
//     car2: 'Audi'
// }
//
// let ob2 = {
//     [dynamic_property]: "значение"
// }

// function createObject(key, value){ //старый способ
//     let newObj = {};
//     newObj[key] = value;
//     return newObj;
// }
// console.log(createObject('car', 'Cytroyen')) //{ car: 'Cytroyen' }
//
//
// function createObject2(key, value){
//     return {
//         [key]: value
//     }
// }
// console.log(createObject2('fruit', 'apple')); //{ fruit: 'apple' }

//с переменной
// let propertyName = 'age';
//
// let person = {
//     name: 'John', //статическое свойство
//     [propertyName]: '65' //динамическое свойство
// }
// console.log(person);

//какатенация

// let prefix = 'user_info_';
//
// const obj = {
//     test: 'test value id',
//     [prefix + 'statistic']: 'statistic information',
// }
// console.log(obj) //{ test: 'test value id', user_info_statistic: 'statistic information' }

//arifmetic operation + string methods

// let num = 2;
// let str = 'new_property'
// const obj = {
//     name: "katya",
//     [2+num]: 'four',
//     [str.toUpperCase()]: 'upper case value', //{ '4': 'four', name: 'katya', NEW_PROPERTY: 'upper case value' }
// }
// console.log(obj)

//Pratical task

//создать переменные для статусов

// const status_busy = 'busy';
// const status_ready = 'ready';
//
// //вычисл сво-ва объектов
// const STATUS_LABELS = {
//     [status_busy]: "ожидает",
//     [status_ready]: "готово"
// }
// const drivers = [
//     { name: 'Павел', status: 'busy' },
//     { name: 'Сергей', status: 'ready' },
// ];
//
// const driversStatuses = drivers.map(driver => {
//     const {status} = driver; //деструктуризация достать status из объекта drivers
//
//     return STATUS_LABELS[status] //1) для первого водителя STATUS_LABELS['busy']; 2) STATUS_LABELS['ready']
//     //[busy]:'ожидает', [ready]:'готово'
// })
//
// console.log(driversStatuses) //[ 'ожидает', 'готово' ]


//Pratical task2

// let config = {
//     apiEndpoint: 'https://api.axample.com',
//     timeout: 5000,
// }
//
// function updateConfig (newConfig){
//     for(let key in newConfig){
//         // console.log('key: ', key)
//         // console.log('new Confog: ', newConfig)
//
//         config[key] = newConfig[key];
//     }
// }
//
// updateConfig({timeout: 10000, retries: 3})
//
// console.log('new configuration', config); //new configuration { apiEndpoint: 'https://api.axample.com', timeout: 10000, retries: 3 }


//Object.keys(), Object.values(), Object.entries()

//Object.keys() -возвращает массив ключей объектов

//example1
// const user = { name: 'Павел', status: 'busy' }
// const result = Object.keys(user);
// console.log(result)//[ 'name', 'status' ]

//example 2
// const user = { name: 'Павел', status: 'busy', test: {newProperty: 'new'} }
// const result = Object.keys(user);
// console.log(result) //[ 'name', 'status', 'test' ]
//
// const keys = getAllKeys(nestedObj);
// console.log(keys); // Output: ['a', 'c', 'e', 'f', 'g']


//Object.values() - возвращает массив значений объкта
//example1
// const user = { name: 'Павел', status: 'busy' }
// const values = Object.values(user);
// console.log(values); [ 'Павел', 'busy' ]

//example 2
// const user = { name: 'Павел', status: 'busy', test: {newProperty: 'new'} }
// const values = Object.values(user);
// console.log(values); //[ 'Павел', 'busy', { newProperty: 'new' } ]

//Object.entries() - возвразает массив пар [['key', 'value'], ['key', 'value']]
// const user = { name: 'Павел', status: 'busy' }
// const result = Object.entries(user);
// console.log(result) //[ [ 'name', 'Павел' ], [ 'status', 'busy' ] ]

//Object.defineProperties(), Object.defineProperty(), Object.freeze(), typeof Object

//New Map() New Set()

//new Map() - это коллекция ключ и занчение, ключи могут быть любого типа
// let map = new Map();
//
// //console.log('map collection: ', map) //map collection:  Map(0) {}
//
// map.set('1', 'string');
// map.set(1, 'number');
// map.set(Symbol, 'symbol');
// map.set(true, 'boolean');
// map.set({}, 'object');

//console.log(map); // Map(5) {
//     '1' => 'string',
//         1 => 'number',
//         [Function: Symbol] => 'symbol',
//         true => 'boolean',
//         {} => 'object'
// }

//console.log(map.get('1')); //string
//get - получить значение по ключу

// map.delete('1');
// console.log(map); //Map(4) {
//     1 => 'number',
//         [Function: Symbol] => 'symbol',
//         true => 'boolean',
//         {} => 'object'
// }
//map.delete(1);
//console.log(map);
// Map(3) {
//     [Function: Symbol] => 'symbol',
//         true => 'boolean',
//         {} => 'object'
// }

 //map.clear(); // удалить все
// console.log(map) //Map(0) {}

// let map2 = new Map();
// map2.set('true', 'true');
// map2.set(22, 'twenty two');
// console.log(map2.size) // 2

//example 3
// const map3 = new Map([ // запрлняем сразу коллекцию
//     ['1', 'value'],
//     [true, 'boolean value']
// ]);
//
// console.log(map3) //Map(2) { '1' => 'value', true => 'boolean value' }
// console.log(typeof map3) //object

//new Set() - это особый вид коллекции(еще называют множество)
//нет ключей
//каждое значение может встречаться только один раз
// let set = new Set();
// //console.log(set) //Set(0) {}
//
// set.add('1');
// set.add({}); //#123
// set.add({}); //#456 - разные ссылки
// set.add(true);
// set.add('1');

// console.log(set) //Set(4) { '1', {}, {}, true }
//
// console.log(set.has('1')) //true
// console.log(set.has({})) //false
// проверить есть ли значение

// set.delete('1');
// console.log(set); //Set(3) { {}, {}, true }
//
// console.log(set.size); //3
////////////////////////////////////
// const test = {};//#12345
// const myArray = ['test1', test, [], 'test2'];
//
// const newSet = new Set(myArray);
//
// console.log('newSet: ', newSet); //newSet: Set(4) { 'test1', {}, [], 'test2' }
//
// console.log(newSet.has(test));//true
///////////////////////////////////////

//Practical Task
// const numbers = [1, 3, 5, 6, 6, 7, 8, 8, 10, 10, 2, 4, -100, 0, -100];
// const result2 = [... new Set(numbers)];
// console.log(result2)

///////////////////////////////////////////////
///HOMEWORK
//3
// let student = {
// 	name: 'Jonh',
// 	age: 20,
// 	course: 'Math'
// }
// let propertyCount = Object.keys(student).length;
// console.log(propertyCount);


//4
// let scores = {
// 	math: 90,
// 	english: 85,
// 	science:92
// }
// let arrayValues = Object.values(scores);
// let sumValues = arrayValues.reduce( (acc, item) => acc + item )
// console.log(sumValues);


// let tottalScrore  =  0;
// for (let key in scores){
// 	tottalScrore += scores[key]
// }
// console.log(tottalScrore)

//5
// let obj = { a:1, b:2, c:3};
// function objectToArray(obj) {
// 	return Object.entries(obj);
// }
// console.log(objectToArray(obj));

//6
// let students = new Map();
// students.set('Katya', 10);
// students.set('Lena', 9);
// students.set('Sasha', 8);
// students.set('Nastya', 7);

// console.log(students.get('Katya'));

//7
// let products = new Map([
// 	['Milk', 1.2],
// 	['Bread', 1.5],
// 	['Cheese', 2.5],
// ]);
// if (products.has('Bread')) {
// 	products.delete('Bread');
// }
// console.log(products);

//8
// let fruits = new Set(['apple', 'banana', 'mango']);

// if(fruits.has('banana')){
// 	fruits.delete('banana')
// }
// console.log(fruits);

//9
// const numbers = [1,1,4,6,7,8,9,0,0,10,10,11];
// let result = [...new Set(numbers)];
// console.log(result);


////////////////////////////////////////////////////////////
//HOMEWORK SPRINT 1
//1
// const superUser = {
//     id: 10,
//     name: 'Clementina DuBuque',
//     username: 'Moriah.Stanton',
//     email: 'Rey.Padberg@karina.biz',
//     address: {
//         street: 'Kattie Turnpike',
//         suite: 'Suite 198',
//         city: 'Lebsackbury',
//         zipcode: '31428-2261',
//         geo: {
//             lat: '-38.2386',
//             lng: '57.2232',
//         },
//     },
//     phone: '024-648-3804',
//     website: 'ambrose.net',
//     company: {
//         name: 'Hoeger LLC',
//         catchPhrase: 'Centralized empowering task-force',
//         bs: 'target end-to-end models',
//     },
// };
//
// const result = {...superUser, address: {...superUser.address, geo:{...superUser.address.geo, lat: 'test coordinate'}}};
//
// const result2 = structuredClone(superUser);
// result2.address.geo.lat = 'hello'
//
// console.log(superUser)
// console.log(result);
// console.log(result2);


//2
// const sumAndDifference = (a, b) => {
//     return {
//         sum: a + b,
//         difference: a - b,
//     }
// }
// const {sum, difference} = sumAndDifference(5, 2);
//
// console.log("Сумма: " + sum);
// console.log("Разность: " + difference);

//3
// const numbers = [-1,2,-3,4,-5,6];
// const getPositiveNumbers = (numbers) => {
// 	return numbers.filter( el => el > 0)
// }
// console.log(getPositiveNumbers(numbers));

//4
// const arr1 = [1,2,3];
// const arr2 = [4,5,6];
// const mergeArrays = (...arrays) => {
// 	return arrays.reduce( (acc, arr) => acc.concat(arr), [])
// }
// console.log(mergeArrays(arr1, arr2));

//5
// const strings = ['apple', 'banana', 'orange'];
// const findString = (array, word) => {
// 	return array.includes(word)
// }
// console.log(findString(strings, 'apple'));
// console.log(findString(strings, 'tomato'));

//6
// const people = [
//     { name: 'Alice', age: 30 },
//     { name: 'Bob', age: 25 },
//     { name: 'Charlie', age: 35 },
// ];
// function sortByProperty(arr, propertyName){
//     return arr.sort((a, b) => a.propertyName - b.propertyName );
// }
// sortByProperty(people, 'age');
// console.log(people);

//7
// function extractSubarray (arr, startIndex, endIndex) {
//      const extracted =  arr.slice(startIndex, endIndex);
//      arr.splice(startIndex, extracted.length);
//      return extracted;
// }
//
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let extracted = extractSubarray(array, 2, 6);
// console.log(extracted); // Вывод: [3, 4, 5, 6]
// console.log(array); // Вывод: [1, 2, 7, 8, 9]

//8
// const addPropertyToObject = (objectName, property, value) => {
//     objectName[property] = value;
// }
// let obj = { name: 'Alice' };
// addPropertyToObject(obj, 'age', 30);
// console.log(obj); // Вывод: { name: "Alice", age: 30 }

//9
// const students = {
//     Alice: [4, 5, 3],
//     Bob: [3, 2, 4],
//     Charlie: [5, 5, 5]
// };
//
// const formatStudentGrades = (obj) => {
//     //return Object.entries(obj).map( el => `${el[0]}: ${el[1]}`);
//     return Object.entries(obj).map( ([name, grade]) => `${name} : ${grade.join(',') }`)
// }
// console.log(formatStudentGrades(students));

// Вывод:
// [
//   "Alice: 4, 5, 3",
//   "Bob: 3, 2, 4",
//   "Charlie: 5, 5, 5"
// ]

//10
// const students = {
//     Alice: [4, 5, 3],
//     Bob: [3, 2, 4],
//     Charlie: [5, 5, 5]
// };
// function getStudentNames (obj) {
//     return Object.keys(obj);
// }
// console.log(getStudentNames(students));
// Вывод: ["Alice", "Bob", "Charlie"]

//11
//возвращает массив уникальных жанров книг\
// const library = {
//     'The Great Gatsby': { genre: 'Fiction' },
//     'To Kill a Mockingbird': { genre: 'Fiction' },
//     1984: { genre: 'Science Fiction' },
//     'Pride and Prejudice': { genre: 'Romance' },
//     'The Catcher in the Rye': { genre: 'Fiction' },
// };
// function getUniqueGenres (obj) {
//    let newArr =  Object.values(obj).map( book => book.genre);
//    return [...new Set(newArr)]
// }
// console.log(getUniqueGenres(library));
// // Вывод: ["Fiction", "Science Fiction", "Romance"]

//12
// const pairs = [
//     ['a', 1],
//     ['b', 2],
//     ['c', 3],
// ];
//
// function createMapFromArray (obj) {
//     return new Map(obj)
// }
// console.log(createMapFromArray(pairs));
// // Вывод: Map { 'a' => 1, 'b' => 2, 'c' => 3 }
