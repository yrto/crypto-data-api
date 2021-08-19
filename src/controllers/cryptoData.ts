import { Request, Response, NextFunction } from "express";
import fetchCryptoData from "../services/fetchCryptoData";
import saveCryptoData from "../services/saveCryptoData";

// controller

const cryptoData = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const cryptoName = req.params.cryptoName;
  try {
    const cryptoRes = await fetchCryptoData(cryptoName);
    if (cryptoRes) {
      await saveCryptoData(cryptoRes);
      res.status(200).send([cryptoRes]);
    } else res.status(404).send("Not found!");
  } catch (err) {
    next(err);
  }
};

// export

export default cryptoData;
