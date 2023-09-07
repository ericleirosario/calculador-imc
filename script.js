
function calculaImc() {
    const peso = document.querySelector(".peso").value
    const altura = document.querySelector(".altura").value
    const resultado = document.querySelector("h2")

    const imc = (peso / (altura * altura)).toFixed(2);

    if(peso == 0 && altura == 0){
        resultado.innerHTML = "Insira seu peso e sua altura!";
    } else if(peso == 0){
        resultado.innerHTML = "Insira seu peso!"
    } else if(altura == 0){
        resultado.innerHTML = "Insira sua altura!"
    } else {
        if(imc > 0 && imc < 17) {
            resultado.innerHTML = "Seu IMC é: " +imc+ " Você está muito abaixo do peso";	
        } else if(imc >=17 && imc < 18.5){
            resultado.innerHTML = "Seu IMC é: " +imc+ " Você está abaixo do peso";
        } else if(imc >= 18.5 && imc < 25){
            resultado.innerHTML = "Seu IMC é: " +imc+ " Seu peso está normal";	
        } else if(imc >= 25 && imc < 30){
            resultado.innerHTML = "Seu IMC é: " +imc+ " Você está acima do peso";
        } else if(imc >= 30 && imc < 35){
            resultado.innerHTML = "Seu IMC é: " +imc+ " Obesidade grau 1";
        } else if(imc >= 35 && imc < 41){
            resultado.innerHTML = "Seu IMC é: " +imc+ " Obesidade grau 2";
        } else {
            resultado.innerHTML = "Seu IMC é: " +imc+ " Obesidade grau 3";
        }
    }
}