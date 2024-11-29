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
console.log('START')
let prom = new Promise((resolve, reject) => { //консруктор промиса синхронный
    console.log('START PROMISE')
    setTimeout((response) => { //setTimeout асинхронный
        console.log('START SETTIMEOUT')
        if(response.httpStatus >= 200 && response.httpStatus < 400) {
            resolve(response.data); // меняет состояние объекта, далее у объекта вызываются встроенные методы; аргументы приходят методу then
            console.log('1', prom)
        }else{
            reject(response.error)
        }

    }, 1000, {httpStatus: 200, data:{userName: 'kate', id: 'jewji11jo', status: 'active'}, error: {}})
    console.log('END PROMISE')
})
console.log('MIDDLE')
prom //асинхронный
    .then(console.log) //готовый коллбэк

console.log('END')

// START
// START PROMISE
// END PROMISE
// MIDDLE
// END
// START SETTIMEOUT
// 1 Promise { { userName: 'kate', id: 'jewji11jo', status: 'active' } }
// { userName: 'kate', id: 'jewji11jo', status: 'active' }


























