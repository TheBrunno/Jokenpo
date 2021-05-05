const btn = document.getElementById("botao")
const pedra = document.getElementById("pedra")
const papel = document.getElementById("papel")
const tesoura = document.getElementById("tesoura")
const circle1 = document.getElementById("circle-1")
const circle2 = document.getElementById("circle-2")
const h21 = document.getElementById("como-jogar")
const h22 = document.getElementById("como-func")
const title = document.getElementById("title")
const check = document.getElementById("check")
var checked = false;


function jogadaPc(){
    const num = Number(Math.round(Math.random() * 2))
    var $jogadaPC;
    if (num == 0){
        $jogadaPC = 'Papel'
    }else if(num == 1){
        $jogadaPC = 'Pedra'
    }else{
        $jogadaPC = 'Tesoura'
    }
    return $jogadaPC
}
function disputa(user, pc){
    var $resultado;
    if(user == pc){
        $resultado = 'Empatou'
    }else if((pc == 'Pedra' && user == 'Papel') || (pc == 'Papel' && user == 'Tesoura') || (pc == 'Tesoura' && user == 'Pedra')){
        $resultado = 'Ganhou'
    }else{
        $resultado = 'Perdeu'
    } return $resultado
}
function jogadaUser(escolha){
    var $jogadaUser;
    if(escolha == '1' || escolha == 'pedra'){
        $jogadaUser = 'Pedra'
    }else if(escolha == '2' || escolha == 'papel'){
        $jogadaUser = 'Papel'
    }else if(escolha == '3' || escolha == 'tesoura'){
        $jogadaUser = 'Tesoura'
    }else{
        alert('Insira números válidos')
        $jogadaUser = true;
    }
    return $jogadaUser
} 
function botoes(valor){
    var jogada_user; var jogada_pc; var resultado;
    jogada_user = jogadaUser(valor)
    jogada_pc = jogadaPc()
    resultado = disputa(jogada_user, jogada_pc)
    troca_de_cores(resultado)
    if(checked){
        alert(`Sua jogada: ${jogada_user}\nJogada do pc: ${jogada_pc}\nSendo assim você: ${resultado}`)
    }
}
function troca_de_cores(resultado){
    if (resultado == 'Ganhou'){
        circle1.style.backgroundColor = "#48d656"
        circle2.style.backgroundColor = "#48d656"
        btn.style.backgroundColor = "#48d656"
        h21.style.color = "#48d656"
        h22.style.color = "#48d656"
        title.innerHTML = 'Ganhou'
    }else if(resultado == 'Empatou'){
        circle1.style.backgroundColor = "#ffce20"
        circle2.style.backgroundColor = "#ffce20"
        btn.style.backgroundColor = "#ffce20"
        h21.style.color = "#ffce20"
        h22.style.color = "#ffce20"
        title.innerHTML = 'Empatou'
    }else if(resultado == 'Perdeu'){
        circle1.style.backgroundColor = "#ff5f58"
        circle2.style.backgroundColor = "#ff5f58"
        btn.style.backgroundColor = "#ff5f58"
        h21.style.color = "#ff5f58"
        h22.style.color = "#ff5f58"
        title.innerHTML = 'Perdeu'
    }
}


btn.onclick = function(){
    var jogada_user; var jogada_pc; var resultado;
    var jog = String(document.getElementById("jogada").value).toLocaleLowerCase()
    var jogada_user = jogadaUser(jog)
    if (jogada_user != true){
        var jogada_pc = jogadaPc()
        var resultado = disputa(jogada_user, jogada_pc)
        troca_de_cores(resultado)
        if(checked){
            alert(`Sua jogada: ${jogada_user}\nJogada do pc: ${jogada_pc}\nSendo assim você: ${resultado}`)
        }
        document.getElementById("jogada").value=''
    }else{
        document.getElementById("jogada").value=''
    }
}
check.onclick = function(){
    if (checked == true){
        checked = false
    }else{
        checked = true
    }
}
pedra.onclick = function(){
    botoes('1')
}
papel.onclick = function(){
    botoes('2')
}
tesoura.onclick = function(){
    botoes('3')
}

