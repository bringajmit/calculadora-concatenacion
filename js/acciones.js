//var valor1=0;
//let valor2=0;
//let total=0;

const sumar = () => {
  //  valor1=parseFloat(document.getElementById("valor1").value);
    //valor2=parseFloat(document.getElementById("valor2").value);
    var valor1=parseFloat(document.getElementById("valor1").value);
    var valor2=parseFloat(document.getElementById("valor2").value);
    total=valor1+valor2;
    console.log(total);
    document.getElementById("resultado").value=parseFloat(total);
}

const ConcatenarNombre=()=>{
    var mostrar="";
    var nombre=document.getElementById("nombre").value;
    var apellido=document.getElementById("apellido").value;
    mostrar=`Hola ${nombre} ${apellido}`;
    document.getElementById("visor").value=mostrar;
}