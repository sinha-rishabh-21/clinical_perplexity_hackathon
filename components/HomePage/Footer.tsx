import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-100 text-gray-700 py-10 px-6 md:px-28">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2 space-y-4">
            <h3 className="text-2xl font-bold text-gray-900">TrialSight</h3>
            <p className="text-sm leading-relaxed">
              Your AI-powered companion for exploring and analyzing global
              clinical trials with ease, speed, and precision.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/search" className="hover:underline">
                  Explore Trials
                </a>
              </li>
              {/* <li>
                <a href="#" className="hover:underline">
                  How It Works
                </a>
              </li> */}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/us" className="hover:underline">
                  About Us
                </a>
              </li>
              {/* <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li> */}
            </ul>
          </div>
        </div>

        <div className="border-t mt-10 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} TrialSight. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
