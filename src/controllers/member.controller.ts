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

export const findMemberById = async (req:Request,res:Response,next:NextFunction)=>
    {
        const {memberId}=req.query;
        const member = await memberService.findMemberById(memberId);
        const response = new ApiSuccess(200,"Member found successfully!",member);
        response.sendResponse(res);
    }

export const updateMemberById=async (req:Request,res:Response,next:NextFunction)=>
{
    const {memberId}=req.query;
    await memberService.updateMemberById(memberId,req.body);
    const response = new ApiSuccess(200,"Member updated Successfully!!")
    response.sendResponse(res);
}