const increment = document.querySelectorAll(".positive");
const decrement = document.querySelectorAll(".negetive");
const count = document.querySelector(".count");


// import jsonfile from "store.json";

var Data = {
    "items" : [
      {
          "id": "1",
          "image": "./Assets/Boat1.webp",
          "title": "boAt Rockerz 333",
          "make": "Boat",
          "quantity": 1,
          "price": 1399
      },
      {
        "id": "2",
        "image": "./Assets/main_blue_a80b6882-1247-439d-a17b-1c87ed4fa7c8.webp",
        "title": "boAt Airdopes 161",
        "make": "Boat",
        "quantity": 35,
        "price": 1199
      }
    ]
}

// fetch("store.json")
//     .then(response => response.json())
//     .then(json => {
//         generateCartItems(json.items);
        
//     });

generateCartItems(Data.items);

function decreaseCount(itemId){
    let cartItem = Data.items.find(pro => pro.id == itemId);
    cartItem.quantity -= 1;
    console.log(cartItem.quantity);
}

function generateCartItems(cartItems) {
    let itemsHTML = "";
    cartItems.forEach(item => {
        
        itemsHTML += `
        <div class="pro col" >
            <div class="img">
                <img src="${item.image}" alt="product-image">
            </div>



            <div class="columndiv">
                <div class="pro_details">
                    <p class="heading">${item.title}</p>
                    <p class="maker">by <span>${item.make}</span> | Electronics</p>
                </div>
                <p class="delivery_details">
                    Get it by <span class="col">Monday, June 27</span>
                </p>
            </div>
            <div class="counter col">
                <div class="plus item-increase" id="${item.id}">
                    <i class="fa-solid fa-plus" ></i>
                </div>
                <p class="count" id="num2">
                    ${item.quantity}
                </p>
                <div class="minus item-decrease" id="${item.id}">
                    <i class="fa-solid fa-minus"></i>
                </div>
            </div>
            <div class="price_details col">
                <div class="row">
                    <p id="rupp">₹ ${item.price}
                    </p>
                    <i class="fa-regular fa-trash-can"></i>
                </div>
                <p class="disc_det">Discount Applied: <span>52%</span></p>
            </div>
        </div>
        
        `
    });

    document.querySelector(".products").innerHTML = itemsHTML;
    createEventListners();
}


function createEventListners(){
    let decreaseButton = document.querySelectorAll(".item-decrease");
    let increaseButton = document.querySelectorAll(".item-increase");

    decreaseButton.forEach((button)=>{
        
        button.addEventListener("click", function(){
            decreaseCount(button.id);
        })
    })
}



// for(var i=0;i<increment.length;i++){
//     var button = increment[i];
//     button.addEventListener('click', (event)=>{
//         var buttonClicked = event.target;
//         // console.log(buttonClicked);
//         var input = buttonClicked.parentElement.children[2];
//         console.log(input);

//     })
// }

// increment.forEach(()=>{
//     addEventListener("click", ()=>{
//         document.getElementById("num").innerText++;
//         num++;
//     })
// })

// var num = document.querySelectorAll(".count").innerText;

// increment.addEventListener("click", ()=>{
//     document.querySelectorAll(".count").innerText++;
//     num++
//     console.log(num);
// })

// decerment.addEventListener("click", ()=>{
//     document.querySelectorAll(".count").innerText--;
//     num--;
//     console.log(num);
// })




// var items_cost = document.getElementById("items_cost");

// const numofitems = [];
// const prices = [];

// const products = document.querySelectorAll(".pro").innerText;
// var sum = 0;
// products.forEach(() => {
//     console.log(document.getElementById("rupp").innerText);
//     console.log(document.getElementById("num").innerText);

//     sum = sum + (document.getElementById("num").innerText*document.getElementById("rupp").innerText);
// })

// console.log(sum);