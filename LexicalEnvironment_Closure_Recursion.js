// globalLE

// const globalLE = {
// 	environmentRecords: {car: 'bmw'},
// 	outer: null //ссылка на внеш лексич окружение
// }


//объект лексического окружения создается в момент ВЫЗОВА ФУНКЦИИ
// ---------------------------

// // globalLE {} --> null

// let car = "bmw"; // globalLE {car: 'bmw'} --> null
//
// function startEngine() {
// 	// startEngineLE {} --> ссылка будет ссылаться на globalLE
// 	// const car = 'toyota'
// 	const foo = () => {
// 		// {} --> ссылка outer будет ссылаться на startEngineLE
// 		console.log(`Start ${car}`);
// 	}
// 	foo() // создаться внутренний объект лексичего окружения
//   console.log(`Start ${car}`);
// } // globalLE {car: 'bmw'; startEngine: func} --> null
// // куча - функции, ссылки
//
// car = "audi"; // globalLE {car: 'audi'; startEngine: func} --> null
//
// startEngine(); //

//------------------------------

//globalLE {startEngine: func, car2: undefined} --> null // на момент старта

// startEngine();
//         // car1 - Cannot access 'car1' before initialization
//         // car2 - Start undefined
//
// let car1 = "bmw";
// var car2 = "kia"; //область видимости - функциональная
//
// function startEngine() { // Function Declaration, может быть вызвана раньше, чем она объявлена
// 	// startEngineLE {}
//   console.log(`Start ${car2}`);
// 	var foo
// }
//
// // for() {
// // 	var bar // будет в глобальном лексич окружении (поэтому лучше не использовать), выходит из блочной видимости
// // }
//
// const stopEngine = () => {}; // Function Expression, функция создаётся в правой части «выражения присваивания», создаётся, когда выполнение доходит до него, и затем уже может использоваться
// stopEngine()

// ---------------------------

//globalLE {startEngine: func, car2: undefined} --> null

// startEngine();
//
// let car1 = "bmw"; // globalLE {startEngine: func, car2: undefined, car1: 'bmw' } --> null
// // startEngine();
// var car2 = "kia"; // globalLE {startEngine: func, car2: 'kia', car1: 'bmw' } --> null
//
// // stopEngine()
//
// function startEngine() {
//   // startEngineLE{} --> globalLE // ссылка на внеш лексич окружении создается в момент ОБЪЯВЛЕНИЯ
//   // const car = 'toyota'
//   console.log(`Start ${car1}`);
// } // globalLE {car: 'bmw'; startEngine: func} --> null
//
// const stopEngine = function () {}; // globalLE {startEngine: func, car2: 'kia', car1: 'bmw', stopEngine: func } --> null
//
// car1 = "audi"; // globalLE {startEngine: func, car2: 'kia', car1: 'audi', stopEngine: func } --> null
//
// startEngine(); //
// startEngine(); //при втором вызове создается новый объект лексического окружения
// stopEngine();

// ---------------------------

// globalLE {} --> null
// let count = 0;
// const couterCreator = () => {
//   // couterCreatorLE1 {} --> globalLE
//   // couterCreatorLE2 {} --> globalLE
//   // let count = 0;
//
//   return () => {
//     // {count: 1} --> couterCreatorLE1
//     // {count: 1} --> couterCreatorLE1
//     // {} --> couterCreatorLE1
//
//     // {} --> couterCreatorLE2
//     // {} --> couterCreatorLE2
//     // {} --> couterCreatorLE2
// 		// let count = 0;
//     console.log(++count);
//   };
// };
//
// const counter1 = couterCreator(); // globalLE {counter: func} --> null //в counter1 будет ссылка на функцию
// const counter2 = couterCreator(); // globalLE {counter: func} --> null
//
// counter1();
// counter1();
// counter1();
//
// counter2();
// counter2();
// counter2();

// ---------------------------

// 2(4) --> 2 * 2(3) --> 2 * 2 * 2(2) --> 2 * 2 * 2 * 2(1)

// globalLE {pow: func}

// const pow = (x, n) => {
// 	// powLE{x: 2, n: 3} --> globalLE
//   if (n === 1) {
//     return x;
//   } else {
//     return x * pow(x, n - 1);
//   }
// };
//
// console.log(pow(2, 4)); // 8

// const a = () => {}

// const b = () => {
// 	a()
// }

// const c = () => {
// 	b()
// }

// c()

// ---------------------------

// 5(!) --> 5 * 4(!) --> 5 * 4 * 3(!) --> 5 * 4 * 3 * 2(!) --> 5 * 4 * 3 * 2 * 1(!)

// const f = (n) => {
//   if (n === 1) {
//     return n;
//   } else {
//     return n * f(n - 1);
//   }
// };
//
// console.log(f(6));

// ---------------------------

// Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.
// function sumTo(n) { /*... ваш код ... */ }
// console.log( sumTo(100) );

// function sumTo(n) {
//   if (n === 1) {
//     return n;
//   } else {
//     return n + sumTo(n - 1);
//   }
// }

// console.log(sumTo(100));

