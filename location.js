// changing the google map (Samobor - Zagreb)

//buttons
var locationButtonRijeka = document.querySelector("#rijekaButton");
var locationButtonZagreb = document.querySelector("#zagrebButton");
var locationButtonOsijek = document.querySelector("#osijekButton");
var locationButtonSplit = document.querySelector("#splitButton");

//Location Maps
var locationMapRijeka = document.querySelector("#rijekaMap");
var locationMapZagreb = document.querySelector("#zagrebMap");
var locationMapOsijek = document.querySelector("#osijekMap");
var locationMapSplit = document.querySelector("#splitMap");
var kaleta = document.querySelector(".kaleta");

locationButtonRijeka.addEventListener("click", function () {
  locationMapRijeka.style.display = "block";
  locationMapZagreb.style.display = "none";
  locationMapOsijek.style.display = "none";
  locationMapSplit.style.display = "none";
  locationButtonRijeka.classList.add("active");
  locationButtonZagreb.classList.remove("active");
  locationButtonOsijek.classList.remove("active");
  locationButtonSplit.classList.remove("active");
  kaleta.style.display = "none";
});

locationButtonZagreb.addEventListener("click", function () {
  locationMapZagreb.style.display = "block";
  locationMapRijeka.style.display = "none";
  locationMapOsijek.style.display = "none";
  locationMapSplit.style.display = "none";

  locationButtonZagreb.classList.add("active");
  locationButtonRijeka.classList.remove("active");
  locationButtonOsijek.classList.remove("active");
  locationButtonSplit.classList.remove("active");
  kaleta.style.display = "none";
});

locationButtonOsijek.addEventListener("click", function () {
  locationMapOsijek.style.display = "block";
  locationMapRijeka.style.display = "none";
  locationMapZagreb.style.display = "none";
  locationMapSplit.style.display = "none";

  locationButtonOsijek.classList.add("active");
  locationButtonRijeka.classList.remove("active");
  locationButtonZagreb.classList.remove("active");
  locationButtonSplit.classList.remove("active");
  kaleta.style.display = "none";
});

locationButtonSplit.addEventListener("click", function () {
  locationMapOsijek.style.display = "none";
  locationMapRijeka.style.display = "none";
  locationMapZagreb.style.display = "none";
  locationMapSplit.style.display = "block";
  locationButtonOsijek.classList.remove("active");
  locationButtonRijeka.classList.remove("active");
  locationButtonZagreb.classList.remove("active");
  locationButtonSplit.classList.add("active");
  kaleta.style.display = "block";
});
