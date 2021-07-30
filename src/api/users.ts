import Ajax from "../util/ajax";
import User from "../models/User";
import base64url from "base64url";
import utf8 from "utf8";
import LocalPersist from "../util/local-persist";
import jwtDecode from "jwt-decode";
class Users {
  private static readonly url = process.env.REACT_APP_USERS_URL as string;

  static get User() {
    const token = this.Jwt;
    if (token) return jwtDecode(this.Jwt) as User;
    return null;
  }

  static get Jwt() {
    return LocalPersist.get("jwt");
  }

  static async get(id: number): Promise<User> {
    let fetchedUser = await Ajax.get(`${this.url}/${id}`);
    return fetchedUser as User;
  }

  static async login(
    email: string,
    password: string,
    saveMe: boolean
  ): Promise<User> {
    let allUsers = await Ajax.get(this.url);
    let loggedUser = (allUsers as any[]).filter(
      (x) => x.email === email
    )[0] as User;

    if (!loggedUser) throw new Error("Wrong email and/or password");

    if (saveMe) this.setJwt(loggedUser);

    return loggedUser;
  }

  private static setJwt(user: User) {
    var header = {
      alg: "HS256",
      typ: "JWT",
    };

    var stringifiedHeader = utf8.encode(JSON.stringify(header));
    var encodedHeader = base64url(stringifiedHeader);

    var stringifiedData = utf8.encode(JSON.stringify(user));
    var encodedData = base64url(stringifiedData);

    var token = encodedHeader + "." + encodedData;
    LocalPersist.set("jwt", token);
  }
}

export default Users;
