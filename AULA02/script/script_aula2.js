console.log('Aula 02')


// let valor = alert('Olá mundo')

/*let valor1 = confirm('Deseja sair') 

if (valor1) {
    alert('Saiu da aplicação')
}else {
    alert('Continua na aplicação')
}*/

/*let valor2 = Number(prompt('Digite um valor: '))
let valor3 = Number(prompt('Digite segundo valor: '))
alert(valor2 + valor3)*/

function getRandomInt(min, max) { 
    
    
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min +1) + min);    
  }


 let jogador1 = prompt('pedra, papel, ou tesoura: ') 

 let jogador2 = getRandomInt(1,3); 


 if(jogador2 == 1) {
    alert("pedra"); 
}  
else if(jogador2 == 2){
    alert("papel");
}
else if(jogador2 == 3){
    alert("tesoura");
};

if(jogador1 == 'pedra' && jogador2 == 3) {
   alert('Você' + ' ganhou!!! '+'Pedra quebra tesoura');       
}else if(jogador1 == 'tesoura' && jogador2 == 1) {
    alert('A maquina' + ' ganhou!!! '+'Pedra quebra tesoura');
}else if(jogador1 == 'papel' && jogador2 == 1) {
    alert('Você ganhou Papel embrulha pedra!!!');
}else if( jogador2 == 2 && jogador1 == 'pedra') {
    alert('A maquina ganhou Papel embrulha pedra !!!!');
}else if(jogador1 == 'papel' && jogador2 == 3) {
    alert('A maquina ganhou Tesoura corta papel!!!');
}else if(jogador2 == 2 && jogador1 == 'tesoura') {
    alert('Você ganhou Tesoura corta papel');
}
else {
   alert('Jogo empatado')
}














