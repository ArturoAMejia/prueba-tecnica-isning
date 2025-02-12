import React from "react";
import Image from "next/image";
import constructionPool from "../../public/img/construction-pool.jpg";
import landscaping from "../../public/img/landscaping.jpg";
import poolResort from "../../public/img/pool-resor.jpg";
import pool from "../../public/img/pool.jpg";
import landscaping2 from "../../public/img/landscaping3.jpg";

export const Gallery = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-between mt-28 gap-8 md:mx-28">
      <div className="flex flex-col w-full lg:w-1/3 p-4">
        <h2 className="text-3xl md:text-5xl font-serif mb-4 text-left">
          Explore <span className="block">Our Gallery</span>
          <div className="w-20 md:w-52 h-0.5 bg-neutral-300 mt-2"></div>
        </h2>
        <p className="py-6 px-4 md:w-[460px] w-full">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quas
          quibusdam iure, iusto illo consequuntur accusamus itaque molestiae
          harum fugit animi cum? Dolor aspernatur doloribus qui,
        </p>
      </div>
      <div className="lg:max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-4">
          <div>
            <Image
              className="w-full rounded-xl shadow"
              src={constructionPool}
              width="232"
              height="290"
              alt="Image 01"
            />
          </div>
          <div>
            <Image
              className="w-full rounded-xl shadow"
              src={landscaping}
              width="232"
              height="290"
              alt="Image 02"
            />
          </div>
          <div>
            <Image
              className="w-full rounded-xl shadow"
              src={poolResort}
              width="232"
              height="155"
              alt="Image 04"
            />
          </div>
          <div>
            <Image
              className="w-full rounded-xl shadow h-auto"
              src={pool}
              width="232"
              height="349"
              alt="Image 07"
            />
          </div>
          <div className="md:col-span-2 ">
            <Image
              className="w-full rounded-xl shadow md:h-[170px]"
              src={landscaping2}
              width="232"
              height="100"
              objectFit="contain"
              alt="Image 08"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
