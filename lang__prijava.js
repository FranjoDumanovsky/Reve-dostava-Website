// Create a function to change
// the hash value of the page
function changeLanguage(lang) {
  if (lang == "eng") {
    sessionStorage.setItem("lang", "eng");
  } else {
    sessionStorage.setItem("lang", "hr");
  }
  location.reload();
}

const languageList = document.querySelector(".lang-change__dropdown");

// LINKS

const homePageLink = document.querySelectorAll("#home-page-link");
const aboutUsPageLink = document.querySelectorAll("#about-us-page-link");
const contactUsPageLink = document.querySelectorAll("#contact-us-page-link");
const vehicleFleetPageLink = document.querySelectorAll(
  "#vehicle-fleet-page-link"
);
const signUpPageLink = document.querySelector(".sign-up-page-link");
const rulesOfProcedurePage = document.querySelector("#rules-of-procedure-page");
const privacyPolicyPage = document.querySelector("#privacy-policy-page");

/// SIGN UP SECTION
const signUpPageHeader = document.querySelector("#sign-up-page-header");
const signUpPageSubHeader = document.querySelector("#sign-up-page-sub-header");
const signUpPageText = document.querySelector("#sign-up-page-text");

//

const signUpName = document.querySelector("#name");
const signUpPhone = document.querySelector("#phone");
const signUpMessage = document.querySelector("#message");

const signUpButton = document.querySelectorAll(".sign-up-button");

// Define the language reload anchors
var language = {
  eng: {
    // BUTTONS

    signUpButton: "SIGN UP",

    // LINKS

    homePageLink: "Home",
    aboutUsPageLink: "About us",
    contactUsPageLink: "Contact us",
    vehicleFleetPageLink: "Vehicle Fleet",
    signUpPageLink: "Sign up",
    rulesOfProcedurePage: "Rules of Procedure",
    privacyPolicyPage: "Privacy policy",

    // SIGN UP FORM

    signUpName: "Name & Surname",
    signUpPhone: "Phone",
    signUpMessage: "Message",

    // SIGN UP SECTION

    signUpPageHeader: "SIGN UP",
    signUpPageSubHeader: "In only two minutes",
    signUpPageText:
      "<div>Want to sign up for Wolt or Glovo? <br> Our team will contact you in the shortest possible time. </div>",
  },
  hr: {},
};

// Check if a hash value exists in the URL

// Set the content of the webpage
// depending on the hash value

if (sessionStorage.getItem("lang") == "eng") {
  languageList.innerHTML =
    '<li class="active-lang" onClick="changeLanguage(\'eng\')"><a href="#" class="eng">English</a></li><li onClick="changeLanguage(\'hr\')"><a href="#" class="hr">Croatian</a></li>';

  signUpPageHeader.textContent = language.eng.signUpPageHeader;

  signUpPageSubHeader.textContent = language.eng.signUpPageSubHeader;

  signUpPageText.innerHTML = language.eng.signUpPageText;

  // BUTTONS

  signUpButton.forEach(
    (signUpButton) => (signUpButton.textContent = language.eng.signUpButton)
  );

  // LINKS

  homePageLink.forEach(
    (homePageLink) => (homePageLink.textContent = language.eng.homePageLink)
  );

  aboutUsPageLink.forEach(
    (aboutUsPageLink) =>
      (aboutUsPageLink.textContent = language.eng.aboutUsPageLink)
  );

  contactUsPageLink.forEach(
    (contactUsPageLink) =>
      (contactUsPageLink.textContent = language.eng.contactUsPageLink)
  );

  vehicleFleetPageLink.forEach(
    (vehicleFleetPageLink) =>
      (vehicleFleetPageLink.textContent = language.eng.vehicleFleetPageLink)
  );

  signUpPageLink.textContent = language.eng.signUpPageLink;

  rulesOfProcedurePage.textContent = language.eng.rulesOfProcedurePage;
  privacyPolicyPage.textContent = language.eng.privacyPolicyPage;
  // CONTACT FORM

  signUpName.placeholder = language.eng.signUpName;

  signUpMessage.placeholder = language.eng.signUpMessage;

  signUpPhone.placeholder = language.eng.signUpPhone;
} else {
  languageList.innerHTML =
    '<li class="active-lang" onClick="changeLanguage(\'hr\')"><a href="#" class="hr">Croatian</a></li> <li  onClick="changeLanguage(\'eng\')"><a href="#" class="eng">English</a></li>';
}
