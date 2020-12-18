const connect = require('../config/connectMYSQL');
const jsonMessagesPath = __dirname + "/../assets/jsonMessages/";
const jsonMessages = require(jsonMessagesPath + "bd");

//read partnerss
function readRequest(req, res) {
    const query = connect.con.query('SELECT id_request, content, verification, id_operational, adress, mail, name FROM request order by id_request ', function(err, rows, fields) {
        console.log(query.sql);
        if (err) {
            console.log(err);
            res.status(jsonMessages.db.dbError.status).send(jsonMessages.db.dbError);
        }
        else {
            if (rows.length == 0) {
                res.status(jsonMessages.db.noRecords.status).send(jsonMessages.db.noRecords);
            }
            else {
                res.send(rows);
            }
        }
    });
}

module.exports = {
    readRequest : readRequest
};