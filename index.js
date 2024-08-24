
const itemsContainer = document.querySelector('.items');
const items = document.querySelectorAll('.item');
const prevBtn = document.querySelector('#pre');
const nextBtn = document.querySelector('#post');
let count = 0;

const itemWidth = items[0].offsetWidth + 30;

function tra() {
    itemsContainer.style.transform = `translateX(${-itemWidth * count}px)`;
}


nextBtn.addEventListener("click", function () {

    count++;
    tra();
})

prevBtn.addEventListener("click", function () {
    if (count > 0) {
        count--;
        tra();

    }
})



// ----------------------for second slider---------------------


const itemsContainerr = document.querySelector('.items2');
console.log(itemsContainerr);
const itemss = document.querySelectorAll('.item2');
const prevBtnn = document.querySelector('#pree');
const nextBtnn = document.querySelector('#postt');
let c = 0;

const itemWidthh = itemss[0].offsetWidth + 30;

function traa() {
    // itemsContainerr.style.transform = `translateX(100px)`;
    let a = 1;
    console.log(c)
    itemsContainerr.style.transform = `translateX(${-itemWidthh * c}px)`;
    console.log(itemsContainerr.style.transform);


}




function nextBtnnn() {
    console.log("next");
    c++;
    traa();
}



function prevBtnnn() {

    if (c > 0) {
        c--;
        traa();

    }
}




// ------------------------for change menu----------------------


