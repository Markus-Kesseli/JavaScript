function tulosta()
{
  var etunimi = document.getElementById('enimi').value;
  var sukunimi = document.getElementById('snimi').value;
  if (etunimi == "" || sukunimi == "")

  {
  alert("Täytä kaikki tiedot");
  }
  else
  {
    document.getElementById('tx').innerHTML = "Hei " + etunimi + " " + sukunimi;
  }
}
