import { HelmetProvider, Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import AdminAPi from "../../api/admin";

const Admin = () => {
  const [transactionFinish, setTransactionFinish] = useState([]);
  const [transactionNotFinish, setTransactionNotFinish] = useState([]);

  useEffect(() => {
    AdminAPi.getTransactionFinish().then(({ data }) => {
      setTransactionFinish(data.data);
    });
    AdminAPi.getTransactionNotFinish().then(({ data }) => {
      setTransactionNotFinish(data.data);
    });
  }, []);

  console.log(transactionNotFinish);
  return (
    <HelmetProvider>
      <Helmet>
        <title>Admin</title>
      </Helmet>
      <section className="flex justify-center h-[100vh] w-[100vw] bg-black">
        <section className="relative bg-white border border-black py-14 px-8 w-[640px] rounded-lg flex flex-col gap-5 mx-auto max-h-screen">
          <div>
            <h1 className="font-semibold text-center">Admin Page</h1>

            {transactionNotFinish.map((v,i) => {
              
              const transactionDate = ""
              return(
                <div className="bg-slate-400 my-5 p-4 rounded-md grid grid-cols-8">
                  <p className="col-span-2">Transaction Code</p>
                  <p className="text-center">:</p>
                  <p className="col-span-5">{v.codeTransaksi}</p>
                  <p>Name</p>
                  <p className="text-center">:</p>
                  <p className="col-span-5">{v.name}</p>
                  <p>Transaction Date</p>
                  <p className="text-center">:</p>
                  <p className="col-span-5">{v.name}</p>
                  <p>Transaction Time</p>
                  <p className="text-center">:</p>
                </div>
              )
            }
            )}
          </div>
        </section>
      </section>
    </HelmetProvider>
  );
};
export default Admin;

{/* <div className="flex h-full overflow-x-scroll snap-mandatory ">
            <div className="min-w-full border border-slate-300 px-5 overflow-y-auto snap-center">
              <h1 className="text-center mb-5 font-bold">Admin page</h1>
              <section className="flex flex-col gap-5">
                {transactionNotFinish.map((v, i) => (
                  <section key={i} className="flex flex-col gap-2">
                    <table className="w-full text-sm text-left rtl:text-right  ">
                      <thead>
                        <tr>
                          <th scope="col" className="px-6 py-3">
                            Transaksi ke {i + 1}
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-white border-b ">
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                          >
                            Nama
                          </th>
                          <td className="px-6 py-4">{v.name}</td>
                        </tr>
                        <tr className="bg-white border-b ">
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                          >
                            Email
                          </th>
                          <td className="px-6 py-4">{v.email}</td>
                        </tr>
                        <tr className="bg-white border-b ">
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                          >
                            No HP
                          </th>
                          <td className="px-6 py-4">{v.noHP}</td>
                        </tr>
                        <tr className="bg-white border-b ">
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                          >
                            Wallet Address
                          </th>
                          <td className="px-6 py-4">{v.walletAddress}</td>
                        </tr>
                        <tr className="bg-white border-b ">
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                          >
                            Crypto Loan
                          </th>
                          <td className="px-6 py-4">{v.cryptoLoan}</td>
                        </tr>
                        <tr className="bg-white border-b ">
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                          >
                            Nominal
                          </th>
                          <td className="px-6 py-4">{v.nominal}</td>
                        </tr>
                        <tr className="bg-white border-b ">
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                          >
                            Bukti Hash
                          </th>
                          <td className="px-6 py-4">{v.buktiHash}</td>
                        </tr>
                        <tr className="bg-white border-b ">
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                          >
                            Status Transaksi
                          </th>
                          <td className="px-6 py-4">
                            {v.statusTransaksi ? "Selesai" : "Belum Selesai"}
                          </td>
                        </tr>
                        <tr className="bg-white border-b ">
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                          >
                            Tanggal
                          </th>
                          <td className="px-6 py-4">{v.created_at}</td>
                        </tr>
                      </tbody>
                    </table>

                    <section className="flex justify-end">
                      <button className="py-1 px-4 bg-green-600 text-white rounded-md">
                        Selesaikan
                      </button>
                    </section>
                  </section>
                ))}
              </section>
            </div>
            <div className="min-w-full border border-slate-300 snap-center">
              <h1>admin page 2</h1>
              <section className="flex flex-col gap-5">
                {transactionFinish.map((v, i) => (
                  <section key={i} className="flex flex-col gap-2">
                    <table className="w-full text-sm text-left rtl:text-right  ">
                      <thead>
                        <tr>
                          <th scope="col" className="px-6 py-3">
                            Transaksi ke {i + 1}
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-white border-b ">
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                          >
                            Nama
                          </th>
                          <td className="px-6 py-4">{v.name}</td>
                        </tr>
                        <tr className="bg-white border-b ">
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                          >
                            Email
                          </th>
                          <td className="px-6 py-4">{v.email}</td>
                        </tr>
                        <tr className="bg-white border-b ">
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                          >
                            No HP
                          </th>
                          <td className="px-6 py-4">{v.noHP}</td>
                        </tr>
                        <tr className="bg-white border-b ">
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                          >
                            Wallet Address
                          </th>
                          <td className="px-6 py-4">{v.walletAddress}</td>
                        </tr>
                        <tr className="bg-white border-b ">
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                          >
                            Crypto Loan
                          </th>
                          <td className="px-6 py-4">{v.cryptoLoan}</td>
                        </tr>
                        <tr className="bg-white border-b ">
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                          >
                            Nominal
                          </th>
                          <td className="px-6 py-4">{v.nominal}</td>
                        </tr>
                        <tr className="bg-white border-b ">
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                          >
                            Bukti Hash
                          </th>
                          <td className="px-6 py-4">{v.buktiHash}</td>
                        </tr>
                        <tr className="bg-white border-b ">
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                          >
                            Status Transaksi
                          </th>
                          <td className="px-6 py-4">
                            {v.statusTransaksi ? "Selesai" : "Belum Selesai"}
                          </td>
                        </tr>
                        <tr className="bg-white border-b ">
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                          >
                            Tanggal
                          </th>
                          <td className="px-6 py-4">{v.created_at}</td>
                        </tr>
                      </tbody>
                    </table>
                  </section>
                ))}
              </section>
            </div>
          </div> */}