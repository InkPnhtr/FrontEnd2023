
let texto = "El Perro, en la Luna! ";
let parra = document.getElementById("texto");
texto = parra.innerText;
const palabs = texto.split (/\s+|\W+/);
const b = [];

let f = palabs[0];
let max= palabs[1];
for (let x=0; x<palabs.length; x++){
    f = palabs[x];
    if (f.length > 8){
        b.push(f);
    }
    max += (palabs[x+5])+" ";
    console.log(max);
}
console.log("CHAR > 8: " + b);

document.getElementById("Res").innerHTML = max;
//console.log(texto);