import Member from "../models/member.model";

export interface UserRepository 
{
    registerMember(member:Member):Promise<Member>;
    deleteMemberById(memberId:any):Promise<number>;
    findMemberById(memberId:any):Promise<Member|null>;
    updateMemberById(memberId:any,memberData:any):Promise<Member|null>;
}