const num: number = 1
const srt: string = "1"
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

const showDataFromObj = (userObj: {userName: string, userAge: number, isMarried: boolean}) => {
        console.log(userObj.userName, userObj.userAge, userObj.isMarried)
}

const showDataFromDestrObject = ({userName, userAge, isMarried}: {userName: string, userAge: number, isMarried: boolean}) => {
        console.log(userName, userAge, isMarried)
}