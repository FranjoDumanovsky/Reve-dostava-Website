window.addEventListener("DOMContentLoaded", function(){

    // get the form elements defined in your form HTML 

    var form = document.querySelector(".prijava__form");
   // var button = document.querySelector("#signButton");
    var status = document.querySelector("#statusPrijave");
   

    // Succes and Error Functions for after the form is submited

    function success () {
        form.reset();
        status.classList.add("success");
        status.innerHTML = "Thanks!";
    }

    function error () {
        status.classList.add("error");
        status.innerHTML = "Oops! There was a problem.";
    }

    //handles the form submition event

    form.addEventListener("submit", function(ev) {
        ev.preventDefault();
        var data = new FormData(form);
        ajax(form.method, form.action, data, success, error);
        }); 
    });


    // helper function for sending an AJAX request

    function ajax(method, url, data, success, error) {
        var xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = function () {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                success(xhr.response, xhr.responseType);
            } else {
                error(xhr.status, xhr.response, xhr.responseType);
            }
        };
        xhr.send(data);
    }
    



    // E-mail validation

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");


    form.addEventListener("submit", function(ev) {
            if (name.value === "" || name.value == null) {
                status.classList.add("error");
                status.innerHTML = "Name is required";
            }

            if (email.length > 5 && email.includes('@') && email.includes(".")) {
                status.classList.add("success");
                status.innerHTML = "Thanks!";
                
            } else {
                status.classList.add("error");
                status.innerHTML = "Email is wrong"; 
            }

            if (message.length > 0) {
                ev.preventDefault()
                status.classList.add("error");
                status.innerHTML = "Message must be longer than 5 letters.";
            }
        }); 