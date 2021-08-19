import logger from "../services/logger";

const errorTreatmentMiddleware = (
  err: any,
  req: any,
  res: any,
  next: any
): void => {
  logger.error(err.message);
  res.status(500).send("Not ok!");
};

export default errorTreatmentMiddleware;
