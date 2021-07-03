import fetchCryptoData from "./utils/fetchCryptoData";
import saveCryptoData from "./utils/saveCryptoData";

const MONGO_URL = "mongodb://localhost:27017/crypto-data";

const main = async (name: string): Promise<void> => {
  try {
    const cryptoData = await fetchCryptoData(name);
    console.log(cryptoData);
    await saveCryptoData(cryptoData, MONGO_URL);
  } catch (err) {
    console.log(err);
  }
};

main("bitcoin");
