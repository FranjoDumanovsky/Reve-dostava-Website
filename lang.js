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


      // Hero Section text elements
      const heroSectionHeader = document.querySelector("#hero-section-header");
      const heroSectionText = document.querySelector("#hero-section-text")

      const welcomeHeader = document.querySelector("#welcome-header");
      const welcomeSubHeader = document.querySelector("#welcome-sub-header");
      const welcomeFirstCardHeader = document.querySelector("#welcome-first-card-header");
      const welcomeFirstCardText = document.querySelector("#welcome-first-card-text");
      const welcomeSecondCardHeader = document.querySelector("#welcome-second-card-header");
      const welcomeSecondCardText = document.querySelector("#welcome-second-card-text");
      const welcomeThirdCardHeader = document.querySelector("#welcome-third-card-header");
      const welcomeThirdCardText = document.querySelector("#welcome-third-card-text");

      /// ABOTUT US SECTION 
      const aboutUsSectionHeader = document.querySelector("#about-us-section-header")
      const aboutUsSectionText = document.querySelector("#about-us-section-text")
      const aboutUsSectionFirstCard = document.querySelector("#about-us-section-first-card")
      const aboutUsSectionSecondCard = document.querySelector("#about-us-section-second-card")
      const locationSectionHeader = document.querySelector("#location-section-header")







      /// SIGN UP SECTION 
      const signUpPageHeader = document.querySelector("#sign-up-page-header")
      const signUpPageSubHeader = document.querySelector("#sign-up-page-sub-header")
      const signUpPageText = document.querySelector("#sign-up-page-text")

      // BUTTONS
      const signUpButton = document.querySelectorAll(".sign-up-button")
      const moreButton = document.querySelectorAll("#more-button")
      const contactUsButton = document.querySelectorAll("#contact-us-button")

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
      const signUpEmail = document.querySelector("#email");
      const signUpPhone = document.querySelector("#phone");
      const signUpMessage = document.querySelector("#message");


      // Define the language reload anchors
      var language = {
        eng: {
        // MAIN PAGE TEXT ENGLISH
        heroSectionHeader: 'BECOME REVE <span id="yellowText">DELIVERER</span>', 
        heroSectionText: "Sign up and become a Reve deliverer! Drive your own vehicle or choose something from our fleet, deliver full-time or as extra work - you choose!",
        welcomeHeader: "BECOME A PART OF OUR TEAM",
        welcomeSubHeader: "SIGN UP TODAY",
        welcomeFirstCardHeader: "Fast Sign in",
        welcomeFirstCardText: "Sign up within minutes!",
        welcomeSecondCardHeader: "Our fleet",
        welcomeSecondCardText: "Choose between 30 cars from our fleet",
        welcomeThirdCardHeader: "Flexibility",
        welcomeThirdCardText: "You choose your own working hours",
        aboutUsSectionHeader: "WHO WE ARE",
        aboutUsSectionText: "More than 300 satisfied active suppliers are the best indicator of our reliable and safe working environment.",
        aboutUsSectionFirstCard: "Our team",
        aboutUsSectionSecondCard: "Our Fleet",
        locationSectionHeader: "WHERE WE <br> ARE",
           

        // SIGN UP SECTION

        signUpPageHeader: "SIGN UP",
        signUpPageSubHeader: "In only two minutes",
        signUpPageText: "<div>Want to sign up for Wolt or Glovo? <br> Our team will contact you in the shortest possible time. </div>",

        // BUTTONS ENGLISH
              
        signUpButton: "SIGN UP",
        moreButton: "SEE MORE",
        contactUsButton: "Contact us",

        // ENGLISH LINKS 

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
           
         // MAIN PAGE TEXT CROATIAN

        heroSectionHeader: 'Postani Reve <span id="yellowText">dostavljač</span>', 
        heroSectionText: "Prijavi se i postani Reve dostavljač! Vozi svoje vozilo ili odaberi nešto iz naše flote, dostavljaj na puno radno vrijeme ili kao dodatni posao - ti biraš!",
        welcomeHeader: "POSTANI DIO NAŠEG TIMA",
        welcomeSubHeader: "PRIJAVI SE VEĆ DANAS",
        welcomeFirstCardHeader: "Brza prijava",
        welcomeFirstCardText: "Prijava u roku par minuta!",
        welcomeSecondCardHeader: "Naša vozila",
        welcomeSecondCardText: "Biraj između 30 automobila Iz našeg voznog parka",
        welcomeThirdCardHeader: "Fleksibilnost",
        welcomeThirdCardText: "Sam biraš svoje radno vrijeme",
        aboutUsSectionHeader: "TKO SMO MI",
        aboutUsSectionText: "Više od 300 zadovoljnih akitvnih dostavljača najbolji su pokazatelj našeg pouzdanog i sigurnog radnog okruženja.",
        aboutUsSectionFirstCard: "Naš Tim",
        aboutUsSectionSecondCard: "Vozni Park",
        locationSectionHeader: "PRONAĐITE NAS NA <br> LOKACIJI",


        // SIGN UP TEXT CROATIAN

        signUpPageHeader: "PRIJAVI SE",
        signUpPageSubHeader: "U samo dvije minute!",
        signUpPageText: "<div>Želiš se prijaviti na Wolt ili Glovo? <br> Naš tim će te kontaktirati u najkraćem mogućem roku.</div>",




        // BUTTONS CROATIAN 

        signUpButton: "PRIJAVI SE",
        moreButton: "SAZNAJ VIŠE",
        contactUsButton: "Javi nam se!",



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

        },
      };

  
