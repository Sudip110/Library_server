import { Router } from "express";
import {asyncHandler} from "../utils/asyncHandler";
import { deleteMemberById, findMemberById, registerMember, updateMemberById } from "../controllers/member.controller";

const memberRoutes = Router();
const registerMemberRoute = asyncHandler(registerMember);
const deletememberRoute = asyncHandler(deleteMemberById);
const findMemberRoute = asyncHandler(findMemberById);
const updateMemberRoute = asyncHandler(updateMemberById);
memberRoutes.post('/registerMember',registerMemberRoute);
memberRoutes.get('/findMemberById',findMemberRoute);
memberRoutes.post('/updateMemberById',updateMemberRoute);
memberRoutes.delete('/deleteMemberById',deletememberRoute);
export default memberRoutes;
