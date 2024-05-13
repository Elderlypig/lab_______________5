alert("Задание 8");
let a = prompt("Введите число");
a = parseInt(a, 10);

if( a === 0 || a === 5){
    a += 10;
    alert("Новая переменная: " + a);
}
else{
    a /= 2
    alert("Новая переменная: " + a);
}
