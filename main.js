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

//�������� �������, ������� ���������� ��������� ������ �� 8 �� 12 ��������.������ ������� �� ��������� �������� � ������� � ������ ��������, 
//���� � ����.�������� ~!@#$%^&* ()_ -+=

//� ������ ������ ���� ���� - ��:

//1 ������ �������� ��������

//1 ������ ������� ��������

//1 �����

//1 ����.������




//document.querySelector('.rand-pwd-gen').addEventListener('click', onClickGeneratePwd);






//������ 3:

//�������� �������, ������� ��������� ������ ����������� ��������, ������ ��� �����, ������ ����� ��������� ������� � ���������� ��� �� �������.