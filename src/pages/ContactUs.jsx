import { HelmetProvider, Helmet } from "react-helmet-async";

const ContactUs = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Contact Us</title>
      </Helmet>
      <section className="flex justify-center h-[100vh] w-[100vw] bg-black">
        <section className="relative bg-white border border-black py-14 px-8 w-[640px] rounded-lg flex flex-col gap-5 items-center mx-auto max-h-screen overflow-x-auto no-scrollbar">
          <h1>ini halaman kontak</h1>
        </section>
      </section>
    </HelmetProvider>
  );
};

export default ContactUs;
