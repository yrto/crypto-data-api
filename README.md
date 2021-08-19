# Fetch Crypto Data

API made with **Node.js**, **Express** and **TypeScript** that fetches cryptocurrency data from the **[CoinCap API](https://docs.coincap.io/)** and saves it to a Mongo database. This project is using:

```
- express
- axios
- moment
- mongoose
- nodemon
- winston
- dotenv
```

# `crypto-data`

This is the **main route**. It takes a cryptocurrency name as a route parameter, fetches data from the **CoinCap API**, formats it, saves it to a Mongo database and sends the data back.

### GET

```
http://localhost:3000/v1/crypto-data/bitcoin
```

Here's a **RES** example for **Bitcoin** (timestamp is in UTC):

```typescript
{
  name: 'Bitcoin',
  priceUsd: '33743.26',
  timestamp: '03/07/2021 12:27 am'
}
```

# **`crypto-history`**

This is a **secondary route** that sends all previous requests as **RES**.

### GET

```
http://localhost:3000/v1/crypto-history
```

# **`scripts`**

### npm run dev

```bash
nodemon src/index.ts
```

### npm start

```bash
tsc && node build/index.js
```

# `Docker setup`

```bash
docker run -d -p 27017:27017 mongo
```
