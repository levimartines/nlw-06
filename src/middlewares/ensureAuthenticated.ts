import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export function ensureAuthenticated(req: Request, res: Response, next: NextFunction) {

  const bearerToken = req.headers.authorization;

  if (!bearerToken) {
    return res.status(403).end();
  }

  const token = bearerToken.split(" ")[1];
  try {
    const { sub } = verify(token, "GOKUSS5") as IPayload;
    req.user_id = sub;
    return next();
  } catch (err) {
    return res.status(401).end();
  }

}
