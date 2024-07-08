import { HelmetProvider, Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import AdminAPi from "../../api/admin";
import AdminDetilTransaksi from "../components/AdminDetilTransaksi";

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
          {showDetail ? (
            <AdminDetilTransaksi
              data={data}
              setShowDetail={setShowDetail}
              setTransactionNotFinish={setTransactionNotFinish}
            />
          ) : (
            ""
          )}
        </section>
      </section>
    </HelmetProvider>
  );
};
export default Admin;
