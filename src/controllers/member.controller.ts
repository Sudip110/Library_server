import { NextFunction, Request, Response } from "express";
import { MemberRepository } from "../repositories/member.repository";
import { MemberService } from "../services/member.service";
import { ApiSuccess } from "../utils/apiResponse";

const memberRepository = new MemberRepository();
const memberService = new MemberService(memberRepository);

export const registerMember = async (req:Request,res:Response,next:NextFunction)=>
{
    const member = await memberService.registerMember(req.body);
    const response = new ApiSuccess(200,"Member registered Successfully!",member);
    response.sendResponse(res);

}

export const deleteMemberById = async (req:Request,res:Response,next:NextFunction)=>
    {
        const {memberId} = req.query;
        await memberService.deleteMemberById(memberId);
        const response = new ApiSuccess(200,"Member deleted successfully!");
        response.sendResponse(res);
    }