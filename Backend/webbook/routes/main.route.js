
const controllerPartner = require('../controllers/partner.controller.js');
const controllerOperational = require('../controllers/operational.controller.js');
const controllerRequest = require('../controllers/request.controller.js');
const controllerOccurrence = require('../controllers/occurrence.controller.js');
const jsonMessagesPath = __dirname + "/../assets/jsonMessages/";

const app = require('../server');

app.get('/', function(req,res){
    res.send('FIRE!');
});

//partner routes
app.get('/partners/', controllerPartner.readPartner);
app.get('/partners/:id', controllerPartner.readPartnerID);
app.post('/partners/', controllerPartner.savePartner);
app.put('/partners/:id', controllerPartner.updatePartner);
app.delete('/partners/:id', controllerPartner.deletePartner);

//operational routes
app.get('/operationals/', controllerOperational.readOperational);
app.get('/operationals/:id', controllerOperational.readOperationalID);
app.post('/operationals/', controllerOperational.saveOperational);
app.delete('/operationals/:id', controllerOperational.deleteOperational);
app.put('/operationals/:id', controllerOperational.updateOperational);

//occurence routes
app.get('/occurrences/:id', controllerOccurrence.readOccurrenceID);

//request routes
app.get('/requests/', controllerRequest.readRequest);