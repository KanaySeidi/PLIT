import React from "react";
import img from "../assets/icon/logo-background2.png"

const Footer = () => {
  return (
    <>
      <footer className="bg-[#63001F] text-white p-8 border-t">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Section */}
          <div>
            <h3 className="font-semibold">
              -----------
            </h3>
            <p className="mt-2 text-sm">
------------------------
            </p>
            <div className="flex space-x-2 mt-4 w-[200px] h-auto">
                <img src={img} alt="" srcset="" />
            </div>
          </div>

          {/* Center Section */}
          <div className="text-sm space-y-1">
            <h4 className="font-semibold mb-2">-------</h4>
            <div>-------</div>
            <div>============</div>
            <div>=======</div>
            <div>========</div>
            <div>=======</div>
            <div>==========</div>
            <div>==========</div>
          </div>

          {/* Right Section */}
          <div className="text-sm">
            <h4 className="font-semibold mb-2">========</h4>
            <p>===========.</p>
            <div className="border-t mt-4"></div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-8 border-t pt-4 flex flex-col md:flex-row items-center justify-between text-xs">
          <div>=======</div>
          <div className="flex space-x-2 mt-2 md:mt-0">
          <button
                className="w-8 h-8 bg-black rounded"
                aria-label="Social button"
              ></button>
              <button
                className="w-8 h-8 bg-black rounded"
                aria-label="Social button"
              ></button>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
