
    
    window.onload = function() {

        

        if (sessionStorage.getItem('lang') === "#eng") {
            window.location.hash = "#eng";

        } else {
            window.location.hash = "#hr";
            location.reload();

        }
    }
    
    
