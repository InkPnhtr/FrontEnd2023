let titu = document.getElementById(h1);
let pa = document.getElementById(p1);
let boton = document.getElementById(btn1);

//window.onload = alert("hoLAAAA!")
pa.style.color = "red";
pa.innerText = "SLANDAR";

boton.onclick = function () {
    titu.innerHTML = "EGG";
    pa.innerHTML = "EGG";
    pa.style.color = "red";
    alert("Boton!!!");

}


