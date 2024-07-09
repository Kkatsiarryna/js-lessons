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



