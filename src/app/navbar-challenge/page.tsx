"use client";

import Image from "next/image";
import React from "react";
import Logo from "./../../../public/cool.png";
import navbarContainerLogo from "./../../../public/navbar-container.png";
import LogoContainer from "./../../../public/logo-container.png";
import navItemsContainer from "./../../../public/nav-items-container.png";
import Link from "next/link";
import { navMenus } from "../libs/menus";

export default function Challenge() {
  return (
    <div>
      {/* This is Sidebar */}
      <section className="w-[85%] mx-auto py-5">
        <div className="border-b-2 border-gray-500">
          <h1 className="text-3xl font-extrabold text-gray-500">
            Navbar Challenge
          </h1>

          <div className="text-xl font-semibold my-5">
            {/* <h1 className=" text-gray-500">Your task is here 👇🏼</h1> */}
            <p className="italic">
              Recreate the <span className="text-purple-600">Navbar</span> using
              tailwind utility classes 👍🏼
            </p>
          </div>

          {/* Navbar Task Demo */}
          <div className="max-w-[700px] m-10 mx-auto flex justify-between bg-pink-100 p-3 rounded-md ">
            <div className="flex items-center gap-3 cursor-pointer ">
              <Image src={Logo} alt="logo" width="30" height="30" />
              <h1 className="text-purple-400 font-bold text-lg">
                Tailwind in Nutshell
              </h1>
            </div>

            <ul className="flex gap-5 items-center  ">
              {navMenus.map((menu) => (
                <li
                  key={menu}
                  className="border-b-2 border-transparent hover:border-purple-500 transition duration-200 delay-75 cursor-pointer"
                >
                  {menu}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="w-full flex my-5 ">
          {/* Side bar */}
          <div className="w-1/3 space-y-6 font-semibold text-gray-500 border-r-2 border-gray-500 px-5">
            {/* <h1>Simple Navbar right? 😂</h1> */}

            <div>
              <p>Before divinding into the coding challenge..</p>
              {/* <p>
                Let`s{" "}
                <span className="text-red-400">
                  Breakdown the components 🔥
                </span>
              </p> */}
            </div>

            <div>
              <h2>
                I always prefer to break down the components and work on that.
              </h2>
            </div>
            <h2>
              Breaking <span className="text-purple-600">Navbar</span> into
              three sections ↗
            </h2>

            <div className="flex flex-col gap-4">
              <h1 className="text-pink-500 border p-1 inline-block">
                Navbar Container
              </h1>
              <h1 className="text-blue-500 border p-1 inline-block">
                Logo Container
              </h1>
              <h1 className="text-orange-500 border p-1 inline-block">
                Navbar Items Container
              </h1>
              <div className="my-2">
                <Link href="/navbar-challenge/implementation">
                  <button className="px-8 py-2 bg-purple-500 text-gray-100 rounded-full font-medium cursor-pointer hover:bg-purple-600 duration-300 delay-75 ">
                    Start Learning
                  </button>
                </Link>
              </div>

              {/* <div>
                <button
                  onClick={() =>
                    setNavbarContainer((prev) => [...prev, "flex"])
                  }
                  disabled={navbarContainer.length > 0}
                  className={` ${
                    navbarContainer.length > 0
                      ? "opacity-50 cursor-not-allowed"
                      : "cursor-pointer"
                  }`}
                >
                  Click to Add <span className="font-bold border">Flex</span> to
                  the Navbar Container
                </button>

                {navbarContainer.length > 0 && (
                  <>
                    <li>Good Job 🥇</li>
                    <li>
                      Now, we want space between logo container and the navbar
                      items container
                    </li>
                    <button
                      onClick={() =>
                        setNavbarContainer((prev) => [
                          ...prev,
                          "justify-between",
                        ])
                      }
                      disabled={navbarContainer.length > 1}
                      className={`
                        ${
                          navbarContainer.length > 1
                            ? "opacity-50 cursor-not-allowed"
                            : "cursor-pointer"
                        }
                  
                          
                      }`}
                    >
                      To do so, Click to Add{" "}
                      <span className="font-bold border">Justify Between</span>
                      to the Navbar Container{" "}
                    </button>
                  </>
                )}
              </div> */}
            </div>
          </div>

          <div className="w-full px-5 ">
            <h1 className="text-pink-500 border p-1 inline-block">
              Navbar Container
            </h1>
            <Image
              src={navbarContainerLogo}
              alt="navbar-container"
              className="w-full h-14 mb-3"
            />

            <h1 className="text-blue-500 border p-1 inline-block">
              Logo Container
            </h1>
            <Image
              src={LogoContainer}
              alt="navbar-container"
              // className="w-full h-16 mb-3 bg-cover"
            />
            <h1 className="text-orange-500 border p-1 inline-block">
              Navbar Items Container
            </h1>
            <Image
              src={navItemsContainer}
              alt="navbar-container"
              // className="w-full h-16 mb-3 bg-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
