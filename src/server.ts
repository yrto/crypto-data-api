import { MONGO_DB } from "./config";
import express from "express";
import routes from "./routes";
import mongooseConnect from "./database";
import logger from "./services/logger";
import logPathMiddleware from "./middlewares/logPath";
import errorTreatmentMiddleware from "./middlewares/errorTreatment";

// set up

const server = express();

// using middlewares & routes

server.use(express.static("public"));
server.use(express.json());
server.use(logPathMiddleware);
server.use("/v1/", routes);
server.use(errorTreatmentMiddleware);

// listen

const MONGO_DB_URL: string = MONGO_DB as string;

mongooseConnect(MONGO_DB_URL);

const port = process.env.PORT || 3000;

server.listen(port, () => {
  logger.info(`App listening at http://localhost:${port}`);
});
