/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
const Term = ({ showTerm, setShowTerm }) => {
  return (
    <div className={`absolute bg-white px-5 grid ${showTerm ? "" : "hidden"}`}>
      <h1 className="text-center text-lg font-bold mb-5">Terms and Conditions</h1>
      <p>Welcome to Crypto Global Swift. By using our platform, you agree to comply with and be bound by the following terms and conditions. Please review them carefully.</p>
      <h2 className="font-semibold mt-3 mb-1">1. Acceptance of Terms</h2>
      <p>By accessing or using Crypto Global Swift, you agree to be bound by these Terms and Conditions and all applicable laws and regulations. If you do not agree with any part of these terms, you are prohibited from using or accessing this site.</p>
      <h2 className="font-semibold mt-3 mb-1">2. Description of Services</h2>
      <p>Crypto Global Swift provides innovative solutions in cryptocurrency trading and exchange, developed with blockchain technology to ensure a secure, efficient, and transparent infrastructure for users worldwide. Our platform streamlines the crypto transaction process, enabling quick and easy buying, selling, and exchanging of digital assets.</p>
      <h2 className="font-semibold mt-3 mb-1">3. Transaction Speed and Volume</h2>
      <p>We prioritize transaction speed and have optimized our infrastructure to handle high transaction volumes with quick response times. This enables users to make swift investment decisions in the fast-paced crypto market, where asset prices can fluctuate rapidly.</p>
      <h2 className="font-semibold mt-3 mb-1">4. User Interface and Customer Support</h2>
      <p>Crypto Global Swift offers an intuitive and user-friendly interface, making it accessible to both experienced and novice users. Our responsive customer service team is available to assist users in navigating the platform and addressing any questions that may arise.</p>
      <h2 className="font-semibold mt-3 mb-1">5. Innovation and Development</h2>
      <p>Our vision is to become a leader in the global digital asset trading ecosystem. We continuously innovate and develop our technology to enhance our services, support a wide range of cryptocurrencies, and integrate with various global markets to expand opportunities for users to participate in the digital economy sustainably.</p>
      <h2 className="font-semibold mt-3 mb-1">6. Fees and Charges</h2>
      <p>Users may be required to pay fees for certain services on the platform, including obtaining loans. The fees are designed to cover the operational costs and ensure the continued provision of high-quality services. All fees will be clearly outlined and agreed upon before any transaction or service is completed.</p>
      <h2 className="font-semibold mt-3 mb-1">7. Loans</h2>
      <p>Crypto Global Swift offers loan services to users, subject to eligibility criteria and approval. Users must agree to the terms of the loan, including repayment schedules and applicable fees. Failure to comply with the loan terms may result in penalties or legal action.</p>
      <h2 className="font-semibold mt-3 mb-1">8. Eligibility</h2>
      <p>To use Crypto Global Swift, you must be at least 18 years old and comply with all local, state, and international laws and regulations. By using the platform, you warrant that you have the legal authority to enter into this agreement.</p>
      <h2 className="font-semibold mt-3 mb-1">9. Security</h2>
      <p>We employ advanced security measures to protect your data and transactions. However, you are responsible for maintaining the confidentiality of your account information and for any activity that occurs under your account.</p>
      <h2 className="font-semibold mt-3 mb-1">10. Limitation of Liability</h2>
      <p>Crypto Global Swift will not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the platform. Our total liability will not exceed the amount you have paid to us in the past six months.</p>
      <h2 className="font-semibold mt-3 mb-1">11. Changes to Terms</h2>
      <p>We reserve the right to modify these terms at any time. Any changes will be effective immediately upon posting on our website. Your continued use of the platform after any changes signifies your acceptance of the new terms.</p>
      <h2 className="font-semibold mt-3 mb-1">12. Contact Information</h2>
      <p>Please <Link to={"/contact"} className="text-blue-500 font-semibold">contact us</Link> for any questions about these Terms and Conditions.</p>
      <p className="mt-3">By using Crypto Global Swift, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.</p>

      <button
        className="bg-green-500 text-white px-8 py-2 rounded-md w-fit mx-auto my-5"
        onClick={() => {
          setShowTerm(!showTerm);
        }}
      >
        OK
      </button>
    </div>
  );
};

export default Term;
