import { UUID } from "crypto";
import sequelize from "../db/db";
import {Model, InferAttributes, InferCreationAttributes, CreationOptional,DataTypes } from "sequelize";
import { User } from "../interfaces/interface.user.model";

class Member  extends Model<InferAttributes<Member>, InferCreationAttributes<Member>> implements User
{
    declare memberId:CreationOptional<UUID>
    declare firstname:string;
    declare lastname:string;
    declare dateofbirth: Date;
    declare emailid:string;   
    declare phoneNumber: number;
    declare password:string;
    declare address:string;
}

Member.init({
memberId:{
    type:DataTypes.UUID,
    defaultValue:DataTypes.UUIDV4,
    primaryKey:true
},
firstname:{
    type:DataTypes.STRING,
    allowNull:false
},
lastname:{
    type:DataTypes.STRING,
    allowNull:false
},
dateofbirth:
{
    type:DataTypes.DATE,
    allowNull:true
}
,
emailid:{
    type:DataTypes.STRING,
    allowNull:false
},
phoneNumber:
{
    type:DataTypes.STRING,
    allowNull:false
}
,
password:{
    type:DataTypes.STRING,
    allowNull:false
},
address:
{
    type:DataTypes.STRING,
    allowNull:true
}
},{sequelize,
    modelName:"Member"
})

export default Member;
