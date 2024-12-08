import React from "react";
import Header from "@/components/header";
import Image from "next/image";
import Footer2 from "@/components/footer2";

const page = () => {
  return (
    <div className="font-poppins">
      <Header />
      <div>
        <div className="h-[316px] w-full bg-components_bg flex justify-center items-center">
          <div className="flex justify-between items-center flex-col">
            <Image
              src={"/images/logo.png"}
              alt="logo"
              height={77}
              width={77}
            ></Image>
            <p className="font-medium text-[52px] leading-10">My Account</p>
            <div className="flex w-[200px] h-16 justify-between text-xl items-center">
              <p className="font-medium">Home</p>
              <p>
                <Image
                  src={"/images/arrow.png"}
                  alt="arrow"
                  height={8}
                  width={14}
                  className="h-[18px] w-[10px]"
                ></Image>
              </p>
              <p className="font-light">My Account</p>
            </div>
          </div>
        </div>
        <div className="w-full h-[760px] flex justify-evenly sm:h-[1300px] sm:flex-col">
          <div className="w-[608px] sm:w-[400px] h-[630px] flex flex-col justify-between p-16">
            <div>
              <p className="font-semibold text-[36px] leading-[54px]">Log In</p>
            </div>
            <div className="h-[121px] flex flex-col justify-between">
              <label className="font-medium">Username or email address</label>
              <input className="w-[423px] sm:w-[400px] h-[75px] border-2 rounded-[10px]"></input>
            </div>
            <div className="h-[121px] flex flex-col justify-between">
              <label className="font-medium">Password</label>
              <input className="w-[423px] sm:w-[400px] h-[75px] border-2 rounded-[10px]"></input>
            </div>
            <div className="flex items-center space-x-[12px]">
              <input type="checkbox" className="h-[27px] w-[30px]" />
              <label className="text-gray-700">Remember me</label>
            </div>
            <div className="h-[64px] flex w-[423px] sm:w-[400px] justify-between items-center">
              <button
                className="w-[215px] h-[64px] border rounded-[15px] 
                    text-xl border-black"
              >
                Login In
              </button>
              <p className="font-light">Lost Your Password?</p>
            </div>
          </div>
          <div className="w-[608px] sm:w-[400px] h-[630px] flex flex-col justify-between p-16">
            <div>
              <p className="font-semibold text-[36px] leading-[54px]">
                Register
              </p>
            </div>
            <div className="h-[121px] flex flex-col justify-between">
              <label className="font-medium">Email address</label>
              <input className="w-[423px] sm:w-[400px] h-[75px] border-2 rounded-[10px]"></input>
            </div>
            <div className="h-[148px] sm:w-[400px] flex flex-col justify-between">
              <p className="mb-4">
                A link to set a new password will be sent to your email address.
                </p>
                <p>
                Your personal data will be used to support your experience
                throughout this website, to manage access to your account, and
                for other purposes described in our <b>privacy policy.</b>
              </p>
            </div>
            <div className="h-[64px] flex w-[423px] sm:w-[400px] justify-between items-center">
              <button
                className="w-[215px] h-[64px] border rounded-[15px] 
                    text-xl border-black"
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer2 />
    </div>
  );
};

export default page;
