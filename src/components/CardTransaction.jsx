import { useEffect, useState } from "react";

/* eslint-disable react/prop-types */
const CardTransaction = ({
  setShowDetail,
  v,
  setDetailData,
  transactionDate,
  transactionHour,
}) => {
  const [status, setStatus] = useState("Pending");
  const [statusColor, setStatusColor] = useState("bg-yellow-300");

  useEffect(() => {
    if (v.statusTransaksi) {
      if (v.rejectComment) {
        setStatus("Finished");
        setStatusColor("bg-green-400");
      } else {
        setStatus("Rejected");
        setStatusColor("bg-red-400");
      }
    }
  }, [v.statusTransaksi, v.rejectComment]);

  return (
    <div
      className="bg-slate-400 my-5 p-4 rounded-md grid grid-cols-8 cursor-pointer relative"
      onClick={() => {
        setShowDetail(true);
        v.created_at = transactionDate;
        v.jam = transactionHour;
        setDetailData(v);
      }}
    >
      <div
        className={`absolute ${statusColor} py-1 px-2 right-3 top-3 rounded-md font-semibold text-sm`}
      >
        <p>{status}</p>
      </div>

      <p className="col-span-2">Transaction Code</p>
      <p className="text-center">:</p>
      <p className="col-span-5">{v.codeTransaksi}</p>
      <p className="col-span-2">Name</p>
      <p className="text-center">:</p>
      <p className="col-span-5">{v.name}</p>
      <p className="col-span-2">Transaction Date</p>
      <p className="text-center">:</p>
      <p className="col-span-5">{transactionDate}</p>
      <p className="col-span-2">Transaction Time</p>
      <p className="text-center">:</p>
      <p className="col-span-5">{transactionHour}</p>
    </div>
  );
};

export default CardTransaction;
