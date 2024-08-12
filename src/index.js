import { component } from "./home";
import { content } from "./menu";
import { contact } from "./contact";
import "./style.css";

let slideShow = true;

const div = document.querySelector("#content");
const btnHome = document.querySelector(".home");
const btnMenu = document.querySelector(".menu");
const btnContact = document.querySelector(".contact");

div.appendChild(component());

btnHome.textContent = "BELLA ITALIA";
btnHome.addEventListener("click", () => {
  div.innerHTML = "";
  div.appendChild(component());
  let slideIndex = 0;
  showSlides();
  function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Change image every 3 seconds
  }
});

btnMenu.addEventListener("click", () => {
  div.innerHTML = "";
  slideShow = false;
  div.appendChild(content());
});

btnContact.addEventListener("click", () => {
  div.innerHTML = "";
  slideShow = false;
  div.appendChild(contact());
});

let slideIndex = 0;

if (slideShow === true) {
  showSlides();
}

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}
