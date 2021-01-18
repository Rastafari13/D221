function numberAssoc() {
    async function fetchAsync() {

        const response = await fetch('https://23c6902811494393ad2cea6ff8f72d75.vfs.cloud9.us-east-1.amazonaws.com/numberPartner/');
        const assocs = await response.json();
        let assoc = assocs.map(el => Object.values(el));
        document.getElementById("numberAssoc").innerHTML = assoc;
    }
    //chama a função fetchAsync()
    fetchAsync().then(data => console.log("ok")).catch(reason => console.log(reason.message));
};

function numberFireman() {
    async function fetchAsync() {

        const response = await fetch('https://23c6902811494393ad2cea6ff8f72d75.vfs.cloud9.us-east-1.amazonaws.com/numberOperationals/');
        const firemans = await response.json();
        let fireman = firemans.map(el => Object.values(el));
        document.getElementById("numberFireman").innerHTML = fireman;
    }
    //chama a função fetchAsync()
    fetchAsync().then(data => console.log("ok")).catch(reason => console.log(reason.message));

};

function numberCentralist() {
    async function fetchAsync() {

        const response = await fetch('https://23c6902811494393ad2cea6ff8f72d75.vfs.cloud9.us-east-1.amazonaws.com/numberCentralist/');
        const cents = await response.json();
        let cent = cents.map(el => Object.values(el));
        document.getElementById("numberCentralist").innerHTML = cent;
    }
    //chama a função fetchAsync()
    fetchAsync().then(data => console.log("ok")).catch(reason => console.log(reason.message));
};

window.onload = numberAssoc(), numberFireman(), numberCentralist();

google.charts.load('current', { 'packages': ['line'] });
google.charts.setOnLoadCallback(drawChart_asso);

