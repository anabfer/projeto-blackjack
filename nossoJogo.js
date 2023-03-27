/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
console.log('Boas vindas ao jogo de BlackJack')

if(confirm('Quer iniciar uma nova rodada?')){
   let cartaJogador1 = comprarCarta()
   let cartaJogador2 = comprarCarta()

   let cartaPc1 = comprarCarta()
   let cartaPc2 = comprarCarta()

   let pontosJogador = cartaJogador1.valor + cartaJogador2.valor
   let pontosPc = cartaPc1.valor + cartaPc2.valor

console.log(`Usuário cartas: ${cartaJogador1.texto} ${cartaJogador2.valor} - pontuação ${pontosJogador}`)
console.log(`Computador - cartas: ${cartaPc1.texto} ${cartaPc2.valor} - pontuação ${pontosPc}`)

if (pontosJogador > pontosPc) {
   console.log("O usuário ganhou!")
} else if (pontosPc > pontosJogador) {
   console.log("O computador ganhou!")
} else if (pontosJogador === pontosPc) {
   console.log("Empate!")
}
}else {
   console.log('O jogo acabou')
}



