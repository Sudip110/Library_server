import express from "express";
import memberRoutes from "./routes/routes.member";
import { errorHandler } from "./middlewares/errorHandler";

const app = express();
app.use(express.json());
app.use('/library/api/members',memberRoutes)
app.use(errorHandler);
export default app;