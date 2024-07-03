
//slice() -для копирования или что-то отрезать, иммутабельный
//arr.slice(откуда отрезать, докуда отрезать)
//1)
// let arr = ['a', 'b', 'c', 'd', 'e'];
// const sub = arr.slice(0,2); //второй параметр не включительно
// console.log(arr); //[ 'a', 'b', 'c', 'd', 'e' ]
// console.log(sub); //[ 'a', 'b' ]

//2)
/*let arr = ['a', 'b', 'c', 'd', 'e'];
const sub = arr.slice(2);
console.log(sub); //[ 'c', 'd', 'e' ]*/

//3)
// let arr = ['a', 'b', 'c', 'd', 'e'];
// const copyArr = arr.slice();
// console.log(copyArr); //[ 'a', 'b', 'c', 'd', 'e' ]
// console.log(arr === copyArr); //false

//4)
// let arr = ['a', 'b', 'c', 'd', 'e'];
// const sub = arr.slice(1, -1); //[ 'b', 'c', 'd' ] (-1 последний отрезается)
// console.log(sub);

// let arr = ['a', 'b', 'c', 'd', 'e'];
// const sub = arr.slice(-2);
// console.log(sub) //[ 'd', 'e' ]

//splice() - мутабельный
//arr.splice(с какого индекса удаляе, кол-во элементов которые хоии удалить)
// let arr = ['a', 'b', 'c', 'd', 'e'];
// const sub = arr.splice(1, 3);
// console.log(arr) //[ 'a', 'e' ] - исходный массив изменился
// console.log(sub) //[ 'b', 'c', 'd' ] - удалили

//2)
// let arr = ['a', 'b', 'c', 'd', 'e'];
// const res = arr.splice(2,0, "test value 1", "test value 2") // присвоить результат выполнения
// console.log(arr) //[ 'a', 'b', 'test value 1', 'test value 2', 'c', 'd', 'e' ]
// console.log(res) //[] - ничего не удалили

//3)
// let arr = ['a', 'b', 'c', 'd', 'e'];
// const res = arr.splice(1, 1, 'new item')
// console.log(arr) //[ 'a', 'new item', 'c', 'd', 'e' ]
// console.log(res) //[ 'b' ]

//toSpliced() - иммутабл , для замены элементов
// const arr = ["jan", "feb", "mar", "apr"];
// const newMethods = arr.toSpliced(1, 0, 'nonth')
// console.log(arr) //[ 'jan', 'feb', 'mar', 'apr' ]
// console.log(newMethods) //[ 'jan', 'nonth', 'feb', 'mar', 'apr' ]


//reduce() - принимает callback
// let a = [1,2,3,4,5];
// let sum = 0;
// for (let i = 0; i < a.length; i++) {
//     sum += a[i];
// }
// console.log(sum)

//arr.reduce((acc, el, index) => {}, start_value(0, {}, [])) start_value - нулевой эл-т массива
//1)
// let a = [1,2,3,4,5];
// let res = a.reduce((acc, currentValue) => acc + currentValue, 0);
// console.log(res)//15

//2)
// const fruits = [
//     { name: 'apple', quantity: 2 },
//     { name: 'banana', quantity: 3 },
//     { name: 'orange', quantity: 1 },
// ];
//
// let res = fruits.reduce((acc, fruit) => acc + fruit.quantity, 0)
// console.log(res) //6

//3)
// const numbers = [5, 2, 8, 1, 6];
// //find Max Number value
// const result = numbers.reduce((acc, currentNumber) => {
//     console.log('acc: '+acc)
//     console.log('currentNumber: '+currentNumber)
//     return currentNumber > acc ? currentNumber : acc});
// console.log(result)//8

// 4)
// const people = [
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 30 },
//     { name: 'Charlie', age: 22 },
// ]; // expected result{totalNames:..., totalAges: totalAges(number) }
//
// const result = people.reduce((acc, currentPeople) => {
//     acc.totalNames.push(currentPeople.name);
//     acc.totalAge += currentPeople.age;
//     return acc;
// }, {totalNames: [], totalAge: 0}) // на выходе объект
// console.log(result) //{ totalNames: [ 'Alice', 'Bob', 'Charlie' ], totalAge: 77 }

//map

/*const people = [
    { name: 'Alice', age: 25 , isStudent: true},
    { name: 'Bob', age: 30 , isStudent: true},
    { name: 'Charlie', age: 22 , isStudent: true},
]; // expected result{totalNames:..., totalAges: totalAges(number) }

const mappedInfo = people.map((currentPeople) => (
    {
        name: currentPeople.name,
        age: currentPeople.age
    }
));

const combinedObj = {
    totalNames: mappedInfo.map(person => person.name),
    totalAge: mappedInfo.reduce( (acc, currentPerson) => acc + currentPerson.age, 0),
}
console.log(people)
console.log(mappedInfo)
console.log(combinedObj)*/


// const peoples = [
//     { name: 'Vika', age: 25, budget: 4500 },
//     { name: 'Nikita', age: 45, budget: 35000 },
//     { name: 'Igor', age: 55, budget: 340 },
//     { name: 'Insaf', age: 65, budget: 50000 },
//     { name: 'Alyona', age: 75, budget: 20 },
// ]; //summaryBudget - 35000
//
// const res = peoples.reduce((acc, currentPeople) => acc+currentPeople.budget, 0)//
// console.log(res)


// const numbers = [5, 6, 7, 8, 9, 10, -199];
// const res= numbers.reduce((acc, currentValue) => acc > currentValue ? currentValue : acc);
// console.log(res);


// const peoples = [
//     { name: 'Vika', age: 25, budget: 4500 },
//     { name: 'Nikita', age: 45, budget: 35000 },
//     { name: 'Igor', age: 55, budget: 340 },
//     { name: 'Insaf', age: 65, budget: 50000 },
//     { name: 'Alyona', age: 75, budget: 20 },
// ]; //{names: []}
// //acc.totalNames.push(currentPeople.name);
// const peopleNames = peoples.reduce((acc, currentPeople) => {
//     acc.names.push(currentPeople.name);
//     return acc
//     },
//     {names: []} )
// console.log(peopleNames);

const words = ['Hello', ' ', 'world', '!']; //Hello world

const result = words.reduce((acc, word) => acc + word)
console.log(result)




