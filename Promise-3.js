//Promise

//let prom = new Promise((resolve, reject) => {}) //функция конструктор
//принмает в качестве аргементы callback, которая принимает два коллбэка resolve, reject
//колбэки resolve, reject автоматически прокидываются системой в момент вызова конструктора Promise, т.е. они приходят
//resolve, reject - специальные функции, которые позволят управлять состоянием промиса

//состояние объектап промиса меняется один раз
//resolve, reject  - функции принимают ОДИН аргумент либого типа

//у объекта промиса три метода: then, catch, finally
//then - приниамет два коллбэка, олин отвечает за resolve (принимает либо ничегоб либо один аргумент), второй за reject

//промис reject следует по всей цепочке промисов до первого обработчика ошибок


//fetch, axios - возвращают объект промиса

//EXAMPLE 1
// let prom = new Promise((resolve, reject) => {
//     setTimeout((response) => {
//         if(response.httpStatus >= 200 && response.httpStatus < 400) {
//             console.log('2', prom)
//             resolve(response.data); // меняет состояние объекта, далее у объекта вызываются встроенные методы; аргументы приходят методу then
//             console.log('3', prom)
//         }else{
//             reject(response.error)
//         }
//
//     }, 1000, {httpStatus: 200, data:{userName: 'kate', id: 'jewji11jo', status: 'active'}, error: {}})
// })
//
// console.log('1', prom)
//
// // 1 Promise { <pending> }
// // 2 Promise { <pending> }
// // 3 Promise { { userName: 'kate', id: 'jewji11jo', status: 'active' } } -- недоступное свойство PromiseResult
//
// prom
//     .then(res => {
//             console.log('res', res) //res { userName: 'kate', id: 'jewji11jo', status: 'active' }
//         return 10; //упаковывается в новый объект промиса в состоянии resolve со значением 10
//         },
//         () => {})
//     .then( res2 => {
//         console.log('res2', res2) //res2 10
//     })
// //цепочка промисов нужна, когда необходимо сделать несколько последовательных запросовб
// //где каждый след запрос зависит от результатов прошлого

//EXAMPLE 2 - цепочка промисов
// let prom = new Promise((resolve, reject) => {
//     setTimeout((response) => {
//         if(response.httpStatus >= 200 && response.httpStatus < 400) {
//             resolve(response.data);
//         }else{
//             reject(response.error)
//         }
//
//     }, 1000, {httpStatus: 200, data:{userName: 'kate', id: 'jewji11jo', status: 'active'}, error: {}})
// })
//
// console.log('1', prom)
// prom
//     .then(res => {
//         console.log('res', res)
//            return new Promise((resolve, reject) => {
//                setTimeout((response) => {
//                    if(response.httpStatus >= 200 && response.httpStatus < 400) {
//                        resolve(response.data);
//                    }else{
//                        reject(response.error)
//                    }
//
//                }, 1000, {httpStatus: 200, data:{ id: 'jewji11jo', count: 'BY77129847982745'}, error: {}})
//            })
//         },
//         () => {})
//     .then( res2 => {
//         console.log('res2', res2)
//     })
//
// // 1 Promise { <pending> }
// // res { userName: 'kate', id: 'jewji11jo', status: 'active' }
// // res2 { id: 'jewji11jo', count: 'BY77129847982745' }


