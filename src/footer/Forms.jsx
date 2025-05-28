import React from "react";

const Forms = () => {
  return (
    <>
      <div className="w-full h-full flex justify-center items-center p-4">
        <form className="w-full max-w-[600px] p-6 sm:p-10 bg-[#d3d3d3] flex flex-col items-start justify-center gap-8 sm:gap-10 rounded border-4 border-[#323232] shadow-[8px_8px_0_0_#323232]">
          <p className="font-bold text-[28px] sm:text-[40px] text-[#323232] mb-[20px] sm:mb-[30px] flex flex-col font-['DelaGothicOne']">
            Welcome,
            <span className="text-[#666] font-semibold text-[22px] sm:text-[34px] font-['SpaceMono']">
              sign in to continue
            </span>
          </p>

          <button className="flex justify-center items-center gap-4 w-full h-[60px] sm:h-[80px] rounded border-4 border-[#323232] bg-white shadow-[8px_8px_0_0_#323232] text-[18px] sm:text-[28px] font-semibold text-[#323232] cursor-pointer transition-all duration-250 relative overflow-hidden z-[1] hover:text-[#e8e8e8] before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:bg-[#212121] before:z-[-1] before:shadow-[8px_16px_38px_-6px_rgba(0,0,0,0.27)] hover:before:w-full">
            <svg className="w-8 h-8 sm:w-12 sm:h-12" viewBox="0 0 24 24">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
              <path d="M1 1h22v22H1z" fill="none" />
            </svg>
            Continue with Google
          </button>

          <button className="flex justify-center items-center gap-4 w-full h-[60px] sm:h-[80px] rounded border-4 border-[#323232] bg-white shadow-[8px_8px_0_0_#323232] text-[18px] sm:text-[28px] font-semibold text-[#323232] cursor-pointer transition-all duration-250 relative overflow-hidden z-[1] hover:text-[#e8e8e8] before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:bg-[#212121] before:z-[-1] before:shadow-[8px_16px_38px_-6px_rgba(0,0,0,0.27)] hover:before:w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="black"
              className="w-8 h-8 sm:w-12 sm:h-12"
            >
              <path d="M12 0c6.6274 0 12 5.3726 12 12s-5.3726 12-12 12S0 18.6274 0 12 5.3726 0 12 0zm3.115 4.5h-6.23c-2.5536 0-4.281 1.6524-4.3805 4.1552L4.5 8.8851v6.1996c0 1.3004.4234 2.4193 1.2702 3.2359.7582.73 1.751 1.1212 2.8818 1.1734l.2633.006h6.1694c1.3004 0 2.389-.4234 3.1754-1.1794.762-.734 1.1817-1.7576 1.2343-2.948l.0056-.2577V8.8851c0-1.2702-.4234-2.3589-1.2097-3.1452-.7338-.762-1.7575-1.1817-2.9234-1.2343l-.252-.0056zM8.9152 5.8911h6.2299c.9072 0 1.6633.2722 2.2076.8166.4713.499.7647 1.1758.8103 1.9607l.0063.2167v6.2298c0 .9375-.3327 1.6936-.877 2.2077-.499.4713-1.176.7392-1.984.7806l-.2237.0057H8.9153c-.9072 0-1.6633-.2722-2.2076-.7863-.499-.499-.7693-1.1759-.8109-2.0073l-.0057-.2306V8.885c0-.9073.2722-1.6633.8166-2.2077.4712-.4713 1.1712-.7392 1.9834-.7806l.2242-.0057h6.2299-6.2299zM12 8.0988c-2.117 0-3.871 1.7238-3.871 3.871A3.8591 3.8591 0 0 0 12 15.8408c2.1472 0 3.871-1.7541 3.871-3.871 0-2.117-1.754-3.871-3.871-3.871zm0 1.3911c1.3609 0 2.4798 1.119 2.4798 2.4799 0 1.3608-1.119 2.4798-2.4798 2.4798-1.3609 0-2.4798-1.119-2.4798-2.4798 0-1.361 1.119-2.4799 2.4798-2.4799zm4.0222-2.3589a.877.877 0 1 0 0 1.754.877.877 0 0 0 0-1.754z" />
            </svg>
            Continue with instagram
          </button>

          <div className="w-full flex items-center gap-4">
            <div className="flex-1 h-[4px] sm:h-[6px] rounded bg-[#666]" />
            <span className="text-[#323232] text-[16px] sm:text-[25px] font-semibold font-['SpaceMono']">
              OR
            </span>
            <div className="flex-1 h-[4px] sm:h-[6px] rounded bg-[#666]" />
          </div>

          <input
            type="email"
            placeholder="Email"
            name="email"
            className="w-full h-[60px] sm:h-[80px] rounded border-4 border-[#323232] bg-white shadow-[8px_8px_0_0_#323232] text-[18px] sm:text-[28px] font-semibold text-[#323232] px-[16px] sm:px-[20px] py-[10px] outline-none"
          />

          <button className="flex justify-center items-center gap-4 w-full h-[60px] sm:h-[80px] rounded border-4 border-[#323232] bg-white shadow-[8px_8px_0_0_#323232] text-[18px] sm:text-[28px] font-semibold text-[#323232] cursor-pointer transition-all duration-250 relative overflow-hidden z-[1] hover:text-[#e8e8e8] before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:bg-[#212121] before:z-[-1] before:shadow-[8px_16px_38px_-6px_rgba(0,0,0,0.27)] hover:before:w-full">
            Continue
            <svg
              className="w-8 h-8 sm:w-12 sm:h-12"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m6 17 5-5-5-5" />
              <path d="m13 17 5-5-5-5" />
            </svg>
          </button>
        </form>
      </div>
    </>
  );
};

export default Forms;
