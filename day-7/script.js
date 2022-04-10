const output_principal = document.getElementById("output-principal");
const output_aux = document.getElementById("output-auxiliar");

const botao_limpar = document.getElementById("botao-limpar");
const botao_backspace = document.getElementById("botao-backspace");
const botao_calcular = document.getElementById("botao-calcular");
const botao_virgula = document.getElementById("botao-virgula");
const botoes_numericos = document.getElementsByClassName("botao-numerico");
const botoes_operacoes = document.getElementsByClassName("botao-operacao");

class Calculadora {
    constructor(output_principal, output_auxiliar) {
        this.output_principal = output_principal;
        this.output_auxiliar = output_auxiliar;

        this.limpar_display();
    }

    limpar_display() {
        this.operando_atual = "";
        this.operando_anterior = "";
        this.operacao = "";
        this.atualizar_display();
    }

    backspace_display() {
        this.operando_atual = this.operando_atual.slice(0, -1);
        this.atualizar_display();
    }

    atualizar_display() {
        this.output_principal.value = this.operando_atual;
        this.output_auxiliar.value = `${this.operando_anterior} ${
            this.operacao || ""
        }`;
    }

    inserir_caracter(caracter) {
        if (
            caracter === botao_virgula.value &&
            this.operando_atual.includes(caracter)
        ) {
            return;
        }

        this.operando_atual = `${this.operando_atual}${caracter.toString()}`;
        this.atualizar_display();
    }

    escolher_operacao(operacao) {
        try {
            let subtracao = document.querySelector("#botao-subtracao").value;

            if (operacao == subtracao) {
                if (
                    this.operando_atual === "" &&
                    this.operando_anterior === ""
                ) {
                    this.inserir_caracter(operacao);
                }
                if (this.operando_atual == subtracao) {
                    return;
                }
            } else if (
                this.operando_anterior === "" &&
                (this.operando_atual === "" || this.operando_atual == subtracao)
            ) {
                return;
            }

            if (this.operando_anterior != "") {
                // Se o operando atual for vazio, troca a operação
                this.operacao =
                    this.operando_atual == "" ? operacao : this.operacao;
                return;
            }

            this.operacao = operacao;
            this.operando_anterior = this.operando_atual;
            this.operando_atual = "";
        } finally {
            this.atualizar_display();
        }
    }

    calcular() {
        if (
            this.operando_anterior !== "" &&
            this.operacao !== "" &&
            this.operando_atual !== ""
        ) {
            let resultado = null;

            let valor1 = parseFloat(this.operando_anterior);
            let valor2 = parseFloat(this.operando_atual);

            switch (this.operacao) {
                case "/":
                    resultado =
                        valor2 === 0
                            ? "Erro: Divisão por zero!"
                            : valor1 / valor2;
                    break;
                case "*":
                    resultado = valor1 * valor2;
                    break;
                case "+":
                    resultado = valor1 + valor2;
                    break;
                case "-":
                    resultado = valor1 - valor2;
                    break;
                default:
                    throw "Operação inválida!";
            }

            this.limpar_display();
            this.operando_atual = resultado.toString();
            this.atualizar_display();
        }
    }
}

var calculadora = new Calculadora(output_principal, output_aux);

botao_limpar.addEventListener("click", () => {
    calculadora.limpar_display();
});

botao_backspace.addEventListener("click", () => {
    calculadora.backspace_display();
});

botao_calcular.addEventListener("click", () => {
    calculadora.calcular();
});

for (const botao of botoes_numericos) {
    botao.addEventListener("click", () => {
        calculadora.inserir_caracter(botao.value);
    });
}

for (const botao of botoes_operacoes) {
    botao.addEventListener("click", () => {
        calculadora.escolher_operacao(botao.value);
    });
}

botao_virgula.addEventListener("click", (evento) => {
    calculadora.inserir_caracter(evento.target.value);
});

document.onkeydown = (evento) => {
    let tecla = evento.key;

    tecla = tecla == "Enter" ? "=" : tecla;
    tecla = tecla == "," ? "." : tecla;

    let botoes = Array.from(document.querySelector("#painel-botoes").children);
    let botao = botoes.find((botao) => botao.value == tecla);

    if (botao) {
        if (tecla != "=") {
            botao.click();
        }
        botao.focus();
    }
};

