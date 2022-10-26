var txtAno = document.getElementById("txtAno");
var res = document.getElementById("res");
function verificar(){
    var dataAtual = new Date();
    var anoAtual = dataAtual.getFullYear();
    var anoNasc = Number(txtAno.value);


    if(anoNasc > anoAtual || anoNasc <= 0){
        alert(`Ano Inválido. Tente novamente`);
    }else{
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');
        var fsex = document.getElementsByName('radsex');
        var idade = anoAtual - anoNasc;
        var gen = '';
        if(fsex[0].checked){
            art = 'um';
            gen = 'Homem';
            if(idade>=0 && idade<9){//Bebe
                img.setAttribute('src', 'images/bebeM.png');
            }else if(idade<16){     //Crianca
                img.setAttribute('src', 'images/criancaM.png');
            }else if(idade<22){     //Jovem
                img.setAttribute('src', 'images/jovemM.png');
            }else if(idade<60){     //Adulto
                img.setAttribute('src', 'images/adultoM.png');
            }else{                  //Idoso
                img.setAttribute('src', 'images/idosoM.png');
            }
        }else{
            art = 'uma';
            gen = 'Mulher';
            if(idade>=0 && idade<9){//Bebe
                img.setAttribute('src', 'images/bebeF.png');
            }else if(idade<16){     //Crianca
                img.setAttribute('src', 'images/criancaF.png');
            }else if(idade<22){     //Jovem
                img.setAttribute('src', 'images/jovemF.png');
            }else if(idade<60){     //Adulto
                img.setAttribute('src', 'images/adultoF.png');
            }else{                  //Idoso
                img.setAttribute('src', 'images/idosoF.png');
            }
        }
        res.innerHTML = `Identificamos ${art} <strong>${gen}</strong> de <strong>${idade}</strong> anos.`;
        res.appendChild(img);
    }
}