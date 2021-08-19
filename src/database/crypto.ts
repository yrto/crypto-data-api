import mongoose from "mongoose";
import { CryptoData } from "../types/cryptoData";

// schema

const { Schema } = mongoose;

const cryptoSchema = new Schema<CryptoData>({
  name: String,
  priceUsd: String,
  timestamp: String,
});

// model

const CryptoModel = mongoose.model<CryptoData>("CryptoData", cryptoSchema);

// export

export { cryptoSchema, CryptoModel };
