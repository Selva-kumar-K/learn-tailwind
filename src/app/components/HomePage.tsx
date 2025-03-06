import Link from "next/link";
import React from "react";

export default function HomePage() {
  return (
    <div className="max-w-lg mx-auto">
      <header className="">
        <div className="flex justify-center my-[2%]">
          <div className="py-5 inline-block text-center bg-white border-2 border-purple-200 shadow-lg shadow-purple-400  text-6xl font-extrabold ">
            <h1 className="p-3 text-gray-500 ">Learn Tailwind in a </h1>
            <span className="text-orange-950/60 animate-pulse">
              Nutshell 🥜
            </span>
          </div>
        </div>
      </header>
      <section className="my-20">
        <h1 className="font-extrabold text-3xl text-gray-500 my-2">
          Master Tailwind CSS the Fun Way!
        </h1>

        <div className="flex flex-col gap-8">
          <p className="font-semibold text-gray-500 my-2">
            Learn How the Tailwind CSS Works! No boring theory—just real-world
            tasks that help you build stunning UIs faster.
          </p>

          <ul className="text-purple-900 font-medium space-y-3">
            <li title="🔥">
              🔹 Task-Based Learning – Jump straight into coding
            </li>
            <li title="📷 - <code/>">🔹 Image to Code Implementation</li>
            <li title="💥🧨🏃🏼‍♂️">
              🔹 Step by Step Approach so you never get fail after
            </li>
          </ul>

          <div className="">
            <Link href="/navbar-challenge">
              <button className="px-8 py-2 bg-purple-500 text-gray-100 rounded-full font-medium cursor-pointer hover:bg-purple-600 duration-300 delay-75 ">
                Dive in
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
