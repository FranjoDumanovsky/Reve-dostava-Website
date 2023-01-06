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
    } 
    else {
        mobileMenuBackground.style.display = "none";
        mobileNav.style.display = "none";
    }
})





