import { HelmetProvider, Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import AdminAPi from "../../api/admin";
import AdminDetilTransaksi from "../components/AdminDetilTransaksi";

const Admin = () => {
  // const [transactionFinish, setTransactionFinish] = useState([]);
  const [data, setData] = useState([]);
  const [showDetail, setShowDetail] = useState(false);
  const [detailData, setDetailData] = useState({});
  const [showFilter, setShowFilter] = useState(false);
  const [dataFilter, setDataFilter] = useState("pending");

  useEffect(() => {
    if(dataFilter == "pending"){
      AdminAPi.getTransactionNotFinish().then(({ data }) => {
        setData(data.data);
      });
    }else{
      AdminAPi.getTransactionFinish().then(({ data }) => {
        setData(data.data);
      });
    }
    
  }, [dataFilter]);

  return (
    <HelmetProvider>
      <Helmet>
        <title>Admin</title>
      </Helmet>
      <section className="flex justify-center h-[100vh] w-[100vw] bg-black">
        <section className="relative bg-white border border-black py-14 px-8 w-[640px] rounded-lg flex flex-col gap-5 mx-auto max-h-screen">
          <div>
            <h1 className="font-semibold text-center">Admin Page</h1>
            <div className="flex justify-end text-sm">
              <div className="relative flex gap-2 border border-slate-300 py-1 px-2 rounded-md cursor-pointer" onClick={() => setShowFilter(!showFilter)}>
                <p>Filter :</p>
                <p>{dataFilter=="pending"?"Pending Transaction" : "Finished Transaction"}</p>
                <div className={`${showFilter?"absolute":"hidden"} bg-white absolute border border-slate-300 py-1 px-2 rounded-md right-0 left-0 -bottom-14`}>
                  <p className="cursor-pointer" onClick={() => setDataFilter("finished")}>Finished Transaction</p>
                  <p className="cursor-pointer" onClick={() => setDataFilter("pending")}>pending Transaction</p>
                </div>
              </div>
            </div>
            {data.map((v, i) => {
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
            })}
          </div>

          {/* pop up detail transaksi */}
          {showDetail ? (
            <AdminDetilTransaksi
              data={detailData}
              setShowDetail={setShowDetail}
              setTransactionNotFinish={data}
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
