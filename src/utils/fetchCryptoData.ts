import axios from "axios";
import formatUnixDate from "./formatUnixDate";
import { CryptoData } from "./dataTypes";

async function fetchCryptoData(name: string): Promise<CryptoData> {
  try {
    // fetch
    const res = await axios.get(`https://api.coincap.io/v2/assets/${name}`);
    const cryptoDataRaw = res.data;
    // isolate
    const cryptoName = cryptoDataRaw.data.name;
    const cryptoPriceUsd = parseFloat(cryptoDataRaw.data.priceUsd).toFixed(2);
    const cryptoTimestamp = formatUnixDate(cryptoDataRaw.timestamp);
    // assign values to object
    const cryptoData = {
      name: cryptoName,
      priceUsd: cryptoPriceUsd,
      timestamp: cryptoTimestamp,
    };
    // return
    return cryptoData;
    // catch
  } catch (err) {
    // throw errors
    throw new Error(err);
  }
}

export default fetchCryptoData;
