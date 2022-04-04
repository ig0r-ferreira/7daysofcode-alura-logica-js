const mensagem_padrao = "Você tem 3 tentativas!"
var tentativas, num_sorteado

function sortear_numero(){
    return Math.floor(Math.random() * 11)
}

function habilitar_novo_jogo(){
    let input_valor = document.getElementById("input-valor")
    let botao_chutar = document.getElementById("botao-chutar")
    let botao_recomecar = document.getElementById("botao-recomecar")
    
    botao_recomecar.hidden = false
    botao_recomecar.focus()
    
    input_valor.disabled = true
    input_valor.style.cursor = "not-allowed"
    
    botao_chutar.disabled = true
    botao_chutar.style.cursor = "not-allowed"
}

function resetar(){
    num_sorteado = sortear_numero()
    tentativas = 3
    
    let input_valor = document.getElementById("input-valor")
    let botao_chutar = document.getElementById("botao-chutar")
    let botao_recomecar = document.getElementById("botao-recomecar")
    let campo_mensagem = document.getElementById("mensagem")

    input_valor.disabled = false
    input_valor.style.cursor = "auto"
    input_valor.focus()
    

    botao_chutar.disabled = false
    botao_chutar.style.cursor = "pointer"

    campo_mensagem.innerText = mensagem_padrao
    
    botao_recomecar.hidden = true
}



resetar()


document.querySelector("form").addEventListener("submit", evento => {
    evento.preventDefault()

    let input_valor = document.getElementById("input-valor")
    let campo_mensagem = document.getElementById("mensagem")
    
    let chute = input_valor.value
    input_valor.value = ""

    tentativas--

    let revelacao = "<span style=\"background-color:black\">Era o número " + num_sorteado + ".</span>"
    
    if (chute == num_sorteado){
        campo_mensagem.innerHTML = "Parabéns, você <span style=\"color:#00F044\">acertou</span>!<br>" + revelacao
        
        habilitar_novo_jogo()
    }
    else if (tentativas > 0){
        campo_mensagem.innerHTML = "Você <span style=\"color:red\">ERROU</span>!<br>Você tem mais "+ tentativas + " tentativa(s)."
    }
    else {
        campo_mensagem.innerHTML = "Suas chances acabaram!<br>" + revelacao 

        habilitar_novo_jogo()
    }
})

document.getElementById("botao-recomecar").addEventListener("click", evento => {
    resetar()
})