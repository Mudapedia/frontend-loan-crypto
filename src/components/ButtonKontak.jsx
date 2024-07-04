import { Link } from "react-router-dom";

const ButtonKontak = () => {
  return (
    <section className="absolute top-0 right-0 bg-white rounded-bl-md">
      <Link
        to={"/contact"}
        className="text-center flex flex-col justify-center items-center shadow-md p-2 rounded-md"
      >
        <img src="WhatsApp_icon.png.webp" alt="whatsap" className="w-16 " />
        <p className="font-semibold">Contact Us</p>
      </Link>
    </section>
  );
};

export default ButtonKontak;
