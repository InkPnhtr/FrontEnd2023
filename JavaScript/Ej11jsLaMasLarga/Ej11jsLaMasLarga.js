
let texto = "El Perro, en la Luna! ";
let parra = document.getElementById("texto");
texto = parra.innerText;
const palabs = texto.split (/\s+|\W+/);
const b = [];

let f = palabs[0];
let max= palabs[1];
for (let x=0; x<palabs.length; x++){
    f = palabs[x];
    if (f.length > max.length){
        max = f;
    }
}
console.log("MAS LARGA " + max);

document.getElementById("Res").innerHTML = max;
//console.log(texto);