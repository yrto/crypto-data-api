import express from "express";
const router = express.Router();

// import routes

import healthRoute from "./health";
import cryptoHistoryRoute from "./cryptoHistory";
import cryptoDataRoute from "./cryptoData";

// use imported routes

router.use("/health", healthRoute);
router.use("/crypto-history", cryptoHistoryRoute);
router.use("/crypto-data", cryptoDataRoute);

// export

export default router;
