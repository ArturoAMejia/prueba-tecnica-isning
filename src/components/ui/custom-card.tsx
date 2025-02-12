import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import landscaping from "../../../public/img/landscaping.jpg";
import { Button } from "./button";
import { Clipboard } from "lucide-react";

interface Props {
  className?: string;
}

export const CustomCard = ({ className }: Props) => {
  return (
    <Card className={`${className}`}>
      <CardContent>
        <Image
          src={landscaping}
          alt="landscaping"
          width={200}
          height={200}
          className="rounded-2xl w-full mt-4"
        />
      </CardContent>
      <CardHeader>
        <CardTitle className="text-[#C69C3F] font-serif font-light">
          Services
        </CardTitle>
        <CardDescription className="pb-12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          nulla pariatur temporibus. Similique magni commodi laudantium numquam
          illo tempora nostrum reiciendis atque quisquam, facere eaque culpa?
          Porro obcaecati debitis cupiditate?
        </CardDescription>
      </CardHeader>
      <CardFooter className="pr-14 shadow-lg">
        <Button className="shadow-lg bg-[#C69C3F] hover:bg-[#B38C2F] text-white w-full">
          Read More
          <Clipboard />
        </Button>
      </CardFooter>
    </Card>
  );
};
