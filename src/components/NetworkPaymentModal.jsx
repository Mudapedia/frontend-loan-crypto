import { useRef, useState } from "react";
import Spinner from "./Spinner";
import UsersApi from "../../api/users";

/* eslint-disable react/prop-types */
const NetworkPaymentModal = ({
  showPayment,
  networkPayment,
  setShowBarCode,
  setShowPayment,
  showBarCode,
  idUserDaftar,
  cryptoLoan,
  jumlahLoan,
}) => {
  const [walletAddress, setWalletAddress] = useState("");
  const [paymentHash, setPaymentHash] = useState("");

  const [btnDisable, setBtnDisable] = useState(false);
  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState(false);

  const [internalServerError, setInternalServerError] = useState("");
  const form = useRef();

  const btnSend = async (e) => {
    try {
      e.preventDefault();
      setBtnDisable(true);
      setLoading(true);

      await UsersApi.editUser(idUserDaftar, {
        nominal: jumlahLoan,
        cryptoLoan: cryptoLoan,
        walletAddressTujuan: walletAddress,
        buktiHash: paymentHash,
      });
      setSuccess(true);
      setLoading(false);
      form.current.reset();
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
    <div
      className={`absolute bg-white px-5 ${showPayment} transition-all duration-500 pb-10  top-0 pt-24 scrollbar-hide`}
    >
      <h1 className="text-center font-bold">Network Fee Payment</h1>
      <p>
        A network fee is required for the loan process to be completed. Pay the
        required fee to receive your loan.
      </p>
      <h1 className="font-bold mt-2">Network Fee Payment Address</h1>
      <p>Pay the network fee to any of the token wallet address :</p>

      <div className="flex flex-col gap-2 mt-4">
        {networkPayment.map((v, i) => (
          <div key={i}>
            <h2 className="font-semibold">{v.nama}</h2>
            <div>
              <p>{v.code}</p>
              <button
                className="py-1 px-4 bg-green-500 rounded-md text-white font-semibold mt-1"
                onClick={() =>
                  setShowBarCode({
                    nama: v.nama,
                    barcode: v.barcode,
                  })
                }
              >
                Barcode
              </button>
            </div>
          </div>
        ))}
      </div>

      {success ? (
        <section className="flex justify-center items-center">
          <section className="flex flex-col items-center justify-center">
            <section className="border p-5 rounded-full shadow-sm w-24 h-24 flex justify-center items-center">
              <i className="fa-solid fa-check text-6xl text-green-500"></i>
            </section>
            <p className="mt-2 mb-2 text-green-600 font-semibold text-xl">
              Success
            </p>
            <p className="text-red-500 text-sm">
              *The validation process takes approximately 1-2 hours
            </p>
          </section>
        </section>
      ) : (
        <form ref={form} className="grid mb-10 mt-10" onSubmit={btnSend}>
          <div className="w-[80%]">
            <label htmlFor="wallet-address" className="font-bold mt-2">
              Input Your Wallet Address Here To Receive The Loan :
            </label>
            <input
              type="text"
              id="wallet-address"
              className="border border-slate-400 rounded-md px-2 py-2 w-full"
              onChange={(e) => setWalletAddress(e.target.value)}
              required
            />
          </div>
          <div className="w-[80%]">
            <label htmlFor="paymenthash" className="font-bold mt-2">
              Input Your Fee Payment hash Here :
            </label>
            <p className="text-red-500 text-sm">
              *The validation process takes approximately 1-2 hours
            </p>
            <input
              type="text"
              id="paymenthash"
              className="border border-slate-400 rounded-md px-2 py-2 w-full"
              onChange={(e) => setPaymentHash(e.target.value)}
              required
            />
          </div>
          <div className="w-full flex flex-col">
            <button
              type="submit"
              className="bg-green-500 text-white font-semibold py-2 rounded-md mt-5 flex justify-center items-center"
              disabled={btnDisable}
            >
              {loading ? <Spinner /> : "Validation"}
            </button>
            <button
              type="button"
              className="bg-red-400 text-white font-semibold py-2 rounded-md mt-5"
              onClick={() => setShowPayment("-translate-y-[200%]")}
            >
              Back
            </button>
          </div>
        </form>
      )}

      {Object.keys(showBarCode).length ? (
        <div
          className="w-full absolute  flex flex-col items-center justify-center layar-hitam top-0 bottom-0 left-0 right-0 cursor-pointer px-10"
          onClick={() => setShowBarCode({})}
        >
          <div className="bg-white rounded-md flex flex-col justify-center items-center p-10">
            <img src={showBarCode.barcode} alt="" className="h-fit" />
            <p className="mt-5 font-semibold">{showBarCode.nama}</p>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default NetworkPaymentModal;
