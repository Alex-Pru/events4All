import { Request, Response } from "express";
import connection from "../data/connection";
import { User } from "../types";
import { IdGenerator } from "../services/IdGenerator";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";

export default async function createUser(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      throw new Error("Preencha todos os campos");
    }

    const [user] = await connection("users").where({ email });

    if (user) {
      res.statusCode = 409;
      throw new Error("Email já cadastrado");
    }

    const id: string = new IdGenerator().generateId();

    const cypherPassword = new HashManager();
    const passwordHash = await cypherPassword.hash(password);

    const newUser: User = { id, name, email, password: passwordHash };
    await connection("users").insert(newUser);

    const auth = new Authenticator();
    const token = auth.generateToken({ id: newUser.id });

    res.status(201).send({ token });
  } catch (error: any) {
    if (res.statusCode === 200) {
      res.status(500).send({ message: "Internal Server Error" });
    } else {
      res.send({ message: error.message });
    }
  }
}
