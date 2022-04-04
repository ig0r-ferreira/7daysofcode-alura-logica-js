var form_inicial = document.getElementById("form-inicial")
var form_final = document.getElementById("form-final")

var input_nome = document.getElementById("nome")
var input_idade = document.getElementById("idade")
var input_linguagem = document.getElementById("linguagem-programacao")


input_nome.addEventListener("input", evento => {
    // Reseta a mensagem de validação
    evento.target.setCustomValidity("")

    // Altera a mensagem de validação caso a entrada informada não seja válida
    if (!evento.target.validity.valid){
        evento.target.setCustomValidity("Nome inválido.")
    }
})

form_inicial.addEventListener("submit", evento => {
    evento.preventDefault()
    
    let nome = input_nome.value
    let idade = input_idade.value
    let linguagem_programacao = input_linguagem.value 

    alert(`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem_programacao}!`)

    // Oculta e desativa o primeiro formulário
    form_inicial.hidden = true
    form_inicial.disabled = true
    
    // Adiciona a linguagem informada no label do príximo formulário
    document.querySelector("#form-final .pergunta").innerText = "Você está gostando de aprender "
    document.querySelector("#form-final .pergunta").innerText += `${linguagem_programacao}?`
    
    // Exibe o formulário adiconal
    form_final.hidden = false
    form_final.disabled = false

    document.getElementsByName("gosta-da-linguagem")[0].focus()
})

form_final.addEventListener("submit", evento => {
    evento.preventDefault()

    // Obtém a opção selecionada
    let escolha = document.querySelector("input[name='gosta-da-linguagem']:checked").value

    if (escolha == "sim"){
        alert("Muito bom! Continue estudando e você terá muito sucesso.")

    }
    else {
        alert("Ahh que pena... Já tentou aprender outras linguagens?")
    }
})

// Retorna para o formulário principal
document.getElementById("botao-voltar").addEventListener("click", evento => {
    form_final.hidden = true
    form_final.disabled = true
    form_inicial.hidden = false
    form_inicial.disabled = false
})