function drawChart_asso() {

    async function fetchAsync() {

        //2019
        const response191 = await fetch('https://23c6902811494393ad2cea6ff8f72d75.vfs.cloud9.us-east-1.amazonaws.com/numberPerDatePartner/' + "2019-02-01");
        const partner191 = await response191.json();

        const response192 = await fetch('https://23c6902811494393ad2cea6ff8f72d75.vfs.cloud9.us-east-1.amazonaws.com/numberPerDatePartner/' + "2019-03-01");
        const partner192 = await response192.json();

        const response193 = await fetch('https://23c6902811494393ad2cea6ff8f72d75.vfs.cloud9.us-east-1.amazonaws.com/numberPerDatePartner/' + "2019-04-01");
        const partner193 = await response193.json();

        const response194 = await fetch('https://23c6902811494393ad2cea6ff8f72d75.vfs.cloud9.us-east-1.amazonaws.com/numberPerDatePartner/' + "2019-05-01");
        const partner194 = await response194.json();

        const response195 = await fetch('https://23c6902811494393ad2cea6ff8f72d75.vfs.cloud9.us-east-1.amazonaws.com/numberPerDatePartner/' + "2019-06-01");
        const partner195 = await response195.json();

        const response196 = await fetch('https://23c6902811494393ad2cea6ff8f72d75.vfs.cloud9.us-east-1.amazonaws.com/numberPerDatePartner/' + "2019-07-01");
        const partner196 = await response196.json();

        const response197 = await fetch('https://23c6902811494393ad2cea6ff8f72d75.vfs.cloud9.us-east-1.amazonaws.com/numberPerDatePartner/' + "2019-08-01");
        const partner197 = await response197.json();

        const response198 = await fetch('https://23c6902811494393ad2cea6ff8f72d75.vfs.cloud9.us-east-1.amazonaws.com/numberPerDatePartner/' + "2019-09-01");
        const partner198 = await response198.json();

        const response199 = await fetch('https://23c6902811494393ad2cea6ff8f72d75.vfs.cloud9.us-east-1.amazonaws.com/numberPerDatePartner/' + "2019-10-01");
        const partner199 = await response199.json();

        const response1910 = await fetch('https://23c6902811494393ad2cea6ff8f72d75.vfs.cloud9.us-east-1.amazonaws.com/numberPerDatePartner/' + "2019-11-01");
        const partner1910 = await response1910.json();

        const response1911 = await fetch('https://23c6902811494393ad2cea6ff8f72d75.vfs.cloud9.us-east-1.amazonaws.com/numberPerDatePartner/' + "2019-12-01");
        const partner1911 = await response1911.json();

        const response1912 = await fetch('https://23c6902811494393ad2cea6ff8f72d75.vfs.cloud9.us-east-1.amazonaws.com/numberPerDatePartner/' + "2020-01-01");
        const partner1912 = await response1912.json();


        let number191 = partner192.map(el => Object.values(el));
        const numberPart191 = parseInt(number191);

        let number192 = partner193.map(el => Object.values(el));
        const numberPart192 = parseInt(number192);

        let number193 = partner194.map(el => Object.values(el));
        const numberPart193 = parseInt(number193);

        let number194 = partner194.map(el => Object.values(el));
        const numberPart194 = parseInt(number194);

        let number195 = partner195.map(el => Object.values(el));
        const numberPart195 = parseInt(number195);

        let number196 = partner196.map(el => Object.values(el));
        const numberPart196 = parseInt(number196);

        let number197 = partner197.map(el => Object.values(el));
        const numberPart197 = parseInt(number197);

        let number198 = partner198.map(el => Object.values(el));
        const numberPart198 = parseInt(number198);

        let number199 = partner199.map(el => Object.values(el));
        const numberPart199 = parseInt(number199);

        let number1910 = partner1910.map(el => Object.values(el));
        const numberPart1910 = parseInt(number1910);

        let number1911 = partner1911.map(el => Object.values(el));
        const numberPart1911 = parseInt(number1911);

        let number1912 = partner1912.map(el => Object.values(el));
        const numberPart1912 = parseInt(number1912);

        //2020
        const response201 = await fetch('https://23c6902811494393ad2cea6ff8f72d75.vfs.cloud9.us-east-1.amazonaws.com/numberPerDatePartner/' + "2020-02-01");
        const partner201 = await response201.json();

        const response202 = await fetch('https://23c6902811494393ad2cea6ff8f72d75.vfs.cloud9.us-east-1.amazonaws.com/numberPerDatePartner/' + "2020-03-01");
        const partner202 = await response202.json();

        const response203 = await fetch('https://23c6902811494393ad2cea6ff8f72d75.vfs.cloud9.us-east-1.amazonaws.com/numberPerDatePartner/' + "2020-04-01");
        const partner203 = await response203.json();

        const response204 = await fetch('https://23c6902811494393ad2cea6ff8f72d75.vfs.cloud9.us-east-1.amazonaws.com/numberPerDatePartner/' + "2020-05-01");
        const partner204 = await response204.json();

        const response205 = await fetch('https://23c6902811494393ad2cea6ff8f72d75.vfs.cloud9.us-east-1.amazonaws.com/numberPerDatePartner/' + "2020-06-01");
        const partner205 = await response205.json();

        const response206 = await fetch('https://23c6902811494393ad2cea6ff8f72d75.vfs.cloud9.us-east-1.amazonaws.com/numberPerDatePartner/' + "2020-07-01");
        const partner206 = await response206.json();

        const response207 = await fetch('https://23c6902811494393ad2cea6ff8f72d75.vfs.cloud9.us-east-1.amazonaws.com/numberPerDatePartner/' + "2020-08-01");
        const partner207 = await response207.json();

        const response208 = await fetch('https://23c6902811494393ad2cea6ff8f72d75.vfs.cloud9.us-east-1.amazonaws.com/numberPerDatePartner/' + "2020-09-01");
        const partner208 = await response208.json();

        const response209 = await fetch('https://23c6902811494393ad2cea6ff8f72d75.vfs.cloud9.us-east-1.amazonaws.com/numberPerDatePartner/' + "2020-10-01");
        const partner209 = await response209.json();

        const response2010 = await fetch('https://23c6902811494393ad2cea6ff8f72d75.vfs.cloud9.us-east-1.amazonaws.com/numberPerDatePartner/' + "2020-11-01");
        const partner2010 = await response2010.json();

        const response2011 = await fetch('https://23c6902811494393ad2cea6ff8f72d75.vfs.cloud9.us-east-1.amazonaws.com/numberPerDatePartner/' + "2020-12-01");
        const partner2011 = await response2011.json();

        const response2012 = await fetch('https://23c6902811494393ad2cea6ff8f72d75.vfs.cloud9.us-east-1.amazonaws.com/numberPerDatePartner/' + "2021-01-01");
        const partner2012 = await response2012.json();


        let number201 = partner201.map(el => Object.values(el));
        const numberPart201 = parseInt(number201);

        let number202 = partner202.map(el => Object.values(el));
        const numberPart202 = parseInt(number202);

        let number203 = partner203.map(el => Object.values(el));
        const numberPart203 = parseInt(number203);

        let number204 = partner204.map(el => Object.values(el));
        const numberPart204 = parseInt(number204);

        let number205 = partner205.map(el => Object.values(el));
        const numberPart205 = parseInt(number205);

        let number206 = partner206.map(el => Object.values(el));
        const numberPart206 = parseInt(number206);

        let number207 = partner207.map(el => Object.values(el));
        const numberPart207 = parseInt(number207);

        let number208 = partner208.map(el => Object.values(el));
        const numberPart208 = parseInt(number208);

        let number209 = partner209.map(el => Object.values(el));
        const numberPart209 = parseInt(number209);

        let number2010 = partner2010.map(el => Object.values(el));
        const numberPart2010 = parseInt(number2010);

        let number2011 = partner2011.map(el => Object.values(el));
        const numberPart2011 = parseInt(number2011);

        let number2012 = partner2012.map(el => Object.values(el));
        const numberPart2012 = parseInt(number2012);
        
        
                //2021
        const response211 = await fetch('https://23c6902811494393ad2cea6ff8f72d75.vfs.cloud9.us-east-1.amazonaws.com/numberPerDatePartner/' + "2021-02-01");
        const partner211 = await response211.json();

        const response212 = await fetch('https://23c6902811494393ad2cea6ff8f72d75.vfs.cloud9.us-east-1.amazonaws.com/numberPerDatePartner/' + "2021-03-01");
        const partner212 = await response212.json();

        const response213 = await fetch('https://23c6902811494393ad2cea6ff8f72d75.vfs.cloud9.us-east-1.amazonaws.com/numberPerDatePartner/' + "2021-04-01");
        const partner213 = await response213.json();

        const response214 = await fetch('https://23c6902811494393ad2cea6ff8f72d75.vfs.cloud9.us-east-1.amazonaws.com/numberPerDatePartner/' + "2021-05-01");
        const partner214 = await response214.json();

        const response215 = await fetch('https://23c6902811494393ad2cea6ff8f72d75.vfs.cloud9.us-east-1.amazonaws.com/numberPerDatePartner/' + "2021-06-01");
        const partner215 = await response215.json();

        const response216 = await fetch('https://23c6902811494393ad2cea6ff8f72d75.vfs.cloud9.us-east-1.amazonaws.com/numberPerDatePartner/' + "2021-07-01");
        const partner216 = await response216.json();

        const response217 = await fetch('https://23c6902811494393ad2cea6ff8f72d75.vfs.cloud9.us-east-1.amazonaws.com/numberPerDatePartner/' + "2021-08-01");
        const partner217 = await response217.json();

        const response218 = await fetch('https://23c6902811494393ad2cea6ff8f72d75.vfs.cloud9.us-east-1.amazonaws.com/numberPerDatePartner/' + "2021-09-01");
        const partner218 = await response218.json();

        const response219 = await fetch('https://23c6902811494393ad2cea6ff8f72d75.vfs.cloud9.us-east-1.amazonaws.com/numberPerDatePartner/' + "2021-10-01");
        const partner219 = await response219.json();

        const response2110 = await fetch('https://23c6902811494393ad2cea6ff8f72d75.vfs.cloud9.us-east-1.amazonaws.com/numberPerDatePartner/' + "2021-11-01");
        const partner2110 = await response2110.json();

        const response2111 = await fetch('https://23c6902811494393ad2cea6ff8f72d75.vfs.cloud9.us-east-1.amazonaws.com/numberPerDatePartner/' + "2021-12-01");
        const partner2111 = await response2111.json();

        const response2112 = await fetch('https://23c6902811494393ad2cea6ff8f72d75.vfs.cloud9.us-east-1.amazonaws.com/numberPerDatePartner/' + "2022-01-01");
        const partner2112 = await response2112.json();


        let number211 = partner211.map(el => Object.values(el));
        const numberPart211 = parseInt(number211);

        let number212 = partner212.map(el => Object.values(el));
        const numberPart212 = parseInt(number212);

        let number213 = partner213.map(el => Object.values(el));
        const numberPart213 = parseInt(number213);

        let number214 = partner214.map(el => Object.values(el));
        const numberPart214 = parseInt(number214);

        let number215 = partner215.map(el => Object.values(el));
        const numberPart215 = parseInt(number215);

        let number216 = partner216.map(el => Object.values(el));
        const numberPart216 = parseInt(number216);

        let number217 = partner217.map(el => Object.values(el));
        const numberPart217 = parseInt(number217);

        let number218 = partner218.map(el => Object.values(el));
        const numberPart218 = parseInt(number218);

        let number219 = partner219.map(el => Object.values(el));
        const numberPart219 = parseInt(number219);

        let number2110 = partner2110.map(el => Object.values(el));
        const numberPart2110 = parseInt(number2110);

        let number2111 = partner2111.map(el => Object.values(el));
        const numberPart2111 = parseInt(number2111);

        let number2112 = partner2112.map(el => Object.values(el));
        const numberPart2112 = parseInt(number2112);

        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Month');

        data.addColumn('number', "2019");
        data.addColumn('number', "2020");
        data.addColumn('number', "2021");

        data.addRows([
            ["Jan", numberPart191, numberPart201, numberPart211],
            ["Fev", numberPart192, numberPart202, numberPart212],
            ["Mar", numberPart193, numberPart203, numberPart213],
            ["Abr", numberPart194, numberPart204, numberPart214],
            ["Mai", numberPart195, numberPart205, numberPart215],
            ["Jun", numberPart196, numberPart206, numberPart216],
            ["Jul", numberPart197, numberPart207, numberPart217],
            ["Ago", numberPart198, numberPart208, numberPart218],
            ["Set", numberPart199, numberPart209, numberPart219],
            ["Out", numberPart1910, numberPart2010, numberPart2110],
            ["Nov", numberPart1911, numberPart2011, numberPart2111],
            ["Dez", numberPart1912, numberPart2012, numberPart2112],


        ]);

        var options = {
            /*chart: {
              title: 'Box Office Earnings in First Two Weeks of Opening',
              subtitle: 'in millions of dollars (USD)'
            },*/
            width: "100%",
            height: "100%",
            hAxis: { title: 'Meses' },
        };

        var chart = new google.charts.Line(document.getElementById('numberAssoci'));

        chart.draw(data, google.charts.Line.convertOptions(options));
    }
    fetchAsync().then(data => console.log("ok")).catch(reason => console.log(reason.message));

}


