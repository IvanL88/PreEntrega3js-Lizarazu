const persona1 = {
    id: 1,
    nombre: "Iván",
    edad: 34,
    email: "lizarazu.ivan@gmail.com",
    password: "coderhouse",
    pesos: 15334,
    bitcon: 0.25,
    ethereum: 1.33,
    usdc: 1200
}

const persona2 = {
    id: 2,
    nombre: "martina",
    edad: 18,
    email: "perez.martina@gmail.com",
    password: "martinahouse",
    pesos: 500,
    bitcon: 2.36,
    ethereum: 1.33,
    usdc: 1200
}

const persona3 = {
    id: 3,
    nombre: "Juan Carlos",
    edad: 54,
    email: "juanca@gmail.com",
    password: "juancalomas",
    pesos: 532131.25,
    bitcon: 0.75,
    ethereum: 1.33,
    usdc: 1200
}
const bitcon = {
    id: 1,
    compra: 5774579.18,
    venta: 5700282.10
}

const ethereum = {
    id:2,
    venta: 457344.38,
    compra: 425096.50
}

const usdc = {
    id: 3,
    compra: 334.50,
    venta: 331.20
}


const arrayPersona = [persona1,persona2,persona3];
const arrayCripto = [bitcon,ethereum,usdc];


let user     = null;
let password = null;
let ingreso         = false;


function login(){

    user = document.getElementById('email').value;
    password = document.getElementById('password').value;
    let userObj = obtenerStorage();

 
    if (userObj && userObj.email!=document.getElementById('email').value){
        userObj = arrayPersona.find((el) => {
            return el.email==user
            })  
    }  
    console.log(userObj);
    if (userObj!==undefined){
        if (password==userObj.password){
            guardarStorage(userObj);
            window.location.href = "./account.html";
        }else{
            alert("credenciales incorrectas");
            return false;
        }
    }else{
        alert("Email no encontrado");
        return false;
    }  
}

function mostrarPanel(cripto){ 
    ocultarTodasAcciones();
    switch (cripto) {
        case 'btn':
            document.getElementById("btn_panel").classList.remove("d-none");         
            document.getElementById("eth_panel").classList.add("d-none");  
            document.getElementById("usdc_panel").classList.add("d-none");  
            document.getElementById("pesos_panel").classList.add("d-none");              
            break;
        case 'eth':
            document.getElementById("btn_panel").classList.add("d-none");         
            document.getElementById("eth_panel").classList.remove("d-none");  
            document.getElementById("usdc_panel").classList.add("d-none");  
            document.getElementById("pesos_panel").classList.add("d-none");   
            break;
        case 'usdc':
            document.getElementById("btn_panel").classList.add("d-none");         
            document.getElementById("eth_panel").classList.add("d-none");  
            document.getElementById("usdc_panel").classList.remove("d-none");  
            document.getElementById("pesos_panel").classList.add("d-none");   
            break;
        case 'pesos':
            document.getElementById("btn_panel").classList.add("d-none");         
            document.getElementById("eth_panel").classList.add("d-none");  
            document.getElementById("usdc_panel").classList.add("d-none");  
            document.getElementById("pesos_panel").classList.remove("d-none");   
            break;
        default:
            break;
    }
}


