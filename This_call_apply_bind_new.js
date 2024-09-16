'use strict'

//global scope
//console.log(this) //Window - вне зависимости от режима

//function
//arrow function

// const arrowFunc = () => {
//     console.log(this) //Window - вне зависимости от режима, ссылается на глобальный объект window
// } // смотрим на то где инициализирована
//      стрелочная функция не имеет своего собственного this, смотрит на глобальное лексическое окружение
//      за что первое сможет зацепиться
//
// arrowFunc()
//---------------
// function foo() {
//     const arrowFunc = () => {
//         console.log(this)
//     }
//
//     arrowFunc()
// }
//
// foo() //undefined
//-----------------

// function foo() {
//     console.log(this) //undefined в строгом режиме ничего не подставляется
//     //в нестрогом режиме будет window
// }
// foo() //в момент вызова подставляет глобальный объект window
               //ссылается на то, что слева от точки

//-------------------

// let car = {
//     brand: 'bmw',
//     startEngine() {
//         console.log(`start ${car.brand}`);
//     }
// }
//
// const car2 = car;
// car = null;
//
// car2.startEngine() //Cannot read properties of null (reading 'brand')

//------------------------
// let car = {
//     brand: 'bmw',
//     startEngine() {
//         console.log(`start ${this.brand}`);
//     }
// }
//
// const car2 = car;
// car = null;
//
// car2.startEngine() //start bmw

//-------------------

// function startEngine() {
//     console.log(`start ${this.brand}`); //для универсальности
//     //будет работать вне зависимости контекста вызова
// }
//
// const car1 = {
//     brand: 'bmw'
// }
// const car2 = {
//     brand: 'kia'
// }
//
// car1.f = startEngine
// car2.f = startEngine
//
// car1.f(); //start bmw
// car2.f(); //start kia

//-----------------------
// var brand = 'toyota'
//
// let car = {
//     brand: 'bmw',
//     startEngine: () => {
//         console.log(`start ${this.brand}`);
//     }
// }
//
// car.startEngine(); //start undefined (window - лексич окружение)

//--------------------
//call, apply, bind -- переопрделить контекст вызова

// let car = {
//     brand: 'bmw',
//     speed: 200,
//     startEngine () {
//         console.log(`start ${this.brand}`);
//     }
// }
// const scooter = {
//     brand: 'honda',
//     speed: 60,
// }

// car.startEngine() //start bmw
//
// car.startEngine.call(scooter); //start honda
// //call -- переопределяет зха первым аргументом
//
// car.startEngine.apply(scooter); //start honda

//-----------------------

// let car = {
//     brand: 'bmw',
//     speed: 200,
//     showMaxSpeed (a, b) {
//         console.log(this.speed + a + b);
//     }
// }
// const scooter = {
//     brand: 'honda',
//     speed: 60,
// }
//
// // car.showMaxSpeed.call(scooter, 10, 20); //90
// // car.showMaxSpeed.apply(scooter, [10, 20]); //90
//
//
// car.showMaxSpeed.bind(scooter, 10, 20) () //90
// //bind - возвращает функцию обертку

// ---------------------

//  let car = {
//     brand: 'bmw',
//     speed: 200,
//     showMaxSpeed () {
//         console.log(this.speed );
//     }
// }
// const scooter = {
//     brand: 'honda',
//     speed: 60,
// }
// const ferrari = {
//     brand: 'ferrari',
//     speed: 300,
// }
//
//
// car.showMaxSpeed.bind(scooter).call(ferrari) //60
// //подменить контекст можно только один раз

//-------------------------

// var speed = 100;
//
// let car = {
//     brand: 'bmw',
//     speed: 200,
//     showMaxSpeed: () =>{
//         console.log(this.speed );
//     }
// }
// const scooter = {
//     brand: 'honda',
//     speed: 60,
// }
// const ferrari = {
//     brand: 'ferrari',
//     speed: 300,
// }
//
//
// car.showMaxSpeed.bind(scooter).call(ferrari) //100
// //для стрелочных функций нельзя переопределить

//--------------------
//ПОТЕРЯ КОНТЕКСТА

//  const car = {
//     brand: 'bmw',
//     speed: 200,
//     showMaxSpeed () {
//         console.log(this.speed );
//     }
// }
//
// //setTimeout( car.showMaxSpeed, 2000); //undefined
// //setTimeout( car.showMaxSpeed.bind(car), 2000); //200
// setTimeout( () => car.showMaxSpeed(), 1000); //200

//ФУНКЦИИ КОНСТРУКТОРЫ

//для создания однотиных объектов

// const car1 = {
//     brand: 'bmw'
// }
// const car2 = {
//     brand: 'kia'
// }
// const car3 = {
//     brand: 'audi'
// }

// function CarCreator(brand){ //функция конструктор, условно с большой буквы
//     this.brand = brand;
// }
//
// const car1 = new CarCreator('bmw');
// //в оперативной памяти создается пустой объект,
// // далее создаем свойство brand
// // объект неявно возвращается
// console.log(car1) //CarCreator { brand: 'bmw' }


// --------------------------

// const person = {
//   firsname: "Alice",
//   friends: ["Bob", "Charlie"],
//   printFriends() {
//     this.friends.forEach(function (friend) {
//       console.log(`${this.firsname} knows ${friend}`);
//     });
//   },
//   printFriendsArrow() {
//     // this
//     this.friends.forEach((friend) => {
//       console.log(`${this.firsname} knows ${friend}`);
//     });
//   },
// };

// person.printFriends(); // 'Alice, knows bob', 'Alice, knows Charlie'

// person.printFriendsArrow(); // 'undefined, knows bob', 'undefined, knows Charlie'

// ------------------------------------

// const anotherPerson = {
//   name: "Liam",
// };
// const person = {
//   name: "Emma",
//   greet() {
//     console.log(`Hello, my name is ${this.name}`);
//   },
// };

// // const anotheranotherPerson = {
// //   name: "Bob",
// // };

// const greet = person.greet;
// greet(); // ''
// greet.call(anotherPerson); // Liam
// greet.bind(anotherPerson)(); // Liam
// // greet.call(anotherPerson);

// ------------------------------------

// "use strict";

// const person = {
//   name: "Oliver",
//   outerGreet() {
//     console.log(`Outer hello, my name is ${this.name}`);

//     function innerGreet() {
//       console.log(`Inner hello, my name is ${this.name}`);
//     }

//     innerGreet();
//   },
// };

// person.outerGreet();

// const counter = {
//     count: 0,
//     increment() {
//         this.count++;
//         console.log(this.count);
//     },
//     delayedIncrement() {
//         setTimeout(function () {
//             console.log(this.count);
//         }, 1000);
//     },
//     delayedIncrementWithBind() {
//         setTimeout(
//             function () {
//                 console.log(this.count);
//             }.bind(this),
//             1000
//         );
//     },
//     delayedIncrementWithArrow() {
//         setTimeout(() => {
//             console.log(this.count);
//         }, 1000);
//     },
// };
// counter.increment(); // Что выведет?
// counter.delayedIncrement(); // Что выведет?
// counter.delayedIncrementWithBind(); // Что выведет?
// counter.delayedIncrementWithArrow(); // Что выведет?












