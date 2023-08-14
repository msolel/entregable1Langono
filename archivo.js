alert("Bienvenido a la tienda Dejando Huellas.\n Luego de ingresar con su usuario y Clave se le mostraran las opciones de los productos a comprar.")

let ingreso = false

function login(){
   const contrasenia = "123"
    const usuario = "sole"
   
    let usuarioIng = prompt("Ingrese su nombre")
    let usuarioLower = usuarioIng.toLocaleLowerCase()
    let constraseniaIngresada = prompt("ingrese la contrasenia")
    if((usuario === usuarioLower)&&(contrasenia===constraseniaIngresada)){
        
        alert(`Bienvenido ${usuario} `)
        ingreso=true
        return true
    } else {
        alert(`Los datos ingresados no son correctos`);
        let otroIntento = true
        otroIntento = confirm("¿Desea continuar?")
            if (otroIntento) {
                login()
            }
        
    }
}

function compra(){
    let precioMaceta = 100;
    let precioBandeja = 200;
    let precioMate = 100;
    let precioEspejo = 300;
    
    let totalValorComprado = 0;
    let productosComprados = "";
    let compraRealizada = "";

    let productoIng = prompt("Seleccione producto:\n 1- Maceta 2-Bandeja 3-Mate 4-Espejo")
    productoIng = productoIng.toLocaleLowerCase()

    switch(productoIng){
        case "maceta":
            alert("Eligio " + productoIng + " cuyo precio es " + precioMaceta);
            totalValorComprado = Number(totalValorComprado) + Number(precioMaceta);
            productosComprados = productosComprados + '-' + productoIng;
            break;
        case "bandeja":
            alert("Eligio " + productoIng + " cuyo precio es " + precioBandeja);
            totalValorComprado = Number(totalValorComprado) + Number(precioBandeja);
            productosComprados = productosComprados + '-' + productoIng;
            break;
        case "mate":
            alert("Eligio " + productoIng + " cuyo precio es " + precioMate);
            totalValorComprado = Number(totalValorComprado) + Number(precioMate);
            productosComprados = productosComprados + '-' + productoIng;
            break;
        case "espejo":
            alert("Eligio " + productoIng + " cuyo precio es " + precioEspejo);
            totalValorComprado = Number(totalValorComprado) + Number(precioEspejo);
            productosComprados = productosComprados + '-' + productoIng;
            break;
        default:
            alert("El producto ingresado es invalido")

        }
        //if (productosComprados <> ""){
            compraRealizada =   productosComprados + ' $' + String(totalValorComprado)
       // }
     
     return compraRealizada
   
}

const inicializar = ()=>{
    let retornoCompra = "";
    login()
    let loop = true
    do{
        retornoCompra = retornoCompra + compra()
        loop = confirm("¿Desea cargar otro producto?")
    } while(loop)
    alert("Su compra fue:" + retornoCompra)
}


inicializar()
