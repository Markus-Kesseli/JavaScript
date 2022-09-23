function jarjesta()
{

}



function etsi()
{

}

function tarkista()
{
var tulos;
  tulos = parseInt(document.getElementById('8').value);
  document.write("Numero: " + tulos + "<br>");

  if (tulos%2 == 0)
  {
    document.write("Numero on parillinen");
  }
  else
  {
    document.write("Numero ei ole parillinen")
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
