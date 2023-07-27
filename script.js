const users = [
    {
        id:1,
        name: 'Juan Guillermo',
        doc:'123',
        pass:'1234',
        type:'admin'
    },
    {
        id:2,
        name: 'Laura',
        doc:'1234',
        pass:'12345',
        type:'cliente'
    },
    {
        id:3,
        name: 'kelly',
        doc:'12345',
        pass:'123456',
        type:'cliente'
    },
    {
        id:4,
        name: 'Mariana',
        doc:'123456',
        pass:'1234567',
        type:'admin'
    }
]
//2 paso. crear array de billetes
const money =[
    {
        name:'5.000 COP',
        cantidad:0,
        valor:0
    },
    {
        name:'10.000 COP',
        cantidad:0,
        valor:0
    },
    {
        name:'20.000 COP',
        cantidad:0 ,
        valor:0
    },
    {
        name:'50.000 COP',
        cantidad:0,
        valor:0
    },
    {
        name:'100.000 COP',
        cantidad:0,
        valor:0
    }
]
console.log(money);
let total = 0
//3 paso. Declaracion de la funcion que nos va a permitir asignar y mostrar la cantidad y valor de la denominacion del billete entregado al cliente
const cantidadEntregada = (arrayBilletes, denominacion, valorBillete) =>{
    const retiroBill = arrayBilletes.find(din => din.name === denominacion)
    const cantidadActual = retiroBill.cantidad + 1
    retiroBill.cantidad = cantidadActual
    retiroBill.valor = cantidadActual* valorBillete
    console.log(`Cantidad de billetes de ${denominacion} entregados: ${retiroBill.cantidad}, total = $${retiroBill.valor.toLocalString()}`);
}
//Declacion para carfar dinero 
const cargarDinero = () =>{
    // pedimos la cantidada de dinero para caragar el cajero 
    const cincomil = prompt('Ingrese la cantidad de billetes de 5.000COP');
    const diezmil = prompt('Ingrese la cantidad de billetes de 10.000COP');
    const veintemil = prompt('Ingrese la cantidad de billetes de 20.000COP');
    const cincuentamil = prompt('Ingrese la cantidad de billetes de 50.000COP');
    const cienmil = prompt('Ingrese la cantidad de billetes de 100.000COP');
    //llamar a la propiedad cantidad y valor para ingresar los datos cargados por el usuario
    money.forEach(bill =>{
        if(bill.name === '5.000 COP'){
           const cantidadActual = bill.cantidad + parseInt(cincomil)
            bill.cantidad = cantidadActual
            bill.valor = cantidadActual * 5000
            total = total + bill.valor
            console.log(bill);
        }
        if(bill.name === '10.000 COP'){
            bill.cantidad = bill.cantidad + parseInt(diezmil)
            bill.valor = cantidadActual * 10000
            total = total + bill.valor
            console.log(bill);
        }
        if(bill.name === '20.000 COP'){
            bill.cantidad = bill.cantidad + parseInt(veintemil)
            bill.valor = cantidadActual * 20000
            total = total + bill.valor
            console.log(bill);
        }
        if (bill.name === '50.000 COP') {
            bill.cantidad = bill.cantidad + parseInt(cincuentamil);
            bill.valor = bill.cantidad * 50000;
            total = total + bill.valor;
            console.log(bill)
        }
        if (bill.name === '100.000 COP') {
            bill.cantidad = bill.cantidad + parseInt(cienmil);
            bill.valor = bill.cantidad * 100000;
            total = total + bill.valor;
            console.log(bill)
        }
        
    })
    console.log(money);
    console.log('El total del dinero en el cajero es: $', total.toLocaleString());
}