// ------------------------------

// 1791 / 10 = 179.1 (1) --> 17.9 (9) --> 17 / 10 = 1.7 (7) --> 1

// function sumOfNumbers(x) {
//     if (x < 10) {
//         return x;
//     } else {
//         return (x % 10) + sumOfNumbers(Math.floor(x / 10));
//     }
// }
//
// console.log(sumOfNumbers(1793));

// 1)  1793 % 10 = 3     Math.floor(1793 / 10) = 179      Результат: 3 + sumOfNumbers(179)
// 2)  179 % 10 = 9      Math.floor(179 / 10) = 17        Результат: 9 + sumOfNumbers(17)
// 3)  17 % 10 = 7       Math.floor(17 / 10) = 1          Результат: 7 + sumOfNumbers(1)
// 4) 1 < 10, поэтому функция возвращает 1

// •  1
//
// •  7 + 1 = 8
//
// •  9 + 8 = 17
//
// •  3 + 17 = 20


/////////////////////////////////////////////////////////////////////////////////////////////
// ANOTHER LESSON

// EXAMPLE - 1
// let globalScope = {
//     outherScope: null,
//     f: 'Function',
//     a: 10,
// }
//
// let a = 10;
//
// function f(){
//     let fScope = {
//         outerScope: globalScope,
//     }
//     console.log(a)
//     console.log(b) //undefined
//     var b = 100
// }
//
// // как это выглядит:
// // var b; // Поднятие объявления переменной
// // console.log(a); // Выводит 10
// // console.log(b); // Выводит undefined
// // b = 100; // Инициализация переменной
//
// f()


//EXAMPLE - 2

// let globalScope = {
//     outherScope: null,
//     f: 'Function',
//     a: 10
// }
//
// let a = 10;
// function f(){
//     let fScope = {
//         outerScope: globalScope,
//         i: 100, //undefined -> 50 -> 100
//         inner: 'Function',
//     }
//
//     console.log(a);
//     var i = 50;
//
//     function inner(){
//         let innerScope = {
//             outerScope: fScope,
//         }
//         i += 50
//         console.log(i)
//         console.log(a);
//     }
//
//     inner();
// }
//
// f()
//console.log(i) //error

//вывод
// 10
// 100
// 10


// //EXAMPLE 3
// let globalScope = {
//     outherScope: null,
//     f: 'Function',
//     someFunc: 'Function', // undefined -> 'Function'
//     someFunc2: 'Function',
// }
//
// function f(arg){
//     let fScope = {
//         outerScope: globalScope,
//         arg: 160, // undefined -> 100 -> 110 -> 130 -> 160
//         inner: 'Function',
//     }
//
//     let fScope2 = {
//         outerScope: globalScope,
//         arg: 1000, //
//         inner: 'Function',
//     }
//
//     function inner(arg2){
//         let innerScope = {
//             outerScope: fScope,
//             arg2: 10 //undefined -> 10
//         }
//
//         let innerScope2 = {
//             outerScope: fScope,
//             arg2: 20 //undefined -> 20
//         }
//
//         let innerScope3 = {
//             outerScope: fScope,
//             arg2: 30 //undefined -> 30
//         }
//
//         let inner2Scope1 = {
//             outerScope: fScope2,
//             arg2: 300 //undefined -> 30
//         }
//
//         arg += arg2
//         console.log('arg ', arg)
//     }
//
//     return inner //ссылка на функцию
// }
//
// var someFunc = f(100)
// someFunc(10) // вызывается функция inner
// someFunc(20) // будет создавать новое лексическое окружение для inner
// someFunc(30)
//
//
// var someFunc2 = f(1000)
// someFunc2(300)
//
// //RESULT
// // arg  110
// // arg  130
// // arg  160
// // arg  1300


//EXAMPLE - 4
// let globalScope = {
//     outherScope: null,
//     f: 'Function',
//     a: 10,
//     s: 'Function',
// }
//
// let a = 10;
//
// function f() {
//     let fScope = {
//         outerScope: globalScope,
//         a: 100, //undefined -> 50 -> 100
//         inner: 'Function',
//     }
//     var a = 50
//     console.log(a)
//
//
//     function inner() {
//         let innerScope = {
//             outerScope: fScope,
//         }
//         a += 50
//         console.log(a);
//     }
//
//    return  inner
// }
//
// let s  = f();
// s()
// console.log(a);
//
//
// //RETURN
// // 50
// // 100
// // 10

// Task 01
// Реализовать функцию sum которая суммирует 2 числа следующим образом sum(3)(6) === 9

// function sum(arg){
//     function dopSum(arg2){
//         console.log(arg + arg2);
//     }
//     return dopSum
// }
// sum(3)(6)

// function sum2(arg){
//     return function (arg2){
//         return arg + arg2
//     }
// }
//
// console.log(sum2(2)(4))


//не создается замыкание для call

var a = 500;

function someFunc(callback){
    let a = 10;
    return callback;
}

const call = (arg) => {
    console.log(a);
    console.log(arg)
}

console.log(someFunc(call)(6))








