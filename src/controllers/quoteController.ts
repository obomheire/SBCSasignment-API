import express, {
  Request,
  Response,
  NextFunction,
  ErrorRequestHandler,
} from "express";
import axios from "axios";

//Random quote controller
export const getQuote = async (req: Request, res: Response) => {
  try {
    const response = await axios.get("https://type.fit/api/quotes");
    const data = await response.data;
    const randomQuote = data[Math.floor(Math.random() * data.length)];
    res.status(200).send({ quote: randomQuote });
  } catch (error) {
    res.status(400).json({ success: false, Message: "Error fetching quote!" });
  }
};
