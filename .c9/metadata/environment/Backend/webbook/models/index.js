{"filter":false,"title":"index.js","tooltip":"/Backend/webbook/models/index.js","undoManager":{"mark":19,"position":19,"stack":[[{"start":{"row":0,"column":0},"end":{"row":3,"column":37},"action":"insert","lines":["\"use strict\";","let fs        = require(\"fs\");","let path      = require(\"path\");","let Sequelize = require(\"sequelize\");"],"id":1}],[{"start":{"row":3,"column":37},"end":{"row":4,"column":0},"action":"insert","lines":["",""],"id":2}],[{"start":{"row":4,"column":0},"end":{"row":7,"column":19},"action":"insert","lines":["let env       = \"MySQL\";","let config    = require(path.join(__dirname, '../', 'config', 'config.json'))[env];","let sequelize = new Sequelize(config.database, config.username, config.password, config);","let db        = {};"],"id":3}],[{"start":{"row":7,"column":19},"end":{"row":8,"column":0},"action":"insert","lines":["",""],"id":4},{"start":{"row":8,"column":0},"end":{"row":8,"column":1},"action":"insert","lines":["/"]},{"start":{"row":8,"column":1},"end":{"row":8,"column":2},"action":"insert","lines":["/"]}],[{"start":{"row":8,"column":2},"end":{"row":8,"column":3},"action":"insert","lines":["i"],"id":5},{"start":{"row":8,"column":3},"end":{"row":8,"column":4},"action":"insert","lines":["n"]},{"start":{"row":8,"column":4},"end":{"row":8,"column":5},"action":"insert","lines":["i"]},{"start":{"row":8,"column":5},"end":{"row":8,"column":6},"action":"insert","lines":["c"]},{"start":{"row":8,"column":6},"end":{"row":8,"column":7},"action":"insert","lines":["a"]},{"start":{"row":8,"column":7},"end":{"row":8,"column":8},"action":"insert","lines":["r"]}],[{"start":{"row":8,"column":8},"end":{"row":8,"column":9},"action":"insert","lines":[" "],"id":6},{"start":{"row":8,"column":9},"end":{"row":8,"column":10},"action":"insert","lines":["b"]},{"start":{"row":8,"column":10},"end":{"row":8,"column":11},"action":"insert","lines":["d"]}],[{"start":{"row":8,"column":10},"end":{"row":8,"column":11},"action":"remove","lines":["d"],"id":7}],[{"start":{"row":8,"column":10},"end":{"row":8,"column":11},"action":"insert","lines":["d"],"id":8}],[{"start":{"row":8,"column":11},"end":{"row":9,"column":0},"action":"insert","lines":["",""],"id":9}],[{"start":{"row":9,"column":0},"end":{"row":17,"column":5},"action":"insert","lines":["s","  .readdirSync(__dirname)","  .filter(function(file) {","    return (file.indexOf(\".\") !== 0) && (file !== \"index.js\");","  })","  .forEach(function(file) {","    let model = sequelize.import(path.join(__dirname, file));","    db[model.name] = model;","  });"],"id":10}],[{"start":{"row":9,"column":0},"end":{"row":9,"column":1},"action":"insert","lines":["f"],"id":11}],[{"start":{"row":17,"column":5},"end":{"row":18,"column":0},"action":"insert","lines":["",""],"id":12},{"start":{"row":18,"column":0},"end":{"row":18,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":18,"column":2},"end":{"row":19,"column":0},"action":"insert","lines":["",""],"id":13},{"start":{"row":19,"column":0},"end":{"row":19,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":19,"column":2},"end":{"row":25,"column":20},"action":"insert","lines":["Object.keys(db).forEach(function(modelName) {","  if (\"associate\" in db[modelName]) {","    db[modelName].associate(db);","  }","});","db.sequelize = sequelize;","module.exports = db;"],"id":14}],[{"start":{"row":6,"column":0},"end":{"row":6,"column":1},"action":"insert","lines":["/"],"id":15},{"start":{"row":6,"column":1},"end":{"row":6,"column":2},"action":"insert","lines":["/"]}],[{"start":{"row":4,"column":18},"end":{"row":4,"column":19},"action":"remove","lines":["y"],"id":16}],[{"start":{"row":4,"column":18},"end":{"row":4,"column":19},"action":"insert","lines":["Y"],"id":17}],[{"start":{"row":0,"column":0},"end":{"row":0,"column":1},"action":"insert","lines":["/"],"id":18},{"start":{"row":0,"column":1},"end":{"row":0,"column":2},"action":"insert","lines":["*"]}],[{"start":{"row":25,"column":20},"end":{"row":26,"column":0},"action":"insert","lines":["",""],"id":19}],[{"start":{"row":26,"column":0},"end":{"row":26,"column":1},"action":"insert","lines":["*"],"id":20},{"start":{"row":26,"column":1},"end":{"row":26,"column":2},"action":"insert","lines":["/"]}]]},"ace":{"folds":[],"scrolltop":67,"scrollleft":0,"selection":{"start":{"row":6,"column":75},"end":{"row":6,"column":75},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1607694412952,"hash":"a6b32c04edfa9c452284a463f20c7442fd2393f5"}