//EXAMPLE 3 - error
// let prom = new Promise((resolve, reject) => {
//     setTimeout((response) => {
//         if(response.httpStatus >= 200 && response.httpStatus < 400) {
//             resolve(response.data);
//         }else{
//             reject(response.error)
//         }
//
//     }, 1000, {httpStatus: 400,  error: 'Not found'})
// })
//
// console.log('1', prom)
// prom
//     .then(res => {
//             console.log('res', res)
//             return new Promise((resolve, reject) => {
//                 setTimeout((response) => {
//                     if(response.httpStatus >= 200 && response.httpStatus < 400) {
//                         resolve(response.data);
//                     }else{
//                         reject(response.error)
//                     }
//
//                 }, 1000, {httpStatus: 200, data:{ id: 'jewji11jo', count: 'BY77129847982745'}, error: {}})
//             })
//         },
//         (err) => { // второй коллбэк then слушает ошибки которые произошли выше по цепочке
//             console.log('err', err);
//             throw new Error('new Error')
//         })
//     .then( res2 => {
//         console.log('res2', res2)
//     }, err2 => {
//         console.log('err2', err2)
//     })
//     .then( null, err3 => { //заглушка
//         console.log('err3', err3)
//     })
//
// // 1 Promise { <pending> }
// //     err Not found
// //     res2 undefined //возвращается новый объект промиса в состоянии resolve
//
// // 1 Promise { <pending> }
// //     err Not found
// //     err2 Error: new Error

//EXAMPLE 4
// let prom = new Promise((resolve, reject) => {
//     setTimeout((response) => {
//         if(response.httpStatus >= 200 && response.httpStatus < 400) {
//             resolve(response.data);
//         }else{
//             reject(response.error)
//         }
//
//     }, 1000, {httpStatus: 200, data: {id: '173874928374'}, error: 'Not found'})
// })
//
// console.log('1', prom)
// prom
//     .then(res => {
//             console.log('res', res)
//             throw new Error('new Error')
//             return new Promise((resolve, reject) => {
//                 setTimeout((response) => {
//                     if(response.httpStatus >= 200 && response.httpStatus < 400) {
//                         resolve(response.data);
//                     }else{
//                         reject(response.error)
//                     }
//
//                 }, 1000, {httpStatus: 200, data:{ id: 'jewji11jo', count: 'BY77129847982745'}, error: {}})
//             })
//         })
//     .then( res2 => {
//         console.log('res2', res2)
//     })
//     .then( null, err3 => { //заглушка
//         console.log('err3', err3)
//     })
//
// // 1 Promise { <pending> }
// //     res { id: '173874928374' }
// //     err3 Error: new Error

//EXAMPLE - 5
// let prom = new Promise((resolve, reject) => {
//     setTimeout((response) => {
//         if(response.httpStatus >= 200 && response.httpStatus < 400) {
//             resolve(response.data);
//         }else{
//             reject(response.error)
//         }
//
//     }, 1000, {httpStatus: 200, data: {id: '173874928374'}, error: 'Not found'})
// })
//
// prom
//     .then(res => {
//         console.log('res', res)
//         throw new Error('new Error')
//         return new Promise((resolve, reject) => {
//             setTimeout((response) => {
//                 if(response.httpStatus >= 200 && response.httpStatus < 400) {
//                     resolve(response.data);
//                 }else{
//                     reject(response.error)
//                 }
//
//             }, 1000, {httpStatus: 200, data:{ id: 'jewji11jo', count: 'BY77129847982745'}, error: {}})
//         })
//     })
//     .catch(err => {
//             console.log('err', err)
//     })
//     .then( res2 => {
//         console.log('res2', res2)
//     })
//     .catch(err => { //catch смотрит до предыдущего catch
//         console.log('err', err)
//     })
//
// // res { id: '173874928374' }
// // err Error: new Error
// // res2 undefined


//EXAMPLE 6
// console.log('START')
// let prom = new Promise((resolve, reject) => { //консруктор промиса синхронный
//     console.log('START PROMISE')
//     setTimeout((response) => { //setTimeout асинхронный
//         console.log('START SETTIMEOUT')
//         if(response.httpStatus >= 200 && response.httpStatus < 400) {
//             resolve(response.data); // меняет состояние объекта, далее у объекта вызываются встроенные методы; аргументы приходят методу then
//             console.log('1', prom)
//         }else{
//             reject(response.error)
//         }
//
//     }, 1000, {httpStatus: 200, data:{userName: 'kate', id: 'jewji11jo', status: 'active'}, error: {}})
//     console.log('END PROMISE')
// })
// console.log('MIDDLE')
// prom //асинхронный
//     .then(console.log) //готовый коллбэк
//
// console.log('END')
//
// // START
// // START PROMISE
// // END PROMISE
// // MIDDLE
// // END
// // START SETTIMEOUT
// // 1 Promise { { userName: 'kate', id: 'jewji11jo', status: 'active' } }
// // { userName: 'kate', id: 'jewji11jo', status: 'active' }

