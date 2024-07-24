import { UserRepository} from "../interfaces/interface.user.repository";
import Member from "../models/member.model";

export class MemberRepository implements UserRepository
{
    async registerMember(member: Member): Promise<Member> {
        return await Member.create(member);
    }

    async deleteMemberById(memberId: any): Promise<number> {
        return await Member.destroy({where:{memberId:memberId}});
    }

    async findMemberById(memberId:any):Promise<Member|null>
    {
        return await Member.findOne({where:{memberId:memberId}});
    }
    
    async findMemberByEmail(email:string):Promise<Member|null>
    {
        return await Member.findOne({where:{emailid:email}});
    }
}