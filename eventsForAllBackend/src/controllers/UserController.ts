import { Request, Response } from "express";
import UserModel from "../models/UserModel";
import { handleError } from "../utils/handleError";
export default class UserController {
  private userModel: UserModel;

  constructor() {
    this.userModel = new UserModel();
  }

  register = async (req: Request, res: Response) => {
    try {
      const { name, email, password } = req.body;

      const token = await this.userModel.create(name, email, password);

      res.status(201).send({ token });
    } catch (error: any) {
      handleError(error, res);
    }
  };

  login = async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;

      const token = await this.userModel.login(email, password);

      res.status(200).send({ token });
    } catch (error) {
      handleError(error, res);
    }
  };

  editUser = async (req: Request, res: Response) => {
    try {
      const { name, password } = req.body;
      const { user } = req;

      await this.userModel.edit(user.id, name, password);

      res.status(200).send("Usuário atualizado com sucesso!");
    } catch (error) {
      handleError(error, res);
    }
  };

  deleteUser = async (req: Request, res: Response) => {
    try {
      const { user } = req;
      await this.userModel.delete(user.id);

      res.status(200).send("Usuário excluído com sucesso");
    } catch (error) {
      handleError(error, res);
    }
  };
}
