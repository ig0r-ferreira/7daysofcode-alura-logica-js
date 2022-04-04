function criar_categorias(){
    let categorias = ["Bebidas","Carnes", "Frios e Laticínios", "Higiene", "Hortifruti", "Limpeza",
    "Matinais", "Mercearia", "Padaria", "Pet Shop", "Utilidades Domésticas"]

    let selecao = document.getElementById("selecao-categoria")
    
    categorias.forEach(categoria => {
        let opcao = document.createElement("option")
        
        opcao.value = categoria
        opcao.text = categoria

        selecao.appendChild(opcao)    
    })
}

function criar_lista(categoria){
    let painel = document.getElementById("painel-compras")
    painel.innerHTML += "<section><h3>" + categoria + "</h3><br><ul id=\"" + categoria.toLowerCase() + "\"></ul></section>"

    return document.getElementById(categoria.toLowerCase())
}

function adicionar_item(item, categoria){
    let lista = document.getElementById(categoria.toLowerCase())
    if (!lista) {
        lista = criar_lista(categoria)
    }

    if (document.getElementById(item.toLowerCase())){
        alert("Item já adicionado!")
        return
    }
    
    lista.innerHTML += "<li id=\"" + item.toLowerCase() + "\">" + "<input type=\"checkbox\" id=\"marcar-item\">" + item + "<button class=\"remover-item\" onclick=\"remover_item(this.parentNode)\">X</button>" + "</li>" 
} 

function remover_item(item){
    
    let lista = item.parentNode
    
    item.remove()
    
    if (lista && lista.innerHTML.trim() == "" && lista.parentNode){
        lista.parentNode.remove()
    }
}


criar_categorias()

document.querySelector("form").addEventListener("submit", evento => {
    evento.preventDefault()

    let input_item = document.getElementById("input-item")     
    let selecao_categoria = document.getElementById("selecao-categoria")     

    let item = input_item.value.trim()
    let categoria = selecao_categoria.value
    
    input_item.value = ""
    
    adicionar_item(item, categoria)

    input_item.focus()
})