import axios from "axios";
import users from "../api/users";

class Ajax {
  public static async get(url: string) {
    let token = users.Jwt;
    if (token) axios.defaults.headers.common["x-auth-token"] = token;

    const promise = axios.get(url);
    const response = await promise;

    return response.data;
  }
}

export default Ajax;
