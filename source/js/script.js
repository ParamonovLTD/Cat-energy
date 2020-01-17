var burger = document.querySelector(".burger");
var nav = document.querySelector(".nav");

burger.classList.remove("burger--nojs");
nav.classList.remove("nav--nojs");
burger.addEventListener("click", function () {
  nav.classList.toggle("nav--closed");
});

var map = document.querySelector(".location__map");
var mapFrame = document.querySelector(".location__map--nojs");

mapFrame.classList.remove("location__map--nojs");
map.classList.add("location__map--nojs");
