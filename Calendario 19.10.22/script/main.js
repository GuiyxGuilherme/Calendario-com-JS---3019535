var body = document.querySelector('body');
var h1 = document.createElement('h1');


ano = parseInt(window.prompt(" ANO? "));
mes = parseInt(window.prompt(" MÊS? "));


var data = new Date();
data.setDate(1);
data.setMonth(mes - 1);
data.setFullYear(ano);




var meses = [ "",   "JANEIRO", "FEVEREIRO" , "MARÇO" , "ABRIL", "MAIO",
"JUNHO" , "JULHO", "AGOSTO", "SETEMBRO" , "OUTUBRO" , "NOVEMBRO" , "DEZEMBRO"];


h1.innerText = 'Calendario';

body.appendChild(h1);

//COMEÇA A LÓGICA CALENDARIO

var table = document.createElement('table');
var tbody = document.createElement('tbody');
var thead = document.createElement('thead');
var tr = document.createElement('tr');
var td = document.createElement('td');

table.setAttribute('cellpading', '0');
table.setAttribute('cellspacing', '0');
td.setAttribute('colspan', '7');

td.innerText = meses[mes] + " " + ano;

body.appendChild(table);
table.appendChild(thead);
table.appendChild(tbody);
thead.appendChild(tr);
tr.appendChild(td);



function imprimeDiasDaSemana(){
    var dias = ["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SAB"]; 
    var tr = document.createElement('tr');

    for(var dia of dias)
    {
       var td = document.createElement('td');
       td.innerText = dia;
        tr.appendChild(td);
    }
// ESSE TBODY É DE ESCOPO GLOBAL
        tbody.appendChild(tr);
}




function ultimoDiaDoMes(data){
        
    var dataCopia = new Date(data);
    dataCopia.setMonth(data.getMonth() + 1);
    dataCopia.setDate(1);
    dataCopia.setDate(dataCopia.getDate() - 1);

    return dataCopia.getDate();

}




function imprimeDiasDoMesAtual(){

    var tr = document.createElement('tr');
    diaDaSemanaAtual = data.getDay();
    var nDia = 1;
    var x = 1;
    var complemento = null;

    while (nDia <= ultimoDiaDoMes(data)){

        var td = document.createElement('td');
        var dataPrincipalCopia = new Date(data);
        dataPrincipalCopia.setDate(nDia);

    if (x <= diaDaSemanaAtual){
       td.innerText = "";
    }
    
    else {
        td.innerText = nDia;
        complemento = dataPrincipalCopia.getDay();
        nDia++;
    }

        tr.appendChild(td);

    if(x % 7 === 0){
     tbody.appendChild(tr);
     var tr = document.createElement('tr');
    }

         x++;  
    }
    complementoDeTd = 6 - complemento;
   

    for(var i = 0; i < complementoDeTd; i++){
        var td = document.createElement('td');
        td.innerText = "";
        tr.appendChild(td);
    }


        tbody.appendChild(tr);
    }

//TERMINA A LÓGICA DO CALENDARIO



imprimeDiasDaSemana();
imprimeDiasDoMesAtual();



