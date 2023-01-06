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

// Content

const aboutUsPageHeroSectionHeader = document.querySelector(
  "#about-us-page-hero-section-header"
);
const aboutUsPageHeroSectionText = document.querySelector(
  "#about-us-page-hero-section-text"
);
const aboutUsPageWelcomeHeader = document.querySelector(
  "#about-us-page-welcome-header"
);
const aboutUsPageWelcomeText = document.querySelector(
  "#about-us-page-welcome-text"
);
const aboutUsPageOurTeamHeader = document.querySelector(
  "#about-us-page-our-team-header"
);
const weAreReveHeader = document.querySelector("#we-are-reve-header");
const weAreReveFirstBoxHeader = document.querySelector(
  "#we-are-reve-first-box-header"
);
const weAreReveFirstBoxText = document.querySelector(
  "#we-are-reve-first-box-text"
);
const weAreReveSecondBoxHeader = document.querySelector(
  "#we-are-reve-second-box-header"
);
const weAreReveSecondBoxText = document.querySelector(
  "#we-are-reve-second-box-text"
);

// Buttons
const contactUsButton = document.querySelectorAll("#contact-us-button");
const signUpButton = document.querySelectorAll(".sign-up-button");

// Links
const homePageLink = document.querySelectorAll("#home-page-link");
const aboutUsPageLink = document.querySelectorAll("#about-us-page-link");
const contactUsPageLink = document.querySelectorAll("#contact-us-page-link");
const vehicleFleetPageLink = document.querySelectorAll(
  "#vehicle-fleet-page-link"
);
const signUpPageLink = document.querySelector("#sign-up-page-link");
const rulesOfProcedurePage = document.querySelector("#rules-of-procedure-page");
const privacyPolicyPage = document.querySelector("#privacy-policy-page");

// Contact form text
const errorHintName = document.querySelector(".error-hint-name");
const errorHintEmail = document.querySelector(".error-hint-email");
const successText = document.querySelector(".success-text");

const signUpName = document.querySelector("#name");
const signUpEmail = document.querySelector("#email");
const signUpPhone = document.querySelector("#phone");
const signUpMessage = document.querySelector("#message");

/// SIGN UP SECTION
const signUpPageHeader = document.querySelector("#sign-up-page-header");
const signUpPageSubHeader = document.querySelector("#sign-up-page-sub-header");

var language = {
  eng: {
    // CONTENT

    aboutUsPageHeroSectionHeader: "REVE DELIVERY",
    aboutUsPageHeroSectionText:
      "Reve delivery is made up of a team of young and enterprising people who are always available to our delivery people, whether it is education depending on the platform on which they work, administration or field trips.",
    aboutUsPageWelcomeHeader: "The most reliable food delivery partner",
    aboutUsPageWelcomeText:
      "Reve delivery is the leading Croatian partner for the Wolt and Glovo platforms. Our cooperation with Wolt has been going on since December 7, 2018, and today we are the first in terms of active suppliers for this platform. We have been growing continuously for 3 years. We operate in over 10 cities throughout the Republic of Croatia: Zagreb, Rijeka, Osijek, etc. We have our own fleet of various vehicles available to our suppliers. More than 300 satisfied suppliers are the best indicator of our reliable and safe working environment.",
    aboutUsPageOurTeamHeader: "MEET OUR TEAM",
    weAreReveHeader: "WE ARE REVE",
    weAreReveFirstBoxHeader: "PRIZE GAMES",
    weAreReveFirstBoxText:
      "We are never bored, and this can be confirmed by our suppliers for whom we regularly organise sweepstakes to further motivate them and show them that we appreciate their work. All Reve delivery people can take part in the prize games, so hurry up, register and play with us!",
    weAreReveSecondBoxHeader: "EDUCATION",
    weAreReveSecondBoxText:
      "The team of Reve delivery managers always makes sure that our suppliers are educated about the platform through which they deliver. That is why we hold trainings in which we introduce them to the way the platform works, and as the platforms change, so do we want all our employees to always be up to date with innovations.",

    // BUTTONS

    contactUsButton: "Contact us",
    signUpButton: "SIGN UP",

    // ENGLISH LINKS

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
  },
  hr: {
    // CONTENT

    aboutUsPageHeroSectionHeader: "REVE DOSATAVA",
    aboutUsPageHeroSectionText:
      "Reve dostavu čini tim mladih i poduzetnih ljudi koji su našim dostavljačima uvijek na raspolaganju bilo da se radi o edukaciji ovisno o platformi na kojoj rade, administraciji ili izlascima na teren.",
    aboutUsPageWelcomeHeader: "Najpouzdaniji partner za dostavu hrane",
    aboutUsPageWelcomeText:
      "Reve dostava je vodeći hrvatski partner za platforme Wolt i Glovo. Naša suradnja s Woltom traje od 07.12.2018., a danas smo prvi po aktivnim dostavljačima za navedenu platformu. Već 3 godine kontinuirano rastemo. Djelujemo u preko 10 gradova diljem Republike Hrvatske: Zagreb, Rijeka, Osijek itd. Posjedujemo vlastitu flotu različitih vozila koja su na raspolaganju našim dostavljačima. Više od 300 zadovoljnih dostavljača najbolji su pokazatelj našeg pouzdanog i sigurnog radnog okruženja.",
    aboutUsPageOurTeamHeader: "UPOZNAJ NAŠ TIM",
    weAreReveHeader: "MI SMO REVE",
    weAreReveFirstBoxHeader: "NAGRADNE IGRE",
    weAreReveFirstBoxText:
      "Kod nas nikada nije dosadno, a to mogu potvrditi i naši dostavljači za koje redovito organiziramo nagradne igre kako bismo ih dodatno motivirali i pokazali im da cijenimo njihov rad. U nagradnim igrama mogu sudjelovati svi dostavljači Reve dostave tako da požuri sa prijavom i igraj se s nama!",
    weAreReveSecondBoxHeader: "EDUKACIJE",
    weAreReveSecondBoxText:
      "Tim voditelja Reve dostave uvijek vodi računa o tome da naši dostavljači budu educirani o platformi preko koje dostavljaju. Zato održavamo edukacije u kojima ih uvodimo u sam način rada platforme, a kako se platforme mijenjaju, tako i mi želimo da svi naši zaposlenici uvijek budu u toku s novitetima.",

    // BUTTONS

    contactUsButton: "Kontaktiraj nas",
    signUpButton: "PRIJAVI SE",

    // LINKS

    homePageLink: "Početna",
    aboutUsPageLink: "O nama",
    contactUsPageLink: "Kontakti",
    vehicleFleetPageLink: "Vozni park",
    signUpPageLink: "Prijavi se",
    rulesOfProcedurePage: "Pravilnik o radu",
    privacyPolicyPage: "Pravila Privatnosti",

    // SIGN UP FORM

    signUpName: "Ime i Prezime",
    signUpPhone: "Mobitel",
    signUpMessage: "Poruka",
  },
};

