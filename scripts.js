let fondo_cambiante = document.getElementById("fondo_cambiante");
if(fondo_cambiante != undefined && fondo_cambiante != null){
    console.log("Fondo adquirido!");
}else{
    console.log("Error en fondo");
}
let rojo;
let verde;
let azul;
let getColors = function(){
    rojo = document.getElementById("selector_rojo").value;
    if(rojo > 255){
        rojo = 255;
        document.getElementById("selector_rojo").value = rojo;
    };
    verde = document.getElementById("selector_verde").value;
    if(verde > 255){
        verde = 255;
        document.getElementById("selector_verde").value = verde;
    };
    azul = document.getElementById("selector_azul").value;
    if(azul > 255){
        azul = 255;
        document.getElementById("selector_azul").value = azul;
    };
    if(rojo > 0){
        console.log("Rojo conseguido!");
    }else{
        console.log("Rojo vacio");
    }
    if(verde > 0){
        console.log("Verde conseguido!");
    }else{
        console.log("Verde vacio");
    }
    if(azul > 0){
        console.log("Azul conseguido!");
    }else{
        console.log("Azul vacio");
    }
};
let colorChange = function(){
    let rgbPasado = fondo_cambiante.style.backgroundColor = "rgb("+rojo+","+verde+","+azul+")";
    console.log(rgbPasado)
};
let resetPage = function(){
    console.clear();
    rojo = 0;
    document.getElementById("selector_rojo").value = rojo;
    verde = 0;
    document.getElementById("selector_verde").value = verde;
    azul = 0;
    document.getElementById("selector_azul").value = azul;
    colorChange();
}