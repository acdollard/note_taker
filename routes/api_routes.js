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
            let number = 1
            parsedData.forEach((note, index) => {
                  note.id = number;
                  number++;
                  return parsedData;
            });
            console.log(parsedData);

            stringData = JSON.stringify(parsedData);

            fs.writeFile("./db/db.json", stringData, (err, data) => {
                if (err) throw err;
                })
        })
        res.send("Thank you for your note!");
    })


    app.delete("/api/notes/:id", function(req, res) {
        //gets the id# of the note set for deletion
        let chosen_for_death = req.params.id
        console.log(chosen_for_death);

        //reads the current database file
        fs.readFile("./db/db.json", (err, data) => {
            if(err) throw err;
            //parses current database file into array of objects
            parsedData = JSON.parse(data);
            //for each function, comparing each note's id to the chosen_for_death variable
            for(let i=0; i < parsedData.length; i++){
                if(parsedData[i].id === Number(chosen_for_death)){
                    parsedData.splice([i], 1);
                }
            }
            console.log(parsedData);
            stringData = JSON.stringify(parsedData);

            fs.writeFile("./db/db.json", stringData, (err, data) => {
                if (err) throw err;
                })
        })
        res.send("Note Deleted.")
    })





}