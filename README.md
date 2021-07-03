# Fetch Crypto Data

Small **Node.js** and **TypeScript** project that fetches cryptocurrency data from the **[CoinCap API](https://docs.coincap.io/)** and saves it to a MongoDB database. This project is using:

```
- axios
- momment
- mongoose
```

And return a formated object:

```javascript
{
  name: 'Bitcoin',
  priceUsd: '33743.26',
  timestamp: '03/07/2021 12:27 am'
}
```

Local tests were made with a **Docker** instance of **MongoDB** using:

```bash
docker run -d -p 27017:27017 mongo
```
