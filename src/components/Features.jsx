import React from "react";
import space1 from "../images/working-space2.jpg";
import space2 from "../images/working-space3.jpg";
import { places, includedOnOffice } from "../api/workingPlaceData";

function Features() {

  return (
    <section className="w-[100dvw]">
      <div className="w-[100%] h-[90dvh] md:h-[40dvh] lg:h-[60dvh] my-6 md:my-20 md:flex md:gap-12">
        <div className="w-[80%] h-[40dvh] md:my-auto lg:my-0 md:h-[100%] lg:h-[100%] md:w-[40%] flex flex-col justify-between mx-auto md:mx-0 md:pl-10 lg:pl-36">
          <h1 className="text-6xl lg:text-8xl">A Space To Make Your Own</h1>
          <p className="text-sm md:w-[80%] lg:w-[50%]">
            Imagine your perfect office - and then let our expert design
            partners turn it into reality.
          </p>
          <button className="w-32 h-10 bg-black text-white">Explore</button>
        </div>
        <div className="md:w-[60%] items-center lg:items-stretch mt-4 md:mt-0 flex flex-col md:flex-row gap-5">
          <img
            src={space1}
            alt=""
            className="w-[80%] h-[23dvh] md:w-[50%] md:h-[80%] lg:h-[100%]"
          />
          <img
            src={space2}
            alt=""
            className="w-[80%] h-[23dvh] md:w-[50%] md:h-[80%] lg:h-[100%]"
          />
        </div>
      </div>
      <div className="w-[100%] h-[120dvh] md:h-[105dvh] lg:px-20 pt-8 flex flex-col gap-[7dvh] mb-20">
        <h1 className="lg:w-[50%] mx-auto text-6xl md:text-8xl text-center">
          Space To Suit Your Needs
        </h1>
        <div className="w-[95%] md:w-[80%] h-[80%] md:h-[70dvh] mx-auto flex flex-col md:flex-row justify-around">
          <div className="md:w-[30%] flex md:flex-col justify-between">
            <img
              src={space1}
              alt=""
              className="w-[55dvw] md:w-[100%] h-[30dvh]"
            />
            <p className="text-center my-auto font-semibold">
              One and Two year lease terms available.
            </p>
          </div>
          <div className="md:w-[30%] flex md:flex-col-reverse justify-between">
            <img
              src={space2}
              alt=""
              className="w-[55dvw] md:w-[100%] h-[30dvh]"
            />
            <p className="text-center my-auto font-semibold">All-in pricing.</p>
          </div>
          <div className="md:w-[30%] flex md:flex-col justify-between">
            <img
              src={space1}
              alt=""
              className="w-[55dvw] md:w-[100%] h-[30dvh]"
            />
            <p className="text-center my-auto font-semibold">
              2-10 Person Occupancy With Larger Suites.
            </p>
          </div>
        </div>
      </div>
      <div className="w-[95%] h-[100dvh] lg:w-[70%] md:h-[70dvh] mx-auto">
        <div className="w-[100%] h-[25dvh] md:h-[15dvh] mb-[5dvh] flex flex-col md:flex-row justify-between items-center">
          <h1 className="md:w-[40%] text-4xl text-center md:text-start md:text-6xl">
            Included In Your Office Lease
          </h1>
          <p className="md:w-[35%] text-center md:text-left">
            We advice you on everything from plants and planters to lighting and
            layouts. To make your transition as smooth as possible.
          </p>
        </div>
        <div className="w-[100%] h-[66dvh] md:h-[50dvh] flex flex-col md:flex-row gap-6 md:gap-20">
          <div className="w-full h-[50%] md:w-[50%] md:h-[80%] flex flex-col justify-between md:border-r-2 border-dashed border-black items-center md:items-start">
            {includedOnOffice &&
              includedOnOffice.first.map((include, index) => (
                <div className="w-[80%] h-[15%] border-b-2" key={index}>
                  <p className="text-sm">{include}</p>
                </div>
              ))}
          </div>
          <div className="w-full h-[50%] md:w-[50%] md:h-[80%] flex flex-col justify-between items-center md:items-start">
            {includedOnOffice &&
              includedOnOffice.second.map((include, index) => (
                <div className="w-[80%] h-[15%] border-b-2" key={index}>
                  <p className="text-sm">{include}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className="h-[60dvh] bg-black text-white flex flex-col justify-around items-center text-center mb-10">
        <h1 className="text-5xl md:text-7xl lg:text-8xl w-[80%] lg:w-[45%]">
          Ready To Visit In Person?
        </h1>
        <p>We're here to show you round. Book a tour with our friendly team.</p>
        <button className="w-[50dvw] md:w-[30dvw] lg:w-[10dvw] h-[5dvh] border-2">
          Book A Tour
        </button>
      </div>
      <div className="h-auto">
        <h1 className="text-6xl md:text-8xl lg:text-9xl w-[90%] lg:w-[65%] text-center mx-auto mb-10 md:mb-24">
          See Our Working Places
        </h1>
        <div className="w-[96%] md:h-[70dvh] lg:w-[90%] flex flex-col md:flex-row md:flex-wrap gap-8 md:gap-0 md:justify-between mx-auto mb-10">
          {places &&
            places.map((place, index) => (
              <div className="md:w-[50%] lg:w-[30%] flex items-center gap-2 lg:gap-10">
                <img
                  src={place.img}
                  alt=""
                  className="w-[50%] h-[20dvh] md:w-[20dvw] md:h-[14dvh] lg:w-[8dvw] lg:h-[16dvh]"
                />
                <div className="flex flex-col">
                  <h1 className="text-2xl lg:text-3xl font-semibold">
                    {place.city}
                  </h1>
                  <hr className="w-[16dvw] md:w-[6dvw] lg:w-[3dvw] border-black" />
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