const featuredItems = [
    {
        key: "featuredItems",
        mark: "New",
        img: "img/product-12-1.jpg",
        title: "Featured Shirt",
        category: "Clothing",
        price: "$238.85",
        oldPrice: "$245.8",

    },
    {
        key: "featuredItems",
        mark: "Hot",
        img: "img/product-11-1.jpg",
        title: "Featured Pants",
        category: "Clothing",
        price: "$158.50",
        oldPrice: "$165.0",
    },
    {
        key: "featuredItems",
        mark: "Hot",
        img: "img/product-10-1.jpg",
        title: "Featured Pants",
        category: "Clothing",
        price: "$158.50",
        oldPrice: "$165.0",
    },
    {
        key: "featuredItems",
        mark: "Hot",
        img: "img/product-9-1.jpg",
        title: "Featured Pants",
        category: "Clothing",
        price: "$158.50",
        oldPrice: "$165.0",
    },
    {
        key: "featuredItems",
        mark: "Hot",
        img: "img/product-8-1.jpg",
        title: "Featured Pants",
        category: "Clothing",
        price: "$158.50",
        oldPrice: "$165.0",
    },
    {
        key: "featuredItems",
        mark: "Hot",
        img: "img/product-7-1.jpg",
        title: "Featured Pants",
        category: "Clothing",
        price: "$158.50",
        oldPrice: "$165.0",
    },
    {
        key: "featuredItems",
        mark: "Hot",
        img: "img/product-6-1.jpg",
        title: "Featured Pants",
        category: "Clothing",
        price: "$158.50",
        oldPrice: "$165.0",
    },
    {
        key: "featuredItems",
        mark: "Hot",
        img: "img/product-5-1.jpg",
        title: "Featured Pants",
        category: "Clothing",
        price: "$158.50",
        oldPrice: "$165.0",
    },
    // Add more items as needed
];
const PopularItems = [
    {
        key: "PopularItems",
        mark: "New",
        img: "img/product-5-1.jpg",
        title: "Featured Shirt",
        category: "Clothing",
        price: "$238.85",
        oldPrice: "$245.8",
    },
    {
        key: "PopularItems",
        mark: "Hot",
        img: "img/product-6-1.jpg",
        title: "Featured Pants",
        category: "Clothing",
        price: "$158.50",
        oldPrice: "$165.0",
    },
    {
        key: "PopularItems",
        mark: "Hot",
        img: "img/product-7-1.jpg",
        title: "Featured Pants",
        category: "Clothing",
        price: "$158.50",
        oldPrice: "$165.0",
    },
    {
        key: "PopularItems",
        mark: "Hot",
        img: "img/product-8-1.jpg",
        title: "Featured Pants",
        category: "Clothing",
        price: "$158.50",
        oldPrice: "$165.0",
    },
    {
        key: "PopularItems",
        mark: "Hot",
        img: "img/product-9-1.jpg",
        title: "Featured Pants",
        category: "Clothing",
        price: "$158.50",
        oldPrice: "$165.0",
    },
    {
        key: "PopularItems",
        mark: "Hot",
        img: "img/product-10-1.jpg",
        title: "Featured Pants",
        category: "Clothing",
        price: "$158.50",
        oldPrice: "$165.0",
    },
    {
        key: "PopularItems",
        mark: "Hot",
        img: "img/product-11-1.jpg",
        title: "Featured Pants",
        category: "Clothing",
        price: "$158.50",
        oldPrice: "$165.0",
    },
    {
        key: "PopularItems",
        mark: "Hot",
        img: "img/product-12-1.jpg",
        title: "Featured Pants",
        category: "Clothing",
        price: "$158.50",
        oldPrice: "$165.0",
    },
    // Add more items as needed
];
const AddedItems = [
    {
        key: "AddedItems",
        mark: "New",
        img: "img/product-1-1.jpg",
        title: "Featured Shirt",
        category: "Clothing",
        price: "$238.85",
        oldPrice: "$245.8",
    },
    {
        key: "AddedItems",
        mark: "Hot",
        img: "img/product-2-1.jpg",
        title: "Featured Pants",
        category: "Clothing",
        price: "$158.50",
        oldPrice: "$165.0",
    },
    {
        key: "AddedItems",
        mark: "Hot",
        img: "img/product-3-1.jpg",
        title: "Featured Pants",
        category: "Clothing",
        price: "$158.50",
        oldPrice: "$165.0",
    },
    {
        key: "AddedItems",
        mark: "Hot",
        img: "img/product-4-1.jpg",
        title: "Featured Pants",
        category: "Clothing",
        price: "$158.50",
        oldPrice: "$165.0",
    },
    {
        key: "AddedItems",
        mark: "Hot",
        img: "img/product-5-1.jpg",
        title: "Featured Pants",
        category: "Clothing",
        price: "$158.50",
        oldPrice: "$165.0",
    },
    {
        key: "AddedItems",
        mark: "Hot",
        img: "img/product-6-1.jpg",
        title: "Featured Pants",
        category: "Clothing",
        price: "$158.50",
        oldPrice: "$165.0",
    },
    {
        key: "AddedItems",
        mark: "Hot",
        img: "img/product-7-1.jpg",
        title: "Featured Pants",
        category: "Clothing",
        price: "$158.50",
        oldPrice: "$165.0",
    },
    {
        key: "AddedItems",
        mark: "Hot",
        img: "img/product-8-1.jpg",
        title: "Featured Pants",
        category: "Clothing",
        price: "$158.50",
        oldPrice: "$165.0",
    },
    // Add more items as needed
];


let themitem = document.querySelector(".themitems");
let themitemChild = themitem.children;



let arr1 = [];
let a = 1;

for (let i = 1; i <= themitemChild.length; i++) {
    arr1.push(document.querySelector(`.themimg${a}`));

    a++;
}

console.log(arr1);
console.log(arr1[0]);


let changeKey = "featuredItems";


function change(items) {


    if (items[0].key == "featuredItems") {
        changeKey = "featuredItems";

    }
    else if (items[0].key == "PopularItems") {
        changeKey = "PopularItems";
    }
    else if (items[0].key == "AddedItems") {
        changeKey = "AddedItems";
    }

    for (let i = 0; i < themitemChild.length; i++) {
        // console.log(arr1[i]);
        arr1[i].style.backgroundImage = `url('${items[i].img}')`;
    }


}

