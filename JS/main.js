// Cartera
let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");

//Abre carrito
cartIcon.onclick = () =>{
    cart.classList.add("active");
}

//Quita Carrito
closeCart.onclick = () =>{
    cart.classList.remove("active");
}

//Cartera trabajando con JS

if (document.readyState == "loading"){
    document.addEventListener("DOMContentLoaded", ready);
} else {
    ready();
}

//Haciendo la funcion
function ready(){
    //Quita los items de la cartera
    let reomveCartButtons = document.getElementsByClassName('cart-remove')
    console.log(reomveCartButtons)
    for (let i = 0; i < reomveCartButtons.length; i++) {
        let button = reomveCartButtons[i]
        button.addEventListener("click", removeCartItem)
    }
}

//Quita los items de la cartera (removeCartItem)

function removeCartItem (event){
    let buttonClicked = event.target;
    buttonClicked.parentElement.remove();
}

//Actualizar el total