import express from "express";
import memberRoutes from "./routes/routes.member";
import { errorHandler } from "./middlewares/errorHandler";
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

// Configure CORS
app.use(cors({
  origin: 'http://localhost:3000', // React app URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));


app.use(express.json());
app.use('/library/api/members',memberRoutes)
app.use(errorHandler);
export default app;