function btnAccion(accion){
    document.getElementById("saldo").classList.remove("d-none");   
    let userStorage = obtenerStorage();  
    console.log(userStorage);
    document.getElementById("saldo").innerHTML = "Tu saldo es: "  + userStorage.bitcon + " BTC";
    switch (accion) {
        case 'comprar':
            document.getElementById("btn_saldo_compra").classList.remove("d-none");   
            document.getElementById("btn_saldo_vender").classList.add("d-none"); 
            document.getElementById("eth_saldo_compra").classList.add("d-none"); 
            document.getElementById("eth_saldo_vender").classList.add("d-none"); 
            document.getElementById("usdc_saldo_compra").classList.add("d-none"); 
            document.getElementById("usdc_saldo_vender").classList.add("d-none"); 
            document.getElementById("pesos_saldo_depositar").classList.add("d-none"); 
            document.getElementById("pesos_saldo_retirar").classList.add("d-none");             
            break;
        case 'vender':
            document.getElementById("btn_saldo_compra").classList.add("d-none");   
            document.getElementById("btn_saldo_vender").classList.remove("d-none"); 
            document.getElementById("eth_saldo_compra").classList.add("d-none"); 
            document.getElementById("eth_saldo_vender").classList.add("d-none"); 
            document.getElementById("usdc_saldo_compra").classList.add("d-none"); 
            document.getElementById("usdc_saldo_vender").classList.add("d-none"); 
            document.getElementById("pesos_saldo_depositar").classList.add("d-none"); 
            document.getElementById("pesos_saldo_retirar").classList.add("d-none"); 
            break;    
        default:
            break;
    }
}

function ethAccion(accion){
    document.getElementById("saldo").classList.remove("d-none");   
    let userStorage = obtenerStorage();  
    document.getElementById("saldo").innerHTML = "Tu saldo es: "  + userStorage.ethereum + " ETH";
    switch (accion) {
        case 'comprar':
            document.getElementById("btn_saldo_compra").classList.add("d-none");   
            document.getElementById("btn_saldo_vender").classList.add("d-none"); 
            document.getElementById("eth_saldo_compra").classList.remove("d-none"); 
            document.getElementById("eth_saldo_vender").classList.add("d-none"); 
            document.getElementById("usdc_saldo_compra").classList.add("d-none"); 
            document.getElementById("usdc_saldo_vender").classList.add("d-none"); 
            document.getElementById("pesos_saldo_depositar").classList.add("d-none"); 
            document.getElementById("pesos_saldo_retirar").classList.add("d-none");             
            break;
        case 'vender':
            document.getElementById("btn_saldo_compra").classList.add("d-none");   
            document.getElementById("btn_saldo_vender").classList.add("d-none"); 
            document.getElementById("eth_saldo_compra").classList.add("d-none"); 
            document.getElementById("eth_saldo_vender").classList.remove("d-none"); 
            document.getElementById("usdc_saldo_compra").classList.add("d-none"); 
            document.getElementById("usdc_saldo_vender").classList.add("d-none"); 
            document.getElementById("pesos_saldo_depositar").classList.add("d-none"); 
            document.getElementById("pesos_saldo_retirar").classList.add("d-none"); 
            break;    
        default:
            break;
    }
}

function usdcAccion(accion){
    document.getElementById("saldo").classList.remove("d-none");   
    let userStorage = obtenerStorage();  
    document.getElementById("saldo").innerHTML = "Tu saldo es: "  + userStorage.usdc + " USDC";
    switch (accion) {
        case 'comprar':
            document.getElementById("btn_saldo_compra").classList.add("d-none");   
            document.getElementById("btn_saldo_vender").classList.add("d-none"); 
            document.getElementById("eth_saldo_compra").classList.add("d-none"); 
            document.getElementById("eth_saldo_vender").classList.add("d-none"); 
            document.getElementById("usdc_saldo_compra").classList.remove("d-none"); 
            document.getElementById("usdc_saldo_vender").classList.add("d-none"); 
            document.getElementById("pesos_saldo_depositar").classList.add("d-none"); 
            document.getElementById("pesos_saldo_retirar").classList.add("d-none");             
            break;
        case 'vender':
            document.getElementById("btn_saldo_compra").classList.add("d-none");   
            document.getElementById("btn_saldo_vender").classList.add("d-none"); 
            document.getElementById("eth_saldo_compra").classList.add("d-none"); 
            document.getElementById("eth_saldo_vender").classList.add("d-none"); 
            document.getElementById("usdc_saldo_compra").classList.add("d-none"); 
            document.getElementById("usdc_saldo_vender").classList.remove("d-none"); 
            document.getElementById("pesos_saldo_depositar").classList.add("d-none"); 
            document.getElementById("pesos_saldo_retirar").classList.add("d-none"); 
            break;    
        default:
            break;
    }
}

