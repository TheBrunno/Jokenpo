        // Jogada do usuario
        //jogada e botao id html inputs
        const btn = document.getElementById("botao")
        var resp;
        var invalid;
        btn.onclick = function(){
            var jog = Number(document.getElementById("jogada").value)
            invalid = false
            if(jog == 1){
                resp = 'Pedra'
            }else if(jog == 2){
                resp = 'Papel'
            }else if(jog == 3){
                resp = 'Tesoura'
            }else{
                alert('Insira números válidos')
                invalid = true;
                document.getElementById("jogada").value=''
            }
            if(invalid == false){
                // Jogada do pc
                const num = Number(Math.round(Math.random() * 2))
                var res;
                if (num == 0){
                    res = 'Papel'
                }else if(num == 1){
                    res = 'Pedra'
                }else{
                    res = 'Tesoura'
                }
                // Disputa
                var resultado;
                if(res == resp){
                    resultado = 'Impate'
                }else if((res == 'Pedra' && resp == 'Papel') || (res == 'Papel' && resp == 'Tesoura') || (res == 'Tesoura' && resp == 'Pedra')){
                    resultado = 'Vitória'
                }else{
                    resultado = 'Derrota'
                }
                console.log(resp, res)
                console.log(resultado)
                document.getElementById("jogada").value=''
            }
        }
        