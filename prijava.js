let poruka = document.querySelectorAll(".poruka");
let darkOverlay = document.querySelector(".darkOverlay");
let porukaForm = document.querySelector(".porukaForm");
let formCloseButton = document.querySelectorAll(".formCloseButton");

poruka.forEach((poruka) => {
    poruka.addEventListener('click', () => {
        darkOverlay.style.display = "block";
        porukaForm.style.display = "block";
    });
  });

let prijava = document.querySelectorAll("#prijaviSeButton");
let prijavaForm = document.querySelector(".prijavaForm");



prijava.forEach((prijava) => {
    prijava.addEventListener('click', () => {
        darkOverlay.style.display = "block";
        prijavaForm.style.display = "block";
    });
  });



darkOverlay.addEventListener("click", function() {
    darkOverlay.style.display = "none";
    prijavaForm.style.display = "none";
    porukaForm.style.display = "none";
})




    formCloseButton.forEach((formCloseButton) => {
        formCloseButton.addEventListener('click', () => {
            darkOverlay.style.display = "none";
            prijavaForm.style.display = "none";
            porukaForm.style.display = "none";
        });
      });