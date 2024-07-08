/* eslint-disable react/prop-types */
import { useState } from "react";
import AdminAPi from "../../api/admin";
import Spinner from "./Spinner";

const AdminDetilTransaksi = ({
  data,
  setShowDetail,
  setTransactionNotFinish,
}) => {
  const [btnDisable, setBtnDisable] = useState(false);
  const [loading, setLoading] = useState(false);
  const [internalServerError, setInternalServerError] = useState("");

  const btnAccept = async (id) => {
    try {
      setBtnDisable(true);
      setLoading(true);

      await AdminAPi.finishTransaction(id);

      setTransactionNotFinish((prev) => {
        return prev.filter((v) => v._id != id);
      });

      setShowDetail(false);
    } catch (err) {
      if (err.response.status === 500) {
        setInternalServerError(err.message);
      }
      console.log(err);
    }
  };
  return internalServerError ? (
    <div>
      <p className="text-red-500">{internalServerError}</p>
    </div>
  ) : (
    <div className="bg-white top-0 left-0 right-0 bottom-0 p-10 absolute">
      <h1 className="font-bold text-lg text-center mb-5">Transaction Detail</h1>
      <div className="grid grid-cols-8 gap-3">
        <p className="col-span-2">Transaction Code</p>
        <p className="text-center">:</p>
        <p className="col-span-5">{data.codeTransaksi}</p>
        <p className="col-span-2">Name</p>
        <p className="text-center">:</p>
        <p className="col-span-5">{data.name}</p>
        <p className="col-span-2">Email</p>
        <p className="text-center">:</p>
        <p className="col-span-5">{data.email}</p>
        <p className="col-span-2">Phone Number</p>
        <p className="text-center">:</p>
        <p className="col-span-5">{data.noHP}</p>
        <p className="col-span-2">Loan Request</p>
        <p className="text-center">:</p>
        <p className="col-span-5">{data.loan}</p>
        <p className="col-span-2">Loan Fee</p>
        <p className="text-center">:</p>
        <p className="col-span-5">{data.fee}</p>
        <p className="col-span-2">Transaction Date</p>
        <p className="text-center">:</p>
        <p className="col-span-5">{data.created_at}</p>
        <p className="col-span-2">Transaction Time</p>
        <p className="text-center">:</p>
        <p className="col-span-5">{data.jam}</p>
        <p className="col-span-2">Customer Wallet Address</p>
        <p className="text-center">:</p>
        <p className="col-span-5">{data.walletAddress}</p>
        <p className="col-span-2">Fee Payment Hash</p>
        <p className="text-center">:</p>
        <p className="col-span-5">{data.buktiHash}</p>
      </div>
      <div className="flex justify-between mt-10">
        <button
          className="bg-red-500 py-2 px-4 rounded-md text-white"
          disabled={btnDisable}
        >
          Reject
        </button>
        <button
          className="bg-green-500 py-2 px-4 rounded-md text-white"
          disabled={btnDisable}
          onClick={() => btnAccept(data._id)}
        >
          {loading ? <Spinner /> : " Accept"}
        </button>
      </div>
      <div className=" flex justify-center mt-10">
        <button
          className="bg-blue-500 py-3 w-full rounded-md text-white"
          onClick={() => setShowDetail(false)}
          disabled={btnDisable}
        >
          Kembali
        </button>
      </div>
    </div>
  );
};

export default AdminDetilTransaksi;
