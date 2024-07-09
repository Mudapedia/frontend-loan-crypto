import { HelmetProvider, Helmet } from "react-helmet-async";
const NotFound = () => {

  return (
    <HelmetProvider>
      <Helmet>
        <title>Page Not Found</title>
      </Helmet>
      <section className="flex justify-center h-[100vh] w-[100vw] bg-black overflow-hidden">
        <section className="relative bg-black border border-white py-14 px-8 w-[640px] rounded-lg flex flex-col gap-5 mx-auto max-h-screen justify-center items-center">
        
        <dotlottie-player src="https://lottie.host/e34f9953-0562-4cfc-bccb-a7888f698183/O85ltshmRx.json" background="transparent" speed="1" style={{width: '800px', height: '800px'}} loop autoplay></dotlottie-player>

        </section>
      </section>
    </HelmetProvider>
  );
};
export default NotFound;
