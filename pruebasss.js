
function Calculosa(a,b,operation){

    switch(operation){

        case "suma":
            return console.log(a+b);
            break;
        
        case "resta":
            return a-b;
            break
        
        case "multiplicacion":
            return a*b;
            break;

        case "division":
            return a/b;
            break
        
        default:
            console.error( "La operacion ${operation} no es valida")
    }

}


Calculosa(27 , 2 , "suma");
///EJECUCION DE FUNCIONES


function  mostrar(valor){

    document.getElementById("resultado").innerHTML = valor;
}