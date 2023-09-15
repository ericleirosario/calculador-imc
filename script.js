function calculateImc() {
    const weight = document.querySelector("#weight").value;
    const height = document.querySelector("#height").value;
    const result = document.querySelector("h2");

    if(height > 100){
        const newHeight = height / 100;

        const imc = (weight / (newHeight * newHeight)).toFixed(2);

        if(weight == 0 && height == 0){
            result.innerHTML = "Insira seu peso e sua altura!";
        } else if(weight == 0){
            result.innerHTML = "Insira seu peso!"
        } else if(height == 0){
            result.innerHTML = "Insira sua altura!"
        } else {
            if(imc > 0 && imc < 17) {
                result.innerHTML = "Seu IMC é: " +imc+ "<br>Você está muito abaixo do peso";	
            } else if(imc >=17 && imc < 18.5){
                result.innerHTML = "Seu IMC é: " +imc+ "<br>Você está abaixo do peso";
            } else if(imc >= 18.5 && imc < 25){
                result.innerHTML = "Seu IMC é: " +imc+ "<br>Seu peso está normal";	
            } else if(imc >= 25 && imc < 30){
                result.innerHTML = "Seu IMC é: " +imc+ "<br>Você está acima do peso";
            } else if(imc >= 30 && imc < 35){
                result.innerHTML = "Seu IMC é: " +imc+ "<br>Obesidade grau 1";
            } else if(imc >= 35 && imc < 41){
                result.innerHTML = "Seu IMC é: " +imc+ "<br>Obesidade grau 2";
            } else {
                result.innerHTML = "Seu IMC é: " +imc+ "<br>Obesidade grau 3";
            }
        }

    } else {
        const imc = (weight / (height * height)).toFixed(2);

        if(weight == 0 && height == 0){
            result.innerHTML = "Insira seu peso e sua altura!";
        } else if(weight == 0){
            result.innerHTML = "Insira seu peso!"
        } else if(height == 0){
            result.innerHTML = "Insira sua altura!"
        } else {
            if(imc > 0 && imc < 17) {
                result.innerHTML = "Seu IMC é: " +imc+ "<br>Você está muito abaixo do peso";	
            } else if(imc >=17 && imc < 18.5){
                result.innerHTML = "Seu IMC é: " +imc+ "<br>Você está abaixo do peso";
            } else if(imc >= 18.5 && imc < 25){
                result.innerHTML = "Seu IMC é: " +imc+ "<br>Seu peso está normal";	
            } else if(imc >= 25 && imc < 30){
                result.innerHTML = "Seu IMC é: " +imc+ "<br>Você está acima do peso";
            } else if(imc >= 30 && imc < 35){
                result.innerHTML = "Seu IMC é: " +imc+ "<br>Obesidade grau 1";
            } else if(imc >= 35 && imc < 41){
                result.innerHTML = "Seu IMC é: " +imc+ "<br>Obesidade grau 2";
            } else {
                result.innerHTML = "Seu IMC é: " +imc+ "<br>Obesidade grau 3";
            }
        }
    }    
}

function clearValues() {
    const weight = document.querySelector("#weight");
    const height = document.querySelector("#height");
    const result = document.querySelector("h2");

    weight.value = "";
    height.value = "";
    result.innerHTML = "Informe seus dados!";
}