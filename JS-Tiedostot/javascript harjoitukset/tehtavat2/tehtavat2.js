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
