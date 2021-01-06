{"filter":false,"title":"occurrence.controller.js","tooltip":"/Backend/webbook/controllers/occurrence.controller.js","undoManager":{"mark":90,"position":90,"stack":[[{"start":{"row":62,"column":1},"end":{"row":63,"column":0},"action":"insert","lines":["",""],"id":4},{"start":{"row":63,"column":0},"end":{"row":64,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":64,"column":0},"end":{"row":80,"column":1},"action":"insert","lines":["function readOccurrence(req, res) {","    const query = connect.con.query('SELECT id_occurrence, local, distance, occurrence_type, status, arrival, departure, cost, origin, description, victim_number, id_entity, id_request FROM occurrence order by id_occurrence ', function(err, rows, fields) {","        console.log(query.sql);","        if (err) {","            console.log(err);","            res.status(jsonMessages.db.dbError.status).send(jsonMessages.db.dbError);","        }","        else {","            if (rows.length == 0) {","                res.status(jsonMessages.db.noRecords.status).send(jsonMessages.db.noRecords);","            }","            else {","                res.send(rows);","            }","        }","    });","}"],"id":5}],[{"start":{"row":64,"column":23},"end":{"row":64,"column":24},"action":"insert","lines":["S"],"id":6}],[{"start":{"row":64,"column":23},"end":{"row":64,"column":24},"action":"remove","lines":["S"],"id":7}],[{"start":{"row":44,"column":0},"end":{"row":44,"column":1},"action":"insert","lines":["/"],"id":8},{"start":{"row":44,"column":1},"end":{"row":44,"column":2},"action":"insert","lines":["*"]}],[{"start":{"row":62,"column":1},"end":{"row":62,"column":2},"action":"insert","lines":["*"],"id":9},{"start":{"row":62,"column":2},"end":{"row":62,"column":3},"action":"insert","lines":["/"]}],[{"start":{"row":64,"column":9},"end":{"row":64,"column":23},"action":"remove","lines":["readOccurrence"],"id":10}],[{"start":{"row":64,"column":9},"end":{"row":64,"column":31},"action":"insert","lines":["readOccurrenceFinished"],"id":11}],[{"start":{"row":65,"column":201},"end":{"row":65,"column":223},"action":"remove","lines":["order by id_occurrence"],"id":12}],[{"start":{"row":65,"column":201},"end":{"row":65,"column":202},"action":"insert","lines":["W"],"id":13},{"start":{"row":65,"column":202},"end":{"row":65,"column":203},"action":"insert","lines":["H"]},{"start":{"row":65,"column":203},"end":{"row":65,"column":204},"action":"insert","lines":["E"]},{"start":{"row":65,"column":204},"end":{"row":65,"column":205},"action":"insert","lines":["R"]}],[{"start":{"row":65,"column":204},"end":{"row":65,"column":205},"action":"remove","lines":["R"],"id":14},{"start":{"row":65,"column":203},"end":{"row":65,"column":204},"action":"remove","lines":["E"]},{"start":{"row":65,"column":202},"end":{"row":65,"column":203},"action":"remove","lines":["H"]},{"start":{"row":65,"column":201},"end":{"row":65,"column":202},"action":"remove","lines":["W"]}],[{"start":{"row":65,"column":201},"end":{"row":65,"column":202},"action":"insert","lines":["w"],"id":15},{"start":{"row":65,"column":202},"end":{"row":65,"column":203},"action":"insert","lines":["h"]},{"start":{"row":65,"column":203},"end":{"row":65,"column":204},"action":"insert","lines":["e"]},{"start":{"row":65,"column":204},"end":{"row":65,"column":205},"action":"insert","lines":["r"]},{"start":{"row":65,"column":205},"end":{"row":65,"column":206},"action":"insert","lines":["e"]}],[{"start":{"row":65,"column":206},"end":{"row":65,"column":207},"action":"insert","lines":[" "],"id":16},{"start":{"row":65,"column":207},"end":{"row":65,"column":208},"action":"insert","lines":["s"]},{"start":{"row":65,"column":208},"end":{"row":65,"column":209},"action":"insert","lines":["t"]},{"start":{"row":65,"column":209},"end":{"row":65,"column":210},"action":"insert","lines":["a"]},{"start":{"row":65,"column":210},"end":{"row":65,"column":211},"action":"insert","lines":["t"]},{"start":{"row":65,"column":211},"end":{"row":65,"column":212},"action":"insert","lines":["u"]},{"start":{"row":65,"column":212},"end":{"row":65,"column":213},"action":"insert","lines":["s"]}],[{"start":{"row":65,"column":213},"end":{"row":65,"column":214},"action":"insert","lines":["="],"id":17},{"start":{"row":65,"column":214},"end":{"row":65,"column":215},"action":"insert","lines":["\""]},{"start":{"row":65,"column":215},"end":{"row":65,"column":216},"action":"insert","lines":["F"]},{"start":{"row":65,"column":216},"end":{"row":65,"column":217},"action":"insert","lines":["i"]},{"start":{"row":65,"column":217},"end":{"row":65,"column":218},"action":"insert","lines":["n"]}],[{"start":{"row":65,"column":218},"end":{"row":65,"column":219},"action":"insert","lines":["a"],"id":18},{"start":{"row":65,"column":219},"end":{"row":65,"column":220},"action":"insert","lines":["l"]},{"start":{"row":65,"column":220},"end":{"row":65,"column":221},"action":"insert","lines":["i"]},{"start":{"row":65,"column":221},"end":{"row":65,"column":222},"action":"insert","lines":["z"]},{"start":{"row":65,"column":222},"end":{"row":65,"column":223},"action":"insert","lines":["a"]},{"start":{"row":65,"column":223},"end":{"row":65,"column":224},"action":"insert","lines":["d"]},{"start":{"row":65,"column":224},"end":{"row":65,"column":225},"action":"insert","lines":["a"]},{"start":{"row":65,"column":225},"end":{"row":65,"column":226},"action":"insert","lines":["\""]}],[{"start":{"row":80,"column":1},"end":{"row":80,"column":2},"action":"insert","lines":["*"],"id":19},{"start":{"row":80,"column":2},"end":{"row":80,"column":3},"action":"insert","lines":["/"]}],[{"start":{"row":64,"column":0},"end":{"row":64,"column":1},"action":"insert","lines":["/"],"id":20},{"start":{"row":64,"column":1},"end":{"row":64,"column":2},"action":"insert","lines":["*"]}],[{"start":{"row":44,"column":1},"end":{"row":44,"column":2},"action":"remove","lines":["*"],"id":21},{"start":{"row":44,"column":0},"end":{"row":44,"column":1},"action":"remove","lines":["/"]}],[{"start":{"row":62,"column":2},"end":{"row":62,"column":3},"action":"remove","lines":["/"],"id":22},{"start":{"row":62,"column":1},"end":{"row":62,"column":2},"action":"remove","lines":["*"]}],[{"start":{"row":64,"column":1},"end":{"row":64,"column":2},"action":"remove","lines":["*"],"id":23},{"start":{"row":64,"column":0},"end":{"row":64,"column":1},"action":"remove","lines":["/"]}],[{"start":{"row":80,"column":2},"end":{"row":80,"column":3},"action":"remove","lines":["/"],"id":24},{"start":{"row":80,"column":1},"end":{"row":80,"column":2},"action":"remove","lines":["*"]}],[{"start":{"row":44,"column":0},"end":{"row":44,"column":1},"action":"insert","lines":["/"],"id":25},{"start":{"row":44,"column":1},"end":{"row":44,"column":2},"action":"insert","lines":["*"]}],[{"start":{"row":62,"column":1},"end":{"row":62,"column":2},"action":"insert","lines":["*"],"id":26},{"start":{"row":62,"column":2},"end":{"row":62,"column":3},"action":"insert","lines":["/"]}],[{"start":{"row":64,"column":43},"end":{"row":65,"column":0},"action":"insert","lines":["",""],"id":27},{"start":{"row":65,"column":0},"end":{"row":65,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":65,"column":4},"end":{"row":66,"column":36},"action":"insert","lines":["    const statusF = req.param('status');","    const post = { status: statusF};"],"id":28}],[{"start":{"row":67,"column":229},"end":{"row":67,"column":230},"action":"insert","lines":["p"],"id":29},{"start":{"row":67,"column":230},"end":{"row":67,"column":231},"action":"insert","lines":["o"]},{"start":{"row":67,"column":231},"end":{"row":67,"column":232},"action":"insert","lines":["s"]},{"start":{"row":67,"column":232},"end":{"row":67,"column":233},"action":"insert","lines":["t"]},{"start":{"row":67,"column":233},"end":{"row":67,"column":234},"action":"insert","lines":[","]}],[{"start":{"row":65,"column":6},"end":{"row":65,"column":7},"action":"remove","lines":[" "],"id":30},{"start":{"row":65,"column":5},"end":{"row":65,"column":6},"action":"remove","lines":[" "]},{"start":{"row":65,"column":4},"end":{"row":65,"column":5},"action":"remove","lines":[" "]},{"start":{"row":65,"column":0},"end":{"row":65,"column":4},"action":"remove","lines":["    "]}],[{"start":{"row":65,"column":0},"end":{"row":65,"column":1},"action":"insert","lines":[" "],"id":31},{"start":{"row":65,"column":1},"end":{"row":65,"column":2},"action":"insert","lines":[" "]},{"start":{"row":65,"column":2},"end":{"row":65,"column":3},"action":"insert","lines":[" "]}],[{"start":{"row":67,"column":225},"end":{"row":67,"column":226},"action":"remove","lines":["\""],"id":32},{"start":{"row":67,"column":224},"end":{"row":67,"column":225},"action":"remove","lines":["a"]},{"start":{"row":67,"column":223},"end":{"row":67,"column":224},"action":"remove","lines":["d"]},{"start":{"row":67,"column":222},"end":{"row":67,"column":223},"action":"remove","lines":["a"]},{"start":{"row":67,"column":221},"end":{"row":67,"column":222},"action":"remove","lines":["z"]},{"start":{"row":67,"column":220},"end":{"row":67,"column":221},"action":"remove","lines":["i"]},{"start":{"row":67,"column":219},"end":{"row":67,"column":220},"action":"remove","lines":["l"]},{"start":{"row":67,"column":218},"end":{"row":67,"column":219},"action":"remove","lines":["a"]},{"start":{"row":67,"column":217},"end":{"row":67,"column":218},"action":"remove","lines":["n"]},{"start":{"row":67,"column":216},"end":{"row":67,"column":217},"action":"remove","lines":["i"]},{"start":{"row":67,"column":215},"end":{"row":67,"column":216},"action":"remove","lines":["F"]},{"start":{"row":67,"column":214},"end":{"row":67,"column":215},"action":"remove","lines":["\""]}],[{"start":{"row":67,"column":214},"end":{"row":67,"column":215},"action":"insert","lines":["?"],"id":33}],[{"start":{"row":65,"column":36},"end":{"row":65,"column":37},"action":"remove","lines":["s"],"id":34},{"start":{"row":65,"column":35},"end":{"row":65,"column":36},"action":"remove","lines":["u"]},{"start":{"row":65,"column":34},"end":{"row":65,"column":35},"action":"remove","lines":["t"]},{"start":{"row":65,"column":33},"end":{"row":65,"column":34},"action":"remove","lines":["a"]},{"start":{"row":65,"column":32},"end":{"row":65,"column":33},"action":"remove","lines":["t"]},{"start":{"row":65,"column":31},"end":{"row":65,"column":32},"action":"remove","lines":["s"]}],[{"start":{"row":65,"column":31},"end":{"row":65,"column":32},"action":"insert","lines":["i"],"id":35},{"start":{"row":65,"column":32},"end":{"row":65,"column":33},"action":"insert","lines":["d"]}],[{"start":{"row":65,"column":32},"end":{"row":65,"column":33},"action":"remove","lines":["d"],"id":36},{"start":{"row":65,"column":31},"end":{"row":65,"column":32},"action":"remove","lines":["i"]}],[{"start":{"row":65,"column":31},"end":{"row":65,"column":32},"action":"insert","lines":["s"],"id":37},{"start":{"row":65,"column":32},"end":{"row":65,"column":33},"action":"insert","lines":["a"]}],[{"start":{"row":65,"column":32},"end":{"row":65,"column":33},"action":"remove","lines":["a"],"id":38}],[{"start":{"row":65,"column":32},"end":{"row":65,"column":33},"action":"insert","lines":["t"],"id":39},{"start":{"row":65,"column":33},"end":{"row":65,"column":34},"action":"insert","lines":["a"]},{"start":{"row":65,"column":34},"end":{"row":65,"column":35},"action":"insert","lines":["t"]},{"start":{"row":65,"column":35},"end":{"row":65,"column":36},"action":"insert","lines":["u"]},{"start":{"row":65,"column":36},"end":{"row":65,"column":37},"action":"insert","lines":["s"]}],[{"start":{"row":67,"column":207},"end":{"row":67,"column":214},"action":"remove","lines":["status="],"id":40}],[{"start":{"row":64,"column":23},"end":{"row":64,"column":31},"action":"remove","lines":["Finished"],"id":41}],[{"start":{"row":64,"column":23},"end":{"row":64,"column":24},"action":"insert","lines":["S"],"id":42},{"start":{"row":64,"column":24},"end":{"row":64,"column":25},"action":"insert","lines":["t"]},{"start":{"row":64,"column":25},"end":{"row":64,"column":26},"action":"insert","lines":["a"]},{"start":{"row":64,"column":26},"end":{"row":64,"column":27},"action":"insert","lines":["t"]},{"start":{"row":64,"column":27},"end":{"row":64,"column":28},"action":"insert","lines":["u"]},{"start":{"row":64,"column":28},"end":{"row":64,"column":29},"action":"insert","lines":["s"]}],[{"start":{"row":88,"column":42},"end":{"row":88,"column":50},"action":"remove","lines":["Finished"],"id":43}],[{"start":{"row":88,"column":42},"end":{"row":88,"column":43},"action":"insert","lines":["S"],"id":44},{"start":{"row":88,"column":43},"end":{"row":88,"column":44},"action":"insert","lines":["t"]},{"start":{"row":88,"column":44},"end":{"row":88,"column":45},"action":"insert","lines":["a"]},{"start":{"row":88,"column":45},"end":{"row":88,"column":46},"action":"insert","lines":["t"]}],[{"start":{"row":88,"column":28},"end":{"row":88,"column":46},"action":"remove","lines":["readOccurrenceStat"],"id":45},{"start":{"row":88,"column":28},"end":{"row":88,"column":50},"action":"insert","lines":["readOccurrenceStatus()"]}],[{"start":{"row":88,"column":49},"end":{"row":88,"column":50},"action":"remove","lines":[")"],"id":46},{"start":{"row":88,"column":48},"end":{"row":88,"column":49},"action":"remove","lines":["("]}],[{"start":{"row":88,"column":48},"end":{"row":88,"column":49},"action":"insert","lines":[","],"id":47}],[{"start":{"row":88,"column":25},"end":{"row":88,"column":26},"action":"remove","lines":["d"],"id":48},{"start":{"row":88,"column":24},"end":{"row":88,"column":25},"action":"remove","lines":["e"]},{"start":{"row":88,"column":23},"end":{"row":88,"column":24},"action":"remove","lines":["h"]},{"start":{"row":88,"column":22},"end":{"row":88,"column":23},"action":"remove","lines":["s"]},{"start":{"row":88,"column":21},"end":{"row":88,"column":22},"action":"remove","lines":["i"]},{"start":{"row":88,"column":20},"end":{"row":88,"column":21},"action":"remove","lines":["n"]},{"start":{"row":88,"column":19},"end":{"row":88,"column":20},"action":"remove","lines":["i"]},{"start":{"row":88,"column":18},"end":{"row":88,"column":19},"action":"remove","lines":["F"]}],[{"start":{"row":88,"column":18},"end":{"row":88,"column":19},"action":"insert","lines":["S"],"id":49}],[{"start":{"row":88,"column":4},"end":{"row":88,"column":19},"action":"remove","lines":["readOccurrenceS"],"id":50},{"start":{"row":88,"column":4},"end":{"row":88,"column":24},"action":"insert","lines":["readOccurrenceStatus"]}],[{"start":{"row":67,"column":120},"end":{"row":67,"column":131},"action":"insert","lines":[" distance, "],"id":51}],[{"start":{"row":67,"column":131},"end":{"row":67,"column":132},"action":"remove","lines":[" "],"id":52}],[{"start":{"row":67,"column":65},"end":{"row":67,"column":76},"action":"remove","lines":[" distance, "],"id":53}],[{"start":{"row":67,"column":65},"end":{"row":67,"column":66},"action":"insert","lines":[" "],"id":54}],[{"start":{"row":67,"column":83},"end":{"row":67,"column":99},"action":"remove","lines":["status, arrival,"],"id":55},{"start":{"row":67,"column":82},"end":{"row":67,"column":83},"action":"remove","lines":[" "]}],[{"start":{"row":67,"column":82},"end":{"row":67,"column":83},"action":"remove","lines":[" "],"id":56}],[{"start":{"row":67,"column":82},"end":{"row":67,"column":83},"action":"insert","lines":[" "],"id":57}],[{"start":{"row":67,"column":103},"end":{"row":67,"column":119},"action":"insert","lines":["status, arrival,"],"id":58}],[{"start":{"row":67,"column":133},"end":{"row":67,"column":147},"action":"remove","lines":[" description, "],"id":59}],[{"start":{"row":67,"column":133},"end":{"row":67,"column":134},"action":"insert","lines":[" "],"id":60}],[{"start":{"row":67,"column":93},"end":{"row":67,"column":107},"action":"insert","lines":[" description, "],"id":61}],[{"start":{"row":67,"column":106},"end":{"row":67,"column":107},"action":"remove","lines":[" "],"id":62}],[{"start":{"row":67,"column":146},"end":{"row":67,"column":161},"action":"remove","lines":[" victim_number,"],"id":63}],[{"start":{"row":67,"column":106},"end":{"row":67,"column":121},"action":"insert","lines":[" victim_number,"],"id":64}],[{"start":{"row":67,"column":93},"end":{"row":67,"column":106},"action":"remove","lines":[" description,"],"id":65}],[{"start":{"row":67,"column":108},"end":{"row":67,"column":109},"action":"insert","lines":[" "],"id":66}],[{"start":{"row":67,"column":109},"end":{"row":67,"column":122},"action":"insert","lines":[" description,"],"id":67}],[{"start":{"row":67,"column":109},"end":{"row":67,"column":110},"action":"remove","lines":[" "],"id":68},{"start":{"row":67,"column":108},"end":{"row":67,"column":109},"action":"remove","lines":[" "]}],[{"start":{"row":67,"column":108},"end":{"row":67,"column":109},"action":"insert","lines":[" "],"id":69}],[{"start":{"row":67,"column":206},"end":{"row":67,"column":207},"action":"remove","lines":["?"],"id":70}],[{"start":{"row":67,"column":206},"end":{"row":67,"column":207},"action":"insert","lines":["s"],"id":71},{"start":{"row":67,"column":207},"end":{"row":67,"column":208},"action":"insert","lines":["t"]},{"start":{"row":67,"column":208},"end":{"row":67,"column":209},"action":"insert","lines":["a"]},{"start":{"row":67,"column":209},"end":{"row":67,"column":210},"action":"insert","lines":["t"]},{"start":{"row":67,"column":210},"end":{"row":67,"column":211},"action":"insert","lines":["u"]},{"start":{"row":67,"column":211},"end":{"row":67,"column":212},"action":"insert","lines":["s"]},{"start":{"row":67,"column":212},"end":{"row":67,"column":213},"action":"insert","lines":["="]}],[{"start":{"row":67,"column":213},"end":{"row":67,"column":214},"action":"insert","lines":["\""],"id":72},{"start":{"row":67,"column":214},"end":{"row":67,"column":215},"action":"insert","lines":["\""]}],[{"start":{"row":67,"column":214},"end":{"row":67,"column":215},"action":"insert","lines":["F"],"id":73},{"start":{"row":67,"column":215},"end":{"row":67,"column":216},"action":"insert","lines":["i"]},{"start":{"row":67,"column":216},"end":{"row":67,"column":217},"action":"insert","lines":["n"]},{"start":{"row":67,"column":217},"end":{"row":67,"column":218},"action":"insert","lines":["a"]},{"start":{"row":67,"column":218},"end":{"row":67,"column":219},"action":"insert","lines":["l"]}],[{"start":{"row":67,"column":214},"end":{"row":67,"column":219},"action":"remove","lines":["Final"],"id":74},{"start":{"row":67,"column":214},"end":{"row":67,"column":224},"action":"insert","lines":["Finalizada"]}],[{"start":{"row":67,"column":224},"end":{"row":67,"column":225},"action":"remove","lines":["\""],"id":75}],[{"start":{"row":67,"column":213},"end":{"row":67,"column":214},"action":"remove","lines":["\""],"id":76}],[{"start":{"row":67,"column":206},"end":{"row":67,"column":224},"action":"remove","lines":["status=Finalizada "],"id":77},{"start":{"row":67,"column":206},"end":{"row":67,"column":207},"action":"insert","lines":["?"]}],[{"start":{"row":67,"column":206},"end":{"row":67,"column":207},"action":"remove","lines":["?"],"id":78}],[{"start":{"row":67,"column":206},"end":{"row":67,"column":207},"action":"insert","lines":["t"],"id":79}],[{"start":{"row":67,"column":206},"end":{"row":67,"column":207},"action":"remove","lines":["t"],"id":80}],[{"start":{"row":67,"column":206},"end":{"row":67,"column":207},"action":"insert","lines":["s"],"id":81},{"start":{"row":67,"column":207},"end":{"row":67,"column":208},"action":"insert","lines":["a"]}],[{"start":{"row":67,"column":207},"end":{"row":67,"column":208},"action":"remove","lines":["a"],"id":82}],[{"start":{"row":67,"column":207},"end":{"row":67,"column":208},"action":"insert","lines":["t"],"id":83},{"start":{"row":67,"column":208},"end":{"row":67,"column":209},"action":"insert","lines":["a"]},{"start":{"row":67,"column":209},"end":{"row":67,"column":210},"action":"insert","lines":["t"]},{"start":{"row":67,"column":210},"end":{"row":67,"column":211},"action":"insert","lines":["u"]},{"start":{"row":67,"column":211},"end":{"row":67,"column":212},"action":"insert","lines":["s"]},{"start":{"row":67,"column":212},"end":{"row":67,"column":213},"action":"insert","lines":["="]},{"start":{"row":67,"column":213},"end":{"row":67,"column":214},"action":"insert","lines":["\""]}],[{"start":{"row":67,"column":214},"end":{"row":67,"column":215},"action":"insert","lines":["F"],"id":84},{"start":{"row":67,"column":215},"end":{"row":67,"column":216},"action":"insert","lines":["I"]}],[{"start":{"row":67,"column":215},"end":{"row":67,"column":216},"action":"remove","lines":["I"],"id":85}],[{"start":{"row":67,"column":215},"end":{"row":67,"column":216},"action":"insert","lines":["i"],"id":86},{"start":{"row":67,"column":216},"end":{"row":67,"column":217},"action":"insert","lines":["n"]},{"start":{"row":67,"column":217},"end":{"row":67,"column":218},"action":"insert","lines":["a"]},{"start":{"row":67,"column":218},"end":{"row":67,"column":219},"action":"insert","lines":["l"]},{"start":{"row":67,"column":219},"end":{"row":67,"column":220},"action":"insert","lines":["i"]},{"start":{"row":67,"column":220},"end":{"row":67,"column":221},"action":"insert","lines":["z"]}],[{"start":{"row":67,"column":214},"end":{"row":67,"column":221},"action":"remove","lines":["Finaliz"],"id":87},{"start":{"row":67,"column":214},"end":{"row":67,"column":224},"action":"insert","lines":["Finalizada"]}],[{"start":{"row":67,"column":224},"end":{"row":67,"column":225},"action":"insert","lines":["!"],"id":88}],[{"start":{"row":67,"column":225},"end":{"row":67,"column":226},"action":"insert","lines":[" "],"id":89}],[{"start":{"row":67,"column":225},"end":{"row":67,"column":226},"action":"remove","lines":[" "],"id":90},{"start":{"row":67,"column":224},"end":{"row":67,"column":225},"action":"remove","lines":["!"]}],[{"start":{"row":67,"column":224},"end":{"row":67,"column":225},"action":"insert","lines":["\""],"id":91}],[{"start":{"row":67,"column":225},"end":{"row":67,"column":226},"action":"insert","lines":[" "],"id":92}],[{"start":{"row":67,"column":225},"end":{"row":67,"column":226},"action":"remove","lines":[" "],"id":93},{"start":{"row":67,"column":224},"end":{"row":67,"column":225},"action":"remove","lines":["\""]},{"start":{"row":67,"column":223},"end":{"row":67,"column":224},"action":"remove","lines":["a"]},{"start":{"row":67,"column":222},"end":{"row":67,"column":223},"action":"remove","lines":["d"]},{"start":{"row":67,"column":221},"end":{"row":67,"column":222},"action":"remove","lines":["a"]},{"start":{"row":67,"column":220},"end":{"row":67,"column":221},"action":"remove","lines":["z"]},{"start":{"row":67,"column":219},"end":{"row":67,"column":220},"action":"remove","lines":["i"]},{"start":{"row":67,"column":218},"end":{"row":67,"column":219},"action":"remove","lines":["l"]},{"start":{"row":67,"column":217},"end":{"row":67,"column":218},"action":"remove","lines":["a"]},{"start":{"row":67,"column":216},"end":{"row":67,"column":217},"action":"remove","lines":["n"]},{"start":{"row":67,"column":215},"end":{"row":67,"column":216},"action":"remove","lines":["i"]},{"start":{"row":67,"column":214},"end":{"row":67,"column":215},"action":"remove","lines":["F"]},{"start":{"row":67,"column":213},"end":{"row":67,"column":214},"action":"remove","lines":["\""]},{"start":{"row":67,"column":212},"end":{"row":67,"column":213},"action":"remove","lines":["="]},{"start":{"row":67,"column":211},"end":{"row":67,"column":212},"action":"remove","lines":["s"]},{"start":{"row":67,"column":210},"end":{"row":67,"column":211},"action":"remove","lines":["u"]},{"start":{"row":67,"column":209},"end":{"row":67,"column":210},"action":"remove","lines":["t"]},{"start":{"row":67,"column":208},"end":{"row":67,"column":209},"action":"remove","lines":["a"]},{"start":{"row":67,"column":207},"end":{"row":67,"column":208},"action":"remove","lines":["t"]},{"start":{"row":67,"column":206},"end":{"row":67,"column":207},"action":"remove","lines":["s"]}],[{"start":{"row":67,"column":206},"end":{"row":67,"column":207},"action":"insert","lines":["?"],"id":94}]]},"ace":{"folds":[],"scrolltop":1014,"scrollleft":0,"selection":{"start":{"row":67,"column":207},"end":{"row":67,"column":207},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":52,"state":"comment","mode":"ace/mode/javascript"}},"timestamp":1609698963324,"hash":"d7821f21bb8a40d5e102b9f91ad6cdfa21256fb5"}