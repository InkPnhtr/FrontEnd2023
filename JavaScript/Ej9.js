let Encabezado1 = document.getElementById("Encabezado1");
let Ingreso1 = document.getElementById("Ingreso1");
let Parrafo1 = document.getElementById("Parrafo1");
let Boton1 = document.getElementById("Boton1");
let j=0;


Boton1.onclick = function () {
    separarLetras(Ingreso1.value)
};



function separarLetras(frase = "DEf") {
    let fraseSepar = " ";

    for (let i = 0; i < frase.length; i++) {
        fraseSepar = frase.substring(i);
        Parrafo1.innerHTML = fraseSepar;
        console.log(i);
    }

    //for (j = 0; frase.length; j++) {
    //fraseSepar = frase.concat(1,"x");
    //fraseSepar = frase.length;
    //}
    //Parrafo1.innerHTML = fraseSepar;
    //(`<p id="foo">Some HTML</p>`);
    //document.createTextNode("dfsdsdfsdf");
    // Step 1: Create a new <p> element
    var paragraph = document.createElement("p");

    // Step 1: Create a template string with a variable
    var htmlString = `<p>This is a paragraph with ${frase}.</p>`;
    paragraph.innerHTML = htmlString;

    // Step 3: Insert the <p> element into the DOM
    // You need to specify where you want to insert it. For example, you can insert it into the body of the document.
    document.body.appendChild(paragraph);
}
