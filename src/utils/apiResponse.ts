import { Response } from "express";

export class ApiError extends Error
{
  statusCode
  isSuccess
  errors=[];
  stack:string|undefined="";

  constructor(statusCode:number,message:string, errors?:any,stack?:string)
  {
    super();
    this.statusCode=statusCode;
    this.message=message;
    this.errors=errors;
    this.stack=stack;
    this.isSuccess=false;
  }

}

export class ApiSuccess
{
  statusCode:number
  message:string
  data:any
  isSuccess:boolean
  constructor(statusCode:number,message:string, data?:any,isSuccess:boolean=true)
  {
    this.statusCode=statusCode;
    this.message=message;
    this.data=data;
    this.isSuccess=isSuccess;
  }
  sendResponse(res:Response)
  {
    res.status(this.statusCode).json(this)
  }
}

