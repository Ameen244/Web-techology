const{app}= require('./index')
const db_access= require('./db.js');
const db = db_access.db;

//initialize database
db_access.db.serialize(()=>{

    db.run(db_access.createTripTable, (err)=>{
        if(err)
            console.log("Error creating trips table", err.message);
        
    });
});
//start server
const port=3000;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});
