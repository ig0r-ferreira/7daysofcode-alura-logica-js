function mostrar_questao(escolha_anterior){
    
    var questao = questoes_objetivas.find(questao => questao.requisitos.indexOf(escolha_anterior) != -1)
    
    if (questao){

        document.querySelector("#questoes .pergunta").innerText = questao.pergunta

        if (questao.tipo_questao == "objetiva"){
            document.getElementById("alternativa-1").value = questao.alternativa_1
            document.querySelector("label[for='alternativa-1']").innerText = questao.alternativa_1
            
            document.getElementById("alternativa-2").value = questao.alternativa_2
            document.querySelector("label[for='alternativa-2']").innerText = questao.alternativa_2
        }
        else if (questao.tipo_questao == "aberta"){
            document.querySelector(".container-resposta").innerHTML = questao.html
            
            document.getElementById("botao-avancar").hidden = true
            document.getElementById("botao-concluir").hidden = false

        }

    }
}

function remover_campo(id){
    document.getElementById(id).remove()    
}

function adicionar_tecnologia(elemento){

    let input_tecnologia = elemento.firstChild
    let tecnologia = input_tecnologia.value

    input_tecnologia.value = ""

    contador_botoes++

    document.querySelector(".container-resposta").insertAdjacentHTML("beforeEnd", `<div class="container-tecnologia"  id="${contador_botoes}"><input type="text" placeholder="Informe aqui a tecnologia" value="${tecnologia}"><button id="${contador_botoes}" onclick="remover_campo(${contador_botoes})">-</button></div>`)

    alert("Que bom ver que você está buscando aprender mais!")
    
    input_tecnologia.focus()
}


var questoes_objetivas = [
    {
        "pergunta": "Qual área você deseja seguir?",
        "tipo_questao": "objetiva",
        "requisitos": [null],
        "alternativa_1": "Back-end", 
        "alternativa_2": "Front-end"
        
    },
    {
        "pergunta": "Qual linguagem você deseja aprender?",
        "tipo_questao": "objetiva",
        "requisitos": ["Back-end"],
        "alternativa_1": "Java", 
        "alternativa_2": "C#"
    },
    {
        "pergunta": "Qual linguagem você deseja aprender?",
        "tipo_questao": "objetiva",
        "requisitos": ["Front-end"],
        "alternativa_1": "React", 
        "alternativa_2": "Vue"
        
    },
    {
        "pergunta": "Você deseja seguir: ",
        "tipo_questao": "objetiva",
        "requisitos": [
            "Java", 
            "C#", 
            "React", 
            "Vue"
        ],
        "alternativa_1": "Se especializando na área escolhida", 
        "alternativa_2": "Se desenvolvendo para se tornar Fullstack"     
    },
    {
        "pergunta": "Quais tecnologias/linguagens você gostaria de aprender?",
        "tipo_questao": "aberta",
        "requisitos": [
            "Se especializando na área escolhida", 
            "Se desenvolvendo para se tornar Fullstack"
        ],
        "html": "<div class=\"container-tecnologia\"><input type=\"text\" placeholder=\"Informe aqui a tecnologia\"><button id=\"botao-adicionar-tec\" onclick=\"adicionar_tecnologia(this.parentNode)\">+</button></div>"
    }
]

var contador_botoes = 1

mostrar_questao(null)

document.getElementById("botao-avancar").addEventListener("click", evento => {
    let escolha = document.querySelector("input[name='alternativa']:checked")
    
    if (!escolha) {
        alert("Escolha uma opção!")
    }
    else {
        escolha.checked = false
        escolha = escolha.value
        
        mostrar_questao(escolha)
    }
})

document.getElementById("botao-concluir").addEventListener("click", evento => {
    alert("Muito bem! Continue buscando se aprimorar cada vez mais!")
})