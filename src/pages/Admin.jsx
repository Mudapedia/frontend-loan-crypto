import { HelmetProvider, Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import AdminAPi from "../../api/admin";
import AdminDetilTransaksi from "../components/AdminDetilTransaksi";
import CardTransaction from "../components/CardTransaction";
import LoadingCardTransaction from "../components/LoadingCardTransaction";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  // const [transactionFinish, setTransactionFinish] = useState([]);
  const [data, setData] = useState([]);
  const [showDetail, setShowDetail] = useState(false);
  const [detailData, setDetailData] = useState({});
  const [showFilter, setShowFilter] = useState(false);
  const [dataFilter, setDataFilter] = useState("pending");
  const [cardLoading, setCardLoading] = useState(true);

  const redirect = useNavigate();

  useEffect(() => {
    if (dataFilter == "pending") {
      AdminAPi.getTransactionNotFinish()
        .then(({ data }) => {
          setData(data.data);
          setCardLoading(false);
        })
        .catch(() => redirect("/login"));
    } else {
      AdminAPi.getTransactionFinish()
        .then(({ data }) => {
          setData(data.data);
          setCardLoading(false);
        })
        .catch(() => redirect("/login"));
    }
  }, [dataFilter, redirect]);

  return (
    <HelmetProvider>
      <Helmet>
        <title>Admin</title>
      </Helmet>
      <section className="flex justify-center h-[100vh] w-[100vw] bg-black overflow-hidden">
        <section className="relative bg-white border border-black py-14 px-8 w-[640px] rounded-lg flex flex-col gap-5 mx-auto max-h-screen overflow-y-scroll">
          <div>
            <h1 className="font-semibold text-center">Admin Page</h1>
            <div className="flex justify-end text-sm">
              <div
                className="relative flex gap-2 border border-slate-300 py-1 px-2 rounded-md cursor-pointer"
                onClick={() => setShowFilter(!showFilter)}
              >
                <p>Filter :</p>
                <p>
                  {dataFilter == "pending"
                    ? "Pending Transaction"
                    : "Finished Transaction"}
                </p>
                <div
                  className={`${
                    showFilter ? "absolute" : "hidden"
                  } bg-white absolute border border-slate-300 py-1 px-2 rounded-md right-0 left-0 -bottom-14 z-10`}
                >
                  <p
                    className="cursor-pointer"
                    onClick={() => {
                      if (!cardLoading) {
                        setDataFilter("finished");
                        setCardLoading(true);
                      }
                    }}
                  >
                    Finished Transaction
                  </p>
                  <p
                    className="cursor-pointer"
                    onClick={() => {
                      if (!cardLoading) {
                        setDataFilter("pending");
                        setCardLoading(true);
                      }
                    }}
                  >
                    pending Transaction
                  </p>
                </div>
              </div>
            </div>

            {cardLoading ? (
              <LoadingCardTransaction count={4} />
            ) : (
              <div>
                {data.map((v, i) => {
                  const transactionDate = new Date(
                    v.created_at
                  ).toLocaleDateString("en-ID", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  });
                  const jam = new Date(v.created_at).getHours();
                  const menit = new Date(v.created_at).getMinutes();
                  const detik = new Date(v.created_at).getSeconds();
                  const transactionHour = `${jam
                    .toString()
                    .padStart(2, "0")}:${menit
                    .toString()
                    .padStart(2, "0")}:${detik.toString().padStart(2, "0")}`;
                  return (
                    <CardTransaction
                      key={i}
                      setDetailData={setDetailData}
                      setShowDetail={setShowDetail}
                      transactionDate={transactionDate}
                      transactionHour={transactionHour}
                      v={v}
                    />
                  );
                })}
              </div>
            )}
          </div>

          {/* pop up detail transaksi */}
          {showDetail ? (
            <AdminDetilTransaksi
              data={detailData}
              setShowDetail={setShowDetail}
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