//EXAMPLE finally

// Promise.resolve(10)
//     .finally(() => {console.log('finally 1')
//     return 1005050
//     })
//     .then(console.log)
//     .finally(()=> {console.log('finally 2')})
//     .catch(console.log)
//     .finally(() => console.log('finally 3'))
//
// // finally 1
// // 10
// // finally 2
// // finally 3


//потеря данных
// Promise.resolve(10)
//     .finally(() => {console.log('finally 1')
//       throw 9000
//     })
//     .then(console.log)
//     .finally(()=> {console.log('finally 2')})
//     .catch(()=> console.log('catch'))
//     .finally(() => console.log('finally 3'))
//
// // finally 1
// // finally 2
// // catch
// // finally 3


//ASYNC AWAIT

// console.log('START')
// async function f() { //f = async() => {}
//     //такая функция всегда возращает объект промиса
//     //функция работает синхронно пока не произойдет асинхронность
//
//     console.log('MIDDLE')
// }
// f()
// console.log('END')
//
// // START
// // MIDDLE
// // END


// console.log('START')
// async function f() {
//     console.log('START F')
//     const response = await new Promise((resolve, reject) => {console.log('IN PROMISE')});
//     //промис не поменял состояние с pending
//     //await останавливает выполнение асинхронного кода в функции, но не останавливает выполнение кода вообще
//     //код выходит из места вызова и продолжает выполнять весь синхронный код, который есть
//     //если мироси зарезолвится, возвращается к коду - это микротаска
//
//     console.log('MIDDLE')
// }
// f()
// console.log('END')
//
// // START
// // START F
// // IN PROMISE
// // END


// console.log('START')
// async function f() {
//     console.log('START F')
//     const response = await new Promise((resolve, reject) => {
//         console.log('IN PROMISE')
//         reject()
//
//     });
//     console.log('MIDDLE')
// }
// f()
// console.log('END')
//
// // START
// // START F
// // IN PROMISE
// // END
// // // code: 'ERR_UNHANDLED_REJECTION' - не обработали



// console.log('START')
// async function f() {
//     try {
//         console.log('START F')
//         const response = await new Promise((resolve, reject) => {
//             console.log('IN PROMISE')
//             reject('!!!!!!')
//
//         });
//         console.log('MIDDLE')
//     } catch (error) {
//         console.error(error)
//     }
// }
// f()
// console.log('END')
//
// // START
// // START F
// // IN PROMISE
// // END
// // !!!!!!


// console.log('START')
// async function f() {
//     try {
//         console.log('START F')
//         const response = await new Promise((resolve, reject) => {
//             console.log('IN PROMISE')
//             resolve('!!!!!!')
//
//         });
//         console.log('MIDDLE')
//     } catch (error) {
//         console.error(error)
//     }
// }
// f()
// console.log('END')
//
// // START
// // START F
// // IN PROMISE
// // END
// // MIDDLE


//EXAMPLE
//Task 1

// setTimeout( ()=> console.log(1), 0);
// console.log(2);
// ( () => console.log(3))();
// Promise.resolve(console.log(4)); // 4 поместится в промис

//resolve это функция которая в качестве аргумента принимает console.log(4), которая фунцкия и приняла аргумент 4
//console.log(4) - отработает синхронно, результат undefined уходит в качестве аргумента resolve, дальше создается промис resolve со значением undefined

// 2
// 3
// 4
// 1

