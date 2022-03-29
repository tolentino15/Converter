let taxa;
let dolar;
let real;
document.getElementById("botao2").disabled = true;
document.getElementById("botao3").disabled = true;
document.getElementById("botao0").disabled = true;


function confirma(){

    taxa = document.getElementById('Conversão.taxa').value;

    document.getElementById("botao2").disabled = false;
    document.getElementById("botao3").disabled = false;
    document.getElementById("botao0").disabled = false;

    document.getElementById("botao1").disabled = true;

}

function limpartaxa(){

    document.getElementById('Conversão.taxa').value='';
    document.getElementById('Conversão.realdolar').value='';
    document.getElementById('Conversão.dolarreal').value='';
    
    document.getElementById("botao0").disabled = true;
    document.getElementById("botao1").disabled = false;
    document.getElementById("botao2").disabled = true;
    document.getElementById("botao3").disabled = true;

}



    //converter Dolar em Real
function conversãoDR(){

    dolar = document.getElementById('Conversão.dolarreal').value;
 
    //conversão
    real = dolar * taxa;

    //imprimindo resultado
    alert('R$'+ real + ' Reais');

}

     //converter Real em Dolar
function conversãoRD(){

    real  = document.getElementById('Conversão.realdolar').value;

    //conversão
    dolar = real / taxa;

    //imprimindo resultado
    alert('$'+ dolar + " Dólares" );

}