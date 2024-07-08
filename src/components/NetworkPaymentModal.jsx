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
  cryptoLoan,
  jumlahLoan,
  jumlahFee,
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [noHP, setNoHp] = useState("");
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

      await UsersApi.add({
        name: name,
        email: email,
        noHP: noHP,
        cryptoLoan: cryptoLoan,
        fee: jumlahFee,
        loan: jumlahLoan,
        walletAddress: walletAddress,
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
      className={`absolute w-full text-sm bg-white px-5 ${showPayment} transition-all duration-500 top-0 pt-24 scrollbar-hide`}
    >
      <h1 className="text-center font-bold mb-3">Transaction Detail</h1>
      <div className="grid grid-cols-8 mb-3 font-semibold">
        <p>Loan</p>
        <p>:</p>
        <p className="col-span-6">{jumlahLoan}</p>
        <p>Fee</p>
        <p>:</p>
        <p className="col-span-6">{jumlahFee}</p>
      </div>
      <p>Pay your transaction fee to any token wallet address listed below :</p>

      <div className="flex flex-col gap-4 mt-4">
        {networkPayment.map((v, i) => (
          <div key={i}>
            <h2 className="font-semibold">{v.nama}</h2>
            <div>
              {/* <p>{v.code}</p> */}
              <button
                className="py-3 px-3 bg-green-500 rounded-md text-white font-semibold mt-1"
                onClick={() =>
                  setShowBarCode({
                    nama: v.nama,
                    barcode: v.barcode,
                  })
                }
              >
                Show Barcode
              </button>
            </div>
          </div>
        ))}
      </div>
      <form ref={form} className="flex flex-col mb-10 mt-10" onSubmit={btnSend}>
        <div className="w-[80%]">
          <h1 className="font-bold mb-3">
            Please Fill This Form To Continue Your Transaction
          </h1>
          <label htmlFor="name" className="font-semibold mt-2">
            {/* name */}
            Name :
          </label>
          <input
            type="text"
            id="name"
            className="border border-slate-400 rounded-md px-2 py-2 w-full mb-3"
            onChange={(e) => setName(e.target.value)}
            required
          />
          {/* email address */}
          <label htmlFor="email-address" className="font-semibold mt-2">
            Email Address :
          </label>
          <input
            type="email"
            id="email-address"
            className="border border-slate-400 rounded-md px-2 py-2 w-full mb-3"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {/* phone number */}
          <label htmlFor="phone-number" className="font-semibold mt-2">
            Phone Number :
          </label>
          <input
            type="text"
            id="phone-number"
            className="border border-slate-400 rounded-md px-2 py-2 w-full mb-3"
            onChange={(e) => setNoHp(e.target.value)}
            required
          />
          {/* wallet address */}
          <label htmlFor="wallet-address" className="font-semibold mt-2">
            Your Wallet Address :
          </label>
          <input
            type="text"
            id="wallet-address"
            className="border border-slate-400 rounded-md px-2 py-2 w-full mb-3"
            onChange={(e) => setWalletAddress(e.target.value)}
            required
          />
          {/* payment hash */}
          <label htmlFor="paymenthash" className="font-semibold mt-2">
            Your Payment Fee Hash :
          </label>
          <p className="text-red-500 text-sm">
            *The validation process takes approximately 1-2 hours
          </p>
          <input
            type="text"
            id="paymenthash"
            className="border border-slate-400 rounded-md px-2 py-2 w-full mb-3"
            onChange={(e) => setPaymentHash(e.target.value)}
            required
          />
        </div>
        <div className="w-full flex flex-col">
          <button
            type="submit"
            className="bg-green-500 text-white font-semibold py-3 rounded-md mt-5 flex justify-center items-center"
            disabled={btnDisable}
          >
            {loading ? <Spinner /> : "Validation"}
          </button>
          <button
            type="button"
            disabled={btnDisable}
            className="bg-red-400 text-white font-semibold py-3 rounded-md mt-5"
            onClick={() => setShowPayment("-translate-y-[200%]")}
          >
            Back
          </button>
        </div>
      </form>

      {success ? (
        <section className="flex justify-center items-center absolute layar-hitam w-full left-0 top-0 bottom-0 border-slate-300">
          <section className="flex flex-col items-center justify-center bg-white p-10 mt-[200px]">
            <section className="border p-5 rounded-full shadow-sm w-24 h-24 flex justify-center items-center">
              <i className="fa-solid fa-check text-6xl text-green-500"></i>
            </section>
            <p className="mt-2 mb-2 text-green-600 font-semibold text-xl">
              Success
            </p>
            <p className="text-red-500 text-sm">
              *The validation process takes approximately 1-2 hours
            </p>
            <a
              href={"/"}
              className="bg-green-400 py-2 px-4 mt-5 rounded-md text-white font-semibold"
            >
              Home
            </a>
          </section>
        </section>
      ) : (
        ""
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
