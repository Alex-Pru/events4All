import connection from "../data/connection";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import { UpdateData, User } from "../types";

export default class UserModel {
  private hashManager: HashManager;
  private authenticator: Authenticator;
  private idGenerator: IdGenerator;

  constructor() {
    this.hashManager = new HashManager();
    this.authenticator = new Authenticator();
    this.idGenerator = new IdGenerator();
  }

  create = async (
    name: string,
    email: string,
    password: string
  ): Promise<string> => {
    if (!name || !email || !password) {
      throw new Error("Fill all required information");
    }

    const [user] = await connection("users").where({ user_email: email });

    if (user) {
      throw new Error("Email already registered");
    }

    const id: string = this.idGenerator.generateId();

    const passwordHash = await this.hashManager.hash(password);

    const newUser: User = {
      user_id: id,
      user_name: name,
      user_email: email,
      user_password: passwordHash,
    };
    await connection("users").insert(newUser);

    const token = this.authenticator.generateToken({ id: newUser.user_id });

    return token;
  };

  login = async (email: string, password: string): Promise<string> => {
    if (!email || !password) {
      throw new Error("Fill all required information");
    }

    const [user] = await connection("users").where({ user_email: email });

    if (!user) {
      throw new Error("Invalid Credentials");
    }

    const passwordIsCorrect: boolean = await this.hashManager.compare(
      password,
      user.user_password
    );

    if (!passwordIsCorrect) {
      throw new Error("Invalid Credentials");
    }

    const token = this.authenticator.generateToken({ id: user.id });

    return token;
  };

  edit = async (
    id: string,
    name?: string,
    password?: string
  ): Promise<void> => {
    if (!id) throw new Error("Unauthorized Access");

    if (!name && !password) throw new Error("Send new name or password");

    const updateData: UpdateData = {};

    if (name) updateData.user_name = name;
    if (password) {
      const newPasswordHash = await this.hashManager.hash(password);
      updateData.user_password = newPasswordHash;
    }

    await connection("users").update(updateData).where({ user_id: id });

    return;
  };

  delete = async (id: string): Promise<void> => {
    if (!id) throw new Error("Unauthorized Access");

    await connection("users").delete().where({ user_id: id });

    return;
  };
}
