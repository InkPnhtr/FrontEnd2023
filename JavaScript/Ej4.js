let titu = document.getElementById("h1");
let inp1 = document.getElementById("ibox1");
let pa = document.getElementById("p1");
let boton = document.getElementById("btn1");

//window.onload = alert("hoLAAAA!")

//pa.style.color = "red";
//document.getElementById(p1).innerText = "Cambiar Texto";

boton.onclick = function () {
    let choi = inp1.value
    if (choi.toLowerCase() != "s" && choi.toLowerCase() != "n") {
        pa.innerHTML = "Ingreso no Vlaido";
    } else {
        pa.innerHTML = "OK!";
    }
    titu.innerHTML = inp1.ariaCurrent;

    pa.style.color = "red";
    //alert("Boton!!!");

}


