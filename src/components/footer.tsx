import Link from "next/link";
import Image from "next/image";
import { WhatsAppLogo } from "./icons/whatsapp";
import { FacebookLogo } from "./icons/facebook";
import { LinkedinLogo } from "./icons/linkedin";
import { TwitterLogo } from "./icons/twitter";
import { Button } from "./ui/button";
import { Mail, MapPin, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-footer bg-cover bg-center bg-no-repeat">
      <div className="bg-white bg-opacity-70 w-full h-full grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 p-16">
        <div className="w-full h-full p-8">
          <div className="flex flex-col gap-4 justify-center items-center">
            <Link href="#" className="flex items-center">
              <Image
                className="w-40"
                src="/logo.png"
                alt="logo"
                width={300}
                height={400}
              />
            </Link>
            <div className="text-center">
              <p>
                At Vintage Outdoor Inc. we are passionate about transforming
                your outdoor spaces into breathtaking and functional areas. We
                specialize in landscaping, construction, and outdoor living
                spaces.
              </p>
            </div>
            <div className="flex gap-2">
              <FacebookLogo className="text-[#C69C3F] w-10 m-0" />
              <WhatsAppLogo className="w-10 m-0" />
              <LinkedinLogo className="w-10 m-0 text-white" fill="#C69C3F" />
              <TwitterLogo className="w-10 m-0 text-white" fill="#C69C3F" />
            </div>
          </div>
        </div>
        <nav className="flex flex-col gap-4 p-8">
          <h3 className="text-2xl font-bold font-montserrat">Our Company</h3>
          <ul className="font-montserrat flex flex-col gap-4">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Vintage Construction</li>
            <li>Gallery</li>
          </ul>
        </nav>
        <nav className="flex flex-col gap-4 p-8">
          <h3 className="text-2xl font-bold font-montserrat">Support</h3>
          <ul className="font-montserrat flex flex-col gap-4">
            <li>Testimonials</li>
            <li>Blogs</li>
            <li>FAQs</li>
            <li>Contact Us</li>
          </ul>
        </nav>
        <nav className="flex flex-col gap-4 p-8">
          <h3 className="text-2xl font-bold font-montserrat">
            Join Our Newsletter
          </h3>
          <div className="md:flex gap-4">
            <input className="rounded-3xl py-3 px-4" type="text" />
            <Button className="bg-[#C69C3F] hover:bg-[#B38C2F] text-white mt-4">
              Suscribe
            </Button>
          </div>
          <div className="flex gap-4 mt-4 items-center">
            <Phone fill="#C69C3F" className="text-[#C69C3F] w-8 h-8" />
            <div className="flex  flex-col items-start">
              <p>760 350 5552</p>
            </div>
          </div>
          <div className="flex gap-1 mt-4 items-center">
            <MapPin fill="#C69C3F" className="text-white w-10 h-10" />
            <div className="flex  flex-col items-start">
              <p>123 Main Street, Suite 456 Your City</p>
            </div>
          </div>
          <div className="flex gap-1 m items-center">
            <Mail fill="#C69C3F" className="w-10 h-10" />
            <div className="flex  flex-col items-start">
              <p>office@vintageoutdoorinc.com</p>
            </div>
          </div>
        </nav>
      </div>
    </footer>
  );
};
