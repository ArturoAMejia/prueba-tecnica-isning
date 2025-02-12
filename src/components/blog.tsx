import React from "react";
import landscaping from "../../public/img/landscaping.jpg";
import poolResort from "../../public/img/pool-resor.jpg";
import pool from "../../public/img/pool-3.jpg";
import Image from "next/image";
import { Button } from "./ui/button";

export const Blog = () => {
  return (
    <section>
      <div className="flex flex-col items-center">
        <h2 className="text-5xl font-serif mb-4 text-center pt-8 pb-2">
          Our Blog
          <div className="w-56 h-0.5 bg-neutral-300 mx-auto mt-2"></div>
        </h2>

        <p className="text-center px-12 w-1/2">
          Whether youre looking for inspiration or information, our blog has got
          you covered. From the latest trends to timeless tips, we cover a wide
          range of topics to help you stay informed and inspired.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-between  justify-center items-center mt-12 gap-8 md:mx-28">
        <div className="relative my-12">
          <Image
            alt="poolResort"
            src={poolResort}
            width={400}
            height={200}
            className="rounded-3xl"
          />
          <div className="absolute w-[280px] bg-white p-4 rounded-3xl -bottom-[50px] lg:right-[65px] right-[60px] h-40 shadow-xl">
            <h4 className="capitalize">
              the ultimate guide to home remodeling
            </h4>
            <p className="text-sm mt-2 w-[10rem] my-4">
              Lorem ipsum dolor sit,
            </p>
            <div className="flex justify-center">
              <Button>Read more</Button>
            </div>
          </div>
        </div>
        <div className="relative my-12">
          <Image
            alt="poolResort"
            src={pool}
            width={400}
            height={200}
            className="rounded-3xl"
          />
          <div className="absolute w-[280px] bg-white p-4 rounded-3xl -bottom-[50px] lg:right-[65px] right-[60px] h-40 shadow-xl">
            <h4 className="capitalize">
              the ultimate guide to home remodeling
            </h4>
            <p className="text-sm mt-2 w-[10rem] my-4">
              Lorem ipsum dolor sit,
            </p>
            <div className="flex justify-center">
              <Button>Read more</Button>
            </div>
          </div>
        </div>
        <div className="relative my-12">
          <Image
            alt="poolResort"
            src={landscaping}
            width={400}
            height={200}
            className="rounded-3xl"
          />
          <div className="absolute w-[280px] bg-white p-4 rounded-3xl -bottom-[50px] lg:right-[65px] right-[60px]ˆ h-40 shadow-xl">
            <h4 className="capitalize">
              the ultimate guide to home remodeling
            </h4>
            <p className="text-sm mt-2 w-[10rem] my-4">
              Lorem ipsum dolor sit,
            </p>
            <div className="flex justify-center">
              <Button>Read more</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:flex justify-center my-14">
        <Button className="bg-[#C69C3F] hover:bg-[#B38C2F] text-white">
          Discover more
        </Button>
      </div>
    </section>
  );
};