change(featuredItems);

const feHover = [{ img: "img/product-12-2.jpg", href: "thing12.html", },
{ img: "img/product-11-2.jpg", href: "thing11.html", },
{ img: "img/product-10-2.jpg", href: "thing10.html", },
{ img: "img/product-9-2.jpg", href: "thing9.html", },
{ img: "img/product-8-2.jpg", href: "thing8.html", },
{ img: "img/product-7-2.jpg", href: "thing7.html", },
{ img: "img/product-6-2.jpg", href: "thing6.html", },
{ img: "img/product-5-2.jpg", href: "thing5.html", },

]

const popHover = [{ img: "img/product-5-2.jpg", href: "thing5.html", },
{ img: "img/product-6-2.jpg", href: "thing6.html", },
{ img: "img/product-7-2.jpg", href: "thing7.html", },
{ img: "img/product-8-2.jpg", href: "thing8.html", },
{ img: "img/product-9-2.jpg", href: "thing9.html", },
{ img: "img/product-10-2.jpg", href: "thing10.html", },
{ img: "img/product-11-2.jpg", href: "thing11.html", },
{ img: "img/product-12-2.jpg", href: "thing12.html", },

]
const addHover = [{ img: "img/product-1-2.jpg", href: "thing1.html", },
{ img: "img/product-2-2.jpg", href: "thing2.html", },
{ img: "img/product-3-2.jpg", href: "thing3.html", },
{ img: "img/product-4-2.jpg", href: "thing4.html", },
{ img: "img/product-5-2.jpg", href: "thing5.html", },
{ img: "img/product-6-2.jpg", href: "thing6.html", },
{ img: "img/product-7-2.jpg", href: "thing7.html", },
{ img: "img/product-8-2.jpg", href: "thing8.html", },

]


let argu = "feHover";

function fun1() {

    if (changeKey == "featuredItems") {

        funcc1(feHover);

    }
    else if (changeKey == "PopularItems") {
        argu = "popHover";
        funcc1(popHover);
    }
    else if (changeKey == "AddedItems") {
        argu = "addHover";
        funcc1(addHover);
    }

}

function funcc1(item) {
    arr1[0].style.backgroundImage = `url('${item[0].img}')`;

    let themPageChange1 = document.querySelector(".themPageChange1");
    themPageChange1.href = item[0].href;

    itemsContainer.style.transform = `scale(1.05)`;
}


function fun2() {



    if (changeKey == "featuredItems") {
        argu = "feHover";
        funcc2(feHover);

    }
    else if (changeKey == "PopularItems") {
        argu = "popHover";
        funcc2(popHover);
    }
    else if (changeKey == "AddedItems") {
        argu = "addHover";
        funcc2(addHover);
    }

}

function funcc2(item) {
    arr1[1].style.backgroundImage = `url('${item[1].img}')`;
    itemsContainer.style.transform = `scale(1.05)`;

    let themPageChange2 = document.querySelector(".themPageChange2");
    themPageChange2.href = item[1].href;
}
function fun3() {



    if (changeKey == "featuredItems") {
        argu = "feHover";
        funcc3(feHover);

    }
    else if (changeKey == "PopularItems") {
        argu = "popHover";
        funcc3(popHover);
    }
    else if (changeKey == "AddedItems") {
        argu = "addHover";
        funcc3(addHover);
    }

}

function funcc3(item) {
    arr1[2].style.backgroundImage = `url('${item[2].img}')`;
    itemsContainer.style.transform = `scale(1.05)`;

    let themPageChange3 = document.querySelector(".themPageChange3");
    themPageChange3.href = item[2].href;
}
function fun4() {



    if (changeKey == "featuredItems") {
        argu = "feHover";
        funcc4(feHover);

    }
    else if (changeKey == "PopularItems") {
        argu = "popHover";
        funcc4(popHover);
    }
    else if (changeKey == "AddedItems") {
        argu = "addHover";
        funcc4(addHover);
    }

}

