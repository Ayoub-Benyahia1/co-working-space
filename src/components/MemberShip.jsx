import React from "react";
import { memberships } from "../api/membershipsData";

function MemberShip() {
  
  var first = []
  var second = []
  memberships.map((membership) => {
    const arr = membership.name.split(" ");
    first.push(arr[0]);
    second.push(arr[1]);
  });
  
  
  return (
    <section className="lg:h-[140dvh] bg-black text-white p-[1rem] lg:p-[6rem]">
      <h1 className="text-5xl md:text-8xl mb-16 md:mb-20">Our Memberships</h1>
      <div className="flex flex-col gap-10">
        {memberships &&
          memberships.map((membership, index) => (
            <div className="md:h-[25dvh] w-[100%] flex flex-col md:flex-row gap-10 md:gap-0 justify-between items-center border-b-2 pb-6">
              <h1 className="text-5xl lg:text-7xl text-center md:text-start">
                {first[index]} <br /> {second[index]}
              </h1>
              <ul className="text-sm md:text-lg lg:text-2xl list-disc">
                {membership.includes && membership.includes.map((include, index) => (
                  <li>{include}</li>
                ))}
              </ul>
              <div className="flex md:flex-col gap-5 items-center md:items-end">
                <h1 className="text-4xl lg:text-6xl">${membership.price}</h1>
                <h2 className="text-2xl">Monthly</h2>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}

export default MemberShip;
