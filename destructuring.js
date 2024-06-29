/*
const  a =5;
console.log(a);*/


/*const newObj = {
    age:25
}

const newObj2 = newObj;

newObj2.age = 35;

console.log("newObj first",newObj)
console.log("newObj2 first",newObj2)*/

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
        name: 'Ann',
        isStudent: true,
    },
    {
        id: 4,
        name: 'Donald',
        isStudent: true,
    },
];*/

/*
const result = users.pop();
console.log('users: ', users);*/

/*
const result = [...users];
result.pop();

console.log(users === result);
console.log(users);
console.log(result);


const user = {
    id: '12345',
    name: 'Bob',
    isMarried: true,
};


const newUser = {...user};
console.log(newUser);
console.log(user === newUser);*/

/*const superUser = {
    id: 10,
    name: 'Clementina DuBuque',
    username: 'Moriah.Stanton',
    email: 'Rey.Padberg@karina.biz',
    address: {
        street: 'Kattie Turnpike',
        suite: 'Suite 198',
        city: 'Lebsackbury',
        zipcode: '31428-2261',
        geo: {
            lat: '-38.2386',
            lng: '57.2232',
        },
    },
    phone: '024-648-3804',
    website: 'ambrose.net',
    company: {
        name: 'Hoeger LLC',
        catchPhrase: 'Centralized empowering task-force',
        bs: 'target end-to-end models',
    },
};*/


//const result = {...superUser};

/*result.address.city = "London";
console.log('Super user', superUser.address.city);
console.log('result', result.address.city);*/

/*const newSuperuser2 = {...superUser, address: {...superUser.address, city: 'London'}}; //копирование уровней вложенности

console.log('Super user', superUser.address.city);
console.log('newSuper user',newSuperuser2.address.city);*/

/*
const result = {...superUser, address: {...superUser.address, city: 'London', geo: {...superUser.address.geo, lat: 'test value'}}};

console.log(superUser.address.geo.lat);
console.log(result.address.geo.lat);*/


/*const newObj = structuredClone(superUser);

newObj.address.geo.lat = 'new stucture lat';
console.log(superUser.address.geo.lat);
console.log(newObj.address.geo.lat);*/


/*
const a = [1,2,3];
const b = [4,5,6];

const result = [...a, ...b];
console.log(result);

const str = "I am a string"
const str2 = {...str}
const str3 = [...str]
console.log("str2", str2);
console.log("str3",str3);
*/

/*
const test = [1,2,3];
const newItem = 'skirt';

const result = [...test, newItem] // добавить один элемент в конец
console.log(result);*/

//деструктуризация
const employee = {
    firstName: 'Ivan',
    lastName: 'Ivanov',
    middleName: 'Ivanovich',
};
//const firstName = employee.firstName;
//1 example
/*const {firstName, middleName} = employee;
console.log('firstName: ', firstName);
console.log('middleName: ', middleName);*/
//2 example
/*const middleName = 'this is middleName';
const {lastName, middleName: newVariable} = employee; // присвоить новое название переменной
console.log('middleName: ', middleName);
console.log('newVariable: ', newVariable);*/
//3 example
/*const user = {
    id: 1234,
    firstName: 'Ivan',
    lastName: 'Ivanov',
    middleName: 'Ivanovich',
    role: 'admin'
};
const {middleName, role = 'simple user'} = user; // если роль не придет присвоитс дефолт значение
console.log(middleName, role);
console.log(role)*/
//4 example
/*
const employee2 = {
    firstName: 'Ivan',
    lastName: 'Ivanov',
    middleName: 'Ivanovich',
    permission: {
        canEdit: true,
        canDelete: false,
        role: 'user'
    },
};
const {permission: {canEdit, canDelete}} = employee2; // второй уровень вложенности
console.log('canEdit', canEdit);
console.log('canDelete', canDelete);
*/

//Array
//const colors = ['red', 'blue', 'green', 'white', 'black'];
/*const redColor = colors[0];
console.log('redColor',redColor);*/
//1 example
/*const [redColor, testValue1, testValue2] = colors;
console.log('redColor', redColor);
console.log('testValue1', testValue1);
console.log('testValue2', testValue2);*/
//2 example
/*const colors2 = ['red',{0: "col1", 1:"col2"}, 'blue', 'green', 'white', 'black'];
const [, testValue1] = colors2;
console.log('testValue1', testValue1);*/

//3 example
//const colors = ['red', 'blue', 'green', 'white', 'black'];
//rest оператор ...
/*
const [, testValue2, ...rest] = colors;
console.log('rest', rest);*/
//4 example
/*
const colors = ['red', ['test1', 'test2'], 'green', 'white', 'black'];

const [value1, [test01, test02]] = colors;
console.log('test02', test02);*/

//Домашнее задание
/*const user = {
    name: 'John',
    address: {
        city: 'New York',
        country: 'USA',
    },
};*/

/*const updatedUser = {...user, address: {...user.address, city: 'Toronto'}}
console.log('user ',user);
console.log('updatedUser ',updatedUser);*/

/*const updatedUser = {...user, address: {...user.address} };
updatedUser.address.city = 'London';
console.log('user ',user);
console.log('updatedUser ',updatedUser);*/
//#4
/*const originalArray = [1, 2, 3, 4, 5];
function addElementToArray(originalArray, number){
    return [...originalArray, number];
}
const newArray = addElementToArray(originalArray, 6);
console.log(newArray);*/

//деструктуризация
//#1
/*const user = { name: 'John', age: 25, city: 'New York' };

const {name, age, city} = user;

console.log(name);  // 'John'
console.log(age);   // 25
console.log(city);  // 'New York'*/
//#2
/*const fruits = ['apple', 'banana', 'orange'];
const [, secondFruit, thirdFruit] = fruits;
console.log(secondFruit);  // 'banana'
console.log(thirdFruit);   // 'orange'*/
//#3
/*const person = { name: 'Alice', age: 30 };
// Деструктуризация в параметрах функции
function printPersonDetails({name, age}) {
    console.log(`Name: ${name}, Age: ${age}`);
}
printPersonDetails(person);  // Вывод: Name: Alice, Age: 30*/
//#4
/*const car = { brand: 'Toyota', model: 'Camry' };
const {brand, model,year = '2022'} = car;
console.log(brand);  // 'Toyota'
console.log(model);  // 'Camry'
console.log(year);   // 2022 (значение по умолчанию)*/
//#5
/*
const students = [
    { name: 'Alex', grade: 'A' },
    { name: 'Emma', grade: 'B' },
    { name: 'Chris', grade: 'C' },
];
const [{name: student1}, ,{ grade:student3}] = students;
console.log(student1);  // 'Alex'
console.log(student3);  // 'Chris'
*/

//#6
const person = { firstName: 'Max', lastName: 'Johnson' };

const firstName = 'first Name: Nina';
const lastName = 'last Name: Ivanov';


const {firstName: newFirtsName, lastName: newLastName, age= 25} = person;
console.log(newFirtsName); // 'Max'
console.log(newLastName); // 'Johnson'
console.log(age); // 25 (значение по умолчанию)