function funcc4(item) {
    arr1[3].style.backgroundImage = `url('${item[3].img}')`;
    itemsContainer.style.transform = `scale(1.05)`;

    let themPageChange4 = document.querySelector(".themPageChange4");
    themPageChange4.href = item[3].href;
}
function fun5() {



    if (changeKey == "featuredItems") {
        argu = "feHover";
        funcc5(feHover);

    }
    else if (changeKey == "PopularItems") {
        argu = "popHover";
        funcc5(popHover);
    }
    else if (changeKey == "AddedItems") {
        argu = "addHover";
        funcc5(addHover);
    }

}

function funcc5(item) {
    arr1[4].style.backgroundImage = `url('${item[4].img}')`;
    itemsContainer.style.transform = `scale(1.05)`;

    let themPageChange5 = document.querySelector(".themPageChange5");
    themPageChange5.href = item[4].href;
}
function fun6() {



    if (changeKey == "featuredItems") {
        argu = "feHover";
        funcc6(feHover);

    }
    else if (changeKey == "PopularItems") {
        argu = "popHover";
        funcc6(popHover);
    }
    else if (changeKey == "AddedItems") {
        argu = "addHover";
        funcc6(addHover);
    }

}

function funcc6(item) {
    arr1[5].style.backgroundImage = `url('${item[5].img}')`;
    itemsContainer.style.transform = `scale(1.05)`;

    let themPageChange6 = document.querySelector(".themPageChange6");
    themPageChange6.href = item[5].href;
}
function fun7() {



    if (changeKey == "featuredItems") {
        argu = "feHover";
        funcc7(feHover);

    }
    else if (changeKey == "PopularItems") {
        argu = "popHover";
        funcc7(popHover);
    }
    else if (changeKey == "AddedItems") {
        argu = "addHover";
        funcc7(addHover);
    }

}

function funcc7(item) {
    arr1[6].style.backgroundImage = `url('${item[6].img}')`;
    itemsContainer.style.transform = `scale(1.05)`;

    let themPageChange7 = document.querySelector(".themPageChange7");
    themPageChange7.href = item[6].href;
}
function fun8() {



    if (changeKey == "featuredItems") {
        argu = "feHover";
        funcc8(feHover);

    }
    else if (changeKey == "PopularItems") {
        argu = "popHover";
        funcc8(popHover);
    }
    else if (changeKey == "AddedItems") {
        argu = "addHover";
        funcc8(addHover);
    }

}

function funcc8(item) {
    arr1[7].style.backgroundImage = `url('${item[7].img}')`;
    itemsContainer.style.transform = `scale(1.05)`;

    let themPageChange8 = document.querySelector(".themPageChange8");
    themPageChange8.href = item[7].href;
}

const feHover2 = [{ img: "img/product-12-1.jpg", },
{ img: "img/product-11-1.jpg", },
{ img: "img/product-10-1.jpg", },
{ img: "img/product-9-1.jpg", },
{ img: "img/product-8-1.jpg", },
{ img: "img/product-7-1.jpg", },
{ img: "img/product-6-1.jpg", },
{ img: "img/product-5-1.jpg", },

]
const popHover2 = [{ img: "img/product-5-1.jpg", },
{ img: "img/product-6-1.jpg", },
{ img: "img/product-7-1.jpg", },
{ img: "img/product-8-1.jpg", },
{ img: "img/product-9-1.jpg", },
{ img: "img/product-10-1.jpg", },
{ img: "img/product-11-1.jpg", },
{ img: "img/product-12-1.jpg", },

]
const addHover2 = [{ img: "img/product-1-1.jpg", },
{ img: "img/product-2-1.jpg", },
{ img: "img/product-3-1.jpg", },
{ img: "img/product-4-1.jpg", },
{ img: "img/product-5-1.jpg", },
{ img: "img/product-6-1.jpg", },
{ img: "img/product-7-1.jpg", },
{ img: "img/product-8-1.jpg", },

]





