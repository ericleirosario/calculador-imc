
function calculaImc() {
    const peso = document.querySelector(".peso").value
    const altura = document.querySelector(".altura").value
    const resultado = document.querySelector("h2")

    const imc = (peso / (altura * altura)).toFixed(2);

    if(imc > 0 && imc < 17) {
        resultado.innerHTML = "\nVocê está muito abaixo do peso";	
    } else if(imc >=17 && imc < 18.5){
        resultado.innerHTML = "\nVocê está abaixo do peso";
    } else if(imc >= 18.5 && imc < 25){
        resultado.innerHTML = "\nSeu peso está normal";	
    } else if(imc >= 25 && imc < 30){
        resultado.innerHTML = "\nVocê está acima do peso";
    } else if(imc >= 30 && imc < 35){
        resultado.innerHTML = "Obesidade grau 1";
    } else if(imc >= 35 && imc < 41){
        resultado.innerHTML = "Obesidade grau 2";
    } else {
        resultado.innerHTML = "Obesidade grau 3";
    }
}