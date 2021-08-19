import winston from "winston";

// logger setup

const logger = winston.createLogger({
  level: "info",
  transports: [
    new winston.transports.Console({
      format: winston.format.cli(),
    }),
  ],
});

// export

export default logger;
