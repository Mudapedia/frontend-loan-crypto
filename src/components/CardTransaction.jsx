/* eslint-disable react/prop-types */
const CardTransaction = ({
  setShowDetail,
  v,
  setDetailData,
  transactionDate,
  transactionHour,
}) => {
  return (
    <div
      className="bg-slate-400 my-5 p-4 rounded-md grid grid-cols-8 cursor-pointer"
      onClick={() => {
        setShowDetail(true);
        v.created_at = transactionDate;
        v.jam = transactionHour;
        setDetailData(v);
      }}
    >
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
