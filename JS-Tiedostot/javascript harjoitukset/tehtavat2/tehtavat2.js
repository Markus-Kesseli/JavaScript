//Laske onko luku positiivnen vai negatiivinen
function t1()
{
  var t01 = parseInt(document.getElementById('te1').value)


  if (t01 >=0)
  {
      alert("luku on positiivinen")
  }
  else
  {
      alert("Luku on negatiivinen")
  }
}

//Syötä viikonpäivä numerona
function viikko()
{
    var viikko = parseInt(document.getElementById('te2').value)

switch (viikko)
{
    case 1:
      alert("Maanantai");
        break;

    case 2:
      alert("Tiistai");
      break;

    case 3:
      alert("Keskiviikko");
      break;

    case 4:
      alert("Torstai");
      break;

    case 5:
      alert("Perjantai");
      break;

    case 6:
      alert("Lauantai");
      break;

    default:
    alert("sunnuntai")
    break;
  }
}

//en teidä mikä tässä mättää, kun näyttää aina että vuosi on karkausvuosi.
function vuosi()
{
var vuosi = document.getElementById('luku').value;
  if (vuosi / 4)
  {
    tulos='Vuosi on karkausvuosi';
  }
  else if (vuosi /! 100)
  {
    tulos='Vuosi on karkausvuosi';
  }
  if (vuosi / 400)
  {
    tulos='Vuosi on karkausvuosi';
    tulos='Vuosi ei ole karkausvuosi';
  }
  document.getElementById('te3').innerHTML = tulos;
}

function laske()
{
  var l1 = parseInt(document.getElementById('n1').value);
  var l2 = parseInt(document.getElementById('n2').value);
  var l3 = parseInt(document.getElementById('n3').value);
  var l4 = parseInt(document.getElementById('n4').value);
  var l5 = parseInt(document.getElementById('n5').value);
  let summa = l1 + l2 + l3 + l4 + l5;
  let keskiarvo = summa / 5;

  document.getElementById('v4').innerHTML = "Lukujen summa on " + summa + " ja keskiarvo on " + keskiarvo;
}

function taulukko()
{
  var luvut = ' ';
  var laskut = document.getElementById('numerot').value;
  for (var i = 1; i <= 10; i++)
  {
    luvut+= laskut + ' x ' + i + ' = ' + laskut * i + '<br>';
  }
  document.getElementById('v5').innerHTML = luvut;
}
