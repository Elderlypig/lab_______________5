alert("Задание 10");
let day;
day = prompt("Введите число от 1 до 7");

day = parseInt(day, 10);

switch(day){
    case 1:
        alert("Понидельник");
        break;
    case 2:
        alert("Вторник");
        break;
    case 3:
        alert("Среда");
        break;
    case 4:
        alert("Четверг");
        break;
    case 5:
        alert("Пятница");
        break;
    case 6 :
        alert("Суббота");
        break;
    case 7:
        alert("Воскресенье");
        break;
    default:
        alert("Введено неверное значение переменной");
}