function teh1()
{
  var luku = parseInt(document.getElementById('tehtava1').value);
  var luvut = "<p>";
  for(var i = 2; i <= luku; i= i+2)
{
  luvut+=i;
  luvut+=" ";
}
luvut+="</p>";
document.getElementById('v1').innerHTML = luvut;
}


function teh2()
{
  var ssana = document.getElementById('tehtava2').value;
  var joku = "<p>";
  for (var i = 0; i < ssana.length; i++)
  {
    joku += ssana[i] + 'ö';
  }
  joku += "</p>";
  document.getElementById('v2').innerHTML = joku;
}

function teh3()
{
  var sana = document.getElementById('tehtava3').value;
  var tarkista = 'Ei löydy';
  for(var i = 0; i < sana.length; i++)
  {
    if(sana[i] == 'ö')
    {
      tarkista = 'Löytyy';
    }
  }
  document.getElementById('v3').innerHTML = tarkista
}

function teh4()
{
 var luvu = document.getElementById('tehtava4').value;
 var numero = 1;
 for(var i = 1; i <= luvu; i++)
 {
   numero*=i;
 }
 document.getElementById('v4').innerHTML = 'Luvun ' + luvu + ' kertoma on ' + numero;
}

function teh5()
{
  var nayta = '';
  for(var a = 1; a <= 100; a++)
  {
    if(a%3==0 && a%5==0)
    {
      nayta+='Jes Jee ';
    }
    else if(a%5==0)
    {
      nayta+='Jee ';
    }
    else if(a%3 == 0)
    {
      nayta+='Jes ';
    }
    else
        {
        nayta+='';
        }
      document.getElementById('v5').innerHTML = nayta;
  }
}

function teh6()
{
  var ke = '<p>';
  for(var l = 1; l <= 10; l++)
  {
    ke+= l + ' ';
  }
  ke+= '</p>';
  document.getElementById('v6').innerHTML = ke;
}

function teh7()
{
  laskenta = 0;
  for(var p = 1; p <=10; p++)
  {
    laskenta+= p;
  }
  document.getElementById('v7').innerHTML = laskenta;
}

function teh8()
{
  var konu = document.getElementById('tehtava8').value;
  var pot = document.getElementById('tehtava81').value;
  var yt = konu;
  for(var s = 1; s < pot; s++)
  {
    yt*= konu;
  }
  document.getElementById('v8').innerHTML = yt;
}

function teh9()
{
  var taulu = [], temp;
    for(var e = 0; e < 5; e++)
    {
      temp = document.getElementById('l1['+e+']').value;
      temp = parseInt(temp);
      taulu.push(temp);
      //alert(taulu);
    }
    taulu = taulu.sort((a,b) => a-b);
    document.getElementById('v9').innerHTML = '<p>Pienin luku: ' + taulu[0] + ' ja suurin luku: '+ taulu[taulu.length-1];
}
function teh10()
{
  {
    var pw = '';
    var yksi, kaksi;
    pw = document.getElementById('tehtava10').value;
    alert(pw);
    var taulu = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j','k', 'l', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u','v', 'x', 'y', 'z', 'Ã¥', 'Ã¤', 'Ã¶', 'w'];
    var temp = [];
    var lop='';
    for(var s = 0; s < pw.length; s++)
    {
      eka = pw[s];
      temp.push(eka);
      var lisa = Math.floor(Math.random()*taulu.length);
      toka = taulu[lisa];
      temp.push(toka);
    }
    lop = temp.join('');
    document.getElementById('v10').innerHTML = lop;
  }
}
function teh11()
{
  var nro1, nro2, palku, ralku, psumma=0, rsumma=0, pluvut='', rluvut='';
   nro1 = parseInt(document.getElementById('tehtava11').value);
   nro2 = document.getElementById('tehtava12').value;
   if(nro1%2 == 0)
   {
     palku = nro1;
   }
   else {
     palku = nro1+1;
   }
   for(var b = palku; b<=nro2; b+=2)
   {
     pluvut += b + ' ';
     psumma += b;
   }
   if(nro1%2 == 0)
   {
     ralku = nro1+1;
   }
   else {
     ralku = nro1;
   }
   for(var r = ralku; r<=nro2; r+=2)
   {
     rluvut += r + ' ';
     rsumma += r;
   }
   document.getElementById('v11').innerHTML = 'Parilliset numerot: ' + pluvut +' ja niiden summa: ' + psumma + ' Parittomat luvut: ' + rluvut + ' ja niiden summa: '+ rsumma;
}
