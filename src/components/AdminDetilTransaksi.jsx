/* eslint-disable react/prop-types */
import { useState } from "react";
import AdminAPi from "../../api/admin";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";

const AdminDetilTransaksi = ({ data, setShowDetail }) => {
  const [btnDisable, setBtnDisable] = useState(false);
  const [loading, setLoading] = useState(false);
  const [internalServerError, setInternalServerError] = useState("");
  const [showRejectComment, setshowRejectComment] = useState(false);
  const [showRejectPopUp, setshowRejectPopUp] = useState(false);

  const [confirmLoading, setConfirmLoading] = useState(false);
  const [komen, setKomen] = useState("");

  const redirect = useNavigate();

  const btnAccept = async (id) => {
    try {
      setBtnDisable(true);
      setLoading(true);

      await AdminAPi.finishTransaction(id);

      setShowDetail(false);
      window.location.href = "/admin";
    } catch (err) {
      if (err.response.status === 500) {
        setInternalServerError(err.message);
      } else if (err.response.status === 403) {
        redirect("/login");
      }
    }
  };

  const btnKomen = async () => {
    try {
      setConfirmLoading(true);
      setBtnDisable(true);
      await AdminAPi.rejectAndComment(data._id, {
        comment: komen,
      });

      setConfirmLoading(false);
      setTimeout(() => {
        window.location.href = "/admin";
      }, 500);
    } catch (err) {
      if (err.response.status === 403) {
        redirect("/login");
      }
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
        {data.rejectComment ? (
          <>
            <p className="col-span-2">Rejected comment</p>
            <p className="text-center">:</p>
            <p className="col-span-5">{data.rejectComment}</p>
          </>
        ) : (
          ""
        )}
      </div>
      {data.statusTransaksi ? (
        ""
      ) : (
        <div className="mt-10">
          {showRejectComment ? (
            <div>
              <form
                className="flex flex-col mb-5 gap-2"
                onSubmit={(e) => {
                  e.preventDefault();
                  setshowRejectPopUp(!showRejectPopUp);
                }}
              >
                <label htmlFor="reject-comment">Reject Comment</label>
                <p className="text-red-500 text-xs font-semibold">
                  * Please enter the reason why this transaction was rejected
                </p>
                <input
                  type="text"
                  id="reject-comment"
                  className="border border-slate-300 rounded-sm px-3 py-1"
                  required
                  onChange={(e) => setKomen(e.target.value)}
                />
                <button
                  type="submit"
                  className="bg-red-500 rounded-md py-3 text-white font-semibold mt-3"
                >
                  Confirm Reject
                </button>
              </form>
            </div>
          ) : (
            <div className="flex justify-between">
              <button
                className="bg-red-500 py-2 px-4 rounded-md text-white"
                disabled={btnDisable}
                onClick={() => setshowRejectComment(!showRejectComment)}
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
          )}
        </div>
      )}
      <div className=" flex justify-center mt-10">
        <button
          className="bg-blue-500 py-3 w-full rounded-md text-white"
          onClick={() => setShowDetail(false)}
          disabled={btnDisable}
        >
          Kembali
        </button>
      </div>
      {showRejectPopUp ? (
        // pop up confirm reject
        <div className="layar-hitam absolute z-[99] left-0 top-0 right-0 bottom-0 flex items-center justify-center text-center">
          <div className="bg-white p-10 rounded-lg">
            <i className="fa-solid fa-triangle-exclamation text-red-600 text-7xl mb-10"></i>
            <h1>Are You Sure Want To Reject This Transaction</h1>
            <h2>This action cannot be undone</h2>
            <div className="flex flex-col gap-3">
              <button
                className="bg-red-500 py-2 font-semibold text-white rounded-sm flex justify-center items-center"
                onClick={btnKomen}
              >
                {confirmLoading ? <Spinner /> : "Yes, reject this transaction"}
              </button>
              <button
                className="bg-blue-500 py-2 font-semibold text-white rounded-sm"
                disabled={btnDisable}
                onClick={() => (window.location.href = "/admin")}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default AdminDetilTransaksi;
