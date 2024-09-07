// ---- ФУНКЦИЯ ГЕНЕРАТОР

// function * generateSalary(salary) {
//     yield salary + (salary / 100) * 10;
//     yield salary + (salary / 100) * 15;
//     return salary + (salary / 100) * 20;
// }
//
// const generator = generateSalary(1000);
// const result = generator.next(); //метод next для запуска функции генератора
// console.log(result); //{ value: 1100, done: false }
// console.log(result.value); //1100
//
// const result2 = generator.next();
// console.log(result2); //{ value: 1150, done: false }
// console.log(result2.value); //1150
//
// const result3 = generator.next();
// console.log(result3); //{ value: 1200, done: true }
// console.log(result3.value); //1200
//
// const result4 = generator.next();
// console.log(result4); //{ value: undefined, done: true }
// console.log(result4.value); //undefined

//
// function* generateSequence() {
//     yield 1;
//     yield 2;
//     yield 3;
// }
//
// let sequence = [0, ...generateSequence()];
//
// console.log(sequence) //[ 0, 1, 2, 3 ]

//------ Композиция генераторов

// function* generateSequence(start, end) {
//     for (let i = start; i <= end; i++) yield i;
// }
//
// function* generatePasswordCodes() {
//
//     // 0..9
//     yield* generateSequence(48, 57);
//
//     // A..Z
//     yield* generateSequence(65, 90);
//
//     // a..z
//     yield* generateSequence(97, 122);
//
// }
//
// let str = '';
//
// for(let code of generatePasswordCodes()) {
//     str += String.fromCharCode(code);
// }
//
// console.log(str) //0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz


//
// function* gen() {
//     // Передаём вопрос во внешний код и ожидаем ответа
//     let result = yield "2 + 2 = ?"; // (*)
//
//     console.log(result)
// }
//
// let generator = gen();
//
// let question = generator.next().value;// <-- yield возвращает значение
// console.log(question) //2 + 2 = ?
//
// generator.next(4); //4 //let result = 4


// function* gen() {
//     let ask1 = yield "2 + 2 = ?";
//
//     console.log(ask1); // 4
//
//     let ask2 = yield "3 * 3 = ?"
//
//     console.log(ask2); // 9
// }
//
// let generator = gen();
//
// console.log( generator.next().value ); // "2 + 2 = ?"
//
// console.log( generator.next(4)); // "3 * 3 = ?"
//
//
// console.log( generator.next(9).done ); // true


// 2 + 2 = ?
//     4
//     3 * 3 = ?
//         9
//         true











