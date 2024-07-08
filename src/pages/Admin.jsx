import { HelmetProvider, Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import AdminAPi from "../../api/admin";

const Admin = () => {
  const [transactionFinish, setTransactionFinish] = useState([]);
  const [transactionNotFinish, setTransactionNotFinish] = useState([]);
  const [showDetail, setShowDetail] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
    AdminAPi.getTransactionFinish().then(({ data }) => {
      setTransactionFinish(data.data);
    });
    AdminAPi.getTransactionNotFinish().then(({ data }) => {
      setTransactionNotFinish(data.data);
    });
  }, []);

  return (
    <HelmetProvider>
      <Helmet>
        <title>Admin</title>
      </Helmet>
      <section className="flex justify-center h-[100vh] w-[100vw] bg-black">
        <section className="relative bg-white border border-black py-14 px-8 w-[640px] rounded-lg flex flex-col gap-5 mx-auto max-h-screen">
          <div>
            <h1 className="font-semibold text-center">Admin Page</h1>
            {transactionNotFinish.map((v, i) => {
              const transactionDate = new Date(v.created_at).toLocaleDateString(
                "en-ID",
                { day: "numeric", month: "long", year: "numeric" }
              );
              const jam = new Date(v.created_at).getHours();
              const menit = new Date(v.created_at).getMinutes();
              const detik = new Date(v.created_at).getSeconds();
              const transactionHour = `${jam
                .toString()
                .padStart(2, "0")}:${menit.toString().padStart(2, "0")}:${detik
                .toString()
                .padStart(2, "0")}`;
              return (
                <div
                  key={i}
                  className="bg-slate-400 my-5 p-4 rounded-md grid grid-cols-8 cursor-pointer"
                  onClick={() => {
                    setShowDetail(!showDetail);
                    v.created_at = transactionDate;
                    v.jam = transactionHour;
                    setData(v);
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
            })}
          </div>

          {/* pop up detail transaksi */}
          <div
            className={`bg-white top-0 left-0 right-0 bottom-0 p-10 ${
              showDetail ? "absolute" : "hidden"
            }`}
          >
            <h1 className="font-bold text-lg text-center mb-5">
              Transaction Detail
            </h1>
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
              <button className="bg-red-500 py-2 px-4 rounded-md text-white">
                Reject
              </button>
              <button className="bg-green-500 py-2 px-4 rounded-md text-white">
                Accept
              </button>
            </div>
            <div className=" flex justify-center mt-10">
              <button
                className="bg-blue-500 py-3 w-full rounded-md text-white"
                onClick={() => setShowDetail(!showDetail)}
              >
                Kembali
              </button>
            </div>
          </div>
        </section>
      </section>
    </HelmetProvider>
  );
};
export default Admin;
