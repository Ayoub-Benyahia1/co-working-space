import React from "react";

function About() {
  return (
    <section className="h-[100dvh] bg-black text-white">
      <div className="flex md:gap-20 h-[100%]">
        <div className="w-[20%] h-[100%] pt-20 flex flex-col gap-20 items-center border-r-2 relative">
          <div className="w-[20dvw] md:w-[10dvw] h-[20dvh] flex border-[1px] rounded-full items-center">
            <h1 className="text-sm text-center">
              Workspace Welcome to the Worky You New
            </h1>
          </div>
          <div className="w-[25dvw] h-[50dvh] border-2 rounded-full items-center absolute bottom-[10dvh] right-[-8dvw] bg-black flex">
            <p className="text-center text-sm">
              Work alongside and collaborate with companies in Denver, CO
              shaping industries like sustainability, tech, design,
              architecture, social entreprise and the arts.
            </p>
          </div>
        </div>
        <div className="w-[70%] lg:w-[60%] mx-auto items-center flex flex-col md:mt-10">
          <h1 className="md:w-[70%] text-[2.7rem] md:text-[4rem] lg:text-8xl text-center md:mb-10">A Community At Work</h1>
          <div className="flex flex-col md:flex-row gap-4 md:gap-10 items-center">
            <div className="w-[80%] h-[40dvh] md:w-[50%] md:h-[55dvh] p-5 border-2 flex flex-col justify-around">
              <h1>logo</h1>
              <h1 className="text-lg font-bold">100+ Renowned companies</h1>
              <p>
                Before the pandemic, the con-ventional wisdom had been that
                office were critical to productivity, culture, and wining the
                war for talent.
              </p>
            </div>
            <div className="w-[80%] h-[40dvh] md:w-[50%] md:h-[55dvh] p-5 border-2 flex flex-col justify-around">
              <h1>logo</h1>
              <h1 className="text-lg font-bold">10 mixed-use buildings</h1>
              <p>
                We have Large floor-to-ceiling windows flood the space with
                light and offer stunning views across the City. As well as
                creating bright and airy shared spaces.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