// 1.setTimeout(() => console.log(1), 0):
// •  Этот код ставит функцию в очередь на выполнение после всех синхронных операций, даже если задержка равна 0. Поэтому 1 будет выведено позже.
// 2.console.log(2):
// •  Этот вызов выполняется синхронно и сразу выводит 2 в консоль.
// 3.(() => console.log(3))():
// •  Это немедленно вызываемая функция (IIFE), которая синхронно выводит 3 в консоль.
// 4.Promise.resolve(console.log(4)):
// •  Сначала выполняется console.log(4), который синхронно выводит 4 в консоль.
// •  Затем промис разрешается, но так как нет then или catch, это не влияет на вывод.


// setTimeout( ()=> console.log(1), 0);
// console.log(2);
// ( () => console.log(3))();
// Promise.resolve(console.log(4))
//     .then( res => console.log(res))
//
// // 2
// // 3
// // 4
// // undefined
// // 1


// setTimeout( ()=> console.log(1), 0);
// console.log(2);
// ( () => console.log(3))();
// Promise.resolve(() => {console.log(4)})
//     .then( res => console.log(res))
//
// // 2
// // 3
// //     [Function (anonymous)]
// // 1


// setTimeout( ()=> console.log(1), 0);
// console.log(2);
// ( () => console.log(3))();
// Promise.resolve(2+3)
//     .then( res => console.log(res))
//
// // 2
// // 3
// // 5
// // 1


//TASK2
// new Promise ( ( resolve, reject ) => { //конструтор промиса работает синхронно
//     console.log(1)
// });
// new Promise ( ( resolve, reject ) => {
//     setTimeout( () => console.log(2), 0)
// });
// Promise.resolve(setTimeout( () => console.log(3), 0));
// console.log(4);
// Promise.reject(console.log(5))
//     .then(res => console.log(res))
//     .catch( err => console.log(6));
//
// // 1
// // 4
// // 5
// // 6
// // 2
// // 3
//

//TASK
// new Promise ( ( resolve, reject ) => { //конструтор промиса работает синхронно
//     console.log(1)
// });
// new Promise ( ( resolve, reject ) => {
//     setTimeout( () => console.log(2), 0)
// });
// Promise.resolve(setTimeout( () => console.log(3), 0));
// console.log(4);
// Promise.resolve(console.log(5))
//     .then(res => console.log(res))
//     .catch( err => console.log(6));
// 1
// 4
// 5
// undefined
// 2
// 3



//TASK 3
// (function(){
//     setTimeout( ()=> console.log(1), 100)
// })();
// console.log(2);
// new Promise( ( resolve, reject ) => {
//     setTimeout( ()=> console.log(3), 50)
// })
//
// function f(){
//     console.log(4)
// }
//
// Promise.resolve(console.log(5))
//     .then(()=> console.log(6))
//
// console.log(7)
//
// // 2
// // 5
// // 7
// // 6
// // 3
// // 1


// (function(){
//         setTimeout( ()=> console.log(1), 100)
//     })();
// console.log(2);
// new Promise( ( resolve, reject ) => {
//     setTimeout( ()=> console.log(3), 50)
// })
//
// function f(){
//     console.log(4)
// }
//
// Promise.resolve(() => {console.log(5)})
//     .then(()=> console.log(6))
//
// console.log(7)
//
//
// // 2
// // 7
// // 6
// // 1
// // 3


//TASK 4

// function f(num){
//     console.log(num)
// };
// Promise.resolve(1)
//     .then(f);
//
// (function (){
//     console.log(2)
// })();
//
// console.log(3);
//
// new Promise( (resolve,reject) => {
//     console.log(4)
// })
//
// setTimeout(f, 0, 5) //третьим аргументом перадаем аргумент для коллбэка
//
//
// // 2
// // 3
// // 4
// // 1
// // 5


//TASK 5

// (function(){
//         setTimeout( ()=> console.log(1), 100)
//     })();
// console.log(2);
//
// let i = 0;
// while(i<5000000000){ //код тут остановится
//     i++
// }
//
// new Promise( ( resolve, reject ) => {
//     setTimeout( ()=> console.log(3), 50)
// })
//
// function f(){
//     console.log(4)
// }
//
// Promise.resolve(console.log(5))
//
// // 2
// // 5
// // 1
// // 3


