import axiosIns from "./axiosIns";

class AdminAPi {
  static getTransactionFinish() {
    return axiosIns.get("/admin/transaction-finish");
  }
  static getTransactionNotFinish() {
    return axiosIns.get("/admin/transaction-not-finish");
  }
  static finishTransaction(id) {
    return axiosIns.put(`/admin/finished-transaction/${id}`);
  }
  static rejectAndComment(id, body) {
    return axiosIns.put(`/admin/comment/${id}`, body);
  }
}

export default AdminAPi;
