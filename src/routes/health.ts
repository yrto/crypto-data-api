import express from "express";
const router = express.Router();

// import controller

import health from "../controllers/health";

// route handling

router.get("/", health);

// export

export default router;
