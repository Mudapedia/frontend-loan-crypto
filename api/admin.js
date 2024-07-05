import axiosIns from "./axiosIns";

class AdminAPi {
  static getTransactionFinish() {
    return axiosIns.get("/admin/transaction-finish");
  }
  static getTransactionNotFinish() {
    return axiosIns.get("/admin/transaction-not-finish");
  }
}

export default AdminAPi;
