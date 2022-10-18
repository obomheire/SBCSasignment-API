import express, {
  Application,
  Request,
  Response,
} from "express";
import { config } from "dotenv";
config();
import morgan from "morgan";
import { Server } from "http";
import errorHandler from "./utils/errorHandler";
import authJwt from "./utils/jwt";
import cors from "cors";
import usersRoutes from "./auth-service/routes/usersRoute";
import quoteRoutes from "./quote-service/routes/quoteRoute";

//App variables
const app: Application = express();
const api = process.env.API_URL;

//Middlewares
app.use(cors());
app.use(authJwt());
app.use(morgan("dev"));
app.use(errorHandler());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes
app.use(`${api}/users`, usersRoutes);
app.use(`${api}/random`, quoteRoutes);
app.get("/", (req: Request, res: Response) => {
  res.send({ status: "Running", message: "Hello from microservices API" });
});

//App Port
const PORT = process.env.PORT || 3000;

//App Server
const server: Server = app.listen(PORT, () => {
  console.log(`App listning on port ${PORT}`);
});


export default app;
