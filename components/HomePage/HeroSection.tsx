import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
// import NavBar from "./NavBar";
const PrimaryText = "#792B34";
const HeroSection = () => {
  return (
    <div className="relative h-[70vh] overflow-hidden shadow-sm">
      {/* Background Image with Next.js Image */}
      <Image
        src="/hero.jpg"
        alt="Hero Background"
        fill
        style={{ objectFit: "cover" }}
        priority
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full  bg-opacity-40"></div>

      {/* Content and Nav */}
      <div className="relative flex flex-col h-full">
        {/* <div className="w-full">
          <NavBar />
        </div>{" "} */}
        <div className="flex-grow flex items-center justify-center text-center px-4">
          <div>
            <h1 className={`text-5xl mb-4 font-Sono text-[${PrimaryText}]`}>
              Navigate the Future of Clinical Trials{" "}
            </h1>
            <p className={`text-xl mb-8 font-Sono text-[${PrimaryText}]`}>
              Real-time insights. Data-driven decisions. Smarter biotech
              investing—powered by AI.
            </p>
            <Link href="/search">
              <Button className="bg-[#27aff2] font-semibold font-inter hover:bg-[#1a8acb] transition-colors cursor-pointer">
                Try Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
