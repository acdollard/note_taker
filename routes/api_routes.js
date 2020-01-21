let fs = require("fs"); 

// let dataBase = require("./db/db")

// let noteData = fs.readFile("./db/db.json",  (err, data) => {
//     if (err) throw err;
//     console.log(JSON.parse(data));



console.log("noteData");

module.exports = function(app) {

    //get request to the database, which sends back the data as JSON format
    // app.get("/api/notes", function (req, res) {
    //      fs.readFile("../db/db.json", (err, data) => {
    //         if(err){
    //             console.log(err)
    //         }
    //         console.log(data);
            
    //         res.json(data);
    //     });
    //   console.log("what now?")
    // res.JSON(noteData); 
    // });

    app.get("/api/notes", function(req, res) {
        fs.readFile("./db/db.json",  (err, data) => {
        if (err) throw err;
        parsedData = JSON.parse(data);
        res.send(parsedData);
        })
    }); 





    app.post("/api/notes", function(req, res) {
        console.log(req.body);
        res.send("Thanks!")
    })


    // app.post("/api/notes", function (req, res) {

    //     console.log(req.body)
    //     let note = req.body

    //     let notesArray = []; 

    //     fs.readFile("../db/db.json",  (err, data) => {
    //         if (err) throw err;
    //         console.log(JSON.parse(data));
    //         notesArray = JSON.parse(data);
    //         notesArray.push(note);


    //         res.JSON(note);

    //         fs.writeFile("../db/db.json", JSON.stringify(notesArray, null, 2), (err) => {
    //             if(err){
    //                 console.log(err)
    //             }           
    //         });            
    //    });
       
    // })

}