alert("Задание 3");
let num, text;

do {
    num = parseInt(prompt("Введите число больше 100"), 10);
    text = prompt("Введите текст");
} while (num <= 100 && num !== null);

if (num > 100) {
    const words = text.split(' ');
    alert(words[0]);
}
