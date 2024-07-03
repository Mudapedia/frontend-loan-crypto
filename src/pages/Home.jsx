import { useState } from "react";
import ButtonsMenu from "../components/ButtonsMenu";
import Term from "../components/Term";
import Daftar from "../components/Daftar";

const Home = () => {
  const [showTerm, setShowTerm] = useState(false);
  const [showNominal, setShowNominal] = useState(false);
  const [showPayment, setShowPayment] = useState("-translate-y-[200%]");
  const [nominal, setNominal] = useState([]);
  const [heading, setHeading] = useState(
    "Select Your Preferred Coin To Receive Your Crypto Loan"
  );

  const [showBarCode, setShowBarCode] = useState({});
  const [hideDaftar, setHideDaftar] = useState(false);

  const walletMenu = [
    {
      nama: ["USDT", "Tether USDT"],
      nominal: ["1000 USDT", "2000 USDT", "3000 USDT", "4000 USDT"],
    },
    {
      nama: ["BNB", "BNB Smart Chain"],
      nominal: ["1000 BNB", "2000 BNB", "3000 BNB", "4000 BNB"],
    },
    {
      nama: ["BTC", "Bitcoin"],
      nominal: ["1000 BTC", "2000 BTC", "3000 BTC", "4000 BTC"],
    },
    {
      nama: ["ETH", "Ethereum"],
      nominal: ["1000 ETH", "2000 ETH", "3000 ETH", "4000 ETH"],
    },
  ];

  const networkPayment = [
    {
      nama: "USDT (TRC20)",
      code: "TD2jZGx9jw3pd56TYsydU3eViUVs9T6UN3",
      barcode: "USDT(TRC20).jpg",
    },
    {
      nama: "USDT (BEP20)",
      code: "0x7477335ca1789D3f532510D39CAC256391326971",
      barcode: "USDT(BEP20).jpg",
    },
    {
      nama: "USDT (ERC20)",
      code: "0x7477335ca1789D3f532510D39CAC256391326971",
      barcode: "USDT(ERC20).jpg",
    },
    {
      nama: "TRON (TRX)",
      code: "TD2jZGx9jw3pd56TYsydU3eViUVs9T6UN3",
      barcode: "TRON (TRX).jpg",
    },
    {
      nama: "BNB (BEP20)",
      code: "0x7477335ca1789D3f532510D39CAC256391326971",
      barcode: "BNB (BEP20).jpg",
    },
    {
      nama: "Wallet Ethereum (ETH)",
      code: "0x7477335ca1789D3f532510D39CAC256391326971",
      barcode: "Ethereum(ETH).jpg",
    },
    {
      nama: "Bitcoin (BTC)",
      code: "bc1puqur3dp2ehmycaeumdqfnptr72c7rzafxkxx36nw03q7enr8cl6qt63kmu",
      barcode: "Bitcoin(BTC).jpg",
    },
  ];

  return (
    <>
      <div className="text-center">
        <h1>Selamat Datang Di Loan Crypto</h1>
        <p>
          Cek{" "}
          <span
            className="text-blue-500 cursor-pointer"
            onClick={() => {
              setShowTerm(!showTerm);
            }}
          >
            Syarat dan ketentuan
          </span>
        </p>
        <p>{heading}</p>
      </div>
      <div className="w-full">
        {showNominal == true ? (
          ""
        ) : (
          <div className="grid grid-cols-2 w-full gap-5">
            {walletMenu.map((value, index) => {
              return (
                <div
                  key={index}
                  className={`px-2 py-5 bg-slate-400 rounded-md w-full text-center cursor-pointer`}
                  onClick={() => {
                    setNominal(value.nominal);
                    setShowNominal(true);
                    setHeading("Select How Much Loan You Want To Get");
                  }}
                >
                  <p>{value.nama[0]}</p>
                  <p>{value.nama[1]}</p>
                </div>
              );
            })}
          </div>
        )}
        {showNominal == true ? (
          <ButtonsMenu
            nominal={nominal}
            setNominal={setNominal}
            setShowNominal={setShowNominal}
            setHeading={setHeading}
            setShowPayment={setShowPayment}
          />
        ) : (
          ""
        )}
      </div>

      <div
        className={`absolute bg-white px-5 ${showPayment} transition-all duration-500 pb-10`}
      >
        <h1 className="text-center font-bold">Network Fee Payment</h1>
        <p>
          A network fee is required for the loan process to be completed. Pay
          the required fee to receive your loan.
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

        <form className="grid mb-10 mt-10">
          <label htmlFor="wallet-address" className="font-bold mt-2">
            Input Your Wallet Address Here To Receive The Loan :
          </label>
          <input
            type="text"
            id="wallet-address"
            className="border border-slate-400 rounded-md px-2 py-2"
          />
          <label htmlFor="wallet-address" className="font-bold mt-2">
            Input Your Fee Payment hash Here :
          </label>
          <p className="text-red-500 text-sm">
            *Proses validasi membutuhkan waktu sekitar 1-2 jam
          </p>
          <input
            type="text"
            id="wallet-address"
            className="border border-slate-400 rounded-md px-2 py-2"
          />
          <div className="w-full flex flex-col">
            <button
              type="submit"
              className="bg-green-500 text-white font-semibold py-2 rounded-md mt-5"
            >
              Send
            </button>
            <button
              type="button"
              className="bg-red-400 text-white font-semibold py-2 rounded-md mt-5"
              onClick={() => setShowPayment("-translate-y-[200%]")}
            >
              Kembali
            </button>
          </div>
        </form>

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

      <Term showTerm={showTerm} setShowTerm={setShowTerm} />
      {hideDaftar ? "" : <Daftar setHideDaftar={setHideDaftar} />}
    </>
  );
};

export default Home;
