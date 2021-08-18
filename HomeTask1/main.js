// JavaScript source code
//������ 1:

//�������� �������, ������� ���������� ����� � ���� ������ ��������� ����� � ��������� �� 2 �� 20 ��������.������ ������ - ��������� ����� �������� ��������, ��������� ������� -
//��������� ����� ������� �������� ��� �����.

const generateRandom = (from, to) => {
    return Math.floor(Math.random() * (to - from + 1)) + from; // ������� ���������� ������ �� from, to
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


//    ������ 2:

//�������� �������, ������� ���������� ��������� ������ �� 8 �� 12 ��������.
//������ ������� �� ��������� �������� � ������� � ������ ��������, 
//���� � ����.�������� ~!@#$%^&* ()_ -+=
//� ������ ������ ���� ���� - ��:
//1 ������ �������� ��������
//1 ������ ������� ��������
//1 �����
//1 ����.������

const onClickGeneratePass = () => {

    const Login_MIN_LEN = 5;
    const Login_MAX_LEN = 9;
    const Login_SYMS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZbcdefghijklmnopqrstuvwxyz0123456789*/%@#';
    const Login_SYMS_LEN = Login_SYMS.length - 1;
    let Login = '';


    const Login_Lower = 'abcdefghijklmnopqrstuvwxyz'
    const Login_Lower_Leng = Login_Lower.length;

    const Login_Upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const Login_Upper_Leng = Login_Upper.length;

    const Login_Num = '0123456789'
    const Login_Num_Leng = Login_Num.length;

    const random_Upper = Math.floor(Math.random() * Login_Upper_Leng);
    const random_Num = Math.floor(Math.random() * Login_Num_Leng);
    const random_Lower = Math.floor(Math.random() * Login_Lower_Leng);

    const pwdLen = generateRandom(Login_MIN_LEN, Login_MAX_LEN);

    for (let i = 0; i < pwdLen; i += 1) {
        const rand = generateRandom(0, Login_SYMS_LEN);
        Login = `${Login}${Login_SYMS[rand]}`;
    }
    Login = `${Login_Upper[random_Upper]}${Login_Lower[random_Lower]}${Login_Num[random_Num]}${Login}`

    const randView = document.querySelector('.rand-pass');

    randView.innerText = Login;
}


document.querySelector('.rand-pass-gen').addEventListener('click', onClickGeneratePass);




//������ 3:

//�������� �������, ������� ��������� ������ ����������� ��������, ������ ��� �����, ������ ����� ��������� ������� � ���������� ��� �� �������.


const arr = ['dd', 75, 'heh', 81, 'tom', 96];

const randArr = (arr) => {
    arr.sort(() => Math.random() - 0.5);

}

randArr(arr);

const arrTextFun = () => {
    const arrText = document.querySelector('.rand-arr');
    arrText.innerText = arr;
}

document.querySelector('.but-rand-arr').addEventListener('click', arrTextFun)
//document.querySelector('.but-rand-arr').removeEventListener('click', arrTextFun);
