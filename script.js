function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);

    
//Verifica os dados inseridos
    if (isNaN(peso) || isNaN(altura)) {
        document.getElementById('resultado').textContent = 'Preencha os campos corretamente.';
        return;
    }else if(peso < 0 || altura < 0){
        document.getElementById('resultado').textContent = 'Preencha com valores positivos validos.';
        return;
    }

    //Faz o calculo
    const imc = peso / (altura * altura);

//Pega o resultado
    const classificacao = obterClassificacao(imc);


//Mostra o IMC e o resultado
    document.getElementById('resultado').textContent = `Seu IMC é ${imc.toFixed(2)}.`;
    document.getElementById('fisic').textContent = `${classificacao}.`;
    
    //Salva os dados
    const ulpeso = peso;
    const ulaltura = altura;
    
    //Mostra quais os ultimos dados adicionado para calcular
    document.getElementById('ulpeso').textContent = `Peso: ${ulpeso} kg`;
    document.getElementById('ulaltura').textContent = `Altura: ${ulaltura.toFixed(2)} m`;
    
    
    
    //limpa os inputs
    document.getElementById('peso').value = "";
    document.getElementById('altura').value = "";
    
}

//Classifica o resultado do IMC
function obterClassificacao(imc) {
    if (imc < 18.5) return 'Abaixo do peso';
    if (imc < 24.9) return 'Peso Normal';
    if (imc < 29.9) return 'Sobrepeso';
    return 'Obesidade';

}


