import { Request, Response } from "express";

// controller

const health = (req: Request, res: Response): void => {
  res.status(200).send("OK");
};

// export

export default health;
