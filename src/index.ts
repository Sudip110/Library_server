
import sequelize from "./db/db";
import app from "./app";

const startServer = ()=>
    {
        try {
            sequelize.authenticate();
            sequelize.sync();
            console.log('Connected to DB successfully!')
            app.listen(4272,
                ()=>{console.log('Server is listening on port 4272')})
        } catch (error) {
            console.log("Error connecting to DB!",error);
        }
    }
startServer();