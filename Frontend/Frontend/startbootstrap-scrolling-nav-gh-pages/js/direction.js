$(document).ready(function() {
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
    google.charts.setOnLoadCallback(drawChart_request);

 function drawChart_request() {

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

        var chart = new google.charts.Line(document.getElementById('line_top_x2'));

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
})
