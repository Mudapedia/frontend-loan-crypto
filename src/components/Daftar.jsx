import { useState } from "react";

/* eslint-disable react/prop-types */
const Daftar = ({ setHideDaftar }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [walletAddress, setWalletAddress] = useState("");
  const [noHP, setNoHP] = useState("");

  const btnDaftar = (e) => {
    try {
      e.preventDefault();

      setHideDaftar(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="layar-hitam absolute left-0 right-0 bottom-0 top-0 flex  justify-center items-center">
      <form
        className="max-w-sm mx-auto bg-white p-5 rounded-md w-[90%]"
        onSubmit={btnDaftar}
      >
        <div className="mb-5">
          <label
            htmlFor="username"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
            placeholder="name@flowbite.com"
            required
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="text"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Your Wallet Address USDT (TRC20)
          </label>
          <input
            type="text"
            id="wallet-address"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
            required
            onChange={(e) => setWalletAddress(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="nohp"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            No HP
          </label>
          <input
            type="text"
            id="nohp"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
            required
            onChange={(e) => setNoHP(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="text-white bg-green-600 hover:bg-green-700  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Daftar;
