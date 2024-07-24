import { Router } from "express";
import {asyncHandler} from "../utils/asyncHandler";
import { registerMember } from "../controllers/member.controller";

const memberRoutes = Router();
const registerMemberRoute = asyncHandler(registerMember);
memberRoutes.post('/registerMember',registerMemberRoute)

export default memberRoutes;
