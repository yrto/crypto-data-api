import mongoose from "mongoose";
import logger from "./services/logger";

// db connection

const mongooseConnect = async (MONGO_DB: string): Promise<void> => {
  try {
    logger.info(`Connecting to ${MONGO_DB}`);
    await mongoose.connect(MONGO_DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    logger.info("Database connected");
  } catch (err) {
    logger.error(err.message);
  }
};

// export

export default mongooseConnect;
