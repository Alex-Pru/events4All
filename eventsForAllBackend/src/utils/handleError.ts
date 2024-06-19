import { Response } from "express";

export const handleError = (error: any, res: Response) => {
  if (error.message === "Fill all required information") {
    res.status(400).send("Preencha todas as informações solicitadas");
  } else if (error.message === "Email already registered") {
    res.status(409).send("Email já cadastrado");
  } else if (error.message === "Invalid Credentials") {
    res.status(401).send("Credenciais inválidas");
  } else if (error.message === "Unauthorized Access") {
    res.status(401).send("Acesso não autorizado");
  } else if (error.message === "Send new name or password") {
    res.status(400).send("Envie o novo nome ou senha");
  } else {
    res.status(500).send({ message: "Internal Server Error" });
  }
};
