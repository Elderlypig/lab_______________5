alert("Задание 9");
let num = prompt("Введите число от 1 до 4");
num = parseInt(num, 10);

let result;

switch (num) {
    case 1:
        result = "зима";
        break;
    case 2:
        result = "весна";
        break;
    case 3:
        result = "лето";
        break;
    case 4:
        result = "осень";
        break;
    default:
        result = "Некорректное значение";
}
alert("Сезон: " + result);