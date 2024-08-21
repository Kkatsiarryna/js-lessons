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