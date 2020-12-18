$(document).ready(function() {

    let first_tri = document.getElementById("btn-1tri");
    let second_tri = document.getElementById("btn-2tri");
    let third_tri = document.getElementById("btn-3tri");
    let fourth_tri = document.getElementById("btn-4tri");

    /*------------QUANTIDADE DE PEDIDOS POR URGÊNCIAS 1 TRIMESTRE-------*/
    google.charts.load('current', { 'packages': ['bar'] });
    google.charts.setOnLoadCallback(drawChart_1tri);


    first_tri.onclick = drawChart_1tri;

    function drawChart_1tri() {
        var data = google.visualization.arrayToDataTable([
            ['Meses', "Urgentes", "Não urgentes", "Total"],
            ['Janeiro', 100, 300, 400],
            ['Fevereiro', 1500, 450, 160],
            ['Março', 550, 1320, 1340],
        ]);

        var options = {
            /* chart: {
               title: 'Quantidade de pedidos por urgência ',
               subtitle: 'por mês',
             },*/
            colors: ['(220,57,18)','(255,153,0)', '(51,102,204)'],
            hAxis: { format: 'decimal' },
            width: "100%",
            height: 250,
            hAxis: { title: 'Meses' },
            vAxis: { format: "" }

        };
        document.getElementById("btn-1tri").focus();
        var chart = new google.charts.Bar(document.getElementById('columnchart_material'));
        chart.draw(data, google.charts.Bar.convertOptions(options));
    }

    /*------------QUANTIDADE DE PEDIDOS POR URGÊNCIAS 2 TRIMESTRE-------*/

    second_tri.onclick = drawChart_2tri;

    function drawChart_2tri() {
        var data = google.visualization.arrayToDataTable([
            ['Meses', "Urgentes", "Não urgentes", "Total"],
            ['Abril', 999, 830, 1637],
            ['Maio', 1028, 729, 3847],
            ['Junho', 930, 1520, 1483],
        ]);


        var options = {
            /* chart: {
               title: 'Quantidade de pedidos por urgência ',
               subtitle: 'por mês',
             },*/
            colors: ['(220,57,18)', '(255,153,0)', '(51,102,204)'],
            hAxis: { format: 'decimal' },
            width: "100%",
            height: 250,
            hAxis: { title: 'Meses' },
            vAxis: { format: "" }

        };

        var chart = new google.charts.Bar(document.getElementById('columnchart_material'));
        document.getElementById("btn-2tri").focus();
        chart.draw(data, google.charts.Bar.convertOptions(options));
    }

    /*------------QUANTIDADE DE PEDIDOS POR URGÊNCIAS 3 TRIMESTRE-------*/

    third_tri.onclick = drawChart_3tri;

    function drawChart_3tri() {
        var data = google.visualization.arrayToDataTable([
            ['Meses', "Urgentes", "Não urgentes", "Total"],
            ['Julho', 1000, 400, 1400],
            ['Agosto', 1100, 460, 1560],
            ['Setembro', 660, 1120, 1780],
        ]);

        var options = {
            /* chart: {
               title: 'Quantidade de pedidos por urgência ',
               subtitle: 'por mês',
             },*/
            colors: ['(220,57,18)','(255,153,0)', '(51,102,204)'],
            hAxis: { format: 'decimal' },
            width: "100%",
            height: 250,
            hAxis: { title: 'Meses' },
            vAxis: { format: "" }

        };

        var chart = new google.charts.Bar(document.getElementById('columnchart_material'));
        document.getElementById("btn-3tri").focus();
        chart.draw(data, google.charts.Bar.convertOptions(options));
    }

    /*------------QUANTIDADE DE PEDIDOS POR URGÊNCIAS 4 TRIMESTRE-------*/
     
    fourth_tri.onclick = drawChart_4tri;

    function drawChart_4tri() {
        var data = google.visualization.arrayToDataTable([
            ['Meses', "Urgentes", "Não urgentes", "Total"],
            ['Outubro', 239, 630, 1730],
            ['Novembro', 100, 560, 1460],
            ['Dezembro', 229, 920, 1630],
        ]);


        var options = {
            /* chart: {
               title: 'Quantidade de pedidos por urgência ',
               subtitle: 'por mês',
             },*/
            colors: ['(220,57,18)','(255,153,0)', '(51,102,204)'],
            hAxis: { format: 'decimal' },
            width: "100%",
            height: 250,
            hAxis: { title: 'Meses' },
            vAxis: { format: "" }

        };

        var chart = new google.charts.Bar(document.getElementById('columnchart_material'));
        document.getElementById("btn-4tri").focus();
        chart.draw(data, google.charts.Bar.convertOptions(options));
    }


    /*-----------------------------------------------------------------*/
    google.charts.load('current', { 'packages': ['line'] });
    google.charts.setOnLoadCallback(drawChart_asso);

    function drawChart_asso() {

        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Month');
        data.addColumn('number', "2017");
        data.addColumn('number', "2018");
        data.addColumn('number', "2019");
        data.addColumn('number', "2020");

        data.addRows([
            ["Jan", 0, 5.7, 10, 15],
            ["Fev", 4, 8.7, 12, 18],
            ["Mar", 7, 9, 19, 12],
            ["Abr", 15, 8.7, 20, 20],
            ["Mai", 30, 8.7, 20, 20],
            ["Jul", 35, 8.7, 20, 20],
            ["Ago", 70, 8.7, 20, 20],
            ["Jun", 100, 8.7, 20, 20],
            ["Jul", 120, 8.7, 20, 20],
            ["Ago", 140, 8.7, 20, 20],
            ["Set", 175, 8.7, 20, 20],
            ["Out", 164, 8.7, 20, 20],
            ["Nov", 168, 8.7, 20, 20],
            ["Dez", 170, 8.7, 20, 20],


        ]);

        var options = {
            /*chart: {
              title: 'Box Office Earnings in First Two Weeks of Opening',
              subtitle: 'in millions of dollars (USD)'
            },*/
            width: "100%",
            height: 250,
            hAxis: { title: 'Meses' },
        };

        var chart = new google.charts.Line(document.getElementById('line_top_x'));

        chart.draw(data, google.charts.Line.convertOptions(options));
    }


    google.charts.load('current', { 'packages': ['line'] });
    google.charts.setOnLoadCallback(drawChart_op);

    function drawChart_op() {

        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Month');
        data.addColumn('number', "2017");
        data.addColumn('number', "2018");
        data.addColumn('number', "2019");
        data.addColumn('number', "2020");

        data.addRows([
            ["Jan", 30, 5.7, 10, 15],
            ["Fev", 4, 8.7, 12, 18],
            ["Mar", 7, 9, 100, 12],
            ["Abr", 15, 8.7, 20, 20],
            ["Mai", 30, 8.7, 20, 20],
            ["Jul", 35, 8.7, 20, 20],
            ["Ago", 150, 8.7, 20, 20],
            ["Jun", 100, 8.7, 20, 20],
            ["Jul", 120, 8.7, 20, 150],
            ["Ago", 140, 200, 20, 20],
            ["Set", 175, 8.7, 20, 20],
            ["Out", 164, 8.7, 20, 190],
            ["Nov", 168, 8.7, 20, 20],
            ["Dez", 170, 8.7, 20, 20],


        ]);

        var options = {
            /*chart: {
              title: 'Box Office Earnings in First Two Weeks of Opening',
              subtitle: 'in millions of dollars (USD)'
            },*/
            width: "100%",
            height: 250,
            hAxis: { title: 'Meses' },
        };

        var chart = new google.charts.Line(document.getElementById('line_top_x1'));

        chart.draw(data, google.charts.Line.convertOptions(options));
    }

    /*-----------------------------------------------------------------*/
    google.charts.load('current', { packages: ['corechart', 'bar'] });
    google.charts.setOnLoadCallback(drawStacked3);

    function drawStacked3() {
        var data = google.visualization.arrayToDataTable([
            ["Ano", 'Incêndio Florestal', 'Incêndio Urbano', 'Queimadas', 'Transporte de doentes',
                'Enchimento de reservatórios', { role: 'annotation' }
            ],
            ['2018', 10, 24, 20, 32, 18, ""],
            ['2019', 16, 22, 23, 30, 16, ""],
            ['2020', 28, 19, 29, 30, 12, ""]
        ]);

        var options = {
            width: "100%",
            height: 238,
            legend: { position: 'top', maxLines: 5, textStyle: { fontSize: 14 } },
            bar: { groupWidth: '75%' },
            isStacked: true
        };
        var chart = new google.visualization.BarChart(document.getElementById('chart_div-2'));
        chart.draw(data, options);
    }


    let day = document.getElementById("btn-day");
    let month = document.getElementById("btn-month");
    let year = document.getElementById("btn-year");



    google.charts.load('current', { 'packages': ['corechart'] });

    // Set a callback to run when the Google Visualization API is loaded.
    google.charts.setOnLoadCallback(drawChart_day);
    day.onclick = drawChart_day;
    month.onclick = drawChart_month;
    year.onclick = drawChart_year;

    function drawChart_day() {
        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Topping');
        data.addColumn('number', 'Slices');
        data.addRows([
            ['Urgentes', 3],
            ['Não Urgentes', 4],
        ]);

        // Set chart options
        var options = {
            colors: ['(220,57,18)','(255,153,0)',],
            'width': "100%",
            "text-align": "center",
            'height': "150%",
            is3D: true,
            legend: { position: "bottom", textStyle: { fontSize: 16 } },
            position: "relative",
            display: "flex",
        };

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
        chart.draw(data, options);
        document.getElementById("btn-day").focus();
    }

    function drawChart_month() {
        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Topping');
        data.addColumn('number', 'Slices');
        data.addRows([
            ['Urgentes', 57],
            ['Não Urgentes', 78],
        ]);

        // Set chart options
        var options = {
            colors: ['(220,57,18)','(255,153,0)'],
            'width': "100%",
            "text-align": "center",
            'height': "150%",
            is3D: true,
            legend: { position: "bottom", textStyle: { fontSize: 16 } },
            position: "relative",
            display: "flex",
        };

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
        chart.draw(data, options);
    }

    function drawChart_year() {
        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Topping');
        data.addColumn('number', 'Slices');
        data.addRows([
            ['Urgentes', 100],
            ['Não Urgentes', 89],
        ]);

        // Set chart options
        var options = {
            colors: ['(220,57,18)','(255,153,0)'],
            width: "100%",
            "text-align": "center",
            height: "150%",
            is3D: true,
            legend: { position: "bottom", textStyle: { fontSize: 16 } },
            position: "relative",
            display: "flex",
        };

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
        chart.draw(data, options);
    }
})