google.charts.load('current', { 'packages': ['line'] });
google.charts.setOnLoadCallback(drawChart_request);

function drawChart_request() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Month');

    data.addColumn('number', "2019");
    data.addColumn('number', "2020");
    data.addColumn('number', "2021");

    data.addRows([
        ["Jan", 5.7, 10, 15],
        ["Fev", 8.7, 12, 18],
        ["Mar", 9, 19, 12],
        ["Abr", 8.7, 20, 20],
        ["Mai", 8.7, 20, 20],
        ["Jul", 8.7, 20, 20],
        ["Ago", 8.7, 20, 20],
        ["Jun", 8.7, 20, 20],
        ["Jul", 8.7, 20, 20],
        ["Ago", 8.7, 20, 20],
        ["Set", 8.7, 20, 20],
        ["Out", 8.7, 20, 20],
        ["Nov", 8.7, 20, 20],
        ["Dez", 8.7, 20, 20],


    ]);

    var options = {
        width: "100%",
        height: "100%",
        hAxis: { title: 'Meses' },
    };

    var chart = new google.charts.Line(document.getElementById('numberfire'));

    chart.draw(data, google.charts.Line.convertOptions(options));
}

google.charts.load('current', { 'packages': ['line'] });
google.charts.setOnLoadCallback(drawChart_op);

