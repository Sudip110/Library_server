import Member from "../models/member.model";

export interface UserRepository 
{
    registerMember(member:Member):Promise<Member>;
    deleteMemberById(memberId:any):Promise<number>;
}