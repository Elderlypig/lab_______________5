alert("Задание 2")
let min = 1, max = 36, sim, word = '';

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

sim = getRandomInt(min, max);

word = prompt("Введите текст длинной в " + sim + " символов");

if(word.length < sim){
word = word.split(' ');

for(let i = 0; i < word.length; i++){
    if((i + 1) % 2 != 0){
        word[i] = word[i].toUpperCase();
    }
    else{
        word[i] = word[i].toLowerCase();
    }
}

alert("Обработанный текст: " + word.join(' '));
}
else{
    alert("Текст слишком длинный");
}
   