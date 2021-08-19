import dotenv from "dotenv";

dotenv.config();

const { MONGO_DB, CRYPTO_API_URL } = process.env;

export { MONGO_DB, CRYPTO_API_URL };
