var formCalculadora = document.querySelector('#formCalculadora');
var anoAtual = new Date().getFullYear();
var mesAtual = new Date().getMonth() + 1;
var diaAtual = new Date().getDate();

formCalculadora.addEventListener('submit', function calcula(e) {
    e.preventDefault();

    var diaNasc = parseInt(document.querySelector('#diaNasc').value);
    var mesNasc = parseInt(document.querySelector('#mesNasc').value);
    var anoNasc = parseInt(document.querySelector('#anoNasc').value);

    var respostaAno = document.querySelector('#respostaano');
    var respostaMes = document.querySelector('#respostames');
    var respostaDia = document.querySelector('#respostadia');

    var idadeAnos = anoAtual - anoNasc;
    var idadeMeses = mesAtual - mesNasc;
    var idadeDias = diaAtual - diaNasc;

    if (idadeDias < 0) {
        idadeMeses--;
        var ultimoDiaMesAnterior = new Date(anoAtual, mesAtual - 1, 0).getDate();
        idadeDias += ultimoDiaMesAnterior;
    }

    if (idadeMeses < 0) {
        idadeAnos--;
        idadeMeses += 12;
    }
    
   

    respostaAno.innerHTML = idadeAnos;
    respostaMes.innerHTML = idadeMeses;
    respostaDia.innerHTML = idadeDias;

});


