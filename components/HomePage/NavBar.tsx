import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="bg-white shadow-md rounded-lg mt-4 mx-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="text-xl font-semibold text-gray-800 mr-12 flex-shrink-0">
          <Link href="/" className="hover:text-indigo-700 transition-colors">
            Biotech Insights
          </Link>
        </div>
        <ul className="flex space-x-12 text-gray-700 font-medium">
          <li>
            <Link
              href="/home"
              className="hover:text-indigo-700 transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/chat"
              className="hover:text-indigo-700 transition-colors"
            >
              Search
            </Link>
          </li>
          <li>
            <Link
              href="/us"
              className="hover:text-indigo-700 transition-colors"
            >
              About Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