/*
function definir_estado_elementos(estado, elementos){
    for (let elemento of elementos){
        elemento.disabled = !estado
    }
}

function atualizar_display(output, text){
    output.value += text;
}

function limpar_output(output){
    output.value = "";
}

function resetar_tamanho_fonte(){
    output_principal.style.fontSize = "1.8rem"
}

function resetar_display(){
    output_aux.value = ""
    output_principal.value = "";
}

function backspace(){
    output_principal.value = output_principal.value.slice(0, -1);
}

function formatar_expressao(expressao_mat){
    // Troca os símbolos que aparecem nos botões pelos símbolos matemáticos válidos: + - / * 	
    document.querySelectorAll(".botao-operacao").forEach(botao => {
        expressao_mat = expressao_mat.replaceAll(botao.textContent, botao.value)
    })

    return expressao_mat
}

function calcular(){

    let expressao_mat = `${output_aux.value} ${output_principal.value}`
    
    expressao_mat = formatar_expressao(expressao_mat)

    // Verifica se a operacao é uma divisão por zero
    if (expressao_mat.includes("/")){
        let denominador = expressao_mat.split("/")[1]
        if (parseFloat(denominador) == 0){
            throw "Erro: Divisão por zero!"
        }
    }

    try{
        let resultado = eval(expressao_mat)

        return resultado
    }
    catch (erro){
        throw "Erro: Operação inválida!"
    }
}

function carregar_config_inicial(){
    resetar_tamanho_fonte()

    // Ativa todos os botões
    definir_estado_elementos(true, document.querySelectorAll("button"))

    // Inativa os botões das operações matemáticas, exceto o botão de subtração
    definir_estado_elementos(false, document.querySelectorAll(".botao-operacao:not(button[id=botao-subtracao])"))
    
    // Inativa o botão de vírgula
    definir_estado_elementos(false, [document.querySelector("#botao-virgula")])
}

var display = document.getElementById("display")
var output_principal = document.getElementById("output-principal")
var output_aux = document.getElementById("output-auxiliar")

var botao_limpar = document.getElementById("botao-limpar")
var botao_backspace = document.getElementById("botao-backspace")
var botao_calcular = document.getElementById("botao-calcular")
var botao_virgula = document.getElementById("botao-virgula")


carregar_config_inicial()

// Cria um evento customizado
const observador = new MutationObserver(function() {
    // Altera a descrição do BOTÃO LIMPAR conforme o conteúdo do OUTPUT PRINCIPAL
    botao_limpar.textContent = output_principal.value == "" ? "AC" : "C"
    
    if (output_principal.value == "" && output_aux.value == ""){
        carregar_config_inicial()
    }

    if (output_principal.value == ""){
        definir_estado_elementos(false, [document.querySelector("#botao-virgula")])
    }
    else if (output_principal.value == document.querySelector("#botao-subtracao").textContent){
        definir_estado_elementos(false, [document.querySelector("#botao-subtracao")])
    }
    else {
        
        // Rola o scroll para o fim a medida em que o valor vai sendo inserido
        output_principal.scrollTo(output_principal.scrollWidth, 0)

        let valor = parseFloat(output_principal.value)

        if (!Number.isNaN(valor)){

            let possui_virgula = output_principal.value.includes(document.querySelector("#botao-virgula").textContent)
            
            let nenhuma_operacao = (output_aux.value == "")
    
            definir_estado_elementos(!possui_virgula, [document.querySelector("#botao-virgula")])
            
            definir_estado_elementos(nenhuma_operacao, document.querySelectorAll(".botao-operacao"))
        }
    }
    
});

// Configura um "listener" para a div display
observador.observe(display, {subtree: true, childList: true});


botao_limpar.addEventListener("click", evento => {
    if (output_principal.value == ""){
        resetar_display()
    }
    else {
        limpar_output(output_principal)
    }
})


botao_backspace.addEventListener("click", evento => {
    backspace()
})


botao_calcular.addEventListener("click", evento => {
    let conteudo = null
    
    try {
        conteudo = calcular()
    }
    catch (erro){
        conteudo = erro
        output_principal.style.fontSize = "1.5rem"
        definir_estado_elementos(false, document.querySelectorAll("button:not(button[id='botao-limpar'])"))
    }
    
    resetar_display()
    atualizar_display(output_principal, conteudo)
    
})


botao_virgula.addEventListener("click", evento => {
    atualizar_display(output_principal, evento.target.value)
})


let botoes_numericos = document.getElementsByClassName("botao-numerico")
for (let botao of botoes_numericos){
    
    botao.addEventListener("click", evento => {
        atualizar_display(output_principal, evento.target.value)
    })
}


let botoes_operacoes = document.getElementsByClassName("botao-operacao")
for (let botao of botoes_operacoes){
    botao.addEventListener("click", evento => {
        
        if (evento.target.id == "botao-subtracao" && output_aux.value == "" && output_principal.value == ""){
            atualizar_display(output_principal, evento.target.textContent)
            return       
        }
        
        let ultimo_caracter = output_aux.value.slice(-1)
        
        let simbolos_operacoes = Array.from(document.getElementsByClassName("botao-operacao")).map(botao => botao.textContent)

        if (simbolos_operacoes.indexOf(ultimo_caracter) != -1 && output_principal.value == ""){
            output_aux.value = output_aux.value.slice(0, -1)
        }

        let valor = output_principal.value

        atualizar_display(output_aux, `${valor} ${evento.target.textContent}`)       
        limpar_output(output_principal)
    })
}
*/
