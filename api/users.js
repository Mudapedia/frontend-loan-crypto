import axiosIns from "./axiosIns";

class UsersApi {
  static addUser(body) {
    return axiosIns.post("/users", body);
  }

  static editUser(id, body) {
    return axiosIns.put(`/users/${id}`, body);
  }
}

export default UsersApi;
