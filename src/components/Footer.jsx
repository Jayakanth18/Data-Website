import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaWhatsappSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="m-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className="w-full text-3xl font-bold cursor-pointer text-[#00df9a]">REACT.</h1>
        <p className="py-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate
          pariatur labore voluptatem ebfbsfbubfuwtatibus, nihil{" "}
        </p>
        <div className="flex justify-between md:w-[55%] my-6">
          <FaTwitterSquare size={30} />
          <FaGithubSquare size={30} />
          <FaFacebookSquare size={30} />
          <FaInstagramSquare size={30} />
          <FaWhatsappSquare size={30} />
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-6">
        <div>
          <h6 className="font-medium cursor-pointer text-[#00df9a]">Solutions</h6>
          <ul>
            <li className="py-2 text-sm">Analytics</li>
            <li className="py-2 text-sm">Marketing</li>
            <li className="py-2 text-sm">Commerce</li>
            <li className="py-2 text-sm">Insights</li>
          </ul>
        </div>
        {/* 2 */}
        <div>
          <h6 className="font-medium cursor-pointer text-[#00df9a]">Support</h6>
          <ul>
            <li className="py-2 text-sm">Pricing</li>
            <li className="py-2 text-sm">Documentation</li>
            <li className="py-2 text-sm">Guides</li>
            <li className="py-2 text-sm">API Status</li>
          </ul>
        </div>
        {/* 3 */}
        <div>
          <h6 className="font-medium cursor-pointer text-[#00df9a]">Company</h6>
          <ul>
            <li className="py-2 text-sm">About</li>
            <li className="py-2 text-sm">Blog</li>
            <li className="py-2 text-sm">Careers</li>
            <li className="py-2 text-sm">Press</li>
          </ul>
        </div>
        {/* 4 */}
        <div>
          <h6 className="font-medium cursor-pointer text-[#00df9a]">Legal</h6>
          <ul>
            <li className="py-2 text-sm">Claim</li>
            <li className="py-2 text-sm">Policy</li>
            <li className="py-2 text-sm">Terms</li>
            <li className="py-2 text-sm">Copyrights</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
