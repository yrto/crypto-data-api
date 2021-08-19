import { CryptoData } from "../types/cryptoData";
import { CryptoModel } from "../database/crypto";
import logger from "./logger";

const saveCryptoData = async (cryptoData: CryptoData): Promise<void> => {
  try {
    const newCryptoData = new CryptoModel(cryptoData);
    await newCryptoData.save();
    logger.info("Crypto data saved");
  } catch (err) {
    throw new Error(err);
  }
};

export default saveCryptoData;
