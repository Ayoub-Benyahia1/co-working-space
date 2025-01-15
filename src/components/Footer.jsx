import React from "react";

function Footer() {
  return (
    <section className="lg:h-[55dvh] bg-black text-white">
      <div className="h-[90%] flex flex-col lg:flex-row bg-white text-black">
        <div className="h-[20dvh] lg:w-[25%] lg:h-[100%] flex justify-center items-center border-b-2 lg:border-r-2">
          <div className="w-[80%] h-[80%] border-2 rounded-full flex justify-center items-center text-5xl">
            Worky
          </div>
        </div>
        <div className="h-[30dvh] lg:w-[25%] lg:h-[100%] flex items-center border-b-2 lg:border-r-2">
          <div className="w-[70%] h-[80%] md:w-[50%] lg:h-[50%] flex flex-col mx-auto justify-evenly">
            <h1 className="text-4xl font-bold">Interested?</h1>
            <p className="text-gray-400">
              Book a Tour Book a Meeting Room Enquire About space
            </p>
            <h2 className="text-xl border-b-2 w-[50%] lg:w-[60%] border-black">Contuct Us</h2>
          </div>
        </div>
        <div className="h-[30dvh] lg:w-[25%] lg:h-[100%] flex items-center border-b-2 lg:border-r-2">
          <div className="w-[70%] h-[80%] md:w-[50%] lg:h-[50%] flex flex-col mx-auto justify-evenly">
            <h1 className="text-4xl font-bold">Find Us</h1>
            <p className="text-gray-400">
              Workey Head headquarter 99 Brynglas Road, KY14 7AE
            </p>
            <h2 className="text-xl border-b-2 w-[50%] lg:w-[70%] border-black">Get Directions</h2>
          </div>
        </div>
        <div className="h-[30dvh] lg:w-[25%] lg:h-[100%] flex items-center border-b-2 lg:border-r-2">
          <div className="w-[70%] h-[80%] md:w-[50%] lg:h-[40%] flex flex-col mx-auto gap-5">
            <h1 className="text-4xl font-bold">Contact Us</h1>
            <p className="text-gray-400">
              0305 512 6769
            </p>
            <h2 className="text-gray-400">Hello@Workey.com</h2>
          </div>
        </div>
      </div>
      <p className="text-center mt-3">Copyright 2024</p>
    </section>
  );
}

export default Footer;
