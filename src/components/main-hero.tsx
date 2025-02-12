import React from "react";
import Image from "next/image";
import mainHero from "../../public/img/pool.jpg";
import { Button } from "./ui/button";

export const MainHero = () => {
  return (
    <section className="relative h-[75vh] md:mx-28 rounded-[5rem] mt-24 w-full md:w-auto">
      <Image
        src={mainHero}
        alt="Modern luxury home with pool"
        fill
        className="object-cover rounded-[4rem] w-full "
        priority
      />

      <div className="absolute py-12 px-6">
        <div className="md:max-w-[1400px] md:mx-auto px-6 h-full">
          <div className="flex flex-col justify-center h-full md:max-w-2xl">
            <h1 className="text-2xl md:text-[52px] text-[#1A1A1A] leading-[1.2] mb-4 font-serif">
              TRANSFORMING SPACES,
              <br />
              BUILDING DREAMS
            </h1>
            <p className="text-[#1A1A1A] mb-8">
              Landscaping | Outdoor Living | Construction Services
            </p>
            <div className="flex md:flex-row flex-col gap-4">
              <Button className="bg-[#C69C3F] hover:bg-[#B38C2F] text-white rounded-3xl px-8 py-6 text-[15px]">
                Explore Our Services
              </Button>
              <Button
                variant="outline"
                className="bg-white/90 hover:bg-white text-[#1A1A1A] rounded-3xl px-8 py-6 text-[15px]"
              >
                View Our Work
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 bg-white rounded-tl-3xl">
        <p className="text-[#1A1A1A] md:text-xl font-medium text-right md:pl-12 pl-6 md:pr-6 pr-3 py-5">
          From Vision to Reality,
          <br />
          Inside and Out
        </p>
      </div>
    </section>
  );
};
