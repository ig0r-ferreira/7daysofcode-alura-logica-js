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
        this.operando_anterior = "";
        this.operacao = "";          
        this.operando_atual = "";
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
        }`.trim();

        this.carregar_permissoes();
    }

    inserir_caracter(caracter) {
        if (caracter === botao_virgula.textContent && this.operando_atual.includes(caracter)) {
            return;
        }

        this.operando_atual = `${this.operando_atual}${caracter.toString()}`;
        this.atualizar_display();
    }

    escolher_operacao(operacao) {
        try {
            if (Calculadora.igual_a_subtracao(operacao)) {
                if (this.operando_atual === "" && this.operando_anterior === "") {
                    this.inserir_caracter("-");
                }
                if (Calculadora.igual_a_subtracao(this.operando_atual)) {
                    return;
                }
            } 
            else if (this.operando_anterior === "" && 
            (this.operando_atual === "" || Calculadora.igual_a_subtracao(this.operando_atual))) {
                return;
            }

            switch (operacao) {
                case "/":
                case "\u00F7":
                    operacao = "\u00F7";
                    break;
                case "*": 
                case "\u00D7":
                    operacao = "\u00D7";
                    break;
                case "+": 
                case "\u002B":
                    operacao = "\u002B";
                    break;
                case "-": 
                case "\u2212":
                    operacao = "\u2212";
                    break;
                default:
                    throw "Operação inválida!";
            }            


            if (this.operando_anterior != "") {
                // Se o operando atual for vazio, troca a operação
                this.operacao = this.operando_atual === "" ? operacao : this.operacao;
                return;
            }

            this.operacao = operacao;
            this.operando_anterior = Calculadora.formatar_valor(this.operando_atual).toString().replace(".", ",");
            this.operando_atual = "";
        } 
        finally {
            this.atualizar_display();
        }
    }

    calcular() {
        if (this.operando_anterior !== "" && this.operacao !== "" && this.operando_atual !== "") {
            let resultado = null;
            
            let valor1 = Calculadora.formatar_valor(this.operando_anterior);
            let valor2 = Calculadora.formatar_valor(this.operando_atual);

            switch (this.operacao) {
                case "/":
                case "\u00F7":
                    if (valor2 === 0){
                        this.mostrar_erro("Erro: Divisão por zero!");
                        return;
                    }
                    resultado = valor1 / valor2;
                    break;
                case "*": 
                case "\u00D7":
                    resultado = valor1 * valor2;
                    break;
                case "+": 
                case "\u002B":
                    resultado = valor1 + valor2;
                    break;
                case "-": 
                case "\u2212":
                    resultado = valor1 - valor2;
                    break;
                default:
                    throw "Operação inválida!";
            }
                
            this.limpar_display();
            this.operando_atual = Calculadora.formatar_valor(resultado).toString().replace(".", ",");
            this.atualizar_display();
        }
    }

    static formatar_valor(valor){
        if (typeof valor === "string"){
            valor = valor.replace(",", ".");
            valor = parseFloat(valor);
        }
        return valor > Math.pow(10, 9) ? valor.toExponential(10) : valor;
    }

    static igual_a_subtracao(operacao){
        return ["-", "\u2212"].indexOf(operacao) !== -1
    }

    mostrar_erro(erro){
        this.limpar_display();
        this.operando_atual = erro;
        this.atualizar_display();

        for (const botao of document.querySelectorAll("button:not(button[id='botao-limpar'])")){
            botao.disabled = true;
        }
    }

    carregar_permissoes(){
    
        if(this.operando_atual === "" || Calculadora.igual_a_subtracao(this.operando_atual)){
            let botoes_para_desativacao = [];
            
            if (Calculadora.igual_a_subtracao(this.operando_atual)){
                // Inativa todas as operações matemáticas
                botoes_para_desativacao = Array.from(document.querySelectorAll(".botao-operacao")).map(botao => botao.id);
            }
            else if (this.operando_anterior === ""){
                // Inativa as operações matemáticas, exceto a de subtração
                botoes_para_desativacao = Array.from(document.querySelectorAll(".botao-operacao:not(button[id=botao-subtracao])")).map(botao => botao.id);
            }
            
            botoes_para_desativacao.push(botao_virgula.id);

            for (const botao of document.querySelectorAll("button")){
                botao.disabled = botoes_para_desativacao.indexOf(botao.id) != -1;
            }
        }
        
        if(!Number.isNaN(Calculadora.formatar_valor(this.operando_atual))) {
            
            if (this.operando_atual === "Infinity"){
                for (const botao of document.querySelectorAll("button:not(button[id='botao-limpar'])")){
                    botao.disabled = true;
                }
                return;
            }

            // Rola o scroll para o fim a medida em que o valor vai sendo inserido
            this.output_principal.scrollTo(this.output_principal.scrollWidth, 0);


            let possui_virgula = this.operando_atual.includes(botao_virgula.textContent);
            botao_virgula.disabled = possui_virgula;
            
            let calculo_em_andamento = this.operando_anterior != "";
            
            for (const botao of document.querySelectorAll(".botao-operacao")){
                botao.disabled = calculo_em_andamento;
            }
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
    calculadora.inserir_caracter(evento.target.textContent);
});

document.onkeydown = (evento) => {
    let tecla = evento.key;

    tecla = tecla === "Enter" ? "=" : tecla;
    tecla = tecla === "," ? "." : tecla;

    let botoes_permitidos = Array.from(document.querySelector("#painel-botoes").children);
    let botao = botoes_permitidos.find(botao => botao.value === tecla);

    if (botao) {
        if (tecla != "=") {
            botao.click();
        }
        botao.focus();
    }
};