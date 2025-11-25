import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import logo from "../assets/logo.png"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 pb-6 px-6 mt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">


        <div>
          <div className="flex items-center gap-3">
            <img
              src={logo}
              className="w-44 invert"
              alt="logo"
            />
           
          </div>
          <p className="mt-4 text-sm">
            Your trusted car rental partner.  
            Comfortable, Fast & Affordable.
          </p>

   
          <div className="flex gap-4 mt-5 text-xl">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaYoutube /></a>
            <a href="#"><FaTwitter /></a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#">Home</a></li>
            <li><a href="#">Cars</a></li>
            <li><a href="#">Rent Process</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>


        <div>
          <h3 className="text-lg font-semibold text-white">Company</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Our Team</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>

     
        <div>
          <h3 className="text-lg font-semibold text-white">Support</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#">Contact</a></li>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-10 border-t border-gray-700  pt-4">
        © {new Date().getFullYear()} RentWheels — All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
