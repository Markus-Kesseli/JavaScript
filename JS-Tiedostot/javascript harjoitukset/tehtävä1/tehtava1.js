function jarjesta()
{
var jar1 = parseInt(document.getElementById('j1').value);
var jar2 = parseInt(document.getElementById('j2').value);
var jar3 = parseInt(document.getElementById('j3').value);
document.write("Annoit luvut: " + jar1 + ", " + jar2 + ", " + jar3 + "<br>");

 if(jar1 < jar2 && jar1 < jar3)
    {
      if(jar2 < jar3)
      {
        document.write("Järjestys: " + jar1 + ", " + jar2 + ", " + jar3);
      }
      else
      {
        document.write("Järjestys: " + jar1 + ", " + jar3 + ", " + jar2);
      }
    }
    else if (jar2 < jar1 && jar2 < jar3)
      {
      if (jar1 < jar3)
      {
        document.write("Järjestys: " + jar2 + ", " + jar1 + ", " + jar3);
      }
      else
      {
          document.write("Järjestys: " + jar2 + ", " + jar3 + ", " + jar1);
      }
      }
    else if (jar3 < jar1 && jar3 < jar2)
    {
      if (jar1 < jar2)
      {
          document.write("Järjestys: " + jar3 + ", " + jar1 + ", " + jar2);
      }
      else
      {
        document.write("Järjestys: " + jar3 + ", " + jar2 + ", " + jar1);
      }
    }
}



function etsi()
{
var l1  = parseInt(document.getElementById('luku1').value);
var l2  = parseInt(document.getElementById('luku2').value);
var l3  = parseInt(document.getElementById('luku3').value);
var l4  = parseInt(document.getElementById('luku4').value);
var l5  = parseInt(document.getElementById('luku5').value);
document.write ("Annoit luvut: " + l1 + ", " + l2 + ", " + l3 + ", " + l4 + ", " + l5 + "<br>");
document.write("Suurin luku on: ")
document.write(Math.max(l1, l2, l3, l4, l5));
}

function tarkista()
{
var tulos = parseInt(document.getElementById('8').value);


  if (tulos%2 == 0)
  {
    alert("Numero " + tulos + " on parillinen");
  }
  else
  {
    alert("Numero " + tulos + " ei ole parillinen")
  }
}

function näytä()
{
  var ajoneuvo = parseInt(document.getElementById('9').value);

  if (ajoneuvo < 15)
  {
    alert("Saat ajaa polkupyörällä");
  }
  else if (ajoneuvo < 18)
  {
    alert("Saat ajaa mopolla")
  }
  else if (ajoneuvo < 100)
  {
    alert("saat ajaa autolla")
  }
}

function kaanna()
{
var kieli = document.getElementById('seitseman').value;

    if(kieli == 'eng')
    {
      alert("Hello world");
    }
    else if (kieli == 'esp')
    {
      alert("Hola mundo");
    }
    else if  (kieli == 'swe')
    {
      alert("Hej världen");
    }
}
