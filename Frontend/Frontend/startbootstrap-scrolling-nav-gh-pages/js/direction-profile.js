//EDITAR PALAVRA PASSE DIRETOR//
let dir_ps = document.getElementById("dir-edit-ps");
dir_ps.onclick = dir_ps_edit;

function dir_ps_edit() {
    window.location.replace("edit-password.html")
}

//EDITAR MORADA DIRETOR//
let dir_adress = document.getElementById("dir-edit-adress");
dir_adress.onclick = dir_adress_edit;

function dir_adress_edit() {
    document.getElementById("pd-adress").disabled = false;
}
//EDITAR TELEFONE DIRETOR//
let dir_phone = document.getElementById("dir-edit-phone");
dir_phone.onclick = dir_phone_edit;

function dir_phone_edit() {
    document.getElementById("pd-phone").disabled = false;
}

//EDITAR EMAIL DIRETOR//
let dir_email = document.getElementById("dir-edit-email");
dir_email.onclick = dir_email_edit;

function dir_email_edit() {
    document.getElementById("pd-email").disabled = false;
}
 
    (function($) {
    "use strict";
   $(document).ready(function() {
    // Add active state to sidbar nav links
    var path = window.location.href; // because the 'href' property of the DOM element is the absolute path
        $("#layoutSidenav_nav .sb-sidenav a.nav-link").each(function() {
            if (this.href === path) {
                $(this).addClass("active");
            }
        });

    // Toggle the side navigation
    $("#sidebarToggle").on("click", function(e) {
        e.preventDefault();
        $("body").toggleClass("sb-sidenav-toggled");
    });
    
   })
})(jQuery);
