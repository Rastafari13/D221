const connect = require('../config/connectMYSQL');
const jsonMessagesPath = __dirname + "/../assets/jsonMessages/";
const jsonMessages = require(jsonMessagesPath + "bd");

//read an occurence with an especific ID
function readOccurrenceID(req, res) {
    const idOccurrence = req.param('id');
    const post = { id_occurrence: idOccurrence };
    const query = connect.con.query('SELECT id_occurrence, local, distance, occurrence_type, status, acess_code, arrival, departure, cost, origin, description, id_entity, id_request FROM occurrence where ? ', post, function(err, rows, fields) {
        console.log(query.sql);
        if (err) {
            console.log(err);
            res.status(jsonMessages.db.noRecords.status).send(jsonMessages.db.dbError);
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
//export functions
module.exports = {
    readOccurrenceID: readOccurrenceID
};