import Member from "../models/member.model";
import { MemberRepository } from "../repositories/member.repository";
import { ApiError } from "../utils/apiResponse";

export class MemberService
{
    memberRepository:MemberRepository
    constructor(memberRepository:MemberRepository)
    {
        this.memberRepository=memberRepository;
    }

    async registerMember(member:Member):Promise<Member|undefined>
    {
    //     const requiredFields = ["firstname","lastname","dateofbirth","emailid","phoneNumber","address","password"]
    //    requiredFields.some((field)=>{
    //     if(!member.hasOwnProperty(field))
    //         throw new ApiError(400,`${field.toUpperCase()} field is required!!`);
    //     })
        
    // Object.entries(member).forEach(([field,value])=>{
    //     if(!value||(typeof value === 'string' && value.trim()===""))
    //         throw new ApiError(400,`${field?.toUpperCase()} field is required!!`)
    //  })
     const{emailid,phoneNumber}=member;
     const emailidRegex = /^[a-zA-Z0-9._%±]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/
     const phoneRegex = /^\d{10}$/
    
     if(!emailidRegex.test(emailid))
        throw new ApiError(400,`Please enter a valid email id!`);
     if(!phoneRegex.test(phoneNumber?.toString()))
        throw new ApiError(400,`Please enter a valid phone number!`);

     if(await this.memberRepository.findMemberByEmail(emailid))
        throw new ApiError(400,`User with the same email id already exists!`);
     return await this.memberRepository.registerMember(member);

    }

    async deleteMemberById(memberId:any)
    {
        if(!memberId)
            throw new ApiError(400,"memberId is required!");
        if(! await this.findMemberById(memberId))
            throw new ApiError(400,"member with this Id does not exist!")
        return await this.memberRepository.deleteMemberById(memberId);
    }

    async findMemberById(memberId:any)
    {
        if(!memberId)
            throw new ApiError(400,"memberId is required!");
        
        const member = await this.memberRepository.findMemberById(memberId);
        if(member)
            return member
        else
          throw new ApiError(400,"Member with the given memberId does not exist!");
    }

    async updateMemberById(memberId:any,memberData:any)
    {
        if(!memberId)
            throw new ApiError(400,"memberId is required!");
      if(! await this.findMemberById(memberId))
         throw new ApiError(400,"Member with the given member id does not exist!")

      const filreredData = Object.fromEntries(Object.entries(memberData).filter(([key,value])=> value!=='' && value!==null))
      return await this.memberRepository.updateMemberById(memberId,filreredData);
    }
}