// Check if a hash value exists in the URL
// Set the content of the webpage
// depending on the hash value

if (sessionStorage.getItem("lang") == "eng") {
  languageList.innerHTML =
    '<li class="active-lang" onClick="changeLanguage(\'eng\')"><a href="#" class="eng">English</a></li><li onClick="changeLanguage(\'hr\')"><a href="#" class="hr">Croatian</a></li>';

  // Content

  aboutUsPageHeroSectionHeader.textContent =
    language.eng.aboutUsPageHeroSectionHeader;

  aboutUsPageHeroSectionText.textContent =
    language.eng.aboutUsPageHeroSectionText;

  aboutUsPageWelcomeHeader.textContent = language.eng.aboutUsPageWelcomeHeader;

  aboutUsPageWelcomeText.textContent = language.eng.aboutUsPageWelcomeText;

  aboutUsPageOurTeamHeader.textContent = language.eng.aboutUsPageOurTeamHeader;

  weAreReveHeader.textContent = language.eng.weAreReveHeader;

  weAreReveFirstBoxHeader.textContent = language.eng.weAreReveFirstBoxHeader;

  weAreReveFirstBoxText.textContent = language.eng.weAreReveFirstBoxText;

  weAreReveSecondBoxHeader.textContent = language.eng.weAreReveSecondBoxHeader;

  weAreReveSecondBoxText.textContent = language.eng.weAreReveSecondBoxText;

  signUpPageHeader.textContent = language.eng.signUpPageHeader;

  signUpPageSubHeader.textContent = language.eng.signUpPageSubHeader;

  /// Buttons

  contactUsButton.forEach(
    (contactUsButton) =>
      (contactUsButton.textContent = language.eng.contactUsButton)
  );

  signUpButton.forEach(
    (signUpButton) => (signUpButton.textContent = language.eng.signUpButton)
  );

  /// Links

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

  ///  CONTACT FORM TEXT

  signUpName.placeholder = language.eng.signUpName;

  signUpMessage.placeholder = language.eng.signUpMessage;

  signUpPhone.placeholder = language.eng.signUpPhone;
} else {
  languageList.innerHTML =
    '<li class="active-lang" onClick="changeLanguage(\'hr\')"><a href="#" class="hr">Croatian</a></li> <li  onClick="changeLanguage(\'eng\')"><a href="#" class="eng">English</a></li>';
}
