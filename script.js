var button = document.getElementsByClassName("button")[0];
var angka = document.getElementsByClassName("angka")[0];
document.addEventListener("click",calculate);
button.addEventListener("click",reset);

function calculate(){
    var angkaVal = parseInt(angka.innerHTML);
    angkaVal++;
    angka.innerHTML = angkaVal;
}

function reset(){
    angka.innerHTML=-1;
}