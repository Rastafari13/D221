function numberHelpRequest() {
    async function fetchAsync() {
        const response = await fetch('https://23c6902811494393ad2cea6ff8f72d75.vfs.cloud9.us-east-1.amazonaws.com/numberHelp/');
        const helps = await response.json();
        let help = helps.map(el => Object.values(el));
        document.getElementById("urgente").innerHTML = help;
    }
    //chama a função fetchAsync()
    fetchAsync().then(data => console.log("ok")).catch(reason => console.log(reason.message));
};

function numberPendReq() {
    async function fetchAsync() {

        const response = await fetch('https://23c6902811494393ad2cea6ff8f72d75.vfs.cloud9.us-east-1.amazonaws.com/numberPendingReq/');
        const pendingReqs = await response.json();
        let pendingReq = pendingReqs.map(el => Object.values(el));
        document.getElementById("req-pend").innerHTML = pendingReq;
        localStorage.setItem("pendingReq", pendingReq);
    }
    //chama a função fetchAsync()
    fetchAsync().then(data => console.log("ok")).catch(reason => console.log(reason.message));

};

function numberTratReq() {
    async function fetchAsync() {

        const response = await fetch('https://23c6902811494393ad2cea6ff8f72d75.vfs.cloud9.us-east-1.amazonaws.com/numberTratReq/');
        const tratReqs = await response.json();
        let tratReq = tratReqs.map(el => Object.values(el));
        localStorage.setItem("tratReq", tratReq);

    }
    //chama a função fetchAsync()
    fetchAsync().then(data => console.log("ok")).catch(reason => console.log(reason.message));

};

function numberTotalReq() {
    async function fetchAsync() {

        const response = await fetch('https://23c6902811494393ad2cea6ff8f72d75.vfs.cloud9.us-east-1.amazonaws.com/numberTotalReq/');
        const totalReqs = await response.json();
        let totalReq = totalReqs.map(el => Object.values(el));
        localStorage.setItem("totalReq", totalReq);

    }
    //chama a função fetchAsync()
    fetchAsync().then(data => console.log("ok")).catch(reason => console.log(reason.message));

};

function numberOccAct() {
    async function fetchAsync() {

        const response = await fetch('https://23c6902811494393ad2cea6ff8f72d75.vfs.cloud9.us-east-1.amazonaws.com/numberOccAct/');
        const occurs = await response.json();
        let occAct = occurs.map(el => Object.values(el));

        localStorage.setItem("occAct", occAct);

        document.getElementById("occ-act").innerHTML = occAct;
    }
    //chama a função fetchAsync()
    fetchAsync().then(data => console.log("ok")).catch(reason => console.log(reason.message));
};


function numberOccFin() {
    async function fetchAsync() {

        const response = await fetch('https://23c6902811494393ad2cea6ff8f72d75.vfs.cloud9.us-east-1.amazonaws.com/numberOccFin/');
        const occurs = await response.json();

        let occFin = occurs.map(el => Object.values(el));
        localStorage.setItem("occFin", occFin);


    }
    //chama a função fetchAsync()
    fetchAsync().then(data => console.log("ok")).catch(reason => console.log(reason.message));
};


function numberOccTotal() {
    async function fetchAsync() {

        const response = await fetch('https://23c6902811494393ad2cea6ff8f72d75.vfs.cloud9.us-east-1.amazonaws.com/numberOccTotal/');
        const occurs = await response.json();

        let occTotal = occurs.map(el => Object.values(el));
        localStorage.setItem("occTotal", occTotal);

    }
    //chama a função fetchAsync()
    fetchAsync().then(data => console.log("ok")).catch(reason => console.log(reason.message));
};


window.onload = numberHelpRequest(), numberOccAct(), numberPendReq(), numberTratReq(), numberTotalReq(), numberOccFin(), numberOccTotal();


google.charts.load("current", { packages: ['corechart'] });
google.charts.setOnLoadCallback(drawChart1);

function drawChart1() {
    let pendingReq = localStorage.pendingReq;
    const numberPendReq = parseInt(pendingReq);

    let tratReq = localStorage.tratReq;
    const numberTratReq = parseInt(tratReq);

    let totalReq = localStorage.totalReq;
    const numberTotalReq = parseInt(totalReq);

    var data = google.visualization.arrayToDataTable([
        ["Element", "Pedidos", { role: "style" }],
        ["Pendentes", numberPendReq, "#9A031E"],
        ["Tratados", numberTratReq, "#E36414"],
        ["Totais", numberTotalReq, "#FECF3E"],
    ]);

    var view = new google.visualization.DataView(data);
    view.setColumns([0, 1,
        {

            calc: "stringify",
            sourceColumn: 1,
            type: "string",
            role: "annotation"
        },
        2
    ]);

    var options = {
        width: 600,
        height: 450,
        bar: { groupWidth: "90%" },
        legend: { position: "none" },
        display: "block !important",
        position: "absolute",
        "min-width": 600,
        "max-width": 600,
        "margin-left": "-30px"



    };
    var chart = new google.visualization.ColumnChart(document.getElementById("columnchart_values1"));
    chart.draw(view, options);
}

google.charts.load("current", { packages: ['corechart'] });
google.charts.setOnLoadCallback(drawChart2);

function drawChart2() {

    let occAct = localStorage.occAct;
    const numberOccAct = parseInt(occAct);

    let occFin = localStorage.occFin;
    const numberOccFin = parseInt(occFin);

    let totalOcc = localStorage.occTotal;
    const numberTotalOcc = parseInt(totalOcc);

    var data = google.visualization.arrayToDataTable([
        ["Element", "Ocorrências", { role: "style" }],
        ["Em curso", numberOccAct, "#9A031E"],
        ["Concluidas", numberOccFin, "#E36414"],
        ["Totais", numberTotalOcc, "#FECF3E"],
    ]);

    var view = new google.visualization.DataView(data);
    view.setColumns([0, 1,
        {
            calc: "stringify",
            sourceColumn: 1,
            type: "string",
            role: "annotation"
        },
        2
    ]);

    var options = {
        width: 610,
        height: 450,
        bar: { groupWidth: "90%" },
        legend: { position: "none" },
        display: "block !important",
        position: "absolute !important",
        "min-width": "610px !important",
        "max-width": "610px !important",
        "margin-left": "-30px important"

    };
    var chart = new google.visualization.ColumnChart(document.getElementById("columnchart_values2"));
    chart.draw(view, options);
}
