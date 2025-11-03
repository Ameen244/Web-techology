const{app}= require('./index')
const port=3000;
app.listen(Port,()=>{
    console.log(`Server is running on port ${PORT}`);
});
const db_access = require('./db.js');
const db = db_access.db;

//Initialize database tables
db.serialize(() => {
    db.run(db_access.createTripTable, (err) => {
        if (err) console.log('Error creating trip table:', err.message);
    });
db.run(db_access.createUserTable, (err) => {
    if (err) console.log('Error creating user table:', err.message);
    });
});

