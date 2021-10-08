var hamburgerBtn = document.querySelector(".hamburgerMenu");
var mobileMenuBackground = document.querySelector(".backgroundMobileMenu")
var mobileNav = document.querySelector(".mobileNav")




// adds sticky class to header, and scrolled class to hamburger menu button

window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
    hamburgerBtn.classList.toggle("scrolled", window.scrollY > 0);
    
})

// toggles the hamburger button to animate

hamburgerBtn.addEventListener("click", function(){
    hamburgerBtn.classList.toggle("isActive")

    if (hamburgerBtn.classList.contains("isActive")){
        mobileMenuBackground.style.display = "flex";
        mobileNav.style.display ="block";
    } else {
        mobileMenuBackground.style.display = "none";
        mobileNav.style.display = "none";
    }
    
})


// changing the google map (Samobor - Zagreb)

var locationButtonSamobor = document.querySelector("#samoborButton");
var locationButtonZagreb = document.querySelector("#zagrebButton");
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



/*
    let instagramSocial = document.querySelector("#instagramSocial")
    let linkedInSocial = document.querySelector("#linkedInSocial")
    let facebookSocial = document.querySelector("#facebookSocial")
*/

// opening and closing the form for sending messages and dark overlay around it.

    let poruka = document.querySelectorAll(".poruka");
    let darkOverlay = document.querySelector(".darkOverlay")
    let porukaForm = document.querySelector(".porukaForm")
    let formCloseButton = document.querySelector(".formCloseButton")

    poruka.forEach((poruka) => {
        poruka.addEventListener('click', () => {
            darkOverlay.style.display = "block";
            porukaForm.style.display = "block";
        });
      });


    darkOverlay.addEventListener("click", function() {
        darkOverlay.style.display = "none";
        porukaForm.style.display = "none";
    })

    formCloseButton.addEventListener("click", function() {
        darkOverlay.style.display = "none";
        porukaForm.style.display = "none";
    })

