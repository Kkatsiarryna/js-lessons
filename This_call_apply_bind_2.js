//'use strict'

//this - специально зарезервированное ключевое слово языка js
//которое в момент вычисления преобразуется в некотрую ссылку на объект

//create react app работает в сторогм режиме, потому что модули


//console.log('this: ', this) //this:  {} - в нестрогом режиме указывает на объект window
// в сторгом режиме undefined

///
// function f (){
//     console.log('this in f: ', this)
// }
//
// f() //this указывает на объект window

///
// let obj = {
//     name: 'Katya'
// }
// function f (){
//     console.log('this in f: ', this)
// }
//
// f() //this указывает на глобальный объект window
//
// obj.f = f //положили ссылку на функцию
//
// console.log(obj) //{ name: 'Katya', f: [Function: f] }
//
// obj.f() //this in f:  { name: 'Katya', f: [Function: f] }
//
// //Если function declaration и слева от нее есть точка и какой-то объект,
// //  то this в этой функции всегда будет указывать на объект


///
// let obj = { name: 'Katya' }
//
// let obj2 = { name: 'Lena' }
//
// function f (){
//     console.log('this in f: ', this)
// }
//
// obj.f = f
// obj2.f = obj.f
// obj2.f() //this in f:  { name: 'Lena', f: [Function: f] }

///
// let obj = {
//     name: 'Katya',
//     f() {
//         console.log('this in f: ', this);
//         (function inner(){
//             console.log('this in inner', this) ///объект window
//         })()
//     }
// }
//
// obj.f();
//
// // this in f:  { name: 'Katya', f: [Function: f] }
// // this in inner <ref *1> Object [global] {  ///объект window
// //     global: [Circular *1], ..........

///
// let obj = {
//     name: 'Katya',
//     f() {
//         console.log('this in f: ', this);
//         return function inner(){
//             console.log('this in inner', this) ///объект window
//         }
//     }
// }
//
// let obj2 = {name: 'Julia'}
//
// obj2.f = obj.f() //происходит добавление свойства объекту obj2, которое называется f значением которое является результат вызова функции f у объекта
// obj2.f() //присвается результат вызова функции f, поэтому inner
//
// // this in f:  { name: 'Katya', f: [Function: f] }
// // this in inner { name: 'Julia', f: [Function: inner] }
//
// console.log(obj2) //{ name: 'Julia', f: [Function: inner] }


///
// let obj = {
//     name: 'Katya',
//     f() {
//         console.log('this in f: ', this);
//         return function inner(){
//             console.log('this in inner', this) ///объект window
//         }
//     }
// }
//
// let obj2 = {name: 'Julia'}
//
// const outer = obj.f()
// outer()
//
// // this in f:  { name: 'Katya', f: [Function: f] }
// // this in inner <ref *1> Object [global] {
// //     global: [Circular *1], .........

///
// let obj = {
//     name: 'Katya',
//     f() {
//         console.log('this in f: ', this);
//         return function inner(){
//             console.log('this in inner', this) ///объект window
//         }
//     }
// }
//
// let obj2 = {name: 'Julia'}
// let obj3 = {
//     name: 'Lena',
//     innerObj: {
//         name: 'Bla'
//     }
// }
//
// obj3.innerObj.f = obj.f()
// obj3.innerObj.f()
//
// // this in f:  { name: 'Katya', f: [Function: f] }
// // this in inner { name: 'Bla', f: [Function: inner] }


////////////////////
//Отличие function declaration от стрелочной функции
//нет объекта прототипа (стрелка не может быть функцией конструктром)
//нет псевдомассива arguments
//нет собственного this
//не работают методы функции call, apply, bind

//у function declaration this считается каждый раз когда вызывается функция
//у стрелочной функции this считается один раз в момент ее определения

//
// const arrow = () => {
//     console.log('this in arrow', this)
// }
// arrow() //объект window


///
// let obj = {name: 'Julia'}
//
// const arrow = () => {
//     console.log('this in arrow', this) //this в момент опредления
// }
// arrow() //объект window
// obj.a = arrow
// obj.a()
//
// // this in arrow {}
// // this in arrow {}

///
let obj = {
    name: 'Julia',
    a: () => {
        console.log('this in arrow', this) //this в момент опредления
    }
}
//!!!!!!!! ОБЪЕКТ ОБЛАСТЬ ВИДИМОСТИ НЕ СОЗДАЕТ

obj.a() //this in arrow {}
//ссылается на объект window, потому что в момент определения стрелочная функция была в объекте,
//         а он не создает область видимости




















