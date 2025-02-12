import Link from "next/link";
import Image from "next/image";
import { FacebookIcon } from "lucide-react";
import { WhatsAppLogo } from "./icons/whatsapp";
import { FacebookLogo } from "./icons/facebook";
import { LinkedinLogo } from "./icons/linkedin";
import { TwitterLogo } from "./icons/twitter";

export const Footer = () => {
  return (
    <footer className="bg-footer bg-cover bg-center bg-no-repeat h-96 relative">
      <div className="bg-white bg-opacity-50 w-full h-full flex justify-center items-center absolute"></div>
      <div className="absolute w-full h-full">
        <div>
          <Link href="#" className="flex items-center">
            <Image
              className="w-32"
              src="/logo.png"
              alt="logo"
              width={300}
              height={400}
            />
          </Link>
          <div>
            <p>
              At Vintage Outdoor Inc. we are passionate about transforming your
              outdoor spaces into breathtaking and functional areas. We
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
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};
