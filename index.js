var srt1 = "1";
var bool = true;
var undef = undefined;
var nullish = null;
// создать перменную useName тип строка 
// переменную userAge тип возраст
// married булевое значение
var userName = 'Vlad';
var userAge = 30;
var isMarried = false;
// const smth: any = null
// ИЗБЕГАТЬ ТИП ANY 
// всегда заменять any на более корректный тип данных
var sum = function (a, b) { return a + b; };
sum(1, 2);
// создать функцию кот. принимает параметры пользователя и возвращ  одну строку со всеми его данными
var allUserData = function (name, age, married) {
    return "My name is ".concat(name, " I am ").concat(age, " I am ").concat(married ? '' : 'not', " married");
};
allUserData(userName, userAge, isMarried);
var logAllUserData = function (name, age, married) {
    console.log("My name is ".concat(name, " I am ").concat(age, " I am ").concat(married ? '' : 'not', " married"));
};
// void -->  для функций кот вовзращают undefined
logAllUserData(userName, userAge, isMarried);
var arr = [1, 2, 3];
var arrOfStrings = ['1', '2', '3'];
var arrOfArray = [[1, 2, 3], [1, 2, 4]];
var userData = {
    userName: 'Vlad',
    userAge: 30,
    isMarried: false
};
var showDataFromObj = function (userObj) {
    console.log(userObj.userName, userObj.userAge, userObj.isMarried);
};
var showDataFromDestrObject = function (_a) {
    var userName = _a.userName, userAge = _a.userAge, isMarried = _a.isMarried;
    console.log(userName, userAge, isMarried);
};
console.log('a');
console.log('b');
