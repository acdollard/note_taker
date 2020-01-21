let fs = require("fs"); 

// let dataBase = require("./db/db")

// let noteData = fs.readFile("./db/db.json",  (err, data) => {
//     if (err) throw err;
//     console.log(JSON.parse(data));



console.log("noteData");

module.exports = function(app) {



    app.get("/api/notes", function(req, res) {
        fs.readFile("./db/db.json",  (err, data) => {
        if (err) throw err;
        parsedData = JSON.parse(data);
        res.send(parsedData);
        })
    }); 



    app.post("/api/notes", function(req, res) {

        let incomingNote = req.body

        fs.readFile("./db/db.json", (err, data) => {
            if(err) throw err;
            parsedData = JSON.parse(data);
            parsedData.push(incomingNote);
            stringData = JSON.stringify(parsedData);

            fs.writeFile("./db/db.json", stringData, (err, data) => {
                if (err) throw err;
                })
        })

        res.send("Thank you for your note!");

    })




}