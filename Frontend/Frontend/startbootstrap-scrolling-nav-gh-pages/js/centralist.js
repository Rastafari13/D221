    $(document).ready(function() {

        let day_conc  = document.getElementById("btn-day");
        let week_conc = document.getElementById("btn-week");
        let month_conc = document.getElementById("btn-month");
        let day_oc = document.getElementById("btn-day");
        let week_oc = document.getElementById("btn-week");
        let month_oc = document.getElementById("btn-month");


        document.getElementById("occo-atc").innerHTML = "10";


        day_conc.onclick = write_day_conc;

        function write_day_conc() {
            document.getElementById("occo-conc").innerHTML = "40";
            document.getElementById("text-write-occ").innerHTML =" O número de ocorrências concluidas hoje foram:";
            document.getElementById("btn-day-con").focus();
            
        }

        week_conc.onclick = write_week_conc;

        function write_week_conc() {
            document.getElementById("occo-conc").innerHTML = "100";
            document.getElementById("text-write-occ").innerHTML =" O número de ocorrências concluidas nesta semana foram:";
            document.getElementById("btn-week-con").focus();
            
        }

        month_conc.onclick = write_month_conc;

        function write_month_conc() {
            document.getElementById("occo-conc").innerHTML = "250";
            document.getElementById("text-write-occ").innerHTML =" O número de ocorrências concluidas neste mês foram:";
            document.getElementById("btn-month-con").focus();
        }
  
    
        day_oc.onclick = write_day_req;

        function write_day_req() {
            document.getElementById("write-req").innerHTML = "10";
            document.getElementById("text-write-req").innerHTML ="O número de pedidos tratados hoje foram:";
            document.getElementById("btn-day").focus();
        }

        week_oc.onclick = write_week_req;

        function write_week_req() {
            document.getElementById("write-req").innerHTML = "50";
            document.getElementById("text-write-req").innerHTML ="O número de pedidos tratados esta semana foram:";
            document.getElementById("btn-week").focus();
        }

        month_oc.onclick = write_month_req;

        function write_month_req() {
            document.getElementById("write-req").innerHTML = "89";
            document.getElementById("text-write-req").innerHTML ="O número de pedidos tratados este mês foram:";
            document.getElementById("btn-month").focus();
        }
  
    })  