function drawChart_op() {

    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Month');
    data.addColumn('number', "2019");
    data.addColumn('number', "2020");
    data.addColumn('number', "2021");

    data.addRows([
        ["Jan", 5.7, 10, 15],
        ["Fev", 8.7, 12, 18],
        ["Mar", 9, 100, 12],
        ["Abr", 8.7, 20, 20],
        ["Mai", 8.7, 20, 20],
        ["Jul", 8.7, 20, 20],
        ["Ago", 8.7, 20, 20],
        ["Jun", 8.7, 20, 20],
        ["Jul", 8.7, 20, 150],
        ["Ago", 200, 20, 20],
        ["Set", 8.7, 20, 20],
        ["Out", 8.7, 20, 190],
        ["Nov", 8.7, 20, 20],
        ["Dez", 8.7, 20, 20],


    ]);

    var options = {
        /*chart: {
          title: 'Box Office Earnings in First Two Weeks of Opening',
          subtitle: 'in millions of dollars (USD)'
        },*/
        width: "100%",
        height: "100%",
        hAxis: { title: 'Meses' },
    };

    var chart = new google.charts.Line(document.getElementById('numbercent'));

    chart.draw(data, google.charts.Line.convertOptions(options));
}

/*-----------------------------------------------------------------*/
google.charts.load('current', { packages: ['corechart', 'bar'] });
google.charts.setOnLoadCallback(type_occ);

