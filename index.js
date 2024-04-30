
let cartList = []; 
let cartContainer = document.getElementById("cartContainer");
let alert = document.getElementById('addedToCartAlert');

// add item to array empty cart list and item is puched to on each item button click.
function addToCart (productName, productPrice){
    for (i=0; i<cartList.length; i++){
        if (cartList[i].product === productName){
            console.log('Here')
           cartList[i].quantity = cartList[i].quantity + 1;

           saveListToLocalStorage();
           showAddToCartPopup();
           return
        }
    }
    let cartItems = {
    product: productName,
    price: productPrice,
    quantity: 1,
    } 
    cartList.push(cartItems);
    
    showAddToCartPopup();
    console.log('hi')
    console.log(cartList);
    saveListToLocalStorage()
    cartCountLabel()
}

// on add to cart button click added to cart popup will appear
function showAddToCartPopup (){
    alert.classList.add('addedToCart');
    setTimeout(()=>{
        alert.classList.remove('addedToCart')
    }, 3000)
}


// function to save cartlist into local storage
function saveListToLocalStorage(){    
    window.localStorage.setItem('cart', JSON.stringify(cartList));
}

// display of number of items in cart on label 
function cartCountLabel (){
    let labelCartCount = document.getElementById('CartLabelCount');
    labelCartCount.innerText = cartList.length;
    console.log('function called')
    
}


// display items that are added to cart on cart page
function displayCart (){
    cartJsonData = window.localStorage.getItem('cart')
    cartList = JSON.parse(cartJsonData)
    console.log(cartList)

    cartList.forEach((cartItem)=>{
        let div = document.createElement('div');
        let item = document.createElement('p');
        let itemPrice = document.createElement('p');
        let itemQuantity = document.createElement('p');
        div.classList.add('cartItems');        
        item.innerText = cartItem.product;
        itemPrice.innerText = parseInt(cartItem.price) * parseInt(cartItem.quantity); 
        itemQuantity.innerText = cartItem.quantity; 
        console.log(item);
        console.log(itemPrice);
        div.appendChild(item);
        div.appendChild(itemQuantity);
        div.appendChild(itemPrice);
        cartContainer.appendChild(div);
    })
}

// display modal content on button click
let modal = document.getElementById('modal1');
let isWindowOpen = false;
function displayModal1Content(){
    modal.style.display = 'block';
}

// hide the modal on clicking on anywhere on window
function hideModal1Content (e){
    
}

// show detailed description on more button click 
let descriptionDetail = document.getElementById('des-details')
let descriptionBtn = document.getElementById('description-btn')


function showDescription (){
    if (descriptionDetail.style.overflow == 'hidden'){
        descriptionDetail.style.overflow = 'auto'
        descriptionDetail.style.height = 'auto';
        descriptionBtn.innerText = 'Less Details';

    }else{
        descriptionDetail.style.overflow = "hidden"
        descriptionDetail.style.height = "200px"
        descriptionBtn.innerText = 'More Details';
    }
}
