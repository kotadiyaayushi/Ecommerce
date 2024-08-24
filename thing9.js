let timag2front = document.querySelector(".timag2front");
let timag2back = document.querySelector(".timag2back");

let ti1 = document.querySelector(".ti1");

timag2front.addEventListener("click",function(){


    ti1.src = "img/product-9-1.jpg";

})
timag2back.addEventListener("click",function(){


    ti1.src = "img/product-9-2.jpg";

})



let t1one = document.querySelector(".t1one");
let t2two = document.querySelector(".t2two");

let thbtnone = document.querySelector(".thbtnone");
let thbtntwo = document.querySelector(".thbtntwo");

thbtnone.addEventListener("click",function(){

    t1one.style.display = "block";
    t2two.style.display = "none";



})
thbtntwo.addEventListener("click",function(){

    t2two.style.display = "block";
    t1one.style.display = "none";



})