function funl1() {

    if (changeKey == "featuredItems") {

        funccl1(feHover2);

    }
    else if (changeKey == "PopularItems") {

        funccl1(popHover2);
    }
    else if (changeKey == "AddedItems") {

        funccl1(addHover2);
    }

}

function funccl1(item) {

    arr1[0].style.backgroundImage = `url('${item[0].img}')`;
    itemsContainer.style.transform = `scale(1.05)`;
}


function funl2() {



    if (changeKey == "featuredItems") {
        argu = "feHover";
        funccl2(feHover2);

    }
    else if (changeKey == "PopularItems") {
        argu = "popHover";
        funccl2(popHover2);
    }
    else if (changeKey == "AddedItems") {
        argu = "addHover";
        funccl2(addHover2);
    }

}

function funccl2(item) {
    arr1[1].style.backgroundImage = `url('${item[1].img}')`;
    itemsContainer.style.transform = `scale(1.05)`;
}
function funl3() {



    if (changeKey == "featuredItems") {
        argu = "feHover";
        funccl3(feHover2);

    }
    else if (changeKey == "PopularItems") {
        argu = "popHover";
        funccl3(popHover2);
    }
    else if (changeKey == "AddedItems") {
        argu = "addHover";
        funccl3(addHover2);
    }

}

function funccl3(item) {
    arr1[2].style.backgroundImage = `url('${item[2].img}')`;
    itemsContainer.style.transform = `scale(1.05)`;
}
function funl4() {



    if (changeKey == "featuredItems") {
        argu = "feHover";
        funccl4(feHover2);

    }
    else if (changeKey == "PopularItems") {
        argu = "popHover";
        funccl4(popHover2);
    }
    else if (changeKey == "AddedItems") {
        argu = "addHover";
        funccl4(addHover2);
    }

}

function funccl4(item) {
    arr1[3].style.backgroundImage = `url('${item[3].img}')`;
    itemsContainer.style.transform = `scale(1.05)`;
}
function funl5() {



    if (changeKey == "featuredItems") {
        argu = "feHover";
        funccl5(feHover2);

    }
    else if (changeKey == "PopularItems") {
        argu = "popHover";
        funccl5(popHover2);
    }
    else if (changeKey == "AddedItems") {
        argu = "addHover";
        funccl5(addHover2);
    }

}

function funccl5(item) {
    arr1[4].style.backgroundImage = `url('${item[4].img}')`;
    itemsContainer.style.transform = `scale(1.05)`;
}
function funl6() {



    if (changeKey == "featuredItems") {
        argu = "feHover";
        funccl6(feHover2);

    }
    else if (changeKey == "PopularItems") {
        argu = "popHover";
        funccl6(popHover2);
    }
    else if (changeKey == "AddedItems") {
        argu = "addHover";
        funccl6(addHover2);
    }

}

function funccl6(item) {
    arr1[5].style.backgroundImage = `url('${item[5].img}')`;
    itemsContainer.style.transform = `scale(1.05)`;
}
function funl7() {



    if (changeKey == "featuredItems") {
        argu = "feHover";
        funccl7(feHover2);

    }
    else if (changeKey == "PopularItems") {
        argu = "popHover";
        funccl7(popHover2);
    }
    else if (changeKey == "AddedItems") {
        argu = "addHover";
        funccl7(addHover2);
    }

}

function funccl7(item) {
    arr1[6].style.backgroundImage = `url('${item[6].img}')`;
    itemsContainer.style.transform = `scale(1.05)`;
}
function funl8() {



    if (changeKey == "featuredItems") {
        argu = "feHover";
        funccl8(feHover2);

    }
    else if (changeKey == "PopularItems") {
        argu = "popHover";
        funccl8(popHover2);
    }
    else if (changeKey == "AddedItems") {
        argu = "addHover";
        funccl8(addHover2);
    }

}

