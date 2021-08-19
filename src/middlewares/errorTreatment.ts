import { Request, Response } from "express";

import logger from "../services/logger";

const errorTreatmentMiddleware = (
  err: Error,
  req: Request,
  res: Response
): void => {
  logger.error(err.message);
  res.status(500).send("Not ok!");
};

export default errorTreatmentMiddleware;