// Check if a hash value exists in the URL
    
        // Set the content of the webpage 
        // depending on the hash value
        if (sessionStorage.getItem("lang") == "eng") {


          languageList.innerHTML = '<li class="active-lang" onClick="changeLanguage(\'eng\')"><a href="#" class="eng">English</a></li><li onClick="changeLanguage(\'hr\')"><a href="#" class="hr">Croatian</a></li>';



          /// CONTENT 

          heroSectionHeader.innerHTML =
          language.eng.heroSectionHeader;

          heroSectionText.textContent =
          language.eng.heroSectionText;

          welcomeHeader.textContent =
          language.eng.welcomeHeader;

          welcomeSubHeader.textContent =
          language.eng.welcomeSubHeader;

          welcomeFirstCardHeader.textContent =
          language.eng.welcomeFirstCardHeader;

          welcomeFirstCardText.textContent =
          language.eng.welcomeFirstCardText;

          welcomeSecondCardHeader.textContent =
          language.eng.welcomeSecondCardHeader;

          welcomeSecondCardText.textContent =
          language.eng.welcomeSecondCardText;

          welcomeThirdCardHeader.textContent =
          language.eng.welcomeThirdCardHeader;

          welcomeThirdCardText.textContent =
          language.eng.welcomeThirdCardText;

          aboutUsSectionHeader.textContent =
          language.eng.aboutUsSectionHeader;

          aboutUsSectionText.textContent =
          language.eng.aboutUsSectionText;

          aboutUsSectionFirstCard.textContent =
          language.eng.aboutUsSectionFirstCard;

          aboutUsSectionSecondCard.textContent =
          language.eng.aboutUsSectionSecondCard;

          locationSectionHeader.innerHTML =
          language.eng.locationSectionHeader;
  
          signUpPageHeader.textContent =
          language.eng.signUpPageHeader;

          signUpPageSubHeader.textContent =
          language.eng.signUpPageSubHeader;

          signUpPageText.innerHTML =
          language.eng.signUpPageText;
        

         // BUTTONS

          signUpButton.forEach(signUpButton => signUpButton.textContent =
          language.eng.signUpButton);

          moreButton.forEach(moreButton => moreButton.textContent =
          language.eng.moreButton);

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
          languageList.innerHTML = '<li class="active-lang" onClick="changeLanguage(\'hr\')"><a href="#" class="hr">Croatian</a></li> <li  onClick="changeLanguage(\'eng\')"><a href="#" class="eng">English</a></li>';
          }

        
      

    
