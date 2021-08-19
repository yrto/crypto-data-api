import express from "express";
const router = express.Router();

// import controller

import cryptoHistory from "../controllers/cryptoHistory";

// route handling

router.get("/", cryptoHistory);

// export

export default router;
