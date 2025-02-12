import React from "react";
import { CustomCard } from "./ui/custom-card";

export const Services = () => {
  return (
    <section className="bg-neutral-50 mt-4 md:px-28 md:pb-28 pb-12">
      <div className="flex flex-col items-center">
        <h2 className="text-5xl font-serif mb-4 text-center pt-8 pb-2">
          Our Services
          <div className="w-56 h-0.5 bg-neutral-300 mx-auto mt-2"></div>
        </h2>

        <p className="text-center px-12 w-full">
          Comprehensive solutions for your outdoor and construction needs.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-9 py-8 place-content-center">
        {Array.from({ length: 3 }).map((_, index) => (
          <CustomCard className="border-0 shadow-xl rounded-2xl" key={index} />
        ))}
      </div>
    </section>
  );
};
