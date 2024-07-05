import axiosIns from "./axiosIns";

class Auth {
  static login(body) {
    return axiosIns.post("/login", body);
  }
  static isLogin() {
    return axiosIns.get("/islogin");
  }
}

export default Auth;
