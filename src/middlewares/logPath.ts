import logger from "../services/logger";

// log path of the requests

const logPathMiddleware = (req: any, res: any, next: any): void => {
  logger.info(req.path);
  next();
};

// export

export default logPathMiddleware;
