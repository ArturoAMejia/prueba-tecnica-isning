import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "#" },
  { name: "Services", href: "#" },
  { name: "Vintage Construction", href: "#" },
  { name: "Gallery", href: "#" },
  { name: "Testimonials", href: "#" },
  { name: "Blog", href: "#" },
  { name: "FAQS", href: "#" },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="container mx-auto px-16">
        <div className="flex items-center justify-between h-20">
          <Link href="#" className="flex items-center">
            <Image
              className="w-20"
              src="/logo.png"
              alt="logo"
              width={300}
              height={400}
            />
          </Link>

          <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            <Menu className="h-6 w-6" />
          </button>

          <nav
            className={`${
              isOpen ? "block" : "hidden"
            } lg:block absolute lg:relative top-20 lg:top-0 left-0 w-full lg:w-auto bg-white lg:bg-transparent font-sans`}
          >
            <ul className="flex flex-col lg:flex-row items-center gap-6 p-4 lg:p-0">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:underline hover:decoration-[#B38C2F] hover:decoration-4"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}

              <li>
                <Button className="bg-[#C69C3F] hover:bg-[#B38C2F] text-white font-bold">
                  Contact Us
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
