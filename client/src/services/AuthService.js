import axios from "../axios/axios";
export default class AuthService {
  static async getLoggedInUser() {
    const response = await axios.get("/auth/user").catch((err) => err);

    if (response?.status === 200) return response.data;

    throw Error("Unauthorized");
  }

  static async logIn(email, password) {
    const response = await axios
      .post("/auth/login", { email: email, password: password })
      .catch((err) => err);

    if (response?.status === 200) return response.data;

    throw Error("Unauthorized");
  }

  static async logOut() {
    console.log("LOGOUT");
    await axios.get("/auth/logout").catch((err) => err);
  }
}
