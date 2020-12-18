//EDITAR MORADA OPERACIONAL//
(function($) {
  "use strict";
  // Start of use strict
  $(document).ready(function() {
$(".select2").select2();
})

    
})(jQuery);
let viewocc_vehicles = document.getElementById("occu-edit-vehicle");
viewocc_vehicles.onclick = viewcc_vehicles_edit;

function viewcc_vehicles_edit(){
    document.getElementById("idSelect2").disabled = false;
}

//EDITAR TELEFONE OCORRÊNCIA//
let occu_phone = document.getElementById("occu-edit-phone");
occu_phone.onclick = occu_phone_edit;

function occu_phone_edit() {
    document.getElementById("viewoc-phone").disabled = false;
}