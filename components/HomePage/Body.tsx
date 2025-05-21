import React from "react";
import Image from "next/image";

const Body = () => {
  return (
    <div className="flex flex-col">
      {/* Spacer */}
      <div className="h-[5vh] bg-transparent" />

      {/* Main Content Area */}
      {/* first section */}
      <div className="min-h-[80vh] flex flex-col md:flex-row items-center justify-between px-6 md:px-28 py-14 bg-white gap-12">
        {/* Text Section */}
        <div className="w-full md:w-1/2 order-1 md:order-none text-left space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-primarytext leading-tight">
            Search Smarter: Trusted Clinical Trials at Your Fingertips
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            Easily explore ongoing and upcoming clinical trials by condition,
            phase, location, or sponsor. Filter results from trusted domains
            like{" "}
            <span className="font-semibold text-black">ClinicalTrials.gov</span>{" "}
            and <span className="font-semibold text-black">PubMed</span>.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center order-2">
          <Image
            src="/home_img1.jpg"
            alt="Search Clinical Trials"
            width={550}
            height={550}
            className="rounded-2xl shadow-lg object-cover"
          />
        </div>
      </div>
      {/*second section*/}
      <div className="h-[80vh] bg-transparent flex items-center justify-center px-6">
        <div className="min-h-[60vh] w-full max-w-7xl bg-gray-100 rounded-3xl shadow-xl flex flex-col-reverse md:flex-row overflow-hidden">
          {/* Text Section */}
          <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primarytext mb-6">
              Compare and Decide: Make Smarter Investments in Seconds
            </h2>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
              Cut through the clutter with side-by-side comparisons of trial
              protocols, phases, locations, and sponsors. Our platform empowers
              investors and researchers to spot promising opportunities quickly,
              backed by structured data and intuitive visual summaries.
            </p>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2 flex items-center justify-center p-6">
            <Image
              src="/home_img2.jpg"
              alt="home_img_2"
              height={600}
              width={600}
              className="rounded-xl object-contain"
            />
          </div>
        </div>
      </div>

      {/* third section */}
      <div className="min-h-[80vh] bg-zinc-100 flex flex-col md:flex-row items-center justify-between px-6 md:px-28 py-14 gap-12">
        {/* Image Section — appears first on md+ */}
        <div className="w-full md:w-1/2 flex justify-center order-1 md:order-1">
          <Image
            src="/home_img3.jpg"
            alt="Search Clinical Trials"
            width={550}
            height={550}
            className="rounded-2xl shadow-lg object-cover"
          />
        </div>

        {/* Text Section — appears second on md+ */}
        <div className="w-full md:w-1/2 order-2 md:order-2 text-left space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-primarytext leading-tight">
            Understand Trials at a Glance with AI-Powered Insights
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            No more digging through dense medical jargon. Instantly access
            structured protocol data, key dates, endpoints, and enrollment
            stats—plus AI-powered summaries that help you grasp a trial’s
            essence in seconds.h{" "}
            <span className="font-semibold text-black">ClinicalTrials.gov</span>{" "}
            and <span className="font-semibold text-black">PubMed</span>.
          </p>
        </div>
      </div>
      {/* section 4 */}
      <div className="w-full bg-white py-20 flex items-center justify-center">
        <div className="max-w-4xl text-center px-6 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-primarytext">
            Ready to Turn Data Into Decisions?
          </h2>
          <p className="text-lg md:text-xl text-gray-700">
            Start exploring clinical trials with real-time AI insights—
            <span className="font-semibold text-black">no sign-up needed</span>.
          </p>
          <button className="mt-4 px-8 py-3 bg-indigo-500 text-white font-semibold text-lg rounded-full shadow-md hover:bg-indigo-700 transition duration-300">
            Try It Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Body;
