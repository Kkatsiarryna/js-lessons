// const promiise1 = fetch('https://www.google.com')
//     //.then(res => res.json())
//     .then(data => console.log(data))
//     .catch( error => console.warn("ERROR", error))
//    .finally( () => console.log('Finished - 1 '));
//
// const promiise2 = fetch('https://api.github.com/users/kkatsiarryna')
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch( error => console.warn("ERROR", error))
//     .finally( () => console.log('Finished - 2'));
//
//
//   --------СТАТИЧЕСКОЕ МЕТОДЫ
// const otherPromise = Promise.all( [promiise1, promiise2]) // resolve, если все промисы resolve
//
// otherPromise.then( () => console.log('FINISHED'))
//     .catch( error => console.error("FAILED", error))


// const bigPromise = Promise.all([
//     fetch('https://bing.com/?query=js'),
//     fetch('https://google.com/?query=js'),
//     fetch('https://yahoo.com/?query=js'),
// ])
//
// bigPromise
//     .then(data => {
//         //console.log(data)
//         console.log(data[0].status)
//     })
//     .catch(err => {
//         console.log('CATCH ERROR', err.message)
//     })
//
// const bigPromise2 = Promise.allSettled([
//     fetch('https://googlesdf.com/?query=js'),
//     fetch('https://yahoodsf.com/?query=js'),
//     fetch('https://bing.com/?query=js'),
// ])
//
// bigPromise2.then(data => {
//     console.log('then', data)
// })


// const resolvedPromise = Promise.resolve(100);
// console.log(resolvedPromise) //Promise { 100 }
//
// resolvedPromise
//     .then( data => console.log(data))
//     .catch(err => console.warn(err)); //100
//
// const rejectPromise = Promise.reject({ message: 'Some error'});
// console.log(rejectPromise) //Promise { <rejected> { message: 'Some error' } }
//
//
// rejectPromise
//     .then( data => console.log(data))
//     .catch(err => console.warn(err)); //{ message: 'Some error' }


// const promiise2 = fetch('https://api.github.com/users/kkatsiarryna')
//
// const promiise2_2 = promiise2.then( data => {return 100})
//
// promiise2_2.then((data) => {console.log(data)}) //100
//

//-----------ЦЕПОЧКА ПРОМИСОВ
// fetch('https://api.github.com/users/kkatsiarryna')
//     .then(response => response.url) //https://api.github.com/users/kkatsiarryna
//     .then(data => console.log(data))
//
// const makeGithubRequest = () => {
//     // const pr = fetch('https://api.github.com/users/kkatsiarryna')
//     // const pr2 = pr.then(response => response.url)
//     // return pr2
//
//     return fetch('https://api.github.com/users/kkatsiarryna')
//             .then(response => response.json())
//             .then(data => data.login)
// }
//
// makeGithubRequest().then(data => console.log(data)) //Kkatsiarryna


// fetch('https://api.github.com/users/kkatsiarryna')
//     .then(response => response.json())
//     .then(data => {
//         console.log(data.login)
//         return 100
//     })
//     .then( number => {
//         console.log(number)
//         return { value: number + 1}
//     })
//     .then (obj => {
//         console.log(obj.value)
//         const pr = Promise.resolve(obj.value + 1);
//         return pr
//     })
//     .then (number => {
//         console.log(number)
//         return number + 1
//     })

// Kkatsiarryna
// 100
// 101
// 102


// ----------- ASYNC AWAIT

// async function main() {
//     const response = await fetch('https://api.github.com/users/kkatsiarryna');
//     const data = await response.json();
//     console.log(data.login);
// }
// main()


// ---------- СОЗДАНИЕ ПРОМИСОВ
// function getNumber(){
//     //const promise =  Promise.resolve(Math.random())
//
//     const promise = new Promise( (resolve, reject) => {
//         //reject("some error")
//         setTimeout( () => {
//             resolve(Math.floor(Math.random()*1000))
//         }, 1000 );
//     } )
//     return promise
// }
//
// getNumber().then(n => console.log(n))


// const wait = (seconds) => {
//     return new Promise(resolve => setTimeout(resolve, seconds));
// }
//
// async function run() {
//     await  wait(1000);
//     console.log(1)
//     await  wait(2000);
//     console.log(2)
//     await  wait(3000);
//     console.log(3)
// }
//
// run()


// fetch('https://api.github.com/users/kkatsiarryna')
//     .then(response => response.json())
//     .then(data => {
//         console.log(data.loginnnn)
//         return 100
//     })
//     .then( number => {
//         console.log(number)
//         return { value: number + 1}
//     })
//     .then (obj => {
//         console.log(obj.value)
//         const pr = Promise.resolve(obj.value + 1);
//         return a
//     })
//     .then (number => {
//         console.log(number)
//         return number + 1
//     })
//     .catch(err => console.log(err))

// undefined
// 100
// 101
// ReferenceError: a is not defined



//асинхронная функция возвращает промис

// const api = {
//     async save() {
//
//     },
//     async read(){
//         return {name: 'KATYA'} //прпомис резолвится этим значением
//     }
// }
//
// async function main() {
//     await api.save()
//     console.log('saved')
//     let data = await api.read()
//     console.log('data: ', data)
// }
//
// main()
//
// // saved
// // data:  { name: 'KATYA' }


// async function xxx() {
//     return 100
// }
// async function run() {
//     let a = xxx();
//     console.log(a)
// }
//
// run();
// //Promise { undefined } -- если xxx ничего не возвращает
// //Promise { 100 }
