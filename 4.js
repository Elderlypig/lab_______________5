alert("Задание 4");
let mass = [];

for(let i = 2; i <= 100; i++){
    if(i % 3 == 0 || i % 8 == 0){
        mass.push(i);
    }
}

alert(mass.join(", "));