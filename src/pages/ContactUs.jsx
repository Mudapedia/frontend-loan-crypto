import { HelmetProvider, Helmet } from "react-helmet-async";

const ContactUs = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Contact Us</title>
      </Helmet>
      <section className="flex justify-center h-[100vh] w-[100vw] bg-black">
        <section className="relative bg-white border border-black py-14 px-8 w-[640px] rounded-lg flex flex-col gap-5 mx-auto max-h-screen overflow-x-auto no-scrollbar">
          <div className="">
            <h1 className="text-center mb-5 font-bold">About Us</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore facere ullam unde! Iste delectus distinctio esse veniam, vitae nulla? Tenetur placeat iure cupiditate deleniti, est cumque. Accusantium, voluptatibus aliquid dolor quod neque consequuntur odit magni facere quam suscipit cumque veniam facilis dolorum iure unde maiores numquam dolorem praesentium dicta hic aperiam eveniet voluptas dolores iste. Fuga molestias et maiores eligendi voluptatem consequatur iure aperiam reprehenderit, sit voluptate quod modi similique expedita iusto nisi id incidunt error consectetur ipsam, labore velit aliquam minus? Ipsum, ipsa aperiam, consequatur quia ullam maxime eligendi enim consectetur dolor sequi quaerat excepturi inventore esse fuga voluptatibus!</p>
            <div className="flex flex-col gap-8 mt-8">
              <div className="bg-slate-200 rounded-lg px-5 py-8 grid place-items-center cursor-pointer hover:bg-slate-300" onClick={() => {window.location.href="https://https://wa.me/6281556903754"}}>
                <div>
                  <div className="flex">
                    <img width="24" height="24" src="https://img.icons8.com/ios-filled/50/whatsapp--v1.png" alt="whatsapp--v1" className="mr-2"/>
                    <h2>Contact Us On WhatsApp</h2>
                  </div>
                  <p className="ml-7">+62 815-5690-3754</p>
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
