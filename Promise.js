
// const promise = new Promise ( (res, rej) => {}) //res, rej - это функции, их вызов меняет состояние промисов
//(res, rej) - создаются внутри класса, их закидывает класс промиса
//функция экзекъютор


// console.log(promise) //Promise { <pending> }
//
//
// class Promise{
//     constructor(callback){
//
//     }
// }
//
// function Promise(executor) {
//     const resolve = (data) => {
//         return {
//             state: 'fulfilled',
//             result: data
//         }
//     }
//
//     const rejected = (data) => {
//         return {
//             state: 'rejected',
//             error: err
//         }
//     }
//
//     executor(resolve, rejected)
// }

// const promise = new Promise ( (res, rej) => {
//     setTimeout( () => {
//         res()
//     }, 2000)
//
// })
//
// console.log(promise)
// //Promise { <pending> }

/// EXAMPLE - 1
// const getData = () =>
//     new Promise((res, rej) => {
//         setTimeout(() => {
//             res('some data');
//             // rej("some error");
//         }, 1000);
//     });
//
// // Функция getData возвращает новый промис,
// //     который через 1000 миллисекунд (1 секунду) переходит в состояние resolved с данными 'some data'.
//
// getData()
//     .then((data) => {
//         console.log("then1", data);
//         return new Promise((res, rej) => {
//             setTimeout(() => {
//                 // res("some data from request2");
//                 rej("some error");
//             }, 2000);
//         });
//     })
// // Получает данные 'some data' и выводит "then1 some data".
// //     Возвращает новый промис, который через 2000 миллисекунд (2 секунды) переходит в состояние rejected с ошибкой "some error".
//     .then((data) => {
//         console.log("then2", data);
//         return 20;
//     }) //Этот then не будет выполнен, так как предыдущий промис был отклонен.
//     .catch((data) => {
//         console.log("catch1", data);
//         // return;
//     }) //Перехватывает ошибку "some error" и выводит "catch1 some error". Не возвращает значение, поэтому следующий then получит undefined.
//     .then((data) => {
//         console.log("then3", data);
//         return b;
//     }) //Получает undefined и выводит "then3 undefined". Возвращает значение переменной b, которая не определена, что вызовет ошибку.
//     .then((data) => {
//         console.log("then4", data);
//         return 40;
//     }) //Этот then не будет выполнен из-за ошибки в предыдущем then.
//     .catch((data) => {
//         console.log("catch2", data);
//         return 50;
//     }) //Перехватывает ошибку и выводит "catch2 ReferenceError: b is not defined". Возвращает 50.
//     .finally((data) => {
//         console.log("finally", data);
//         return c;
//     }) //Выполняется независимо от состояния промиса и выводит "finally undefined".
//     // Возвращает значение переменной c, которая не определена, но это значение не передается в следующий then.
//     .then((data) => {
//         console.log("then5", data);
//     })
//     .catch( (err) => {
//         console.log("catch3", err);
//         return 100
//     })

// then1 some data
// catch1 some error
// then3 undefined
// catch2 ReferenceError: b is not defined
// at C:\Incubator\nativeJS\js-lessons\Promise.js:69:9
// finally undefined
// catch3 ReferenceError: c is not defined

/// EXAMPLE - 2

// const getData = str =>
//     new Promise((res, rej) => {
//         setTimeout(() => {
//             res(str)
//             // rej("some error");
//         }, 1000)
//     })
//
// getData('string1')
//     .then(data => {
//         console.log('then', data)
//         // return promise1;
//         return 10
//     })
//     .finally(() => {
//         console.log('finally')
//         return getData('string2')
//     })
//     .then(data => {
//         console.log('then 2', data)
//         return getData('string3')
//     })
//     .then(data => {
//         console.log('then3', data)
//     })

// then string1
// finally
// then 2 10
// then3 string3


/// EXAMPLE - 3
// Напишите функцию delay(ms), которая возвращает промис, переходящий в состояние resolved через ms миллисекунд

// const delay = (ms) => {
//    return new Promise( (res, rej)  => {
//             setTimeout(() => {
//                 res('some data')
//                 // rej("some error");
//             }, ms)
//         }
//     )
// }

// function delay(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }
//
// delay(1000).then(() => console.log('Hello!'));

/// EXAMPLE - 4
// const promise1 = new Promise((res, rej) => {
//     setTimeout(() => {
//         // res("reject1");
//         rej("reject1");
//     }, 1000);
// });
//
// // создается новый промис promise1, который через 1000 миллисекунд (1 секунду) вызывает функцию rej с аргументом "reject1".
// //     Это означает, что промис перейдет в состояние rejected с причиной "reject1".
//
// promise1
//     .catch((t) => t + "catch1") //Перехватывает отклонение промиса и возвращает строку "reject1catch1".
//     .catch((t) => t + "catch2") //Этот catch не будет вызван, так как ошибка уже была обработана первым catch.
//     .then((t) => t + "then1") //  Получает результат из первого catch и добавляет "then1", возвращая строку "reject1catch1then1".
//     .finally((t) => t + "finally") //Выполняется независимо от состояния промиса, но не изменяет значение, передаваемое в следующий then.
//     .then((t) => console.log(t)); //Получает результат из первого then и выводит его в консоль.

// reject1 catch1
// then1

//--------------------
//Асинхронные функции

// fetch('https://api.github.com/users/kkatsiarryna').then( res => {
//     return res.json();
// }).then(res => {
//     console.log(res);
// }).catch( err => {
//     console.log("ERROR: ", err);
// })

//async function getGitData() {

// const getGitData = async () => {
//     try {
//         const response = await fetch('https://api.github.com/users/kkatsiarryna');
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.error("ERROR: ", error);
//     }
// }
//
// getGitData();

