import { Request, Response, NextFunction } from "express";

import logger from "../services/logger";

// log path of the requests

const logPathMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  logger.info(req.path);
  next();
};

// export

export default logPathMiddleware;
