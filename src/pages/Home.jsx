import { useState } from "react";
import ButtonsMenu from "../components/ButtonsMenu";
import Term from "../components/Term";
import NetworkPaymentModal from "../components/NetworkPaymentModal";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Home = () => {
  const [showTerm, setShowTerm] = useState(false);
  const [showNominal, setShowNominal] = useState(false);
  const [showPayment, setShowPayment] = useState("-translate-y-[200%]");
  const [heading, setHeading] = useState(
    "Select Your Preferred Coin To Receive Your Crypto Loan"
  );

  const [showBarCode, setShowBarCode] = useState({});
  const [nominal, setNominal] = useState([]);

  const [cryptoLoan, setCryptoLoan] = useState("");
  const [jumlahLoan, setJumlahLoan] = useState("");
  const [jumlahFee, setjumlahFee] = useState("");

  const walletMenu = [
    {
      nama: ["USDT", "Tether USDT"],
      nominal: [
        {
          description: "Fee $1000 Get 100,000 USDT",
          fee: "$1000",
          loan: "100,000 USDT",
        },
        {
          description: "Fee $2000 Get 350,000 USDT",
          fee: "$2000",
          loan: "350,000 USDT",
        },
        {
          description: "Fee $4000 Get 600,000 USDT",
          fee: "$4000",
          loan: "350,000 USDT",
        },
        {
          description: "Fee $6000 Get 800,000 USDT",
          fee: "$6000",
          loan: "800,000 USDT",
        },
        {
          description: "Fee $10,000 Get 1,200,000 USDT",
          fee: "$10,000",
          loan: "1,200,000 USDT",
        },
        {
          description: "Fee $20,000 Get 4,000,000 USDT",
          fee: "$20,000",
          loan: "4,000,000 USDT",
        },
        {
          description: "Fee $50,000 Get 1,000,000,000 USDT",
          fee: "$50,000",
          loan: "1,000,000,000 USDT",
        },
      ],
    },
    {
      nama: ["BNB", "BNB Smart Chain"],
      nominal: [
        {
          description: "Fee 5 BNB Get 1000 BNB",
          fee: "5 BNB",
          loan: "1000 BNB",
        },
        {
          description: "Fee 10 BNB Get 2000 BNB",
          fee: "10 BNB",
          loan: "2000 BNB",
        },
        {
          description: "Fee 15 BNB Get 3000 BNB",
          fee: "15 BNB",
          loan: "3000 BNB",
        },
        {
          description: "Fee 15 BNB Get 3000 BNB",
          fee: "15 BNB",
          loan: "3000 BNB",
        },
        {
          description: "Fee 20 BNB Get 4000 BNB",
          fee: "20 BNB",
          loan: "4000 BNB",
        },
      ],
    },
    {
      nama: ["BTC", "Bitcoin"],
      nominal: [
        {
          description: "Fee 0,5 BTC Get 1000 BTC",
          fee: "0,5 BTC",
          loan: "1000 BTC",
        },
        {
          description: "Fee 1 BTC Get 2000 BTC",
          fee: "1 BTC",
          loan: "2000 BTC",
        },
        {
          description: "Fee 1,5 BTC Get 3000 BTC",
          fee: "1,5 BTC",
          loan: "3000 BTC",
        },
        {
          description: "Fee 2 BTC Get 4000 BTC",
          fee: "2 BTC",
          loan: "4000 BTC",
        },
      ],
    },
    {
      nama: ["ETH", "Ethereum"],
      nominal: [
        {
          description: "Fee 4 ETH Get 1000 ETH",
          fee: "4 ETH",
          loan: "1000 ETH",
        },
        {
          description: "Fee 7 ETH Get 2000 ETH",
          fee: "7 ETH",
          loan: "2000 ETH",
        },
        {
          description: "Fee 10 ETH Get 3000 ETH",
          fee: "10 ETH",
          loan: "3000 ETH",
        },
        {
          description: "Fee 12 ETH Get 4000 ETH",
          fee: "12 ETH",
          loan: "4000 ETH",
        },
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
      <HelmetProvider>
        <Helmet>
          <title>Home</title>
        </Helmet>
        <section className="relative flex justify-center h-[100svh] bg-black bg-[url('https://i.pinimg.com/originals/35/58/0d/35580d64b9b883fd0e0678595fc2aefd.gif')] bg-cover bg-no-repeat px-5 py-4">
          <section className="relative bg-white py-14 px-8 w-[640px] rounded-lg flex flex-col gap-5 items-center mx-auto max-h-screen overflow-x-auto scrollbar-hide">
            <div className="text-center">
              <h1>Welcome to Loan Crypto</h1>
              <p>
                Check Our{" "}
                <span
                  className="text-blue-500 cursor-pointer"
                  onClick={() => {
                    setShowTerm(!showTerm);
                  }}
                >
                  Terms and conditions
                </span>
              </p>
              <p>
                You can{" "}
                <Link to={"/contact"}>
                  <span className="text-blue-500 cursor-pointer">
                    Contact Us
                  </span>
                </Link>{" "}
                For More Information
              </p>
              <p className="mt-5 md:mt-10">{heading}</p>
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
                        className={`px-2 py-5 bg-slate-400 rounded-md w-full grid place-items-center text-center cursor-pointer`}
                        onClick={() => {
                          setNominal(value.nominal);
                          setShowNominal(true);
                          setHeading("Select How Much Loan You Want To Get");
                          setCryptoLoan(value.nama[0]);
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
                  setjumlahFee={setjumlahFee}
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
              cryptoLoan={cryptoLoan}
              jumlahLoan={jumlahLoan}
              jumlahFee={jumlahFee}
            />

            <Term showTerm={showTerm} setShowTerm={setShowTerm} />

            {/* <ButtonKontak /> */}
          </section>
        </section>
      </HelmetProvider>
    </>
  );
};

export default Home;
