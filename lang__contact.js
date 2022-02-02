// Create a function to change
    // the hash value of the page
    function changeLanguage(lang) {
        if (lang == "eng") {
            sessionStorage.setItem("lang","eng");
        } else {
            sessionStorage.setItem("lang","hr");
        }
        location.reload();
        }





const languageList = document.querySelector(".lang-change__dropdown");

/// CONTENT 
const contactUsPageHeader = document.querySelector("#contact-us-page-header")
const contactUsPageText = document.querySelector("#contact-us-page-text")
const contactUsPageLocationHeader = document.querySelector("#contact-us-page-location-header")

/// BUTTONS 
const contactUsButton = document.querySelectorAll("#contact-us-button")
const signUpButton = document.querySelector(".sign-up-button");

// LINKS 

const homePageLink = document.querySelectorAll("#home-page-link")
const aboutUsPageLink = document.querySelectorAll("#about-us-page-link")
const contactUsPageLink = document.querySelectorAll("#contact-us-page-link")
const vehicleFleetPageLink = document.querySelectorAll("#vehicle-fleet-page-link")
const signUpPageLink = document.querySelector("#sign-up-page-link")
const rulesOfProcedurePage = document.querySelector("#rules-of-procedure-page")

// contact form text 

const errorHintName = document.querySelector(".error-hint-name");
const errorHintEmail = document.querySelector(".error-hint-email");
const successText = document.querySelector(".success-text")

// 

const signUpName = document.querySelector("#name");
const signUpPhone = document.querySelector("#phone");
const signUpMessage = document.querySelector("#message");






// Define the language reload anchors
  var language = {
      eng: {
              // CONTENT 

              contactUsPageHeader: "CONTACT US",
              contactUsPageText: "We are looking for communicative, motivated and responsible people for our team! If you find yourself in that description, let us know, choose the platform you want to work on and become our delivery person as soon as possible!",
              contactUsPageLocationHeader: "WHERE TO FIND <br>US",


              // BUTTONS 
              contactUsButton: "Contact us",
              signUpButton: "SIGN UP",


              // LINKS 

               homePageLink: "Home",
               aboutUsPageLink: "About us",
               contactUsPageLink: "Contact us",
               vehicleFleetPageLink: "Vehicle Fleet",
               signUpPageLink: "Sign up",
               rulesOfProcedurePage: "Rules of Procedure",
              
              
              // SIGN UP FORM 

               signUpName: "Name & Surname",
               signUpPhone: "Phone",
               signUpMessage: "Message"




        },
        hr: { 
              // CONTENT 

              contactUsPageHeader: "JAVITE NAM SE!",
              contactUsPageText: "Tražimo komunikativne, motivirane i odgovorne ljude za naš tim! Ako se pronalaziš u tom opisu javi nam se, odaberi platformu putem koje želiš raditi i u najkraćem mogućem roku postani naš dostavljač!",
              contactUsPageLocationHeader: "NAĐITE NAS NA <br> LOKACIJI",



              // BUTTONS 
              contactUsButton: "Javi nam se",
              signUpButton: "PRIJAVI SE",




              // CROATIAN LINKS 

              homePageLink : "Početna",
              aboutUsPageLink: "O nama",
              contactUsPageLink: "Kontakti",
              vehicleFleetPageLink: "Vozni park",
              signUpPageLink: "Prijavi se",
              rulesOfProcedurePage: "Pravilnik o radu",

              // SIGN UP FORM 

              signUpName: "Ime i Prezime",
              signUpPhone: "Mobitel",
              signUpMessage: "Poruka"
  }
}

        // Check if a hash value exists in the URL
    
        // Set the content of the webpage 
        // depending on the hash value
        
if (sessionStorage.getItem("lang") == "eng") {
    languageList.innerHTML = '<li class="active-lang" onClick="changeLanguage(\'eng\')"><a href="#" class="eng">English</a></li><li onClick="changeLanguage(\'hr\')"><a href="#" class="hr">Croatian</a></li>';

  
          /// CONTENT

          contactUsPageHeader.textContent =
          language.eng.contactUsPageHeader;

          contactUsPageText.textContent =
          language.eng.contactUsPageText;
          
          contactUsPageLocationHeader.innerHTML =
          language.eng.contactUsPageLocationHeader;

          // BUTTONS 

          signUpButton.textContent = 
          language.eng.signUpButton

          contactUsButton.forEach(contactUsButton => contactUsButton.textContent =
          language.eng.contactUsButton);


          // LINKS

          homePageLink.forEach(homePageLink => homePageLink.textContent =
          language.eng.homePageLink);

          aboutUsPageLink.forEach(aboutUsPageLink => aboutUsPageLink.textContent =
          language.eng.aboutUsPageLink);

          contactUsPageLink.forEach(contactUsPageLink => contactUsPageLink.textContent =
          language.eng.contactUsPageLink);

          vehicleFleetPageLink.forEach(vehicleFleetPageLink => vehicleFleetPageLink.textContent =
          language.eng.vehicleFleetPageLink);

          signUpPageLink.textContent =
          language.eng.signUpPageLink

          rulesOfProcedurePage.textContent =
          language.eng.rulesOfProcedurePage


          // CONTACT FORM 

          signUpName.placeholder = 
          language.eng.signUpName

          signUpMessage.placeholder = 
          language.eng.signUpMessage

          signUpPhone.placeholder = 
          language.eng.signUpPhone
}
else  
{      
languageList.innerHTML = 
'<li class="active-lang" onClick="changeLanguage(\'hr\')"><a href="#" class="hr">Croatian</a></li> <li  onClick="changeLanguage(\'eng\')"><a href="#" class="eng">English</a></li>';
}
