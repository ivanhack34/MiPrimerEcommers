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

    //Cambio del quantity
    let quantityInputs = document.getElementsByClassName('cart-quantity')
    for (let i = 0; i < quantityInputs.length; i++){
        let input = quantityInputs[i];
        input.addEventListener("change", quantityChanged);
    }
    //Para Agregar en la cartera
    let addCart = document.getElementsByClassName('add-cart')
    for (let i = 0; i < addCart.length; i++){
        let button = addCart[i]
        button.addEventListener("click", addCartClicked);
    }
}

//Quita los items de la cartera (removeCartItem)

function removeCartItem (event){
    let buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updatetotal();
}

//La funcion del cambio del Quantity
function quantityChanged(event){
    let input = event.target
    if (isNaN(input.value) || input.value <= 0){
        input.value = 1
    }
    updatetotal();
}

//La funcion de agregar cartelera
function addCartClicked(event){
    let button = event.target;
    let shopProducts = button.parentElement;
    let title = shopProducts.getElementsByClassName('product-title')[0].innerText;
    let price = shopProducts.getElementsByClassName('price')[0].innerText;
    let productImg = shopProducts.getElementsByClassName('product-img')[0].src;
    addProductToCart(title, price, productImg);
    updatetotal();
}

function addProductToCart(title, price, productImg){
    let cartShopBox = document.createElement('div');
    cartShopBox.classList.add("cart-box");
    let cartItems = document.getElementsByClassName('cart-content')[0];
    let cartItemsNames = cartItems.getElementsByClassName('cart-product-title');
    for (let i = 0; i < cartItemsNames.length; i++){
        alert("Tu Producto esta listo en el carrito");
        return;
    }
}

// El contenido del carrito

let cartBoxContent = `
        <img src="imagenes/Producto2.jpg" alt="" class="cart-img">
        <div class="detail-box">
            <div class="cart-product-title">TECNO</div>
            <div class="cart-price">$40.05</div>
            <input type="number" value="1" class="cart-quantity">
        </div>

        <!--Quitar de la cartera-->
        <i class='bx bxs-trash-alt cart-remove' ></i>`;

// let cartShopBox = document.querySelector(".cart-content")
// cartShopBox.innerHTML = cartBoxContent;
// cartShopBox.getElementsByClassName('cart-remove')[0]
//             .addEventListener('click', removeCartItem)

// cartShopBox.getElementsByClassName('cart-quantity')[0]
//             .addEventListener("change", quantityChanged)


//Actualizar el total
function updatetotal(){
    let cartContent = document.getElementsByClassName("cart-content")[0];
    let cartBoxes = cartContent.getElementsByClassName("cart-box");
    let total = 0;

    for (let i = 0; i < cartBoxes.length; i++) {
        let cartBox = cartBoxes[i];
        let priceElement = cartBox.getElementsByClassName("cart-price")[0];
        let quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
        let price = parseFloat(priceElement.innerText.replace("$", ""));
        let quantity = quantityElement.value;
        total = total + price * quantity;
        //Si el precio tiene cierta cantidad de valor decimal
        total = Math.round(total * 100) / 100;

        document.getElementsByClassName("total-price")[0].innerText = "$" + total;
    }
}