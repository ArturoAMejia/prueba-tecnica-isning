import React from "react";
import Image from "next/image";
import poolResort from "../../public/img/pool-resor.jpg";
import constructionPool from "../../public/img/construction-pool.jpg";
import { Button } from "./ui/button";

export const WelcomeHero = () => {
  return (
    <section className="md:mx-28 mt-20 md:flex gap-2 justify-center mb-8">
      <div className="hidden lg:block md:w-1/3 w-full">
        <Image
          src={poolResort}
          alt="poolResort"
          className="w-full rounded-2xl mb-6 md:h-[300px] mx-"
          width={400}
          height={400}
        />
        <Image
          src={constructionPool}
          alt="constructionPool"
          className="w-full rounded-2xl mb-6 h-[250px]"
          width={400}
          height={400}
        />
      </div>
      <div className="lg:w-2/3 lg:px-12 w-full flex flex-col justify-center md:block">
        <h2 className="text-2xl md:text-5xl font-serif mb-4 text-center">
          Welcome to Vintage Outdoor Inc.
          <div className="w-20 md:w-96 h-0.5 bg-neutral-300 mx-auto mt-2"></div>
        </h2>

        <p className="text-center px-12 py-6">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quas
          quibusdam iure, iusto illo consequuntur accusamus itaque molestiae
          harum fugit animi cum? Dolor aspernatur doloribus qui,
        </p>

        <article className="bg-neutral-50 rounded-3xl md:mx-16 mx-4 mb-4">
          <p className="py-4 px-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi et
            tempore totam eius, accusamus omnis. Optio, dignissimos! Quam qui
            asperiores quos! Numquam natus accusantium, blanditiis asperiores
            consequuntur hic ipsam quibusdam fugit doloremque quidem
            voluptatibus amet dolor facilis quaerat, vitae nemo?
          </p>
        </article>
        <article className="bg-neutral-50 rounded-3xl md:mx-16 mx-4 mb-4">
          <p className="py-4 px-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi et
            tempore totam eius, accusamus omnis. Optio, dignissimos! Quam qui
            asperiores quos! Numquam natus accusantium, blanditiis asperiores
            consequuntur hic ipsam quibusdam fugit doloremque quidem
            voluptatibus amet dolor facilis quaerat, vitae nemo? quidem
            voluptatibus amet dolor facilis quaerat, vitae nemo? vitae nemo?
          </p>
        </article>
        <Button className="bg-[#C69C3F] hover:bg-[#B38C2F] text-white font-bold md:mx-16 mt-8 px-8 mx-2">
          Read More
        </Button>
      </div>
    </section>
  );
};
