
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

//eventloop

// console.log('start')
//
// setTimeout( function (){
//     console.log('timeout')
// }, 3000)
//
// console.log('end')
// // start
// // end
// // timeout


// console.log('start')
//
// setTimeout( function (){
//     let a = 1 + 3;
//     let b = 5 + 6;
//     let c = 7 + 8;
//
//     console.log('timeout - 1')
// }, 0)
//
// setTimeout( function (){
//     console.log('timeout - 2')
// }, 0)
//
// setTimeout( function (){
//     console.log('timeout - 3')
// }, 0)
//
// console.log('end')
//
// // start
// // end
// // timeout - 1
// // timeout - 2
// // timeout - 3
//setTimeout с одинаковым временем, последовательность будет сохраняться


// setTimeout(function a(){}, 1000)
// setTimeout(function b(){}, 500)
// setTimeout(function c(){}, 0)
//
// function d(){}
// d()
//
// //d, c, a, b


// task 1
// function a() {
//     setTimeout( () => {
//         console.log('1')
//     })
// }
//
// function b() {
//     console.log('2')
// }
//
// a();
//
// new Promise( ( res, rej ) => { //создание промиса синхронный код
//     console.log('3');
//     res();
// }).then( () => {
//     setTimeout( function timer (){
//         console.log('4')
//     }, 0)
// })
//
// b();
//
// // 3 2 1 4



// function a() {
//     setTimeout( () => {
//         console.log('1')
//     }, 1000)
// }
// function b() {
//     console.log('2')
// }
// a();
// new Promise( ( res, rej ) => { //создание промиса синхронный код
//     console.log('3');
//     res();
// }).then( () => {
//     setTimeout( function timer (){
//         console.log('4')
//     }, 0)
// })
// b();
//// 3 2 4 1



// setTimeout( () => {
//         console.log('1')
// }, 0)
//
// setTimeout( () => {
//         console.log('2')
// }, 1000)
//
// new Promise( ( res, rej ) => {
//      console.log('3');
//      res();
//      console.log('4');
//  }). then ( () => {
//      console.log('5');
//      })
//
// console.log('6');
//
// async function test1() {
//     console.log('7'); // код выполняется синхронно до await
//     await test2(); // то, что после строки с await выполняется асинхронно
//     console.log('8');
//     await ( () => {}) ();
//     console.log('12')
// }
//
// async function test2() {
//     console.log('9');
// }
//
// test1();
// console.log('10')
// //3 4 6 7 9 10 5 8 12 1 2


// console.log('1'); // консоль сразу 1
//
// setTimeout( () => { // callback отпправляется в макростаску
//         console.log('2')
//         Promise.resolve().then( ()=> { //callback из then отпрпавляется в микротаску
//             console.log('3')
//         })
// })
//
// new Promise( ( res, rej ) => {
//      console.log('4');
//      res(5);
//  }). then ( (data) => {
//      console.log(data); // отправляется в микростаску, дальше  вышли
//
//      Promise.resolve()
//          .then( ()=> {
//              console.log('6')
//      })
//          .then( () => {
//              console.log('7')
//
//              setTimeout( () => {
//                  console.log('8')
//              }, 0)
//          })
//
//      })
//
// setTimeout( () => {
//     console.log('9')
// }, 0)
//
// console.log('10')
//
// // 1 4 10 , mic - 5 , mac - 2 9      - в момент окончания синхронного кода
// // 1 4 10 5 6 7 2 3 9 8


// async function first() {
//     console.log('9');
//     await Promise.resolve(2).then( (r) => console.log(r));
//     console.log('0'); // это тоже микротаска
//     await Promise.resolve(3).then( (r) => console.log(r));
// }
// async function second() {
//     console.log('10');
//     await Promise.resolve(4).then( (r) => console.log(r));
//     console.log('11');
//     await Promise.resolve(5).then( (r) => console.log(r));
// }
//
// first();
// second();
//
// const promise = Promise.resolve('new Promise');
// promise.then( (str) => console.log(str));
//
// //9 10 2 4 new Promise 0 11 3 5
//
// //микротаски  - 2 4 newPromise 0 11 3 5


// console.log('log 1');
// Promise.resolve()
//     .catch( () => console.log('catch 1 '))
//     .then( () => console.log('then 1 '))
//
// Promise.resolve()
//     .then( () => console.log('then 2 '))
//
// console.log('log 2')
//
// // log 1
// // log 2
// // then 2
// // then 1






