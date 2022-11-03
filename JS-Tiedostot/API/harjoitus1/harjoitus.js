var tulos = document.getElementById('tulos');

function tiedot()
{
  fetch("https://randomuser.me/api/")
  .then(response => response.json())
  .then(data => {

var henk = (data.results[0].name.title + " " + data.results[0].name.first + " " + data.results[0].name.last);
var osoite = (data.results[0].location.street.name + ", " + data.results[0].location.street.number + ", " + data.results[0].location.country);
var email = (data.results[0].email);
var puh = (data.results[0].phone);
var suku = (data.results[0].gender)
var saika = (data.results[0].dob.date)
var kuva = (data.results[0].picture.medium)
console.log(data);

//console.log(data.results[0].name);
//
document.getElementById('tulos').innerHTML = "<b>Nimi:</b> " + henk + "<br>" + "<b>Sukupuoli:</b> " + suku + "<br>" + "<b>Osoite:</b> "
+ osoite + "<br>" + "<b>Sähköposti:</b> " + email + "<br>" + "<b>Puhelinumero:</b> " + puh + "<br>" + "<b>Syntymäaika:</b> " + saika;
document.getElementById('kuvat').innerHTML = kuva;
//  console.log(data.results[0].name);
  } );
  }
