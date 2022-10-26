let zeichenkette = document.getElementById("zeichenkette");
let trennung = document.getElementById("trennung");
let davor = document.getElementById("davor");
let danach = document.getElementById("danach");
let vordererTeil = document.getElementById("vordererTeil");
let hintererTeil = document.getElementById("hintererTeil");

function absenden() {
  let ergebnis = zeichenkette.value.split(trennung.value);
  console.log(ergebnis);
  if (davor.checked) {
    vordererTeil.innerHTML = ergebnis[0]
    hintererTeil.innerHTML = trennung.value + ergebnis[1]
    
  } else if (danach.checked) {
    vordererTeil.innerHTML = ergebnis[0] + trennung.value
    hintererTeil.innerHTML = ergebnis[1]
  }
}
