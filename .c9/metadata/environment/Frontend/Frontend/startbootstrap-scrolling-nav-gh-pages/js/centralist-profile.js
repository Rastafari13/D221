{"filter":false,"title":"centralist-profile.js","tooltip":"/Frontend/Frontend/startbootstrap-scrolling-nav-gh-pages/js/centralist-profile.js","ace":{"folds":[],"scrolltop":1,"scrollleft":0,"selection":{"start":{"row":5,"column":4},"end":{"row":5,"column":28},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":57,"state":"start","mode":"ace/mode/javascript"}},"hash":"816e1a9975302bccebc1dbace8dfedc29abf8237","undoManager":{"mark":63,"position":63,"stack":[[{"start":{"row":41,"column":2},"end":{"row":42,"column":0},"action":"insert","lines":["",""],"id":2},{"start":{"row":42,"column":0},"end":{"row":42,"column":1},"action":"insert","lines":[" "]},{"start":{"row":42,"column":1},"end":{"row":43,"column":0},"action":"insert","lines":["",""]},{"start":{"row":43,"column":0},"end":{"row":43,"column":1},"action":"insert","lines":[" "]}],[{"start":{"row":43,"column":1},"end":{"row":51,"column":11},"action":"insert","lines":["(function($) {","  \"use strict\";","  // Start of use strict","  $(document).ready(function() {","$(\".select2\").select2();","})","","    ","})(jQuery);"],"id":3}],[{"start":{"row":47,"column":0},"end":{"row":47,"column":24},"action":"remove","lines":["$(\".select2\").select2();"],"id":4}],[{"start":{"row":47,"column":0},"end":{"row":57,"column":2},"action":"insert","lines":[" function showThumbnail(filess) {","     var url = filess.value;","     var ext = url.substring(url.lastIndexOf('.') + 1).toLowerCase();","     if (filess.files && filess.files[0] && (ext == \"gif\" || ext == \"png\" || ext == \"jpeg\" || ext == \"jpg\")) {","         var reader = new FileReader();","         reader.onload = function(e) {","             document.getElementById('photo-profile').setAttribute('src', e.target.result);","         }","         reader.readAsDataURL(filess.files[0]);","     }"," }"],"id":5}],[{"start":{"row":46,"column":32},"end":{"row":47,"column":0},"action":"insert","lines":["",""],"id":6},{"start":{"row":47,"column":0},"end":{"row":47,"column":6},"action":"insert","lines":["      "]}],[{"start":{"row":30,"column":0},"end":{"row":41,"column":2},"action":"remove","lines":[" //está a dar mal :( "," function showThumbnail(filess) {","     var url = filess.value;","     var ext = url.substring(url.lastIndexOf('.') + 1).toLowerCase();","     if (filess.files && filess.files[0] && (ext == \"gif\" || ext == \"png\" || ext == \"jpeg\" || ext == \"jpg\")) {","         var reader = new FileReader();","         reader.onload = function(e) {","             document.getElementById('photo-profile').setAttribute('src', e.target.result);","         }","         reader.readAsDataURL(filess.files[0]);","     }"," }"],"id":7},{"start":{"row":29,"column":1},"end":{"row":30,"column":0},"action":"remove","lines":["",""]},{"start":{"row":29,"column":0},"end":{"row":29,"column":1},"action":"remove","lines":[" "]},{"start":{"row":28,"column":2},"end":{"row":29,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":35,"column":0},"end":{"row":45,"column":2},"action":"remove","lines":[" function showThumbnail(filess) {","     var url = filess.value;","     var ext = url.substring(url.lastIndexOf('.') + 1).toLowerCase();","     if (filess.files && filess.files[0] && (ext == \"gif\" || ext == \"png\" || ext == \"jpeg\" || ext == \"jpg\")) {","         var reader = new FileReader();","         reader.onload = function(e) {","             document.getElementById('photo-profile').setAttribute('src', e.target.result);","         }","         reader.readAsDataURL(filess.files[0]);","     }"," }"],"id":9},{"start":{"row":34,"column":6},"end":{"row":35,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":38,"column":11},"end":{"row":39,"column":0},"action":"insert","lines":["",""],"id":10},{"start":{"row":39,"column":0},"end":{"row":40,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":40,"column":0},"end":{"row":58,"column":11},"action":"insert","lines":["    (function($) {","    \"use strict\";","","    // Add active state to sidbar nav links","    var path = window.location.href; // because the 'href' property of the DOM element is the absolute path","        $(\"#layoutSidenav_nav .sb-sidenav a.nav-link\").each(function() {","            if (this.href === path) {","                $(this).addClass(\"active\");","            }","        });","","    // Toggle the side navigation","    $(\"#sidebarToggle\").on(\"click\", function(e) {","        e.preventDefault();","        $(\"body\").toggleClass(\"sb-sidenav-toggled\");","    });","    ","  ","})(jQuery);"],"id":11}],[{"start":{"row":42,"column":0},"end":{"row":42,"column":1},"action":"insert","lines":[" "],"id":12}],[{"start":{"row":42,"column":1},"end":{"row":42,"column":2},"action":"insert","lines":[" "],"id":13}],[{"start":{"row":42,"column":2},"end":{"row":42,"column":32},"action":"insert","lines":["$(document).ready(function() {"],"id":14}],[{"start":{"row":56,"column":3},"end":{"row":56,"column":5},"action":"insert","lines":["})"],"id":15},{"start":{"row":56,"column":0},"end":{"row":56,"column":3},"action":"remove","lines":["   "]},{"start":{"row":56,"column":0},"end":{"row":56,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":30,"column":0},"end":{"row":38,"column":11},"action":"remove","lines":[" (function($) {","  \"use strict\";","  // Start of use strict","  $(document).ready(function() {","      ","})","","    ","})(jQuery);"],"id":16},{"start":{"row":29,"column":1},"end":{"row":30,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":47,"column":0},"end":{"row":47,"column":5},"action":"remove","lines":["  }) "],"id":17},{"start":{"row":46,"column":7},"end":{"row":47,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":33,"column":0},"end":{"row":33,"column":32},"action":"remove","lines":["  $(document).ready(function() {"],"id":18},{"start":{"row":32,"column":17},"end":{"row":33,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":0,"column":0},"end":{"row":29,"column":1},"action":"remove","lines":["let cent_ps = document.getElementById(\"cent-edit-ps\");","cent_ps.onclick = cent_ps_edit;","","function cent_ps_edit(){","    window.location.replace(\"edit-password.html\")","}",""," //EDITAR MORADA CENTRALISTA//"," let cent_adress = document.getElementById(\"cent-edit-adress\");"," cent_adress.onclick = cent_adress_edit;",""," function cent_adress_edit() {","     document.getElementById(\"pc-adress\").disabled = false;"," }"," //EDITAR TELEFONE CENTRALISTA//"," let cent_phone = document.getElementById(\"cent-edit-phone\");"," cent_phone.onclick = cent_phone_edit;",""," function cent_phone_edit() {","     document.getElementById(\"pc-phone\").disabled = false;"," }",""," //EDITAR EMAIL CENTRALISTA//"," let cent_email = document.getElementById(\"cent-edit-email\");"," cent_email.onclick = cent_email_edit;",""," function cent_email_edit() {","     document.getElementById(\"pc-email\").disabled = false;"," }"," "],"id":19},{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"remove","lines":["",""],"id":20}],[{"start":{"row":14,"column":7},"end":{"row":15,"column":0},"action":"insert","lines":["",""],"id":21},{"start":{"row":15,"column":0},"end":{"row":15,"column":4},"action":"insert","lines":["    "]},{"start":{"row":15,"column":4},"end":{"row":16,"column":0},"action":"insert","lines":["",""]},{"start":{"row":16,"column":0},"end":{"row":16,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":16,"column":4},"end":{"row":45,"column":1},"action":"insert","lines":["let cent_ps = document.getElementById(\"cent-edit-ps\");","cent_ps.onclick = cent_ps_edit;","","function cent_ps_edit(){","    window.location.replace(\"edit-password.html\")","}",""," //EDITAR MORADA CENTRALISTA//"," let cent_adress = document.getElementById(\"cent-edit-adress\");"," cent_adress.onclick = cent_adress_edit;",""," function cent_adress_edit() {","     document.getElementById(\"pc-adress\").disabled = false;"," }"," //EDITAR TELEFONE CENTRALISTA//"," let cent_phone = document.getElementById(\"cent-edit-phone\");"," cent_phone.onclick = cent_phone_edit;",""," function cent_phone_edit() {","     document.getElementById(\"pc-phone\").disabled = false;"," }",""," //EDITAR EMAIL CENTRALISTA//"," let cent_email = document.getElementById(\"cent-edit-email\");"," cent_email.onclick = cent_email_edit;",""," function cent_email_edit() {","     document.getElementById(\"pc-email\").disabled = false;"," }"," "],"id":22}],[{"start":{"row":16,"column":0},"end":{"row":44,"column":2},"action":"remove","lines":["    let cent_ps = document.getElementById(\"cent-edit-ps\");","cent_ps.onclick = cent_ps_edit;","","function cent_ps_edit(){","    window.location.replace(\"edit-password.html\")","}",""," //EDITAR MORADA CENTRALISTA//"," let cent_adress = document.getElementById(\"cent-edit-adress\");"," cent_adress.onclick = cent_adress_edit;",""," function cent_adress_edit() {","     document.getElementById(\"pc-adress\").disabled = false;"," }"," //EDITAR TELEFONE CENTRALISTA//"," let cent_phone = document.getElementById(\"cent-edit-phone\");"," cent_phone.onclick = cent_phone_edit;",""," function cent_phone_edit() {","     document.getElementById(\"pc-phone\").disabled = false;"," }",""," //EDITAR EMAIL CENTRALISTA//"," let cent_email = document.getElementById(\"cent-edit-email\");"," cent_email.onclick = cent_email_edit;",""," function cent_email_edit() {","     document.getElementById(\"pc-email\").disabled = false;"," }"],"id":23},{"start":{"row":15,"column":4},"end":{"row":16,"column":0},"action":"remove","lines":["",""]},{"start":{"row":15,"column":3},"end":{"row":15,"column":4},"action":"remove","lines":[" "]},{"start":{"row":15,"column":2},"end":{"row":15,"column":3},"action":"remove","lines":[" "]},{"start":{"row":15,"column":1},"end":{"row":15,"column":2},"action":"remove","lines":[" "]}],[{"start":{"row":15,"column":0},"end":{"row":15,"column":1},"action":"remove","lines":[" "],"id":24},{"start":{"row":14,"column":7},"end":{"row":15,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":15,"column":0},"end":{"row":15,"column":1},"action":"remove","lines":[" "],"id":25},{"start":{"row":14,"column":7},"end":{"row":15,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":16,"column":11},"end":{"row":17,"column":0},"action":"insert","lines":["",""],"id":26},{"start":{"row":17,"column":0},"end":{"row":18,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":18,"column":0},"end":{"row":46,"column":2},"action":"insert","lines":["    let cent_ps = document.getElementById(\"cent-edit-ps\");","cent_ps.onclick = cent_ps_edit;","","function cent_ps_edit(){","    window.location.replace(\"edit-password.html\")","}",""," //EDITAR MORADA CENTRALISTA//"," let cent_adress = document.getElementById(\"cent-edit-adress\");"," cent_adress.onclick = cent_adress_edit;",""," function cent_adress_edit() {","     document.getElementById(\"pc-adress\").disabled = false;"," }"," //EDITAR TELEFONE CENTRALISTA//"," let cent_phone = document.getElementById(\"cent-edit-phone\");"," cent_phone.onclick = cent_phone_edit;",""," function cent_phone_edit() {","     document.getElementById(\"pc-phone\").disabled = false;"," }",""," //EDITAR EMAIL CENTRALISTA//"," let cent_email = document.getElementById(\"cent-edit-email\");"," cent_email.onclick = cent_email_edit;",""," function cent_email_edit() {","     document.getElementById(\"pc-email\").disabled = false;"," }"],"id":27}],[{"start":{"row":0,"column":0},"end":{"row":16,"column":11},"action":"remove","lines":["    (function($) {","    \"use strict\";","    // Add active state to sidbar nav links","    var path = window.location.href; // because the 'href' property of the DOM element is the absolute path","        $(\"#layoutSidenav_nav .sb-sidenav a.nav-link\").each(function() {","            if (this.href === path) {","                $(this).addClass(\"active\");","            }","        });","","    // Toggle the side navigation","    $(\"#sidebarToggle\").on(\"click\", function(e) {","        e.preventDefault();","        $(\"body\").toggleClass(\"sb-sidenav-toggled\");","    });","  ","})(jQuery);"],"id":28},{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":29,"column":2},"end":{"row":30,"column":0},"action":"insert","lines":["",""],"id":29},{"start":{"row":30,"column":0},"end":{"row":30,"column":1},"action":"insert","lines":[" "]},{"start":{"row":30,"column":1},"end":{"row":31,"column":0},"action":"insert","lines":["",""]},{"start":{"row":31,"column":0},"end":{"row":31,"column":1},"action":"insert","lines":[" "]}],[{"start":{"row":31,"column":1},"end":{"row":49,"column":11},"action":"insert","lines":["    (function($) {","    \"use strict\";","","    // Add active state to sidbar nav links","    var path = window.location.href; // because the 'href' property of the DOM element is the absolute path","        $(\"#layoutSidenav_nav .sb-sidenav a.nav-link\").each(function() {","            if (this.href === path) {","                $(this).addClass(\"active\");","            }","        });","","    // Toggle the side navigation","    $(\"#sidebarToggle\").on(\"click\", function(e) {","        e.preventDefault();","        $(\"body\").toggleClass(\"sb-sidenav-toggled\");","    });","    ","  ","})(jQuery);"],"id":30}],[{"start":{"row":1,"column":3},"end":{"row":1,"column":4},"action":"remove","lines":[" "],"id":31},{"start":{"row":1,"column":2},"end":{"row":1,"column":3},"action":"remove","lines":[" "]}],[{"start":{"row":1,"column":1},"end":{"row":1,"column":2},"action":"remove","lines":[" "],"id":32}],[{"start":{"row":0,"column":0},"end":{"row":0,"column":1},"action":"insert","lines":["/"],"id":33},{"start":{"row":0,"column":1},"end":{"row":0,"column":2},"action":"insert","lines":["/"]},{"start":{"row":0,"column":2},"end":{"row":0,"column":3},"action":"insert","lines":["E"]},{"start":{"row":0,"column":3},"end":{"row":0,"column":4},"action":"insert","lines":["d"]}],[{"start":{"row":0,"column":3},"end":{"row":0,"column":4},"action":"remove","lines":["d"],"id":34}],[{"start":{"row":0,"column":3},"end":{"row":0,"column":4},"action":"insert","lines":["D"],"id":35},{"start":{"row":0,"column":4},"end":{"row":0,"column":5},"action":"insert","lines":["I"]},{"start":{"row":0,"column":5},"end":{"row":0,"column":6},"action":"insert","lines":["T"]},{"start":{"row":0,"column":6},"end":{"row":0,"column":7},"action":"insert","lines":["A"]},{"start":{"row":0,"column":7},"end":{"row":0,"column":8},"action":"insert","lines":["R"]}],[{"start":{"row":0,"column":8},"end":{"row":0,"column":9},"action":"insert","lines":[" "],"id":36},{"start":{"row":0,"column":9},"end":{"row":0,"column":10},"action":"insert","lines":["P"]},{"start":{"row":0,"column":10},"end":{"row":0,"column":11},"action":"insert","lines":["S"]}],[{"start":{"row":0,"column":11},"end":{"row":0,"column":12},"action":"insert","lines":[" "],"id":37}],[{"start":{"row":0,"column":11},"end":{"row":0,"column":12},"action":"remove","lines":[" "],"id":38},{"start":{"row":0,"column":10},"end":{"row":0,"column":11},"action":"remove","lines":["S"]}],[{"start":{"row":0,"column":10},"end":{"row":0,"column":11},"action":"insert","lines":["A"],"id":39},{"start":{"row":0,"column":11},"end":{"row":0,"column":12},"action":"insert","lines":["L"]},{"start":{"row":0,"column":12},"end":{"row":0,"column":13},"action":"insert","lines":["A"]},{"start":{"row":0,"column":13},"end":{"row":0,"column":14},"action":"insert","lines":["V"]},{"start":{"row":0,"column":14},"end":{"row":0,"column":15},"action":"insert","lines":["R"]},{"start":{"row":0,"column":15},"end":{"row":0,"column":16},"action":"insert","lines":["A"]}],[{"start":{"row":0,"column":16},"end":{"row":0,"column":17},"action":"insert","lines":[" "],"id":40},{"start":{"row":0,"column":17},"end":{"row":0,"column":18},"action":"insert","lines":["P"]},{"start":{"row":0,"column":18},"end":{"row":0,"column":19},"action":"insert","lines":["A"]},{"start":{"row":0,"column":19},"end":{"row":0,"column":20},"action":"insert","lines":["S"]},{"start":{"row":0,"column":20},"end":{"row":0,"column":21},"action":"insert","lines":["S"]},{"start":{"row":0,"column":21},"end":{"row":0,"column":22},"action":"insert","lines":["E"]}],[{"start":{"row":0,"column":22},"end":{"row":0,"column":23},"action":"insert","lines":[" "],"id":41},{"start":{"row":0,"column":23},"end":{"row":0,"column":24},"action":"insert","lines":["C"]},{"start":{"row":0,"column":24},"end":{"row":0,"column":25},"action":"insert","lines":["E"]},{"start":{"row":0,"column":25},"end":{"row":0,"column":26},"action":"insert","lines":["N"]},{"start":{"row":0,"column":26},"end":{"row":0,"column":27},"action":"insert","lines":["T"]},{"start":{"row":0,"column":27},"end":{"row":0,"column":28},"action":"insert","lines":["R"]},{"start":{"row":0,"column":28},"end":{"row":0,"column":29},"action":"insert","lines":["A"]},{"start":{"row":0,"column":29},"end":{"row":0,"column":30},"action":"insert","lines":["L"]},{"start":{"row":0,"column":30},"end":{"row":0,"column":31},"action":"insert","lines":["I"]},{"start":{"row":0,"column":31},"end":{"row":0,"column":32},"action":"insert","lines":["S"]},{"start":{"row":0,"column":32},"end":{"row":0,"column":33},"action":"insert","lines":["T"]},{"start":{"row":0,"column":33},"end":{"row":0,"column":34},"action":"insert","lines":["A"]}],[{"start":{"row":0,"column":34},"end":{"row":0,"column":35},"action":"insert","lines":["/"],"id":42},{"start":{"row":0,"column":35},"end":{"row":0,"column":36},"action":"insert","lines":["/"]}],[{"start":{"row":33,"column":0},"end":{"row":33,"column":1},"action":"insert","lines":[" "],"id":43}],[{"start":{"row":33,"column":1},"end":{"row":33,"column":2},"action":"insert","lines":[" "],"id":44}],[{"start":{"row":33,"column":2},"end":{"row":33,"column":3},"action":"insert","lines":[" "],"id":45}],[{"start":{"row":33,"column":3},"end":{"row":33,"column":33},"action":"insert","lines":["$(document).ready(function() {"],"id":46}],[{"start":{"row":47,"column":4},"end":{"row":47,"column":5},"action":"insert","lines":[")"],"id":47}],[{"start":{"row":47,"column":4},"end":{"row":47,"column":5},"action":"remove","lines":[")"],"id":48}],[{"start":{"row":47,"column":4},"end":{"row":47,"column":5},"action":"insert","lines":["="],"id":49}],[{"start":{"row":47,"column":4},"end":{"row":47,"column":5},"action":"remove","lines":["="],"id":50}],[{"start":{"row":47,"column":4},"end":{"row":47,"column":5},"action":"insert","lines":["}"],"id":51},{"start":{"row":47,"column":0},"end":{"row":47,"column":4},"action":"remove","lines":["    "]},{"start":{"row":47,"column":0},"end":{"row":47,"column":3},"action":"insert","lines":["   "]},{"start":{"row":47,"column":4},"end":{"row":47,"column":5},"action":"insert","lines":[")"]}],[{"start":{"row":31,"column":0},"end":{"row":49,"column":11},"action":"remove","lines":["     (function($) {","    \"use strict\";","   $(document).ready(function() {","    // Add active state to sidbar nav links","    var path = window.location.href; // because the 'href' property of the DOM element is the absolute path","        $(\"#layoutSidenav_nav .sb-sidenav a.nav-link\").each(function() {","            if (this.href === path) {","                $(this).addClass(\"active\");","            }","        });","","    // Toggle the side navigation","    $(\"#sidebarToggle\").on(\"click\", function(e) {","        e.preventDefault();","        $(\"body\").toggleClass(\"sb-sidenav-toggled\");","    });","   })","  ","})(jQuery);"],"id":53}],[{"start":{"row":31,"column":0},"end":{"row":49,"column":11},"action":"insert","lines":["    (function($) {","    \"use strict\";","","    // Add active state to sidbar nav links","    var path = window.location.href; // because the 'href' property of the DOM element is the absolute path","        $(\"#layoutSidenav_nav .sb-sidenav a.nav-link\").each(function() {","            if (this.href === path) {","                $(this).addClass(\"active\");","            }","        });","","    // Toggle the side navigation","    $(\"#sidebarToggle\").on(\"click\", function(e) {","        e.preventDefault();","        $(\"body\").toggleClass(\"sb-sidenav-toggled\");","    });","    ","  ","})(jQuery);"],"id":54}],[{"start":{"row":33,"column":0},"end":{"row":33,"column":1},"action":"insert","lines":[" "],"id":55}],[{"start":{"row":33,"column":1},"end":{"row":33,"column":2},"action":"insert","lines":[" "],"id":56}],[{"start":{"row":33,"column":2},"end":{"row":33,"column":3},"action":"insert","lines":[" "],"id":57}],[{"start":{"row":33,"column":3},"end":{"row":33,"column":33},"action":"insert","lines":["$(document).ready(function() {"],"id":58}],[{"start":{"row":48,"column":2},"end":{"row":48,"column":3},"action":"insert","lines":["}"],"id":59},{"start":{"row":48,"column":0},"end":{"row":48,"column":2},"action":"remove","lines":["  "]},{"start":{"row":48,"column":0},"end":{"row":48,"column":3},"action":"insert","lines":["   "]}],[{"start":{"row":48,"column":4},"end":{"row":48,"column":5},"action":"insert","lines":[")"],"id":60}],[{"start":{"row":33,"column":33},"end":{"row":34,"column":0},"action":"insert","lines":["",""],"id":61},{"start":{"row":34,"column":0},"end":{"row":34,"column":7},"action":"insert","lines":["       "]},{"start":{"row":34,"column":7},"end":{"row":35,"column":0},"action":"insert","lines":["",""]},{"start":{"row":35,"column":0},"end":{"row":35,"column":7},"action":"insert","lines":["       "]}],[{"start":{"row":35,"column":7},"end":{"row":45,"column":3},"action":"insert","lines":["  function showThumbnail(filess) {","    var url = filess.value;","    var ext = url.substring(url.lastIndexOf('.') + 1).toLowerCase();","    if (filess.files && filess.files[0]&& (ext == \"gif\" || ext == \"png\" || ext == \"jpeg\" || ext == \"jpg\")) {","      var reader = new FileReader();","        reader.onload = function (e) {","          document.getElementById('fotoCapa').setAttribute('src', e.target.result);","      }","      reader.readAsDataURL(filess.files[0]);","    }","  }"],"id":62}],[{"start":{"row":41,"column":35},"end":{"row":41,"column":43},"action":"remove","lines":["fotoCapa"],"id":63}],[{"start":{"row":41,"column":35},"end":{"row":41,"column":49},"action":"insert","lines":["alt-photo-cent"],"id":64}],[{"start":{"row":35,"column":0},"end":{"row":45,"column":3},"action":"remove","lines":["         function showThumbnail(filess) {","    var url = filess.value;","    var ext = url.substring(url.lastIndexOf('.') + 1).toLowerCase();","    if (filess.files && filess.files[0]&& (ext == \"gif\" || ext == \"png\" || ext == \"jpeg\" || ext == \"jpg\")) {","      var reader = new FileReader();","        reader.onload = function (e) {","          document.getElementById('alt-photo-cent').setAttribute('src', e.target.result);","      }","      reader.readAsDataURL(filess.files[0]);","    }","  }"],"id":65},{"start":{"row":34,"column":7},"end":{"row":35,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":29,"column":2},"end":{"row":30,"column":0},"action":"insert","lines":["",""],"id":66},{"start":{"row":30,"column":0},"end":{"row":30,"column":1},"action":"insert","lines":[" "]},{"start":{"row":30,"column":1},"end":{"row":31,"column":0},"action":"insert","lines":["",""]},{"start":{"row":31,"column":0},"end":{"row":31,"column":1},"action":"insert","lines":[" "]}],[{"start":{"row":31,"column":1},"end":{"row":41,"column":3},"action":"insert","lines":["         function showThumbnail(filess) {","    var url = filess.value;","    var ext = url.substring(url.lastIndexOf('.') + 1).toLowerCase();","    if (filess.files && filess.files[0]&& (ext == \"gif\" || ext == \"png\" || ext == \"jpeg\" || ext == \"jpg\")) {","      var reader = new FileReader();","        reader.onload = function (e) {","          document.getElementById('alt-photo-cent').setAttribute('src', e.target.result);","      }","      reader.readAsDataURL(filess.files[0]);","    }","  }"],"id":67}]]},"timestamp":1607731166036}