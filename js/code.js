function myFunction() {
    var x = document.getElementById("topNav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function login(){

    user = document.getElementById('user').value;
    password = document.getElementById('password').value

    if (user != '' &&  password != ''){
        alert("Login successfullye");
        document.getElementById("loginuser").innerHTML=user;
        document.getElementById("loginuser").style.color = "blue";
        document.getElementById("signoff").style.color = "red";
        document.getElementById("user").value="";
        document.getElementById("password").value = "";
    }else{
        document.getElementById('wrongUser').innerHTML = 'Enter user';
        document.getElementById('wrongPassword').innerHTML = 'Enter password';

        if (user == '')
        {
            document.getElementById('wrongUser').innerHTML = 'Enter user';
        }
        else
        {
            document.getElementById('wrongUser').innerHTML = '';
        }
        if (clav == '')
        {
            document.getElementById('wrongPassword').innerHTML = 'Enter password';
        }
        else
        {
            document.getElementById('wrongPassword').innerHTML = '';
        }
    }
}

function signoff(){
    val=document.getElementById("sesion").textContent;
    if(val=='Iniciar Sesión'){
        alert("No ha iniciado sesión aún")
    }else{
        document.getElementById("sesion").innerHTML='Iniciar Sesión';
        document.getElementById("sesion").style.color = "black";
        document.getElementById("cierra").style.color = "black";
        alert("Sesión cerrada correctamente")
    }
}

function limpiars()
{
    document.getElementById("nombre").value="";
    document.getElementById("salario").value = "";
    document.getElementById("fecha").value = "";
    document.getElementById("venta").value = "";
    document.getElementById("comision").value = "";
    document.getElementById("total").value = "";
    document.getElementById("nombre").focus();
}


function validarDatos()
{
    //Validar datos ingresados
    val1 = document.getElementById('nombre').value;
    val2 = document.getElementById('salario').value;
    val3 = document.getElementById('fecha').value;
    val4 = document.getElementById('venta').value;
    val5 = document.getElementById("zonas").value;
    if (val1 != '' &&  val2 != '' && val3 != '' && val4 != '')
    {
        //Convertir el dato a número (float)
        val2 = parseFloat(val2);
        val4 = parseFloat(val4);
        val5 = parseInt(val5);
    
        document.getElementById('errornombre').innerHTML = '';
        document.getElementById('errorsalario').innerHTML = '';
        document.getElementById('errorfecha').innerHTML = '';
        document.getElementById('errorventa').innerHTML = '';

        //Verificando que el salario este entre 1000000 y 2000000
        if(val2>=1000000 && val2<=2000000){
            cond1=1;
        }else{
            cond1=0;
            document.getElementById('errorsalario').innerHTML = 'El salario básico mensual debe estar entre 1000000 y 2000000';
        }

        //Verificando que la venta sea mayor o igual a 15000000
        if(val4>=15000000){
            cond2=1;
        }else{
            cond2=0;
            document.getElementById('errorventa').innerHTML = 'El valor de la venta debe ser superior o igual a 15000000';  
        }

        //Si la venta y el salario tienen los intervalos correctos, procedemos a sacar el total 
        if(cond1==1 && cond2==1){

            //Si la zona es norte aplicamos el 5% de comision sobre la venta
            if(val5==1){
                val6=val4*0.05;
                document.getElementById('comision').value = val6;
                tot=val2+val6;
                document.getElementById('total').value = tot;
            }

            //si la zona es sur aplicamos el 3%
            else{
                val6=val4*0.03;
                document.getElementById('comision   ').value = val6;
                tot=val2+val6;
                document.getElementById('total').value = tot;
            }
        }
    }
    else
    {
        //en caso de faltar alguno de los datos obligatorios alertamos
        if (val1 == '')
        {
            document.getElementById('errornombre').innerHTML = 'Debe ingresar el nombre';
        }
        else
        {
            document.getElementById('errornombre').innerHTML = '';
        }
        if (val2 == '')
        {
            document.getElementById('errorsalario').innerHTML = 'Debe ingresar el salario';
        }
        else
        {
            document.getElementById('errorsalario').innerHTML = '';
        }
        if (val3 == '')
        {
            document.getElementById('errorfecha').innerHTML = 'Debe ingresar la fecha';
        }
        else
        {
            document.getElementById('errorfecha').innerHTML = '';
        }
        if (val4 == '')
        {
            document.getElementById('errorventa').innerHTML = 'Debe ingresar el valor de la venta';
        }
        else
        {
            document.getElementById('errorventa').innerHTML = '';
        }
        if (val6 == '')
        {
            document.getElementById('errorcomision').innerHTML = 'Debe ingresar el valor de la comisión';
        }
        else
        {
            document.getElementById('errorcomision').innerHTML = '';
        }
    }
}

 window.onload = function () {
            // Variables
            let baseDeDatos = [
                {
                    id: 1,
                    nombre: 'Básica Blanca',
                    precio: 60.000,
                    imagen: 'imagenes/imagen1.jpg'
                },
                {
                    id: 2,
                    nombre: 'Básica Naranjada',
                    precio: 60.000,
                    imagen: 'imagenes/imagen2.jpg'
                },
                {
                    id: 3,
                    nombre: 'Básica Amarilla',
                    precio: 60.000,
                    imagen: 'imagenes/imagen3.jpg'
                },
                {
                    id: 4,
                    nombre: 'Básica Ropa',
                    precio: 50.000,
                    imagen: 'imagenes/imagen4.jpg'
                },
                {
                    id: 5,
                    nombre: 'Básica Negra',
                    precio: 60.000,
                    imagen: 'imagenes/imagen5.jpg'
                },
                {
                    id: 6,
                    nombre: 'Básica Rosa',
                    precio: 60.000,
                    imagen: 'imagenes/imagen6.jpg'
                },
                {
                    id: 7,
                    nombre: 'Camisilla Negra',
                    precio: 50.000,
                    imagen: 'imagenes/imagen7.jpg'
                },
                {
                    id: 8,
                    nombre: 'Básica Gris',
                    precio: 80.000,
                    imagen: 'imagenes/imagen8.jpg'
                },
                {
                    id: 9,
                    nombre: 'Sudadera Blanca',
                    precio: 90.000,
                    imagen: 'imagenes/imagen9.jpg'
                },
                {
                    id: 10,
                    nombre: 'Básica negra Alien',
                    precio: 60.000,
                    imagen: 'imagenes/imagen10.jpg'
                },
                {
                    id: 11,
                    nombre: 'Jogger Blanco',
                    precio: 80.000,
                    imagen: 'imagenes/imagen11.jpg'
                },
                {
                    id: 12,
                    nombre: 'Tapabocas',
                    precio: 30.000,
                    imagen: 'imagenes/imagen12.jpg'
                }


            ]
            let $items = document.querySelector('#items');
            let carrito = [];
            let total = 0;
            let $carrito = document.querySelector('#carrito');
            let $total = document.querySelector('#total');
            // Funciones
            function renderItems () {
                for (let info of baseDeDatos) {
                    // Estructura
                    let miNodo = document.createElement('div');
                    miNodo.classList.add('card', 'col-sm-4');
                    // cuerpo
                    let miNodoCardBody = document.createElement('div');
                    miNodoCardBody.classList.add('card-body');
                    // Titulo
                    let miNodoTitle = document.createElement('h5');
                    miNodoTitle.classList.add('card-title');
                    miNodoTitle.textContent = info['nombre'];
                    // Imagen
                    let miNodoImagen = document.createElement('img');
                    miNodoImagen.classList.add('img-fluid');
                    miNodoImagen.setAttribute('src', info['imagen']);
                    // Precio
                    let miNodoPrecio = document.createElement('p');
                    miNodoPrecio.classList.add('card-text');
                    miNodoPrecio.textContent = info['precio'] + '$';
                    // Boton 
                    let miNodoBoton = document.createElement('button');
                    miNodoBoton.classList.add('btn', 'colores');
                    miNodoBoton.textContent = '+';
                    miNodoBoton.setAttribute('marcador', info['id']);
                    miNodoBoton.addEventListener('click', anyadirCarrito);
                    // Insertamos
                    miNodoCardBody.appendChild(miNodoImagen);
                    miNodoCardBody.appendChild(miNodoTitle);
                    miNodoCardBody.appendChild(miNodoPrecio);
                    miNodoCardBody.appendChild(miNodoBoton);
                    miNodo.appendChild(miNodoCardBody);
                    $items.appendChild(miNodo);
                }
            }

            function anyadirCarrito () {
                // Añadimos el Nodo a nuestro carrito
                carrito.push(this.getAttribute('marcador'))
                // Calculo el total
                calcularTotal();
                // Renderizamos el carrito 
                renderizarCarrito();
            }

            function renderizarCarrito () {
                // Vaciamos todo el html
                $carrito.textContent = '';
                // Quitamos los duplicados
                let carritoSinDuplicados = [...new Set(carrito)];
                // Generamos los Nodos a partir de carrito
                carritoSinDuplicados.forEach(function (item, indice) {
                    // Obtenemos el item que necesitamos de la variable base de datos
                    let miItem = baseDeDatos.filter(function(itemBaseDatos) {
                        return itemBaseDatos['id'] == item;
                    });
                    // Cuenta el número de veces que se repite el producto
                    let numeroUnidadesItem = carrito.reduce(function (total, itemId) {
                        return itemId === item ? total += 1 : total;
                    }, 0);
                    // Creamos el nodo del item del carrito
                    let miNodo = document.createElement('li');
                    miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
                    miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0]['nombre']} - ${miItem[0]['precio']}$`;
                    // Boton de borrar
                    let miBoton = document.createElement('button');
                    miBoton.classList.add('btn', 'btn-danger', 'mx-5');
                    miBoton.textContent = 'X';
                    miBoton.style.marginLeft = '1rem';
                    miBoton.setAttribute('item', item);
                    miBoton.addEventListener('click', borrarItemCarrito);
                    // Mezclamos nodos
                    miNodo.appendChild(miBoton);
                    $carrito.appendChild(miNodo);
                })
            }

            function borrarItemCarrito () {
                console.log()
                // Obtenemos el producto ID que hay en el boton pulsado
                let id = this.getAttribute('item');
                // Borramos todos los productos
                carrito = carrito.filter(function (carritoId) {
                    return carritoId !== id;
                });
                // volvemos a renderizar
                renderizarCarrito();
                // Calculamos de nuevo el precio
                calcularTotal();
            }

            function calcularTotal () {
                // Limpiamos precio anterior
                total = 0;
                // Recorremos el array del carrito
                for (let item of carrito) {
                    // De cada elemento obtenemos su precio
                    let miItem = baseDeDatos.filter(function(itemBaseDatos) {
                        return itemBaseDatos['id'] == item;
                    });
                    total = total + miItem[0]['precio'];
                }
                // Formateamos el total para que solo tenga dos decimales
                let totalDosDecimales = total.toFixed(3);
                // Renderizamos el precio en el HTML
                $total.textContent = totalDosDecimales;
            }

            // Inicio
            renderItems();
        } 
