
const controllerPartner = require('../controllers/partner.controller.js');
const controllerOperational = require('../controllers/operational.controller.js');
const controllerRequest = require('../controllers/request.controller.js');
const controllerOccurrence = require('../controllers/occurrence.controller.js');
const controllerCentralist = require('../controllers/centralist.controller.js');
const controllerManagement = require('../controllers/management.controller.js');
const controllerHelpRequest = require('../controllers/help_request.controller.js');
const controllerLogin = require('../controllers/login.controller.js');
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
app.get('/occurrences/', controllerOccurrence.readOccurrence);
app.get('/occurrencesStatus/:status', controllerOccurrence.readOccurrenceStatus);

//request routes
app.get('/requests/', controllerRequest.readRequest);
app.get('/requests/:id', controllerRequest.readRequestID);
app.post('/requests/', controllerRequest.saveRequest);
app.post('/requeststype/',controllerRequest.saveRequestType);
app.get('/requestss/:typology', controllerRequest.readRequestByTypology);
app.put('/requests/:id', controllerRequest.updateRequest);
app.get('/requestsPending/:verification', controllerRequest.readRequestVerification);
app.delete('/requests/:id', controllerRequest.deleteRequest);
app.get('/requeststype/:id', controllerRequest.readRequestTypeID);

//centralist routes
app.get('/centralists/', controllerCentralist.readCentralist);
app.get('/centralists/:id', controllerCentralist.readCentralistID);
app.post('/centralists/', controllerCentralist.saveCentralist);
app.delete('/centralists/:id', controllerCentralist.deleteCentralist);
app.put('/centralists/:id', controllerCentralist.updateCentralist);

//rotas da direção
app.get('/managements/', controllerManagement.readManagement);
app.get('/managements/:id', controllerManagement.readManagementID);
app.put('/managements/:id', controllerManagement.updateManagement);
app.post('/managements/', controllerManagement.saveManagement);
app.delete('/managements/:id', controllerManagement.deleteManagement);

//rotas pedidos de ajuda
app.get('/help/', controllerHelpRequest.readHelpRequest);
app.get('/help/:id', controllerHelpRequest.readHelpRequestID);


//rotas login
app.get('/login/:id', controllerLogin.readLoginID);
app.put('/login/:id', controllerLogin.updateLogin);
app.delete('/login/:id', controllerLogin.deleteLogin);

module.exports = app;


//funçao para o login
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    else {
        //  res.status(jsonMessages.login.unauthorized.status).send(jsonMessages.login.unauthorized);
        return next();
    }
}