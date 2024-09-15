//subscriber=== handler === listener === watcher === observer Паттер Наблюдатель

// const addUser = () => {
//     // add user logic
// }
// store.subscribe(function subscriber() {}) //стор изменился
// button.addEventListener('click', () => {}) //кнопка была нажата
// promise.then(function subscriber() {}) //промис зарезолвился
//
// app.get('users', function subscriber() {})  //роут был вызван
// fs.watch('test.txt', function subscriber() {}) //файл был изменен
// websocket.on('message', function subscriber() {}) //сообщение было получено


const button = { // кастомная кнопка
    _subscribers: {
        click: [], //храним обработчики, кот захотят подписаться на событие click
        focus: []
    },

    click() {
        this._subscribers['click'].forEach(s => s())
    },

    focus() {
        this._subscribers['focus'].forEach(s => s())
    },

    addEventListener(eventName, subscriber) { //добавить в подписки subscriber
        if (this._subscribers[eventName]) {
            this._subscribers[eventName].push(subscriber)
        }
    },

    removeEventListener(eventName, subscriber) {
        this._subscribers[eventName] = this._subscribers[eventName].filter(s => s !== subscriber)
    }
}

const handler = () => {
    console.log('click')
}
button.addEventListener('click', handler) //кнопка была нажата


button.click() //все кто есть в массиве, будут вызваны

button.removeEventListener('click', handler) //кнопка была нажата
console.log('remove')
button.click()


class Publisher {
    subscribers= {}
    subscribe(eventName, subscriber) {
        if (!this.subscribers[eventName]) {
            this.subscribers[eventName] = [];
        }
        this.subscribers[eventName].push(subscriber);
    }
    unsubscribe(eventName, subscriber) {
        if (!this.subscribers[eventName]) return;
        this.subscribers[eventName] = this.subscribers[eventName].filter(sub => sub !== subscriber);
    }
    publish(eventName, data) {
        if (!this.subscribers[eventName]) return;
        this.subscribers[eventName].forEach(subscriber => subscriber(data));
    }
}

const publisher = new Publisher()

function sendEmail(user) {
    console.log(`Отправляем email для пользователя: ${user.name}`);
}

function sendSms(user) {
    console.log(`Отправляем email для пользователя: ${user.name}`);
}
function saveToDatabase(user) {
    console.log(`Сохраняем пользователя в базу данных: ${user.name}`);
}
function addMoney(user) {
    console.log(`Сохраняем пользователя в базу данных: ${user.name}`);
}

publisher.subscribe('UserCreated', sendEmail);
publisher.subscribe('UserCreated', saveToDatabase);
// publisher.subscribe('UserCreated', sendSms);
publisher.subscribe('UserCreated', addMoney);

publisher.subscribe('UserUpdated', () => {
    //юзер изменил имя
});

function createUser(name) {
    const user = { name };
    console.log('Пользователь создан!');
    publisher.publish('UserCreated', user);
}

function updatedUser(name) {
    const user = { name };
    console.log('Пользователь создан!');
    publisher.publish('UserUpdated', user);
}


//app.post('users', () => createUser(name))  //роут был вызван

/////////////////////////////////////////////////////

const smallDiv = document.querySelector('#small')
const mediumDiv = document.querySelector('#medium')
const bigDiv = document.querySelector('#big')
const link = document.querySelector('#linkId')

const handler2 = (event) => {
    event.stopPropagation() // остановить всплытие
    console.log('div clicked')
    console.log('div target', event.target.id) // кто событие инициировал
    console.log('div currentTarget', event.currentTarget.id) //тот кто вызвл handler
}




smallDiv.addEventListener('click', handler2)
mediumDiv.addEventListener('click', handler2)
bigDiv.addEventListener('click', handler2)

const handlerLink = (event) => {
    event.preventDefault() // отменить действие по умолчанию
    console.log('Link clicked')

}

link.addEventListener('click', handlerLink)