function funccl8(item) {
    arr1[7].style.backgroundImage = `url('${item[7].img}')`;
    // itemsContainer.style.transform = `scale(1.05)`;
}









// -------------------------slider2Hover------------------------------

let item21 = document.querySelector(".item21");
let item22 = document.querySelector(".item22");
let item23 = document.querySelector(".item23");
let item24 = document.querySelector(".item24");
let item25 = document.querySelector(".item25");
let item26 = document.querySelector(".item26");
let item27 = document.querySelector(".item27");
let item28 = document.querySelector(".item28");


function slider2Hover1() {
    item21.src = "img/product-1-2.jpg";


}
function slider2Leave1() {
    item21.src = "img/product-1-1.jpg";

}
function slider2Hover2() {
    item22.src = "img/product-2-2.jpg";


}
function slider2Leave2() {
    item22.src = "img/product-2-1.jpg";

}
function slider2Hover3() {
    item23.src = "img/product-3-2.jpg";


}
function slider2Leave3() {
    item23.src = "img/product-3-1.jpg";

}
function slider2Hover4() {
    item24.src = "img/product-4-2.jpg";


}
function slider2Leave4() {
    item24.src = "img/product-4-1.jpg";

}
function slider2Hover5() {
    item25.src = "img/product-5-2.jpg";


}
function slider2Leave5() {
    item25.src = "img/product-5-1.jpg";

}
function slider2Hover6() {
    item26.src = "img/product-6-2.jpg";


}
function slider2Leave6() {
    item26.src = "img/product-6-1.jpg";

}
function slider2Hover7() {
    item27.src = "img/product-7-2.jpg";


}
function slider2Leave7() {
    item27.src = "img/product-7-1.jpg";

}
function slider2Hover8() {
    item28.src = "img/product-8-2.jpg";


}
function slider2Leave8() {
    item28.src = "img/product-8-1.jpg";

}


// ---------------------------add to cart-------------------------------




let cartCount = 0;


function gocart(y) {

    cartCount++;

    let cartmidbody = document.querySelector(".cartmidbody");
    let cartSub = document.querySelector(".cartSub");

    let bGImage = arr1[y].style.backgroundImage;
    let newB = bGImage.replace("url(\"", "");
    let n = newB.replace("\")", "");
    console.log(bGImage);
    console.log(newB);
    console.log(n);


    cartmidbody.innerHTML = cartmidbody.innerHTML + `<div class="cartmidbody1">

                <div class="cBImage"><img src="${n}" alt=""></div>
                <div class="cBName"><h3>J.Crew Mercantile Women's Short Sleeve</h3><h4>Maboriosam in a Tonto</h4></div>
                <div class="cBPrice"><h4>$120</h4></div>
                <div class="cBQntty"><input type="number" name="" id="" placeholder="0"></div>
                <div class="cBTotal"><h4>$220</h4></div>
                <div  class="cBRemove"><span class="material-symbols-outlined">delete </span></div>
                </div>
                <hr style="margin-top: 0px;">`;

                cartSub.innerHTML = cartCount;

}


// -----------------------------------------------------------------------------

let addCart = document.querySelector(".addCart");

let mid = document.querySelector(".mid");
let slider = document.querySelector(".slider");
let them = document.querySelector(".them");
let event = document.querySelector(".event");
let menuu = document.querySelector(".menuu");
let slider2 = document.querySelector(".slider2");


let shoppingCart = document.querySelector(".shoppingCart");

addCart.addEventListener("click", function () {

    mid.style.display = "none";
    slider.style.display = "none";
    them.style.display = "none";
    event.style.display = "none";
    menuu.style.display = "none";
    slider2.style.display = "none";


    shoppingCart.style.display = "block";



})


// --------------------------new arrivel--------------------------------------

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