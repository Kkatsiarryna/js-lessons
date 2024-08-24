//типизация объектов
type ManType = {
    name: string
    height: number
}

type WomanType = {
    name: string
    age: number
}

const man: ManType = {
    name: 'Sasha',
    height: 1.8
}

const woman: WomanType = {
    name: 'Katya',
    age: 26
}

type PeopleType = ManType | WomanType

const people: Array<PeopleType> = [man, woman]

//типизация функций

let createMan = (name: string, height: number): ManType => {
    return {
        name,
        height
    };
}

let createMan2 = (obj: ManType): ManType => {
    return obj
}

////////

type CarType = {
    model: string
    year: number
    on: boolean
    turnOn: () => void
    //turnOn(): void
    rename: (model: string) => void
}
let car: CarType = {
    model: 'Reno Stepway',
    year: 2016,
    on: false,
    turnOn() {
        this.on = true;
    },
    rename(model) {
        this.model = model;
    }
}

type GarageType = {
    addCar: (car: CarType) => void
    logAllCarsNames: () => void
    getAllCars: () => Array<CarType>
}

let createGarage = (): GarageType => {
    let _cars:Array<CarType>  = [];
    return {
        addCar(car) {
            _cars.push(car);
        },
        logAllCarsNames() {
            console.log('Cars in the garage: ');
            _cars.forEach(c => console.log(c.model));
        },
        getAllCars() {
            return _cars;
        }
    }
}

export default  1;