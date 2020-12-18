//EDITAR PALAVRA PASSE CENTRALISTA//
 let cent_ps = document.getElementById("cent-edit-ps");
cent_ps.onclick = cent_ps_edit;

function cent_ps_edit(){
    window.location.replace("edit-password.html")
}

 //EDITAR MORADA CENTRALISTA//
 let cent_adress = document.getElementById("cent-edit-adress");
 cent_adress.onclick = cent_adress_edit;

 function cent_adress_edit() {
     document.getElementById("pc-adress").disabled = false;
 }
 //EDITAR TELEFONE CENTRALISTA//
 let cent_phone = document.getElementById("cent-edit-phone");
 cent_phone.onclick = cent_phone_edit;

 function cent_phone_edit() {
     document.getElementById("pc-phone").disabled = false;
 }

 //EDITAR EMAIL CENTRALISTA//
 let cent_email = document.getElementById("cent-edit-email");
 cent_email.onclick = cent_email_edit;

 function cent_email_edit() {
     document.getElementById("pc-email").disabled = false;
 }
 
          function showThumbnail(filess) {
    var url = filess.value;
    var ext = url.substring(url.lastIndexOf('.') + 1).toLowerCase();
    if (filess.files && filess.files[0]&& (ext == "gif" || ext == "png" || ext == "jpeg" || ext == "jpg")) {
      var reader = new FileReader();
        reader.onload = function (e) {
          document.getElementById('alt-photo-cent').setAttribute('src', e.target.result);
      }
      reader.readAsDataURL(filess.files[0]);
    }
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