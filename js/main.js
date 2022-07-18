let button = document.querySelector('button');

let x = document.getElementById('jeden');
let y = document.getElementById('dwa');

button.onclick = function() {
    let num1 = prompt('Podaj pierwszą liczbę');
    let num2 = prompt('Podaj drugą liczbę');   

    x.innerText = 'Liczba 1 to ' + num1;
    y.innerText = 'Liczba 2 to ' + num2;
}

