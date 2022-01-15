/Parando o evento de atualizar a pagina quando clica no botão/
const form = document.querySelector(".form");
const resultado = document.querySelector(".resultado");
form.addEventListener("submit", stopAction);
/Trocando virgula por ponto/
function RepleaceConvert(valor) {
    valor = valor.replace(',', '.');
    valor = parseFloat(valor);
    return valor
}
/Calculando o imc/
function calculoImc(peso, altura) {
    const imc = ((peso) / (altura ** 2)).toFixed(2)
    return imc
}
/Verifica qual classificação da para o resultado do imc/
function verifica(imcFunc) {
    let dadosInfo = ""
    if (imcFunc < 18.5) {
        dadosInfo = "(Abaixo do peso)"
    } else if (imcFunc >= 18.5 && imcFunc < 25) {
        dadosInfo = "(Peso Normal)"
    } else if (imcFunc >= 25 && imcFunc < 30) {
        dadosInfo = "(Sobrepeso)"
    } else if (imcFunc >= 30 && imcFunc < 35) {
        dadosInfo = "(Obesidade grau 1)"
    } else if (imcFunc >= 35 && imcFunc < 40) {
        dadosInfo = "(Obesidade grau 2)"
    } else if (imcFunc >= 40) {
        dadosInfo = "(Obesidade grau 3)"
    }
    return dadosInfo
}

/Cria um elemento p/
function criaP() {
    const p = document.createElement('p');
    return p
}
/Implementa um elemento p com o resutaldo do calculo do imc, e com a verificação de dados/
function resultadoInplement(validate, dadosInfo) {
    const p = criaP();
    p.classList.add(`${validate}`)
    p.innerHTML = (`${dadosInfo}`)
    resultado.innerHTML = ""
    resultado.appendChild(p)
}
/Verifica o imc se é um Number ou NaN/
function verifyDados(imc) {
    let validateDados = ""
    if (isNaN(imc)) {
        validateDados = "Dados invalidos";
        return [validateDados, "false"]
    } else {
        validateDados = (`Seu imc ${imc.replace(".", ",")} ` + verifica(imc));
        return [validateDados, "true"]
    }
}
/Quando eu clicar em enviar ele vai resolver todas as funções e atriubuir os valores a cada uma delas/ 
function stopAction(event) {
    event.preventDefault();

    let peso = document.querySelector("#peso");
    let altura = document.querySelector("#altura");
    peso = RepleaceConvert(peso.value);
    altura = RepleaceConvert(altura.value);

    const imc = calculoImc(peso, altura);
    console.log(imc)

    const dados = verifyDados(imc);

    resultadoInplement(dados[1], dados[0])
}