function pesosAccion(accion){
    document.getElementById("saldo").classList.remove("d-none");
    let userStorage = obtenerStorage();     
    document.getElementById("saldo").innerHTML = "Tu saldo es: "  + userStorage.pesos + " PESOS";
    switch (accion) {
        case 'comprar':
            document.getElementById("btn_saldo_compra").classList.add("d-none");   
            document.getElementById("btn_saldo_vender").classList.add("d-none"); 
            document.getElementById("eth_saldo_compra").classList.add("d-none"); 
            document.getElementById("eth_saldo_vender").classList.add("d-none"); 
            document.getElementById("usdc_saldo_compra").classList.add("d-none"); 
            document.getElementById("usdc_saldo_vender").classList.add("d-none"); 
            document.getElementById("pesos_saldo_depositar").classList.remove("d-none"); 
            document.getElementById("pesos_saldo_retirar").classList.add("d-none");             
            break;
        case 'vender':
            document.getElementById("btn_saldo_compra").classList.add("d-none");   
            document.getElementById("btn_saldo_vender").classList.add("d-none"); 
            document.getElementById("eth_saldo_compra").classList.add("d-none"); 
            document.getElementById("eth_saldo_vender").classList.add("d-none"); 
            document.getElementById("usdc_saldo_compra").classList.add("d-none"); 
            document.getElementById("usdc_saldo_vender").classList.add("d-none"); 
            document.getElementById("pesos_saldo_depositar").classList.add("d-none"); 
            document.getElementById("pesos_saldo_retirar").classList.remove("d-none"); 
            break;    
        default:
            break;
    }
}

function btnAceptar(accion){   
    let userStorage = obtenerStorage();   
    document.getElementById("saldo").innerHTML = "Tu saldo es: " + userStorage.bitcon + " BTC";  
    switch (accion) {
        case 'comprar':
            let compra = parseFloat(document.getElementById('btn_cant_compra').value);
            if (compra>(userStorage.pesos/bitcon.compra)){
                alert("Saldo en PESOS insuficiente");
            }else{
                userStorage.bitcon += compra;
                userStorage.pesos -= (compra*bitcon.compra);
                document.getElementById("saldo").innerHTML = "Tu saldo es: " + userStorage.bitcon + " BTC";
                document.getElementById('btn_cant_compra').value = '';
                alert("Tu compra fue exitosa!");
            }      
            break;
        case 'vender':
            let vender = parseFloat(document.getElementById('btn_cant_vender').value);
            if (vender>(userStorage.bitcon)){
                alert("Saldo en BTC insuficiente");
            }else{
                userStorage.bitcon -= vender;
                userStorage.pesos += (vender*bitcon.venta);
                document.getElementById("saldo").innerHTML = "Tu saldo es: " + userStorage.bitcon + " BTC";
                document.getElementById('btn_cant_vender').value = '';
                alert("Tu venta fue exitosa!");
            }      
            break;
            break;
        default:
            break;
    }
    guardarStorage(userStorage);
}

function ethAceptar(accion){   
    let userStorage = obtenerStorage();
    document.getElementById("saldo").innerHTML = "Tu saldo es: " + userStorage.ethereum + " ETH";  
    switch (accion) {
        case 'comprar':
            let compra = parseFloat(document.getElementById('eth_cant_compra').value);
            if (compra>(userStorage.pesos/ethereum.compra)){
                alert("Saldo en PESOS insuficiente");
            }else{
                userStorage.ethereum += compra;
                userStorage.pesos -= (compra*ethereum.compra);
                document.getElementById("saldo").innerHTML = "Tu saldo es: " + userStorage.ethereum + " ETH";
                document.getElementById('eth_cant_compra').value = '';
                alert("Tu compra fue exitosa!");
            }      
            break;
        case 'vender':
            let vender = parseFloat(document.getElementById('eth_cant_vender').value);
            if (vender>(userStorage.ethereum)){
                alert("Saldo en ETH insuficiente");
            }else{
                userStorage.ethereum -= vender;
                userStorage.pesos += (vender*ethereum.venta);
                document.getElementById("saldo").innerHTML = "Tu saldo es: " + userStorage.ethereum + " ETH";
                document.getElementById('eth_cant_vender').value = '';
                alert("Tu venta fue exitosa!");
            }      
            break;
            break;
        default:
            break;
    }
    guardarStorage(userStorage);
}

