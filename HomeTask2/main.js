// JavaScript source code
//������ 1:

//�������� �������, ������� ��������� ����� ������������� ����� � ���������� ��� � ���� ������� ����� � ������� ������.


const getRomaNum = (num) => {
    const romaNum = new Map();

    romaNum.set(1, 'I');
    romaNum.set(2, 'II');
    romaNum.set(3, 'III');
    romaNum.set(4, 'IV');
    romaNum.set(5, 'V');
    romaNum.set(6, 'VI');
    romaNum.set(7, 'VII');
    romaNum.set(8, 'VIII');
    romaNum.set(9, 'IX');
    romaNum.set(10, 'X');

    return romaNum.get(num)
}

console.log(getRomaNum(5))

//    ������ 2:

//�������� �������, ������� ��������� 3 ���������:

//�����
//�� ����� �������
//� ����� �������
//� ��������� �� ����� ������� � ������.������:

//converter(100, �c�, �f�) // return 212


//� ���������� �����.

//��� ������ ����� ������������:

//�������, ����������, ��������
//������� ��������� �����