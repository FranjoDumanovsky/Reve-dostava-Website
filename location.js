
// changing the google map (Samobor - Zagreb)

//buttons
var locationButtonRijeka = document.querySelector("#rijekaButton");
var locationButtonZagreb = document.querySelector("#zagrebButton");
var locationButtonOsijek = document.querySelector("#osijekButton");

//Location Maps
var locationMapRijeka = document.querySelector("#rijekaMap");
var locationMapZagreb = document.querySelector("#zagrebMap");
var locationMapOsijek = document.querySelector("#osijekMap");


locationButtonRijeka.addEventListener("click", function() {
    locationMapRijeka.style.display = "block";
    locationMapZagreb.style.display = "none";
    locationMapOsijek.style.display = "none";
    locationButtonRijeka.classList.add("active");
    locationButtonZagreb.classList.remove("active");
    locationButtonOsijek.classList.remove("active");
})

locationButtonZagreb.addEventListener("click", function() {
    locationMapZagreb.style.display = "block";
    locationMapRijeka.style.display ="none";
    locationMapOsijek.style.display ="none";
    locationButtonZagreb.classList.add("active");
    locationButtonRijeka.classList.remove("active");
    locationButtonOsijek.classList.remove("active");
})

locationButtonOsijek.addEventListener("click", function() {
    locationMapOsijek.style.display = "block";
    locationMapRijeka.style.display ="none";
    locationMapZagreb.style.display ="none";
    locationButtonOsijek.classList.add("active");
    locationButtonRijeka.classList.remove("active");
    locationButtonZagreb.classList.remove("active");
})