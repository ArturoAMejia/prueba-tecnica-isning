import { Star } from "lucide-react";
import Image from "next/image";
import React from "react";
import laura from "../../public/img/laura.jpg";
import { Button } from "./ui/button";

export const Testimonials = () => {
  return (
    <section className="mt-12 md:mt-28 md:px-28 md:pb-28 pb-12">
      <div className="flex flex-col items-center w-full">
        <h2 className="text-5xl font-serif mb-4 text-center pt-8 pb-2">
          Testimonials
          <div className="w-56 h-0.5 bg-neutral-300 mx-auto mt-2"></div>
        </h2>

        <p className="text-center px-12 w-full">
          Don&apos;t just take our word for it - hear our satisfed clients! We
          take pride in the strong relationships we have built with our clients
          over the years.
        </p>
      </div>
      <div className="md:flex my-12">
        <div className="bg-neutral-50 rounded-3xl lg:mr-32 mb-4 lg:relative lg:h-72 p-12 lg:w-1/3 w-full">
          <div>
            <h3 className="text-2xl font-serif">Laura Chen</h3>
            <p className="text-[12px] mt-2 w-[10rem]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
              eos!
            </p>

            <div className="text-7xl text-gray-200 text-center mr-10 font-serif">{`""`}</div>
            <div className="flex my-8">
              <Star fill="#FAD351" className="text-[#FAD351]" />
              <Star fill="#FAD351" className="text-[#FAD351]" />
              <Star fill="#FAD351" className="text-[#FAD351]" />
              <Star fill="#FAD351" className="text-[#FAD351]" />
              <Star fill="#FAD351" className="text-[#FAD351]" />
            </div>
          </div>
          <div className="lg:absolute lg:top-[35px] lg:-right-40 bg-white rounded-full">
            <Image
              src={laura}
              alt="laura"
              width={350}
              height={400}
              className="rounded-3xl"
            />
          </div>
        </div>
        <div className="bg-neutral-50 rounded-3xl lg:ml-32 mb-4 lg:relative lg:h-72 p-12 lg:w-1/3 w-full">
          <div>
            <h3 className="text-2xl font-serif">Laura Chen</h3>
            <p className="text-[12px] mt-2 w-[10rem]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
              eos!
            </p>

            <div className="text-7xl text-gray-200 text-center mr-10 font-serif">{`""`}</div>
            <div className="flex my-8">
              <Star fill="#FAD351" className="text-[#FAD351]" />
              <Star fill="#FAD351" className="text-[#FAD351]" />
              <Star fill="#FAD351" className="text-[#FAD351]" />
              <Star fill="#FAD351" className="text-[#FAD351]" />
              <Star fill="#FAD351" className="text-[#FAD351]" />
            </div>
          </div>
          <div className="lg:absolute lg:top-[35px] lg:-right-40 bg-white rounded-full">
            <Image
              src={laura}
              alt="laura"
              width={350}
              height={400}
              className="rounded-3xl"
            />
          </div>
        </div>
      </div>
      <div className="lg:flex justify-center">
        <Button className="bg-[#C69C3F] hover:bg-[#B38C2F] text-white">
          Explore More Testimonials
        </Button>
      </div>
    </section>
  );
};