function type_occ() {

    async function fetchAsync() {
        const content1 = "florestal";
        const content2 = "urbano";
        const content3 = "Transporte de doentes";
        const content4 = "Queimadas";
        const content5 = "Enchimento de Reservatórios";

        //2019
        const response1 = await fetch('https://23c6902811494393ad2cea6ff8f72d75.vfs.cloud9.us-east-1.amazonaws.com//numberTotalPerDateReq2019/' + content1);
        const florestal2019 = await response1.json();

        const response2 = await fetch('https://23c6902811494393ad2cea6ff8f72d75.vfs.cloud9.us-east-1.amazonaws.com//numberTotalPerDateReq2019/' + content2);
        const urbano2019 = await response2.json();

        const response3 = await fetch('https://23c6902811494393ad2cea6ff8f72d75.vfs.cloud9.us-east-1.amazonaws.com//numberTotalPerDateReq2019/' + content3);
        const transporte2019 = await response3.json();

        const response4 = await fetch('https://23c6902811494393ad2cea6ff8f72d75.vfs.cloud9.us-east-1.amazonaws.com//numberTotalPerDateReq2019/' + content4);
        const queimadas2019 = await response4.json();

        const response5 = await fetch('https://23c6902811494393ad2cea6ff8f72d75.vfs.cloud9.us-east-1.amazonaws.com//numberTotalPerDateReq2019/' + content5);
        const encher2019 = await response5.json();


        let florestal2k19 = florestal2019.map(el => Object.values(el));
        const numberflo2019 = parseInt(florestal2k19);


        let urbano2k19 = urbano2019.map(el => Object.values(el));
        const numberurbn2019 = parseInt(urbano2k19);


        let transporte2k19 = transporte2019.map(el => Object.values(el));
        const numbertrans2019 = parseInt(transporte2k19);

        let queimadas2k19 = queimadas2019.map(el => Object.values(el));
        const numberquei2019 = parseInt(queimadas2k19);

        let encher2k19 = encher2019.map(el => Object.values(el));
        const numberencher2019 = parseInt(encher2k19);


        //2020
        const response11 = await fetch('https://23c6902811494393ad2cea6ff8f72d75.vfs.cloud9.us-east-1.amazonaws.com//numberTotalPerDateReq2020/' + content1);
        const florestal2020 = await response11.json();

        const response22 = await fetch('https://23c6902811494393ad2cea6ff8f72d75.vfs.cloud9.us-east-1.amazonaws.com//numberTotalPerDateReq2020/' + content2);
        const urbano2020 = await response22.json();

        const response33 = await fetch('https://23c6902811494393ad2cea6ff8f72d75.vfs.cloud9.us-east-1.amazonaws.com//numberTotalPerDateReq2020/' + content3);
        const transporte2020 = await response33.json();

        const response44 = await fetch('https://23c6902811494393ad2cea6ff8f72d75.vfs.cloud9.us-east-1.amazonaws.com//numberTotalPerDateReq2020/' + content4);
        const queimadas2020 = await response44.json();

        const response55 = await fetch('https://23c6902811494393ad2cea6ff8f72d75.vfs.cloud9.us-east-1.amazonaws.com//numberTotalPerDateReq2020/' + content5);
        const encher2020 = await response55.json();


        let florestal2k20 = florestal2020.map(el => Object.values(el));
        const numberflo2020 = parseInt(florestal2k20);


        let urbano2k20 = urbano2020.map(el => Object.values(el));
        const numberurbn2020 = parseInt(urbano2k20);


        let transporte2k20 = transporte2020.map(el => Object.values(el));
        const numbertrans2020 = parseInt(transporte2k20);

        let queimadas2k20 = queimadas2020.map(el => Object.values(el));
        const numberquei2020 = parseInt(queimadas2k20);

        let encher2k20 = encher2020.map(el => Object.values(el));
        const numberencher2020 = parseInt(encher2k20);


        //2021
        const response111 = await fetch('https://23c6902811494393ad2cea6ff8f72d75.vfs.cloud9.us-east-1.amazonaws.com//numberTotalPerDateReq2021/' + content1);
        const florestal2021 = await response111.json();

        const response222 = await fetch('https://23c6902811494393ad2cea6ff8f72d75.vfs.cloud9.us-east-1.amazonaws.com//numberTotalPerDateReq2021/' + content2);
        const urbano2021 = await response222.json();

        const response333 = await fetch('https://23c6902811494393ad2cea6ff8f72d75.vfs.cloud9.us-east-1.amazonaws.com//numberTotalPerDateReq2021/' + content3);
        const transporte2021 = await response333.json();

        const response444 = await fetch('https://23c6902811494393ad2cea6ff8f72d75.vfs.cloud9.us-east-1.amazonaws.com//numberTotalPerDateReq2021/' + content4);
        const queimadas2021 = await response444.json();

        const response555 = await fetch('https://23c6902811494393ad2cea6ff8f72d75.vfs.cloud9.us-east-1.amazonaws.com//numberTotalPerDateReq2021/' + content5);
        const encher2021 = await response555.json();


        let florestal2k21 = florestal2021.map(el => Object.values(el));
        const numberflo2021 = parseInt(florestal2k21);


        let urbano2k21 = urbano2021.map(el => Object.values(el));
        const numberurbn2021 = parseInt(urbano2k21);


        let transporte2k21 = transporte2021.map(el => Object.values(el));
        const numbertrans2021 = parseInt(transporte2k21);

        let queimadas2k21 = queimadas2021.map(el => Object.values(el));
        const numberquei2021 = parseInt(queimadas2k21);

        let encher2k21 = encher2021.map(el => Object.values(el));
        const numberencher2021 = parseInt(encher2k21);

        var data = google.visualization.arrayToDataTable([
            ["Ano", 'Incêndio Florestal', 'Incêndio Urbano', 'Queimadas', 'Transporte de doentes',
                'Enchimento de reservatórios', { role: 'annotation' }
            ],
            ['2019', numberflo2019, numberurbn2019, numberquei2019, numbertrans2019, numberencher2019, ""],
            ['2020', numberflo2020, numberurbn2020, numberquei2020, numbertrans2020, numberencher2020, ""],
            ['2021', numberflo2021, numberurbn2021, numberquei2021, numbertrans2021, numberencher2021, ""]
        ]);

        var options = {
            width: "100%",
            height: 188,
            legend: { position: 'top', maxLines: 5, textStyle: { fontSize: 14 } },
            bar: { groupWidth: '75%' },
            isStacked: true
        };
        var chart = new google.visualization.BarChart(document.getElementById('numberTypeRequest'));
        chart.draw(data, options);
    }
    fetchAsync().then(data => console.log("ok")).catch(reason => console.log(reason.message));

}
