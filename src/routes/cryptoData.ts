import express from "express";
const router = express.Router();

// import controller

import cryptoData from "../controllers/cryptoData";

// route handling

router.get("/:cryptoName", cryptoData);

// export

export default router;
