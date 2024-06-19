import { Request, Response, NextFunction } from "express";
import { Authenticator } from "../services/Authenticator";

const authenticator = new Authenticator();

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).send({ message: "Acesso não autorizado" });
    }

    const tokenData = authenticator.getTokenData(token);
    if (!tokenData) {
      return res.status(401).send({ message: "Token inválido ou expirado" });
    }

    req.user = tokenData;

    next();
  } catch (error) {
    return res.status(401).send({ message: "Acesso não autorizado" });
  }
};
