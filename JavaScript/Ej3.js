let titu = document.getElementById("h1");
let inp1 = document.getElementById("ibox1");
let pa = document.getElementById("p1");
let boton = document.getElementById("btn1");


console.log("HOLA MUNDO!!");
//window.onload = alert("hoLAAAA!")

//pa.style.color = "red";
//document.getElementById(p1).innerText = "Cambiar Texto";
document.createElement(pa);

boton.onclick = function() {
    if (inp1.value > 18) {
        pa.innerHTML = "Es MAyor";
    }else{
        pa.innerHTML = "Es MEnor!";
    }
    titu.innerHTML = inp1.nodeValue;
    
    pa.style.color = "red";
    //alert("Boton!!!");

}


