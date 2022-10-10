function tehtava1() //mikähän mahtaa olla pielessä, kun antaa 12 pistettä joka kirjaimelle eikä näytä kirjainta vaan NaN?
{
  var kirjain = parseInt(document.getElementById('t1').value);
  var piste = 0;
  for(var i = 0; i <kirjain.lenght; i++);
{
  switch (kirjain[i])
{
    case 'a', 'A', 'e', 'E', 'i', 'I', 'n', 'N', 's', 'S', 't', 'T':
      piste++;
      break;

    case 'o', 'O', 'ä', 'Ä', 'k', 'K', 'l', 'L':
      piste+=2;
      break;

    case 'u', 'U', 'm', 'M':
      piste+=3;
      break;

    case 'y', 'Y', 'h', 'H', 'j', 'J', 'p', 'P', 'r', 'R', 'v', 'V':
      piste+=4;
      break;

    case 'ö', 'Ö', 'd', 'D':
      piste+=7
      break;

    case 'b', 'B', 'f', 'F', 'g', 'G':
      piste+=8;
      break;

    case 'c', 'C':
      piste+=10;
      break;

    default:
    piste+=12;
  }
document.getElementById('v1').innerHTML = "Kirjaimen " + kirjain  + " piste on " + piste;
}
}

function tehtava2()
{
  var lotto = [];
  while(lotto.length < 7)
  {
  var s = Math. floor(Math. random() * 40) + 1;
  if(lotto.indexOf(s) === -1) lotto.push(s);
}
  document.getElementById('v2').innerHTML = lotto
}

function tehtava3()
{
    var t1 = [];
    t1 = [[4, 8, 7, 1], [4, 29, 54, 65], [64, 32, 98, 95], [45, 51, 78, 94], [37, 2, 58, 8]];
    var tulos = '<table border="5">';
    for(var j = 0; j < t1.length; j++)
    {
      tulos += '<tr>';
      for(var k = 0; k < t1[j].length; k++)
      {
        tulos += '<td>' + t1[j][k] + '</td>';
      }
      tulos += '</tr>';
    }
    tulos += '</table>';
    document.getElementById('v3').innerHTML = tulos;
  }

function tehtava4()
{
  var pakka = [''];
  var maat = ['&#9828;', '&#9827;', '&#9826;', '&#9825;'];
  var numerot = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
  laskuri = 0;
  for(m = 0; m < maat.length; m++)
  {
    for(n = 0; n < numerot.length; n++)
    {
      if(m == maat.length-1 && n == numerot.length-1)
      {
        pakka[laskuri] = maat[m] + numerot[n];
      }
      else {
        pakka[laskuri] = maat[m]+numerot[n];
        laskuri++;
      }

    }
  }
  var kortit = [];
  for(l = 0; l < 5; l++)
  {
      temp = pakka[Math.floor(Math.random()*52)];
      kortit[l] = temp;
  }
  document.getElementById('v4').innerHTML = kortit;
}
