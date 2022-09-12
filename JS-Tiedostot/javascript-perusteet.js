function laskut()
{
  var luku1, luku2, erotus, summa, osamaara, tulo;
  luku1 = 10;
  luku2 = 2;
  erotus = luku1 - luku2;
  summa = luku1 + luku2;
  osamaara = luku1 / luku2;
  tulo = luku1 * luku2;
  console.log("Summa = " + summa);
  console.log("Erotus = " + erotus);
  console.log("Osammäärä= " + osamaara);
  console.log("Tulo = " + tulo);
}

function liitasanat()
{
  var t1, t2, t3;

  t1 = "html ";
  t2 = "css ";
  t3 = "javascript";

  console.log(t1 + t2 + t3);
}

function attribuutti(nimi)
{
  var t1 = " on ";
  var t2 = "ulkona";

  console.log(nimi + t1 + t2);
}

function laskeYhteen(luku1, luku2)
{
  console.log(luku1 + luku2);
}