function usdcAceptar(accion){   
    let userStorage = obtenerStorage();
    document.getElementById("saldo").innerHTML = "Tu saldo es: " + userStorage.usdc + " USDC";
    switch (accion) {
        case 'comprar':
            let compra = parseFloat(document.getElementById('usdc_cant_compra').value);
            if (compra>(userStorage.pesos/usdc.compra)){
                alert("Saldo en PESOS insuficiente");
            }else{
                userStorage.usdc += compra;
                userStorage.pesos -= (compra*usdc.compra);
                document.getElementById("saldo").innerHTML = "Tu saldo es: " + userStorage.usdc + " USDC";
                document.getElementById('usdc_cant_compra').value = '';
                alert("Tu compra fue exitosa!");
            }      
            break;
        case 'vender':
            let vender = parseFloat(document.getElementById('usdc_cant_vender').value);
            if (vender>(userStorage.usdc)){
                alert("Saldo en USDC insuficiente");
            }else{
                userStorage.usdc -= vender;
                userStorage.pesos += (vender*usdc.venta);
                document.getElementById("saldo").innerHTML = "Tu saldo es: " + userStorage.usdc + " USDC";
                document.getElementById('usdc_cant_vender').value = '';
                alert("Tu venta fue exitosa!");
            }      
            break;
            break;
        default:
            break;
    }
    guardarStorage(userStorage);
}

function pesosAceptar(accion){    
    let userStorage = obtenerStorage();
    document.getElementById("saldo").innerHTML = "Tu saldo es: " + userStorage.pesos + " PESOS";
    switch (accion) {
        case 'depositar':
            let deposito = parseFloat(document.getElementById('pesos_cant_deposito').value);           
            userStorage.pesos += deposito;      
            document.getElementById("saldo").innerHTML = "Tu saldo es: " + userStorage.pesos + " PESOS";
            document.getElementById('pesos_depositar').value = '';
            alert("Tu deposito fue exitosa!");
               
            break;
        case 'retirar':
            let retirar = parseFloat(document.getElementById('pesos_cant_retiro').value);          
            if (retirar>userStorage.pesos){
                alert("Saldo en PESOS insuficiente");
            }else{
                userStorage.pesos -= retirar;    
                document.getElementById("saldo").innerHTML = "Tu saldo es: " + userStorage.pesos + " PESOS";
                document.getElementById('pesos_retirar').value = '';
                alert("Tu retiro fue exitosa!");
            }
            
             
            break;
            break;
        default:
            break;
    } 
guardarStorage(userStorage);
}


function ocultarTodasAcciones(){
    document.getElementById("btn_saldo_compra").classList.add("d-none");   
    document.getElementById("btn_saldo_vender").classList.add("d-none"); 
    document.getElementById("eth_saldo_compra").classList.add("d-none"); 
    document.getElementById("eth_saldo_vender").classList.add("d-none"); 
    document.getElementById("usdc_saldo_compra").classList.add("d-none"); 
    document.getElementById("usdc_saldo_vender").classList.add("d-none"); 
    document.getElementById("pesos_saldo_depositar").classList.add("d-none"); 
    document.getElementById("pesos_saldo_retirar").classList.add("d-none");  
    document.getElementById("saldo").classList.add("d-none");    
}

function guardarStorage(userStorage){
    localStorage.setItem("usuario", JSON.stringify(userStorage));
}

function obtenerStorage(){
    return JSON.parse(localStorage.getItem("usuario"));
}

