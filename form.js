let darkOverlay = document.querySelector(".darkOverlay"); 
let formCloseButton = document.querySelectorAll(".formCloseButton");
let prijava = document.querySelectorAll("#prijaviSeButton"); 
let prijavaForm = document.querySelector(".prijavaForm"); // the main form 
let prijavaSection = document.querySelector(".prijava"); // the section containing the form 


// Opening the overlay and the form on button click
prijava.forEach((prijava) => {
    prijava.addEventListener('click', () => {
        darkOverlay.style.display = "block";
        prijavaForm.style.display = "block";
        prijavaSection.className += " poseban"; 
    });
  });


// Closing the overlay and the form when the dark overlay is pressed
darkOverlay.addEventListener("click", function() {
    darkOverlay.style.display = "none";
    prijavaForm.style.display = "none";
})


// Closing the overlay and the form when the Close button is pressed
formCloseButton.forEach((formCloseButton) => {
    formCloseButton.addEventListener('click', () => {
        darkOverlay.style.display = "none";
        prijavaForm.style.display = "none";  
    });
 });