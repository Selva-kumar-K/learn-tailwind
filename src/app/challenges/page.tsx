import Link from "next/link";
import React from "react";

export default function Challenges() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className=" text-gray-500 text-5xl font-extrabold my-10">
        Challenges
      </h1>

      <div>
        <ul className="text-purple-900 font-medium flex flex-col space-y-5">
          <Link href="/navbar-challenge">
            <button>
              <li className="hover:text-pink-500 cursor-pointer">
                🔹 Navbar Challenge
              </li>
            </button>
          </Link>

          <Link href="/card-challenge">
            <button>
              <li className="hover:text-pink-500 cursor-pointer">
                🔹 Card Challenge
              </li>
            </button>
          </Link>

          {/* <Link href="#">
            <button>
              <li className="hover:text-pink-500 cursor-pointer">
                🔹 Footer Challenge
              </li>
            </button>
          </Link> */}
          <Link href="#">
            <button>
              <li className="hover:text-pink-500 cursor-pointer animate-pulse">
                🔹 Coming Soon
              </li>
            </button>
          </Link>
        </ul>
      </div>
    </div>
  );
}