//TASK 6

// async function sleep(ms){ //фунцкия наружу выбрасывает промис resolve
//     return new Promise((resolve,reject)=>{
//         setTimeout( ()=> {
//             resolve()
//             console.log(ms)
//         }, ms*100)
//     });
// }
//
// async function show(){
//     await sleep(3);
//     await sleep(2);
//     await sleep(1);
// }
// show()
//
// // 3
// // 2
// // 1


//TASK 7

// const pr1 = Promise.resolve(10)
// const pr2 = Promise.resolve(0)
//
// pr1
//     .then( res => {
//         console.log(res)
//         return res + 2
//     })
//     .then( res => {
//         console.log(res)
//         return res + 2
//     })
//     .then( res => {
//         console.log(res)
//         return res + 2
//     })
// pr2
//     .then( res => {
//         console.log(res)
//         return res + 1
//     })
//     .then( res => {
//         console.log(res)
//         return res + 1
//     })
//     .then( res => {
//         console.log(res)
//         return res + 1
//     })
//
// // 10
// // 0
// // 12
// // 1
// // 14
// // 2


// Task 01
// Создайте промис, который постоянно находиться в состоянии pending.
// В конструкторе промиса выведите в консоль сообщение "Promise is created".


// Task 02
// Создайте промис, который после создания сразу же переходит в состояние resolve
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль


// Task 03
// Создайте промис, который после создания сразу же переходит в состояние rejected
// и возвращает строку 'Promise Error'
// Получите данные промиса и выведите их в консоль


// Task 04
// Создайте промис, который переходит в состояние resolved через 3с.
// (Используйте setTimeout)
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль


// Task 05
// Создайте литерал объекта handlePromise со следующими свойствами:
// promise, resolve, reject, onSuccess, onError
// Проинициализируйте первые три свойства null,
// а последние два функциями, которые принимают один параметр и выводят
// в консоль сообщения: первая - `Promise is resolved with data: ${paramName}`
// вторая - `Promise is rejected with error: ${paramName}`
// Создайте три обработчика события click для кнопок "Create Promise", "Resolve Promise", "Reject Promise".
// Первый обработчик, создает промис, заполняет первые три свойства,
// описаного выше объекта: свойство promise получает новый созданный промис,
// свойства resolve и reject получают ссылки на соответствующие функции
// resolve и reject. Следующие два обработчика запускают методы resolve и reject.


// Task 06
// Создайте промис, который через 1 с возвращает строку "My name is".
// Создайте функцию onSuccess, которая получает один параметр,
// прибавляет к нему Ваше имя и возвращает новую строку из функции
// Создайте функцию print, которая выводит в консоль значение своего параметра
// Добавьте два метода then и передайте созданные функции.


// Task 7
// Создайте три промиса. Первый промис возвращает объект { name: "Anna" } через 2с,
// второй промис возвращает объект {age: 16} через 3 с, а третий {city: ''} через 4с.
// Получите результаты работы промисов, объедините свойства объектов
// и выведите в консоль {name, age, city}



//ASYNC AWAIT
// async function f() {
//     try {
//         const response = await new Promise ( (res, rej) => {
//             res('resolve')
//         })
//         console.log(response)
//     } catch (error) {
//         console.log(error)
//     }
// }
//
// f()


//TASK
// setTimeout(()=> {
//     console.log(1)
// }, 0);
// console.log(2);
// (()=> console.log(3))();
// Promise.resolve(console.log(4)); //console.log(4) отбработает синхронно, результат console.log(4) уходит в качетве аргумента resolve, дальше создается промис
// //resolve - это метод, это функция - принимает аргумент, в качестве аргумента console.log(4), а console.log(4) - это функция которая приняла аргумент 4
// //нельзя отдать вызов функции в качестве аргумента
//
// //результат console.log(4) это undefined, undefined уходит в качестве аргумента resolve-у, resolve создает промис resolve со значением undefined
//
// //2
// // 3
// // 4
// // 1





