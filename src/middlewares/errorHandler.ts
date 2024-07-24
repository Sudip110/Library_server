import { NextFunction, Request, Response } from "express";
import { ApiError } from "../utils/apiResponse";
export const errorHandler = (err:ApiError,req:Request,res:Response,next:NextFunction)=>
{
    const errorResponse = {
        statusCode:err.statusCode || 500,
        message:err.message
    }

    res.status(errorResponse.statusCode).json(errorResponse);

}
