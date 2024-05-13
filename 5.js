alert("Задание 5");
let time = prompt("Введите время в формате Часы:Минуты");
let hours = parseInt(time.split(':')[0], 10);
let minutes = parseInt(time.split(':')[1], 10);

if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
    alert("Введенное время некорректно");
    return;
}

let time24 = (hours % 24) * 60 + minutes;

switch (true) {
    case (time24 >= 7 * 60 && time24 < 15 * 60):
        alert("я готов работать");
        break;
    case (time24 >= 15 * 60 && time24 < 20 * 60):
        alert("я устал");
        break;
    case (time24 >= 20 * 60 && time24 < 23 * 60):
        alert("пора спать");
        break;
    case (time24 >= 23 * 60 || time24 < 7 * 60):
        alert("я сплю");
        break;
}
