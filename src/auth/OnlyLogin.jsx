import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Auth from "../../api/auth";

const OnlyLogin = ({ children }) => {
  const [isLogin, setIslogin] = useState(false);

  useEffect(() => {
    Auth.isLogin().then((res) => {
      console.log(res);
    });
  }, []);

  return (
    <section className="flex justify-center h-[100vh] w-[100vw] bg-black">
      <section className="relative bg-white border border-black py-14 px-8 w-[640px] rounded-lg flex flex-col gap-5 items-center mx-auto max-h-screen">
        <section className="absolute top-0 left-0 bottom-0 right-0 layar-hitam flex items-center justify-center">
          <Spinner w="-10" h="h-10" />
        </section>
      </section>
    </section>
  );
};

export default OnlyLogin;
