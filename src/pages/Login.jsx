import { useRef, useState } from "react";
import Spinner from "../components/Spinner";
import Auth from "../../api/auth";
import { useNavigate } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";

const Login = () => {
  const [showPassword, setShowPassword] = useState("fa-eye");
  const [loading, setLoading] = useState(false);
  const [btnDisable, setBtnDisable] = useState(false);
  const [message, setMessage] = useState({});

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const form = useRef();
  const redirect = useNavigate();

  const btnSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      setBtnDisable(true);

      await Auth.login({
        username,
        password,
      });

      setLoading(false);
      setMessage({
        msg: "Berhasil Login",
        color: "text-green-500",
      });
      form.current.reset();

      setTimeout(() => {
        redirect("/admin");
      }, 1000);
    } catch (err) {
      setBtnDisable(false);
      setLoading(false);
      setMessage({
        msg: err.response.data.errors.join("\n"),
        color: "text-red-500",
      });
    }
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <section className="flex justify-center h-[100vh] w-[100vw] bg-black">
        <section className="relative bg-white border border-black py-14 px-8 w-[640px] rounded-lg flex flex-col gap-5 mx-auto max-h-screen overflow-x-auto no-scrollbar justify-center">
          <section>
            <h1 className="text-center font-semibold text-xl">
              Silahkan Login
            </h1>
            {Object.keys(message).length ? (
              <p className={`${message.color} text-center`}>{message.msg}</p>
            ) : (
              ""
            )}
            <form ref={form} className="mt-10" onSubmit={btnSubmit}>
              <div className="mb-5">
                <label
                  htmlFor="username"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your username
                </label>
                <input
                  type="username"
                  id="username"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  required
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your password
                </label>
                <section className="flex items-center gap-2">
                  <input
                    type={showPassword === "fa-eye" ? "password" : "text"}
                    id="password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <i
                    className={`fa-solid ${showPassword} text-xl cursor-pointer`}
                    onClick={() =>
                      setShowPassword(
                        showPassword === "fa-eye" ? "fa-eye-slash" : "fa-eye"
                      )
                    }
                  ></i>
                </section>
              </div>

              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                disabled={btnDisable}
              >
                {loading ? <Spinner w="w-5" h="h-5" /> : "Submit"}
              </button>
            </form>
          </section>
        </section>
      </section>
    </HelmetProvider>
  );
};

export default Login;
