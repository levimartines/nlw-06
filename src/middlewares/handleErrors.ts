import { NextFunction, Request, Response } from "express";
import { CustomError } from "../errors/CustomError";

export function handleErrors(err: Error, request: Request, response: Response, nextFunction: NextFunction) {
  console.log(err);

  if (err instanceof CustomError) {
    return response.status(err.status).json({ error: err.message });
  }
  if (err instanceof Error) {
    return response.status(400).json({ error: err.message });
  }
  return response.status(500).json({ error: "Internal Server Error" });

}
