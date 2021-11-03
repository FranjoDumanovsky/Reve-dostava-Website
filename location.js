
// changing the google map (Samobor - Zagreb)

//buttons
var locationButtonSamobor = document.querySelector("#samoborButton");
var locationButtonZagreb = document.querySelector("#zagrebButton");

//Location Maps
var locationMapSamobor = document.querySelector("#samoborMap");
var locationMapZagreb = document.querySelector("#zagrebMap");


locationButtonSamobor.addEventListener("click", function() {
    locationMapSamobor.style.display = "block";
    locationMapZagreb.style.display = "none";
    locationButtonSamobor.classList.add("active");
    locationButtonZagreb.classList.remove("active");
})

locationButtonZagreb.addEventListener("click", function() {
    locationMapZagreb.style.display = "block";
    locationMapSamobor.style.display ="none";
    locationButtonZagreb.classList.add("active");
    locationButtonSamobor.classList.remove("active");
})