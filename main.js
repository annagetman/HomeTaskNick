// JavaScript source code
//Задача 1:

//Напишите функцию, которая возвращает логин в виде строки случайной длины в диапазоне от 2 до 20 символов.Первый символ - латинская буква верхнего регистра, остальные символы -
//латинские буквы нижнего регистра или цифры.

const generateRandom = (from, to) => {
    return Math.floor(Math.random() * (to - from + 1)) + from; // функция возвращает рандом от from, to
}

const onClickGenerateLogin = () => {

    const Login_MIN_LEN = 1;
    const Login_MAX_LEN = 19;
    const Login_SYMS = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const Login_SYMS_LEN = Login_SYMS.length - 1;
    let Login = '';


    const Login_Upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const Login_Upper_Leng = Login_Upper.length;

    const random_Upper = Math.floor(Math.random() * Login_Upper_Leng);
  //  console.log(Login_Upper[random_Upper])

    const pwdLen = generateRandom(Login_MIN_LEN, Login_MAX_LEN);

    for (let i = 0; i < pwdLen; i += 1) {
        const rand = generateRandom(0, Login_SYMS_LEN);
        Login = `${Login}${Login_SYMS[rand]}`;
    }
    Login = `${Login_Upper[random_Upper]}${Login}`

    const randView = document.querySelector('.rand-login');

    randView.innerText = Login;
}


document.querySelector('.rand-login-gen').addEventListener('click', onClickGenerateLogin);







//    Задача 2:

//Напишите функцию, которая возвращает случайный пароль от 8 до 12 символов.Пароль состоит из латинских символов в верхнем и нижнем регистре, 
//цифр и спец.символов ~!@#$%^&* ()_ -+=

//В пароле должны быть хотя - бы:

//1 символ верхнего регистра

//1 символ нижнего регистра

//1 цифра

//1 спец.символ




//document.querySelector('.rand-pwd-gen').addEventListener('click', onClickGeneratePwd);






//Задача 3:

//Напишите функцию, которая принимает массив примитивных значений, делает его копию, мешает копию случайным образом и возвращает его из функции.