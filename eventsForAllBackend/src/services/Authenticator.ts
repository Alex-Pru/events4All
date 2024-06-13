import { AuthenticationData } from "../types";
import * as jwt from "jsonwebtoken";

export class Authenticator {
  generateToken(info: AuthenticationData): string {
    const token = jwt.sign({ id: info.id }, "justanothersecret", {
      expiresIn: "0.5h",
    });
    return token;
  }

  getTokenData(token: string): AuthenticationData {
    const payload = jwt.verify(token, "justanothersecret");
    return payload as AuthenticationData;
  }
}
