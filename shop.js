
let addCart = document.querySelector(".addCart");


let them = document.querySelector(".them");
let smenu = document.querySelector(".smenu");



let shoppingCart = document.querySelector(".shoppingCart");

addCart.addEventListener("click", function () {


    them.style.display = "none";
    smenu.style.display = "none";


    shoppingCart.style.display = "block";



})







let cartCount=0;



function newArriveGocart(y) {

    cartCount++;

    let cartmidbody = document.querySelector(".cartmidbody");
    let cartSub = document.querySelector(".cartSub");

  


    cartmidbody.innerHTML = cartmidbody.innerHTML + `<div class="cartmidbody1">

                <div class="cBImage"><img src="img/product-${y}-1.jpg" alt=""></div>
                <div class="cBName"><h3>J.Crew Mercantile Women's Short Sleeve</h3><h4>Maboriosam in a Tonto</h4></div>
                <div class="cBPrice"><h4>$120</h4></div>
                <div class="cBQntty"><input type="number" name="" id="" placeholder="0"></div>
                <div class="cBTotal"><h4>$220</h4></div>
                <div  class="cBRemove"><span class="material-symbols-outlined">delete </span></div>
                </div>
                <hr style="margin-top: 0px;">`;

                cartSub.innerHTML = cartCount;

}








let likeCount=0;

function newArriveGolike() {

    likeCount++;

    // let cartmidbody = document.querySelector(".cartmidbody");
    let likeSub = document.querySelector(".likeSub");

  


    // cartmidbody.innerHTML = cartmidbody.innerHTML + `<div class="cartmidbody1">

    //             <div class="cBImage"><img src="img/product-${y}-1.jpg" alt=""></div>
    //             <div class="cBName"><h3>J.Crew Mercantile Women's Short Sleeve</h3><h4>Maboriosam in a Tonto</h4></div>
    //             <div class="cBPrice"><h4>$120</h4></div>
    //             <div class="cBQntty"><input type="number" name="" id="" placeholder="0"></div>
    //             <div class="cBTotal"><h4>$220</h4></div>
    //             <div  class="cBRemove"><span class="material-symbols-outlined">delete </span></div>
    //             </div>
    //             <hr style="margin-top: 0px;">`;

    likeSub.innerHTML = likeCount;

}