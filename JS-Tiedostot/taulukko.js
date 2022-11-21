function esimerkkiTaulukko()

{
  var autot = [];
  var caarat = ["Tesla", " VW i3", " Hyundai Ionic"];
  autot.push("jeep");
  document.write("Caara = " + caarat[1] + " / autot = " + autot[0] + "<br />");
  document.write("Caara = " + caarat + "<br />");
  document.write("Autot = " + autot + "<br />");
  var siirrettavat = caarat.pop();
  document.write("Siirrettävät = " + siirrettavat);
  document.write("<br />Caarat taulukko = " + caarat);
  autot.unshift(siirrettavat);
  document.write("<br />Autot Taulukko = " + autot);
  //caarat.push() = autot.pop(); Selain ei tykkää tästä
  document.write("<br /> Caarat taulukko = " + caarat + "<br /> Autot Taulukko = " + autot);
}
