import { NextFunction } from "express";

export const asyncHandler=(requestHandler:any):any=>(req:Request,res:Response,next:NextFunction)=>
    {
        Promise.resolve(requestHandler(req,res,next)).catch((error)=>next(error))
    }

 