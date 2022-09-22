function lomake()
{
  var etunimi = document.getElementById('enimi').value;
  var sukunimi = document.getElementById('snimi').value;
  var koulu = document.getElementsByName('kouluun');
  var kouluun;
  for (var i = 0; i < koulu.length; i++)
  {
    if(koulu[i].checked)
    {
      kouluun = koulu[i].value;
    }
    {
      document.getElementById('tulos').innerHTML = etunimi + " " + sukunimi;
    }
  }

}
