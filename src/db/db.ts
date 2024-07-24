import {Sequelize} from "sequelize";
const sequelize = new Sequelize('Library','postgres','Ryzen@#543210',{
    host:'localhost',
    dialect:'postgres',
    port:4848
 })

 export default sequelize;