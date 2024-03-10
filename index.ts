const srt1: string = "1"
const id: number = 1
const bool: boolean = true
const undef: undefined = undefined
const nullish: null = null

// создать перменную useName тип строка 
// переменную userAge тип возраст
// married булевое значение
const userName: string = 'Vlad'
const userAge: number = 30
const isMarried: boolean = false

// const smth: any = null
// ИЗБЕГАТЬ ТИП ANY 
// всегда заменять any на более корректный тип данных

const sum = (a: number, b: number): number => a + b

sum(1, 2)

// создать функцию кот. принимает параметры пользователя и возвращ  одну строку со всеми его данными
const allUserData = (name: string, age: number, married:boolean): string => {
    return `My name is ${name} I am ${age} I am ${married ? '' : 'not' } married`
}
allUserData(userName, userAge, isMarried)

const logAllUserData = (name: string, age: number, married:boolean): void => {
    console.log(`My name is ${name} I am ${age} I am ${married ? '' : 'not' } married`)
}
// void -пустота
// void -->  для функций кот вовзращают undefined
logAllUserData(userName, userAge, isMarried)

const arr: number[] = [1, 2, 3]
const arrOfStrings: string[] = ['1', '2', '3']

const arrOfArray: number[][] = [[1, 2, 3], [1, 2, 4]]


const userData: {userName: string, userAge: number, isMarried: boolean} = {
    userName: 'Vlad',
    userAge:  30,
    isMarried: false
}

const showDataFromObj = (userObj: {userName: string, userAge: number, isMarried: boolean}): void => {
        console.log(userObj.userName, userObj.userAge, userObj.isMarried)
}

const showDataFromDestrObject = ({userName, userAge, isMarried}: {userName: string, userAge: number, isMarried: boolean}):void => {
        console.log(userName, userAge, isMarried)
}


const arrOfSmth = ["1", '2']
// arr массив строк
const toNumbers = (arr: string[]): number[] => {
return arr.map((el: string ) => Number(el))
}

const check = toNumbers(arrOfSmth)

console.log(check)


// TUPLES - что-то среднее между массивом и объектом
// {name: 'Ivan', age: 29}
const userDataTuple: [string, string, number] = ['Ivan', 'berlin', 29]
const data: [string, number, boolean] = ['Hello', 123, true];
const coordinates: [number, number] = [0.5, 0.7]

// первые два значения это числа а потом какое-то(не знаю точно) будет количество строк
const listOfProducts: [number, number, ...string[]] = [550, 10, 'apple', 'banana', 'orange']


const price: number | string = "100" // я объединяю два типа 
//  либо придет массив строк либо придет undefined т.е ничего
const images: string[] | undefined = ['htts://placeholde.img']
// пока нету данных у меня явно стоит null 
// но если какие-то данные придут то это будет число
const result: number | null = null


const urlCreator = (protocol: string, port: number | string): string => `${protocol}/127.0.0.1/${port}` 

urlCreator('https', 3000)
urlCreator('https', '3001')

// написать функцию modify 
// может принимать либо число либо строку 
// если тип строка то мы возвращ массив из символов строки
// а если число то возвращаем умнож число на два
const modify = (data: string | number): string[] | number =>  typeof data ===  'string' ? [...data] : data *=2

// Literal type = буквальный
// БУКВАЛЬНО ГОВОРЮ ЧЕМ МОЖЕТ БЫТЬ МОЯ ПРЕМЕННАЯ
const serverPort: 3000 | 3001 = 3001

const responseStatus: 'isLoading' | 'error' | "successful" = 'error'

type Colors = 'grey' | 'red' | 'green' // Literal type 
type Status = 'isLoading' | 'error' | "successful" // Literal type 

const returnColor = (status:  Status): Colors=> {
    switch (status ) {
        case 'isLoading':
            return 'grey'
        case 'error':
            return 'red'
        case 'successful':
            return 'green'
    }
}