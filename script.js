let jogada = 1;
let bloick = [];
let click = 0;
let jogador1 = 0;
let jogador2 = 0;
let nome;
let nome2;
let jogou = 0;
let jogou2 = 0;
let vit = 0;
let vit2 = 0;

function jogo(aX, oX, block, ind, ind1) {

    if (jogada == 1){
        document.getElementById(aX).style.visibility = "visible";
        document.getElementById(oX).style.visibility = "hidden";
        document.getElementById(block).style.pointerEvents = "none";
        jogou += 1;
        document.getElementById('jog').innerHTML = "Jogadas: " + jogou;
        bloick[ind] = aX;
        jogada++;
    }
    else{
        document.getElementById(aX).style.visibility = "hidden";
        document.getElementById(oX).style.visibility = "visible";
        document.getElementById(block).style.pointerEvents = "none";
        jogou2 += 1;
        document.getElementById('jog2').innerHTML = "Jogadas: " + jogou2;
        bloick[ind] = oX;
        jogada--;
    }
    setTimeout(function(){
        //CONDIÇÕES PARA: X;

        //linha 1 inteira OU coluna 1 inteira
        if ((bloick[1] == 'a1' && bloick[2] == 'a2' && bloick[3] == 'a3') || (bloick[1] == 'a1' && bloick[4] == 'a4' && bloick[7] == 'a7'))
        {
            vit++;
            alert('Jogador(a) ' + nome + ' venceu :D');
            reiniciar(1);
            jogador1++;
            
        }
        // Linha 2 inteira OU Coluna 2 inteira
        else if ((bloick[4] == 'a4' && bloick[5] == 'a5' && bloick[6] == 'a6') || (bloick[2] == 'a2' && bloick[5] == 'a5' && bloick[8] == 'a8')){
            vit++;
            alert('Jogador(a) ' + nome + ' venceu :D');
            reiniciar(1);
            jogador1++;
        }

        // Linha 3 inteira OU Coluna 3 inteira
        else if ((bloick[7] == 'a7' && bloick[8] == 'a8' && bloick[9] == 'a9') || (bloick[3] == 'a3' && bloick[6] == 'a6' && bloick[9] == 'a9')){
            vit++;
            alert('Jogador(a) ' + nome + ' venceu :D');
            reiniciar(1);
            jogador1++;
        }

        ///////////////////////////
        //CONDIÇÕES PARA: O;

        //linha 1 inteira OU coluna 1 inteira
        if ((bloick[1] == 'o1' && bloick[2] == 'o2' && bloick[3] == 'o3') || (bloick[1] == 'o1' && bloick[4] == 'o4' && bloick[7] == 'o7'))
        {
            vit2++;
            alert('Jogador(a) ' + nome2 + ' venceu :D');
            reiniciar(2);
            jogador2++;
            
        }
        // Linha 2 inteira OU Coluna 2 inteira
        else if ((bloick[4] == 'o4' && bloick[5] == 'o5' && bloick[6] == 'o6') || (bloick[2] == 'o2' && bloick[5] == 'o5' && bloick[8] == 'o8')){
            vit2++;
            alert('Jogador(a) ' + nome2 + ' venceu :D');
            reiniciar(2);
            jogador2++;
        }

        // Linha 3 inteira OU Coluna 3 inteira
        else if ((bloick[7] == 'o7' && bloick[8] == 'o8' && bloick[9] == 'o9') || (bloick[3] == 'o3' && bloick[6] == 'o6' && bloick[9] == 'o9')){
            vit2++;
            alert('Jogador(a) ' + nome2 + ' venceu :D');
            reiniciar(2);
            jogador2++;
        }

        // Diagonais
            // X:
        if ((bloick[1] == 'a1' && bloick[5] == 'a5' && bloick[9] == 'a9') || (bloick[3] == 'a3' && bloick[5] == 'a5' && bloick[7] == 'a7'))
        {
            vit++;
            alert('Jogador(a) ' + nome + ' venceu :D');
            reiniciar(1);
            jogador1++;
            
        }
            // O:
        else if ((bloick[1] == 'o1' && bloick[5] == 'o5' && bloick[9] == 'o9') || (bloick[3] == 'o3' && bloick[5] == 'o5' && bloick[7] == 'o7'))
        {
            vit2++;
            alert('Jogador(a) ' + nome2 + ' venceu :D');
            reiniciar(2);
            jogador2++;
        }

        else{
            if ((jogou + jogou2) == 7){   
                document.getElementById('h3').style.visibility = "visible"; 
            }
        }
        
    }, 1);
}