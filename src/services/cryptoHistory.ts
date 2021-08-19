import { CryptoModel } from "../database/crypto";
import { CryptoData } from "../types/cryptoData";

// read

const cryptoHistoryService = async (): Promise<CryptoData[]> => {
  try {
    const cryptoHistory = await CryptoModel.find({});
    return cryptoHistory;
  } catch (err) {
    throw new Error(err);
  }
};

// export

export default cryptoHistoryService;
