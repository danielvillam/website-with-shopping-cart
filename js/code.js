function myFunction() {
    var x = document.getElementById("topNav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

//Login function
function login(){
    user = document.getElementById('user').value;
    password = document.getElementById('password').value;

    if (user != '' &&  password != ''){
        alert("Login successfullye");
        document.getElementById("loginuser").innerHTML=user;
        document.getElementById("loginuser").style.color = "blue";
        document.getElementById("signoff").style.color = "red";
        document.getElementById("user").value="";
        document.getElementById("password").value = "";
        document.getElementById('wrongUser').innerHTML = '';
        document.getElementById('wrongPassword').innerHTML = '';
    }else{
        document.getElementById('wrongUser').innerHTML = 'Enter user';
        document.getElementById('wrongPassword').innerHTML = 'Enter password';

        if (user == ''){
            document.getElementById('wrongUser').innerHTML = 'Enter user';
        }else{
            document.getElementById('wrongUser').innerHTML = '';
        }
        if (password == ''){
            document.getElementById('wrongPassword').innerHTML = 'Enter password';
        }else{
            document.getElementById('wrongPassword').innerHTML = '';
        }
    }
}

//Logout function
function signoff(){
    val=document.getElementById("loginuser").textContent;
    if(val=='Login'){
        alert("Not logged in")
    }else{
        document.getElementById("loginuser").innerHTML='Login';
        document.getElementById("loginuser").style.color = "black";
        document.getElementById("signoff").style.color = "black";
        alert("Logged out successfully")
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
