window.onload =
    async() => {
        let id = localStorage.idreqs;
        const response = await fetch(`https://23c6902811494393ad2cea6ff8f72d75.vfs.cloud9.us-east-1.amazonaws.com/requests/` + id)
        const requests = await response.json()

        for (const request of requests) {

            let id = request.id_request;
            let adress = request.adress;
            let phone = request.phone_number;
            let hour = request.hour;
            let name = request.name;
            let date = request.date;
            let email = request.mail;
            let content = request.content;

            const response1 = await fetch(`https://23c6902811494393ad2cea6ff8f72d75.vfs.cloud9.us-east-1.amazonaws.com/requeststype/` + id)
            const reqs = await response1.json()

            for (const req of reqs) {
                let type = req.typology;
                let level = req.difficulty_level;
                document.getElementById('viewreq-type').value = type;
                document.getElementById('viewreq-level').value = level;

            }
            // let level = request.difficulty_level;

            let date2 = `${date.substr(0,10 )}`;
            let hour2 = `${hour.substr(0,5 )}`;
            /* let date = `${registration_date.substr(0,10 )}`;*/
            document.getElementById('viewreq-id').value = id;
            document.getElementById('viewreq-adress').value = adress;
            document.getElementById('viewreq-phone').value = phone;
            document.getElementById('viewreq-hour').value = hour2;
            document.getElementById('viewreq-date').value = date2;
            document.getElementById('viewreq-email').value = email;
            document.getElementById('viewreq-descrition').value = content;
            document.getElementById('viewreq-name').value = name;

        }
    };
