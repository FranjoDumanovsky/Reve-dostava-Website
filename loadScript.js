window.addEventListener("load", function () {
const mainScript = document.createElement("script");
const formScript = document.createElement("script");
const locScript = document.createElement("script");
const prijavaScript = document.createElement("script");
mainScript.src = "script.js";
formScript.src = "form.js";
locScript.src = "location.js";
prijavaScript.src = "prijava.js";
document.body.appendChild(mainScript);
document.body.appendChild(formScript);
document.body.appendChild(locScript);
document.body.appendChild(prijavaScript);
});