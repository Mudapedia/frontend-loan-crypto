import axiosIns from "./axiosIns";

class UsersApi {
  static add(body) {
    return axiosIns.post("/users", body);
  }
}

export default UsersApi;
