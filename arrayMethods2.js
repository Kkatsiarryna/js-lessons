
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

/*const words = ['Hello', ' ', 'world', '!']; //Hello world

const result = words.reduce((acc, word) => acc + word)
console.log(result)*/

//HOMEWORK

//slice
// let str="Hello, world";
// let startIndex= 7;
// function getSubStr(str, startIndex){
//     return str.slice(startIndex);
// }
// console.log(getSubStr(str, startIndex));

// function getLastElements(arr, number){
//     return arr.slice(-number);
// }
// console.log(getLastElements( [1,2,3,4,5], 3) ); //(3) [3, 4, 5]

// extractPath = (path, startIndex) => {
//     return path.slice(startIndex+1)
// }
// console.log(extractPath('https://example.com/blog/article', 18));

//splice
//1)
// removeElement = (array, indexOfElementForDelete) => {
//      array.splice(indexOfElementForDelete, 1); //3
//      return array; //[1, 2, 4, 5]
// }
// console.log(removeElement([1,2,3,4,5], 2)); //[1, 2, 4, 5]

//2)
// insertElement = (array, index, element) => {
//     array.splice(index, 0, element); //вставить элемент с позиции indexб удалить 0, какой элемент вставить
//     return array;
// }
// console.log(insertElement([1,2,4,5], 2, 3));

//reduce
//1)
// function sumArray (array) {
//     return array.reduce((acc, item) => acc + item)
// }
// console.log(sumArray([1,2,3,4,5,6,7,8,9]));

//2)
// function sumStringLengths(array){
//     return array.reduce((acc, word) => acc + word.length, 0);
// }
// console.log(sumStringLengths(['apple', 'banana', 'cherry']));

//3
// sumNestedArrays = (array) => {
//    // return array.flat().reduce((acc, item) => acc + item);

//    return array.reduce( (acc, item) => {
//     return acc + item.reduce( (acc, number) => (acc + number), 0)
//    }, 0)
// }
// console.log(sumNestedArrays([ [1,2], [3,4,5], [6,7,8,9] ]));

//4
// removeDuplictes = (array) => {
//     return array.reduce((newArray, currentElement) => {
//         //return !newArray.includes(currentElement) ? newArray.concat(currentElement) : newArray;
//         return newArray.indexOf(currentElement) === -1 ? newArray.concat(currentElement) : newArray;
//     }, [])
// }
// console.log(removeDuplictes([1,2,3,3,4,5,5]));

//5
// const array = [1, 2, 3, 2, 4, 5, 4, 5, 5, 4];
// const findDuplicates = (array) => {
//         return array.reduce((newArray, currentElement, index, array) => {
//             return array.indexOf(currentElement) !== index && !newArray.includes(currentElement) ? newArray.concat(currentElement) : newArray;
//             //   if (arr.indexOf(item, index + 1) !== -1 && duplicates.indexOf(item) === -1) {
//             //      duplicates.push(item);
//             //    }
//     }, [])
// }
// const duplicatesArray = findDuplicates(array);
// console.log(duplicatesArray); // Output: [2, 4, 5]

//6
// const words = ['apple', 'banana', 'apple', 'cherry', 'banana', 'apple'];
// const wordCount = (array) => {
//     return array.reduce( (acc, currentWord) => {
//         acc[currentWord] = ( acc[currentWord] || 0) + 1;
//         return acc;
//         }, {}
//     )
// }
// console.log(wordCount(words)); // Output: { apple: 3, banana: 2, cherry: 1 }

//7
// const people = [
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 30 },
//     { name: 'Charlie', age: 22 },
// ];
// const getPropertyValues = (array, property) => {
//     return array.reduce( (acc, currentValue) => {
//         acc.push(currentValue[property]);
//         return acc;
//     }, []
//     )
// }
// const names = getPropertyValues(people, 'name');
// console.log(names); // Output: ['Alice', 'Bob', 'Charlie']

