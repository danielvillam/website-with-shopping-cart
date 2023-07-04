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
            //Variables
            let database = [
                {
                    id: 1,
                    name: 'Basic White',
                    price: 60.000,
                    image: 'images/image1.jpg'
                },
                {
                    id: 2,
                    name: 'Basic Orangeade',
                    price: 60.000,
                    image: 'images/image2.jpg'
                },
                {
                    id: 3,
                    name: 'Yellow Basic',
                    price: 60.000,
                    image: 'images/image3.jpg'
                },
                {
                    id: 4,
                    name: 'Basic Clothing',
                    price: 50.000,
                    image: 'images/image4.jpg'
                },
                {
                    id: 5,
                    name: 'Basic Black',
                    price: 60.000,
                    image: 'images/image5.jpg'
                },
                {
                    id: 6,
                    name: 'Basic Pink',
                    price: 60.000,
                    image: 'images/image6.jpg'
                },
                {
                    id: 7,
                    name: 'Black Shirt',
                    price: 50.000,
                    image: 'images/image7.jpg'
                },
                {
                    id: 8,
                    name: 'Basic Grey',
                    price: 80.000,
                    image: 'images/image8.jpg'
                },
                {
                    id: 9,
                    name: 'White Sweatshirt',
                    price: 90.000,
                    image: 'images/image9.jpg'
                },
                {
                    id: 10,
                    name: 'Basic Black Alien',
                    price: 60.000,
                    image: 'images/image10.jpg'
                },
                {
                    id: 11,
                    name: 'White Joggers',
                    price: 80.000,
                    image: 'images/image11.jpg'
                },
                {
                    id: 12,
                    name: 'Face mask',
                    price: 30.000,
                    image: 'images/image12.jpg'
                }


            ]
            let $items = document.querySelector('#items');
            let car = [];
            let total = 0;
            let $car = document.querySelector('#cart');
            let $total = document.querySelector('#total');
            // Funtions
            function renderItems () {
                for (let info of database) {
                    //Structure
                    let myNodo = document.createElement('div');
                    myNodo.classList.add('card', 'col-sm-4');
                    //Body
                    let myNodoCardBody = document.createElement('div');
                    myNodoCardBody.classList.add('card-body');
                    //Title
                    let myNodoTitle = document.createElement('h5');
                    myNodoTitle.classList.add('card-title');
                    myNodoTitle.textContent = info['name'];
                    //Image
                    let myNodoimage = document.createElement('img');
                    myNodoimage.classList.add('img-fluid');
                    myNodoimage.setAttribute('src', info['image']);
                    //Price
                    let myNodoprice = document.createElement('p');
                    myNodoprice.classList.add('card-text');
                    myNodoprice.textContent = info['price'] + '$';
                    //Button 
                    let myNodoButton = document.createElement('button');
                    myNodoButton.classList.add('btn', 'colors');
                    myNodoButton.textContent = '+';
                    myNodoButton.setAttribute('marcador', info['id']);
                    myNodoButton.addEventListener('click', addcart);
                    //Inserts
                    myNodoCardBody.appendChild(myNodoimage);
                    myNodoCardBody.appendChild(myNodoTitle);
                    myNodoCardBody.appendChild(myNodoprice);
                    myNodoCardBody.appendChild(myNodoButton);
                    myNodo.appendChild(myNodoCardBody);
                    $items.appendChild(myNodo);
                }
            }

            function addcart() {
                //The Node is added to our car
                car.push(this.getAttribute('marcador'))
                //Total is calculated
                calculateTotal();
                //The car is rendered
                renderCar();
            }

            function renderCar() {
                //All html is cleaned
                $car.textContent = '';
                //Duplicates are removed
                let carwithoutduplicates = [...new Set(car)];
                //Nodes are generated from car
                carwithoutduplicates.forEach(function (item, indice) {
                    //The item we need is obtained from the database variable
                    let myItem = database.filter(function(itemDatabase) {
                        return itemDatabase['id'] == item;
                    });
                    //The number of times the product is repeated is counted.
                    let numberUnitsItem = car.reduce(function (total, itemId) {
                        return itemId === item ? total += 1 : total;
                    }, 0);
                    //The car item node is created
                    let myNodo = document.createElement('li');
                    myNodo.classList.add('list-group-item', 'text-right', 'mx-2');
                    myNodo.textContent = `${numberUnitsItem} x ${myItem[0]['name']} - ${myItem[0]['price']}$`;
                    //Delete button
                    let myButton = document.createElement('button');
                    myButton.classList.add('btn', 'btn-danger', 'mx-5');
                    myButton.textContent = 'X';
                    myButton.style.marginLeft = '1rem';
                    myButton.setAttribute('item', item);
                    myButton.addEventListener('click', deleteCartItem);
                    //Nodes are mixed
                    myNodo.appendChild(myButton);
                    $car.appendChild(myNodo);
                })
            }

            function deleteCartItem () {
                console.log()
                //The product ID that is in the button pressed is obtained
                let id = this.getAttribute('item');
                //All products are deleted
                car = car.filter(function (carId) {
                    return carId !== id;
                });
                //It is re-rendered
                renderCar();
                //The price is recalculated
                calculateTotal();
            }

            function calculateTotal () {
                //Previous price cleared
                total = 0;
                //The array of the car is traversed
                for (let item of car) {
                    //From each element its price is obtained
                    let myItem = database.filter(function(itemDatabase) {
                        return itemDatabase['id'] == item;
                    });
                    total = total + myItem[0]['price'];
                }
                //The total is formatted so that it only has two decimal places.
                let tot = total.toFixed(3);
                //The price is rendered in the HTML
                $total.textContent = tot;
            }

            //Index
            renderItems();
        } 
