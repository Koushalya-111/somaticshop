let nav = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 70) {
    nav.classList.add("nav_active");
  } else {
    nav.classList.remove("nav_active");
  }
})
let menuBar = document.getElementById("menu-bar");
let navLink = document.getElementById("navlink");

menuBar.addEventListener("click", () => {
  if (navLink.style.display === "flex") {
    navLink.style.display = "none";
  } else {
    navLink.style.display = "flex";
  }
});


let cart_counter = document.querySelector(".cart_number");
let counter = 0;
let i;
const cart_btn = document.getElementById("cart_button");
const navlink = document.querySelector(".floating_nav");
const p_name = document.querySelectorAll(".p1");
const price = document.querySelectorAll(".cart_price")

let ul = document.getElementById("addedCart_items");
let add_cart = document.querySelectorAll(".btn");
const cart_images = document.querySelectorAll(".cart_img")
const total_cart = document.getElementById("total")
let total = 0;
let hidden=document.querySelector(".container");


cart_btn.addEventListener("click", () => {
  navlink.classList.toggle("floating_active");
});
hidden.addEventListener("keydown",()=>
{
  navLink.classList.remove("floating_nav");
})

// total_cart.addEventListener("click",()=>{
//   let counter=0
//   counter=counter+price
//   total_cart.innerText=counter
// })

for (let i = 0; i < add_cart.length; i++) {
  let item = p_name[i].innerHTML;
  let item1 = price[i].innerHTML;
  add_cart[i].addEventListener("click", () => {
    alert("Added Successfull")
    counter = counter + 1;
    cart_counter.innerText = counter;

    const li = document.createElement("li");
    li.id = "list"
    const img = document.createElement("img");
    img.id = "citem_img"
    img.src = cart_images[i].src;
    li.innerHTML = item;
    li.innerHTML = item1;
    const h4 = document.createElement("h4");
    h4.innerHTML = item;
    const p = document.createElement("p");
    p.innerHTML = "X";
    p.id = "cross";
    p.addEventListener("click", () => {
      p.parentElement.remove();
      counter = counter - 1;
      cart_counter.innerText = counter;
    })
    li.appendChild(p)
    li.prepend(h4);
    li.prepend(img);
    ul.appendChild(li);
  })
}


// slider in js

let slider = document.querySelector(".card");
let scrollWidth = 360;
let scrollheight = 370;

let next = document.getElementById("next_btn");
let prev = document.getElementById("prev_btn");

next.addEventListener("click", () => {
  if (window.innerWidth >= 500) {
    slider.scrollBy({
      left: scrollWidth,
      behavior: "smooth"
    })
  }
  else {
    slider.scrollBy({
      top: scrollheight,
      behavior: "smooth"
    });
  }
})

prev.addEventListener("click", () => {
  slider.scrollBy({
    left: -scrollWidth + 20,
    behavior: "smooth"
  })
})

let slider1 = document.querySelector(".watch-card");
let scrollWidth1 = 360;

let next1 = document.getElementById("next_watch");
let prev1 = document.getElementById("prev_watch");

next1.addEventListener("click", () => {
  slider1.scrollBy({
    left: scrollWidth1,
    behavior: "smooth"
  })
})

prev1.addEventListener("click", () => {
  slider1.scrollBy({
    left: -scrollWidth1 + 20,
    behavior: "smooth"
  })
})

let slider2 = document.querySelector(".shoe-card");
let scrollWidth2 = 360;

let next2 = document.getElementById("next_shoe");
let prev2 = document.getElementById("prev_shoe");

next2.addEventListener("click", () => {
  slider2.scrollBy({
    left: scrollWidth2,
    behavior: "smooth"
  })
})

prev2.addEventListener("click", () => {
  slider2.scrollBy({
    left: -scrollWidth2 + 20,
    behavior: "smooth"
  })
})


