# 7 Days of Code - Lógica com Javascript
 
## :date: Dia 1 - Concluído ✅
Reescreva o código abaixo de maneira que ele imprima as informações de maneira correta, que faça sentido e sem erros:

```javascript
let numeroUm = 1
let stringUm = '1'
let numeroTrinta = 30
let stringTrinta = '30'
let numeroDez = 10
let stringDez = '10'

if (COMPARAR O numeroUm e a stringUm) {
  console.log('As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes.')
} else {
  console.log('As variáveis numeroUm e stringUm não tem o mesmo valor.')
}

if (COMPARAR O numeroTrinta e a stringTrinta) {
  console.log('As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo.')
} else {
  console.log('As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo.')
}

if (COMPARAR O numeroDez e a stringDez) {
  console.log('As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes.')
} else {
  console.log('As variáveis numeroDez e stringDez não tem o mesmo valor.')
}
```

## :date: Dia 2 - Concluído ✅

Sabe quando você se cadastra em um site e, logo em seguida, quando faz o seu login, ele já te chama pelo seu nome? É isso que você vai fazer no desafio de hoje!

Quando você cria algum sistema, site ou aplicativo, é comum querer colocar alguns toques personalizados para tornar a **experiência na sua aplicação mais rica e dinâmica**.

Por isso, hoje, eu vou te ensinar a **desenvolver um programa simulando um desses sites**. Ele deve pedir para o **usuário responder 3 perguntas**:

- Qual o seu nome?
- Quantos anos você tem?
- Qual linguagem de programação você está estudando?

À medida que as perguntas forem sendo feitas, a pessoa que estiver usando o programa deve responder cada uma delas.

No final, **o sistema vai exibir a mensagem**:

"Olá [nome], você tem [idade] anos e já está aprendendo [linguagem]!"

Note que cada informação entre [ ] é uma das respostas dadas pela pessoa. 


**EXERCÍCIO OPCIONAL**


Se você quiser se aprofundar no assunto de hoje, eu tenho mais um exercício para você.

**Mas ele é 100% opcional**.

Você vai complementar o código para que, depois de exibir a mensagem anterior, o programa pergunte:

Você gosta de estudar [linguagem]? Responda com o número **1** para **SIM** ou **2** para **NÃO**.

E aí, dependendo da resposta, ele deve **mostrar uma das seguintes mensagens**:

1 > Muito bom! Continue estudando e você terá muito sucesso.<br>
2 > Ahh que pena... Já tentou aprender outras linguagens?

## :date: Dia 3 - Concluído ✅

Você alguma vez já jogou **algum jogo que te desse mais de uma escolha** e, dependendo do que você escolhesse, o destino do personagem seria totalmente diferente?

**Hoje você vai desenvolver um exemplo assim com Javascript!**

Eu quero que você trabalhe com estruturas de controle de fluxo. Esse jeito complicado de falar só quer dizer que, assim como nos jogos, **a história que você montar precisa se adaptar às respostas dadas por quem está jogando**.

Seu desafio de hoje é criar os destinos possíveis de um jogo, em que o usuário consiga escolher:

1. Se quer **seguir para área de Front-End** ou **seguir para a área de Back-End**.

2. Caso esteja na área de **Front-End**, se quer **aprender React** ou **aprender Vue**. Caso esteja na área de **Back-End**, poderá **aprender C#** ou **aprender Java**.

3. Depois, independente das escolhas anteriores, o usuário poderá escolher entre **seguir se especializando na área escolhida** ou **seguir se desenvolvendo para se tornar Fullstack**. Você deve exibir na tela uma mensagem específica para cada escolha.

4. Por fim, pergunte quais são as tecnologias nas quais a pessoa gostaria de se especializar ou de conhecer. Aqui, a pessoa pode responder N tecnologias, uma de cada vez. Então, enquanto ela continuar respondendo ok para a pergunta: *"Tem mais alguma tecnologia que você gostaria de aprender?"*, continue apresentando para ela o Prompt, para que ela complete o nome da tecnologia em questão. E, logo depois, apresente uma mensagem comentando algo sobre a linguagem inserida.

O importante é que a pessoa que estiver jogando possa sempre **escolher qual decisão tomar para conseguir aprender** e se desenvolver na área de programação.

Além disso, também é essencial que, ao final do jogo, ela possa **inserir quantas tecnologias quiser na lista de aprendizado**. 

## :date: Dia 4 - Concluído ✅

Você já brincou de tentar adivinhar o número que seu amigo ou amiga estava pensando? Hoje você vai voltar na infância e fazer exatamente isso. Mas agora, **o jogo vai ser contra o próprio computador**!

Você deve criar um programinha que **comece com um valor específico pré-definido entre 0 a 10** para o número que você vai adivinhar (7, por exemplo).

Em seguida, o programa vai perguntar para você qual o valor que você deseja chutar e, caso você acerte, ele irá te **parabenizar**. Caso erre, ele vai te dar mais **2 tentativas**.

