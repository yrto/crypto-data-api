import { Request, Response } from "express";
import cryptoHistoryService from "../services/cryptoHistory";
import { CryptoData } from "../types/cryptoData";

// controller

const cryptoHistory = async (req: Request, res: Response): Promise<void> => {
  const cryptoRaw = await cryptoHistoryService();
  const cryptoParsed = cryptoRaw.map((crypto: CryptoData) => ({
    name: crypto.name,
    priceUsd: crypto.priceUsd,
    timestamp: crypto.timestamp,
  }));
  res.status(200).send(cryptoParsed);
};

// export

export default cryptoHistory;
