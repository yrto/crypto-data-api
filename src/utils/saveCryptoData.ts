import mongoose from "mongoose";
const { Schema } = mongoose;
import { CryptoData } from "./dataTypes";

// connections

const mongooseConnect = async (MONGO_URL: string) => {
  try {
    await mongoose.connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (err) {
    throw new Error(err);
  }
};

const mongooseDisconnect = async () => {
  await mongoose.disconnect();
};

// schema

const cryptoDataSchema = new Schema<CryptoData>({
  name: String,
  priceUsd: String,
  timestamp: String,
});

// model

const CryptoDataModel = mongoose.model<CryptoData>(
  "CryptoData",
  cryptoDataSchema
);

// save

const mongooseSave = async (cryptoData: CryptoData) => {
  try {
    const newCryptoData = new CryptoDataModel(cryptoData);
    await newCryptoData.save();
  } catch (err) {
    throw new Error(err);
  }
};

// main function

async function saveCryptoData(
  cryptoData: CryptoData,
  url: string
): Promise<void> {
  try {
    await mongooseConnect(url);
    await mongooseSave(cryptoData);
  } catch (err) {
    throw new Error(err);
  }
  await mongooseDisconnect();
}

// export funcao

export default saveCryptoData;
