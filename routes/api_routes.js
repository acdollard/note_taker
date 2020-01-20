let fs = require("fs"); 




module.exports = function(app) {

    //get request to the database, which sends back the data as JSON format
    app.get("/api/notes", function (req, res) {
         fs.readFile("./db/db.json", (err, data) => {
            if(err){
                console.log(err)
            }
            console.log(data);
            
            res.json(JSON.parse(data))
       });
    });


    app.post("api/notes", function (req, res) {
        fs.readFile("./db/db.json" , (err, data) => {
            if(err){
                console.log(err)
            }
            console.log(data)
            
       })

        fs.writeFile(notes, JSON.stringify(req.body), (err) => {
            if(err){
                console.log(err)
            }
            
       })
    })

}