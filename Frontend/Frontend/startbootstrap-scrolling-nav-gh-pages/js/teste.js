/*let b = [];
function list_associate() {
    fetch("https://23c6902811494393ad2cea6ff8f72d75.vfs.cloud9.us-east-1.amazonaws.com//partners/")
        .then(res => res.json())
        .then((out) => {
            $.each(out, function(index, value) {
                $("b").append("<tr><td>" + value.num_partner + "</td><td>" + value.num_partner + "</td><td>" + value.num_partner + "</td><td>" + value.num_partner + "</td><td>" + value.num_partner + "</td><td>" + value.num_partner+ "</td></tr>")

            });
            console.log(b)
        }).cath(err => console.error(err));
        alert("erro")
}


$(document).ready(function() {
    list_associate();
});

/*const tblParticipants = document.getElementById("Table-associate")

const renderParticipants = async() => {
    /* let strHtml = tblParticipants;*/
    /*let strHtml = `<tboby`
    const response = await fetch(`https://23c6902811494393ad2cea6ff8f72d75.vfs.cloud9.us-east-1.amazonaws.com//partners/`)
    const partners = await response.json()
    let i = 1
    for (const partner of partners) {
        strHtml += `
                <tr>
                    <td>${partner.num_partner}</td>
                    <td>${partner.name}</td>
                    <td>${partner.cc}</td>
                    <td>${partner.phone_num}</td>
                    <td>${partner.adress}</td>
                    <td>${partner.donation}</td>
                </tr>
            `
        i++
    }
    strHtml += "</tbody>"
    tblParticipants.innerHTML = strHtml
};


$(document).ready(function() {
    renderParticipants();
})*/


/*function listUsers() {
    fetch('https://23c6902811494393ad2cea6ff8f72d75.vfs.cloud9.us-east-1.amazonaws.com//partners/')
        .then(res => res.json())
        .then((out) => {
            $('#Table-associate tbody').empty();
            $.each(out, function(index, partner) {
                $('#Table-associate tbody').append(
                    '<tr><td>' + partner.num_partner +
                    '</td><td>' + partner.name +
                    '</td><td>' + partner.cc +
                    '</td><td>' + partner.phone_num+
                    '</td><td>' + partner.adress +
                    '</td><td>' + partner.donation +
                    '</td></tr>')
            });
        }).catch(err => console.error(err));
}

$(document).ready(function() {
    listUsers();
})*/

/*const getNewCases = async() => {
  const response = await fetch('https://23c6902811494393ad2cea6ff8f72d75.vfs.cloud9.us-east-1.amazonaws.com//partners/');
  const data = await response.json();
  $('#loadingLabel').hide();
  $('#Table-associate').DataTable({
    bLengthChange: false,
  });
};

$(document).ready(function() {
    getNewCases();
});*/

/*const renderParticipants = async() => {

    const response = await fetch(`https://23c6902811494393ad2cea6ff8f72d75.vfs.cloud9.us-east-1.amazonaws.com//partners/`)
    const partners = await response.json()
    let i = 1
    for (const partner of partners) {
     let   dataSet = 
                    [[partner.num_partner, 
 partner.name,
  partner.cc,
partner.phone_num,
 partner.adress,
partner.donation]]
    i++
    alert(dataSet)
    }
};*/

//$(document).ready(function(){
  //  fillTable();
//})
/*fillTable = () => {
    fetch('https://23c6902811494393ad2cea6ff8f72d75.vfs.cloud9.us-east-1.amazonaws.com//partners/')
    .then(response => response.json())
    .then(data => {
        let html = '';
        for (let i = 0; i < data.length; i++){
            html += '<tr>'+
                        '<td class="tdUsername pv3 w-35 pr3 bb b--black-20">'+ data[i].name + '</td>'+
                        '<td class="tdPassword pv3 w-35 pr3 bb b--black-20">'+ data[i].cc + '</td>'+
                        '<td class="tdUsername pv3 w-35 pr3 bb b--black-20">'+ data[i].name + '</td>'+
                        '<td class="tdPassword pv3 w-35 pr3 bb b--black-20">'+ data[i].cc + '</td>'+
                        '<td class="tdUsername pv3 w-35 pr3 bb b--black-20">'+ data[i].name + '</td>'+
                        '<td class="tdPassword pv3 w-35 pr3 bb b--black-20">'+ data[i].cc + '</td>'+
                    '</tr>'
        }
        
})
    .catch(err => console.log("ERROR!: ", err))
}

 const  renderParticipants = async() => {
     const response = await fetch(`https://23c6902811494393ad2cea6ff8f72d75.vfs.cloud9.us-east-1.amazonaws.com//partners/`)
      const partners = await response.json()
      for (const partner of partners) {
         let a =
                             [[partner.num_partner, 
 partner.name,
  partner.cc,
partner.phone_num,
 partner.adress,
partner.donation]]
 return a;
      }
 }*/
 let html = ''
//fetch api (AJAX) to fill table
fillTable = () => {
    fetch('https://23c6902811494393ad2cea6ff8f72d75.vfs.cloud9.us-east-1.amazonaws.com//partners/')
    .then(response => response.json())
    .then(partner => {
        for (i = 0; i < partner.length; i++){
            html += '<tr>'+
                        '<td class="tdUsername pv3 w-35 pr3 bb b--black-20">'+ partner[i].num_partner + '</td>'+
                        '<td class="tdPassword pv3 w-35 pr3 bb b--black-20">'+ partner[i].num_partner + '</td>'+
                        '<td class="tdUsername pv3 w-35 pr3 bb b--black-20">'+ partner[i].num_partner + '</td>'+
                        '<td class="tdPassword pv3 w-35 pr3 bb b--black-20">'+ partner[i].num_partner + '</td>'+
                        '<td class="tdUsername pv3 w-35 pr3 bb b--black-20">'+ partner[i].num_partner + '</td>'+
                        '<td class="tdPassword pv3 w-35 pr3 bb b--black-20">'+ partner[i].num_partner + '</td>'+
                          '</div>'+
                        '</td>'+
                    '</tr>'
                    html;

        }
        
})
    .catch(err => console.log("ERROR!: ", err))
}
 

         $(document).ready(function() {
     fillTable();
   // const getNewCases = async() => {
  //const response = await fetch('https://23c6902811494393ad2cea6ff8f72d75.vfs.cloud9.us-east-1.amazonaws.com//partners/');
  //const data = await response.json();
    $('#Table-associate').DataTable({
      "language": {
        "lengthMenu": "Mostrar _MENU_ associados por página",
        "zeroRecords": "Nada encontrado",
        "info": "Mostrar página _PAGE_ de _PAGES_",
        "infoEmpty": "Nenhhum associado",
        "infoFiltered": "(Filtrado _MAX_ sócios)",
        "search": "Procurar:",
        "paginate": {
          "next": "Próxima",
          "previous": "Anterior"
        }
      },
      data: html,

      
  })
             
         })
    
        
        









