setUpDataTable();

async function setUpDataTable() {

    const res = await fetch('https://23c6902811494393ad2cea6ff8f72d75.vfs.cloud9.us-east-1.amazonaws.com//partners/');
    const data = await res.json();

    var users = data.map(el => Object.values(el));

    $(document).ready(() => {

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
            data: users,
            columns: [
                { title: "ID" },
                { title: "Nome" },
                { title: "Cartão de cidadão" },
                { title: "Contacto" },
                { title: "Morada" },
                { title: "Donativo p/ano" },
            ]
        });
    });
}
