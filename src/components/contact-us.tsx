import React from "react";
import { Button } from "./ui/button";
import { MapPin, Phone } from "lucide-react";

export const ContactUs = () => {
  return (
    <>
      <section className="mt-4 md:px-28 md:pb-28 pb-12 w-full">
        <div className="bg-main_hero bg-cover bg-center bg-no-repeat h-96 rounded-3xl">
          <div className="bg-black bg-opacity-50 w-full h-full flex justify-center items-center rounded-3xl">
            <h2 className="text-5xl font-serif mb-4 text-center pt-8 pb-2 text-white">
              Contact Us
            </h2>
          </div>
        </div>
      </section>
      <div className="bg-neutral-50 md:px-28 md:pb-28 pb-12 md:flex py-16">
        <div className="w-1/2">
          <h2 className="text-5xl font-serif mb-4 pt-8 pb-2 text-left">
            Ready to <span className="block">Get Started?</span>
          </h2>
          <p className="text-left w-2/3 my-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde nisi
            quidem, ad placeat nesciunt quia adipisci debitis iure perferendis
            modi maiores magnam impedit obcaecati numquam expedita! Alias sunt
            aspernatur veniam.
          </p>
          <p className="text-left w-2/3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde nisi
            quidem, ad placeat nesciunt quia adipisci debitis iure perferendis
            modi maiores magnam impedit obcaecati numquam
          </p>
          <div className="flex gap-4 mt-8 items-center">
            <Phone fill="#C69C3F" className="text-[#C69C3F] w-8 h-8" />
            <div className="flex  flex-col items-start">
              <h5 className="text-sm">Phone Number</h5>
              <p className="font-bold">760 350 5552</p>
            </div>
          </div>
          <div className="flex gap-1 mt-8 items-center">
            <MapPin fill="#C69C3F" className="text-white w-10 h-10" />
            <div className="flex  flex-col items-start">
              <h5 className="text-sm">Address</h5>
              <p className="font-bold">123 Main Street, Suite 456 Your City</p>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <form className="w-full p-16 rounded-3xl shadow-xl">
            <div className="flex flex-col gap-6">
              <h2 className="text-4xl font-montserrat font-semibold">
                Send a message
              </h2>
              <div>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Name"
                  className="w-full border-2 border-neutral-300 p-2 rounded-lg my-2"
                />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="E-mail address"
                  className="w-full border-2 border-neutral-300 p-2 rounded-lg my-2"
                />
              </div>
              <div>
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  cols={10}
                  rows={4}
                  placeholder="Message"
                  className="w-full border-2 border-neutral-300 p-2 rounded-lg my-2"
                ></textarea>
              </div>
              <Button className="bg-[#C69C3F] hover:bg-[#B38C2F] text-white">
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