No fim, caso você não acerte nenhuma vez, ele vai **imprimir qual era o número inicial**.

Depois que o programinha estiver funcionando, tente usar um número randômico em vez de um número pré-definido.

## :date: Dia 5 - Concluído ✅

Sabe quando você vai no supermercado com uma lista de compras e acaba ficando indo e voltando nos mesmos corredores até completar a lista?

Você precisa de uma maçã e vai para a área de frutas. O próximo item é um leite e você segue para os laticínios. Mas em seguida você anotou a pêra, e precisa novamente retornar para a área de frutas.

**Depois que você resolver o desafio de hoje, com certeza não fará mais isso!**

Assim como a nossa lista de compras, **é muito comum que programas trabalhem com listas** de strings, números e objetos.

Pense em todo catálogo de e-commerce que você já viu, na lista de eventos do seu Google Calendar, ou ainda na sua caixa de e-mails. Todos esses sites usam **listas para exibir informações de uma forma simples e fácil** de entender.

Além disso, você pode aproveitar as listas para fazer filtros, ordenação, e outras funcionalidades muito úteis.

Nesse ponto, você já deve ter percebido que trabalhar com essas coleções é algo que você vai precisar dominar, né?

Então hoje, para facilitar a sua ida ao supermercado, você deve criar um programa em Javascript que perguntará **se você deseja adicionar uma comida na sua lista de compras**, e você deve poder responder com *sim* ou *não*.

Em seguida, ele perguntará **qual comida você deseja inserir**, e você digitará o nome dela, como por exemplo *batata*.

Depois, ele deverá perguntar **em qual categoria essa comida se encaixa**, com algumas opções já pré-definidas, como frutas, laticínios, congelados, doces e o que mais você achar interessante. Assim, você poderá separar tudo no seu devido grupo.

Por fim, caso você não queira mais adicionar nada na lista de compras e responder não na primeira pergunta, ele irá **exibir uma lista com todos os itens agrupados**, da seguinte forma:

Caso você adicione na sua lista:
banana, leite em pó, tomate, leite vegetal, chiclete, bala de ursinho, maçã, uva, abacate e leite de vaca

O programa deverá imprimir, por exemplo:

Lista de compras:
* Frutas: banana, tomate, maçã, uva, abacate
* Laticínios: leite vegetal, leite de vaca, leite em pó
* Doces: chiclete e bala de ursinho

## :date: Dia 6 - Concluído ✅

Sabe o programinha que você criou para montar a sua própria lista de compras? Hoje o seu desafio é deixar ele ainda mais legal!

Você já viu como trabalhar com arrays de forma simples, adicionando itens na sua lista de compras.

Outra operação muito comum é a de remoção de itens da lista e, por isso, é muito importante que você saiba como fazer isso.

Pensando a fundo, existem N maneiras de deletar um item de uma lista. Você pode remover o primeiro item, o último, ou qualquer um do meio da lista. Cada uma dessas operações tem o seu próprio método dentro das documentações dos arrays em Javascript. Vamos falar mais sobre esses métodos na seção "Dicas".

Você deverá criar a opção de **remover algum item da lista**, que será exibida junto à pergunta de **_"Você deseja adicionar uma comida na lista de compras"_**?

A partir daí, caso a pessoa escolha essa opção, o programa irá **imprimir os elementos presentes na lista atual**, e a pessoa deverá **escrever qual deles deseja remover**.

Depois disso, o programa irá **remover o elemento da lista e imprimir a confirmação de que o item realmente não está mais lá**.

Por fim, ele voltará para o ciclo inicial de perguntas.

Se, na hora de deletar o item, o mesmo não for encontrado na lista, você deverá exibir uma mensagem avisando isso.

Por exemplo: **_"Não foi possível encontrar o item dentro da lista!"_**

Lembre-se que a opção de remover um item só deverá estar disponível a partir do momento que **existir ao menos um elemento dentro da lista de compras**.

## :date: Dia 7 - Concluído ✅

Para o exercício de hoje: **você já parou para pensar como uma calculadora funciona**?

Ela pede para você digitar um número, depois você seleciona um tipo de operação, um outro número, e ela faz sozinha o cálculo para te mostrar o resultado! Incrível, né?

Neste último desafio, a minha proposta para você é: **crie a sua própria calculadora**, porém com um detalhe muito importante: **cada operação deverá ser uma função diferente no seu código**.

Primeiramente, a pessoa deverá **escolher uma opção de operação** impressa pelo programa na tela.

Depois, ela deverá **inserir os dois valores que deseja utilizar**, e o programa **imprimirá o resultado da operação em questão**.

As opções disponíveis deverão ser: **soma**, **subtração**, **multiplicação**, **divisão**, e **sair**. Nessa última, o programa deverá parar de ser executado, mostrando uma mensagem *"Até a próxima"*.
