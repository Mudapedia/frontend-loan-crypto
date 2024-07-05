import { HelmetProvider, Helmet } from "react-helmet-async";

const ContactUs = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Contact Us</title>
      </Helmet>
      <section className="flex justify-center h-[100vh] w-[100vw] bg-black">
        <section className="relative bg-white border border-black py-14 px-8 w-[640px] rounded-lg flex flex-col gap-5 mx-auto max-h-screen overflow-x-auto no-scrollbar">
          <div className=" grid gap-3 text-sm">
            <h1 className="text-center mb-5 font-bold text-lg">About Crypto Global Swift</h1>
            <p>Crypto Global Swift is a platform offering innovative solutions in cryptocurrency trading and exchange. Developed with blockchain technology, Crypto Global Swift aims to provide a secure, efficient, and transparent infrastructure for users worldwide. This platform is designed to streamline the crypto transaction process with high speed, enabling users to quickly and easily buy, sell, and exchange digital assets.</p>
            <p>Additionally, transaction speed is a key focus of Crypto Global Swift. With an optimized infrastructure, the platform can handle high transaction volumes with quick response times, allowing users to make investment decisions swiftly. This is crucial in the fast-paced crypto world, where asset prices can fluctuate within seconds.</p>
            <p>Crypto Global Swift also offers ease of access and use through an intuitive and user-friendly interface. Both experienced and novice users in the crypto world can easily understand how to use the platform for their investment and transaction needs. Additionally, responsive customer service is available to assist users in navigating the platform and answering any questions that may arise.</p>
            <p>With a vision to become a leader in the global digital asset trading ecosystem, Crypto Global Swift continuously innovates and develops technology to enhance its services. Support for a wide range of cryptocurrencies and integration with various global markets expands opportunities for users to participate in the digital economy on a global and sustainable scale.
            </p>
            <div className="flex flex-col gap-8 mt-8">
              <h1 className="font-bold text-lg text-center">Get In Touch With Us</h1>
              <div className="flex justify-between">
                <div className="bg-slate-200 rounded-lg px-5 py-8 grid place-items-center cursor-pointer hover:bg-slate-300" onClick={() => {window.location.href="tel:84908804766"}}>
                  <div>
                    <div className="flex">
                      <img width="24" height="24" src="https://img.icons8.com/ios-filled/50/incoming-call.png" alt="whatsapp--v1" className="mr-2"/>
                      <h2>William (Crypto Host Admin)</h2>
                    </div>
                    <p className="ml-7">+84908804766</p>
                  </div>
                </div>
                <div className="bg-slate-200 rounded-lg px-5 py-8 grid place-items-center cursor-pointer hover:bg-slate-300" onClick={() => {window.location.href="tel:6282247739704"}}>
                  <div>
                    <div className="flex">
                      <img width="24" height="24" src="https://img.icons8.com/ios-filled/50/incoming-call.png" alt="whatsapp--v1" className="mr-2"/>
                      <h2>David (Global Server Admin)</h2>
                    </div>
                    <p className="ml-7">+62 815-5690-3754</p>
                  </div>
                </div>
              </div>
              <div className="bg-slate-200 rounded-lg px-5 py-8 grid place-items-center cursor-pointer hover:bg-slate-300" onClick={() => {window.location.href="mailto:mail@mail.com"}}>
                <div>
                  <div className="flex">
                    <img width="24" height="24" src="https://img.icons8.com/ios-filled/50/filled-message.png" alt="filled-message" className="mr-2"/>
                    <h2>Our Email</h2>
                  </div>
                  <p className="ml-7">mail@mail.com</p>
                </div>
              </div>
              <div className="bg-slate-200 rounded-lg px-5 py-8 grid place-items-center cursor-pointer hover:bg-slate-300" onClick={() => {window.location.href="https://globalserver.my.id/"}}>
                <div>
                  <div className="flex">
                    <img width="24" height="24" src="https://img.icons8.com/ios-filled/50/globe--v1.png" alt="globe--v1" className="mr-2"/>
                    <h2>See Our Services</h2>
                  </div>
                  <p className="ml-7">https://globalserver.my.id/</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </HelmetProvider>
  );
};

export default ContactUs;
