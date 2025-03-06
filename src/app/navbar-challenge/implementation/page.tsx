"use client";
import React, { useState } from "react";
import Confetti from "react-confetti";

import Image from "next/image";
import Logo from "./../../../../public/cool.png";
import { navMenus } from "@/app/libs/menus";

export default function Implementation() {
  const [navbarContainer, setNavbarContainer] = useState<string[]>([]);
  const [logoContainer, setLogoContainer] = useState<string[]>([]);
  const [navbarItemsContainer, setNavbarItemsContainer] = useState<string[]>(
    []
  );
  const [party, setParty] = useState(false);
  return (
    <div>
      <section className="w-[85%] mx-auto py-5">
        {party && (
          <Confetti
            numberOfPieces={900}
            recycle={false}
            className="w-[1300px]"
          />
        )}
        <div>
          <p className="italic text-lg">
            Let`s recreate the{" "}
            <span className="text-purple-600">Navbar 🔥</span>{" "}
          </p>
        </div>

        {/* Demo task */}

        <div className="max-w-[700px] mt-4 mx-auto flex justify-between bg-pink-100 p-3 rounded-md">
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

        {/* Content bar */}
        <div className="max-w-[700px] my-2 mx-auto">
          <div
            className={`border-2 border-pink-500 p-3  ${navbarContainer
              .map((i) => i)
              .join(" ")} `}
          >
            <div
              className={`border-2 border-blue-500 cursor-pointer ${logoContainer
                .map((i) => i)
                .join(" ")}`}
            >
              <Image src={Logo} alt="logo" width="30" height="30" />
              <h1 className="text-purple-400 font-bold text-lg">
                Tailwind in Nutshell
              </h1>
            </div>

            <ul
              className={`border-2 border-orange-500 ${navbarItemsContainer
                .map((i) => i)
                .join(" ")}`}
            >
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

        {/* Content */}

        <div className="w-full grid grid-cols-3 gap-5 my-20">
          {/* Navbar Container */}
          <div className="">
            <h1 className="text-pink-500 border p-1 inline-block">
              Navbar Container
            </h1>
            <div className="py-5">
              <button
                onClick={() => setNavbarContainer((prev) => [...prev, "flex"])}
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
                <ul className="flex flex-col gap-5">
                  <div className="my-2">
                    <li>Good Job 🥇</li>
                    <li>
                      Now, we want space between logo container and the navbar
                      items container.
                    </li>
                  </div>

                  <li>
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
                      Click to Add{" "}
                      <span className="font-bold border">Justify Between</span>{" "}
                      to the Navbar Container.
                    </button>
                  </li>
                </ul>
              )}
            </div>
          </div>

          {/* Logo Container */}

          {navbarContainer.length == 2 && (
            <div className="border-l-2 border-gray-400 px-3">
              <h1 className="text-blue-500 border p-1 inline-block">
                Logo Container
              </h1>
              <div className="py-5">
                <h1 className="my-2">Now, we want to fix the Logo Container</h1>
                <button
                  onClick={() => setLogoContainer((prev) => [...prev, "flex"])}
                  disabled={logoContainer.length > 0}
                  className={` ${
                    logoContainer.length > 0
                      ? "opacity-50 cursor-not-allowed"
                      : "cursor-pointer"
                  }`}
                >
                  Click to Add <span className="font-bold border">Flex</span> to
                  the Logo Container
                </button>

                {logoContainer.length > 0 && (
                  <ul>
                    <div className="my-3">
                      <li>Sweet! But wait WTH is that.</li>
                      <li>
                        To fix this, we want them to <i>align center</i>.
                      </li>
                    </div>
                    <button
                      onClick={() =>
                        setLogoContainer((prev) => [...prev, "items-center"])
                      }
                      disabled={logoContainer.length > 1}
                      className={`
                        ${
                          logoContainer.length > 1
                            ? "opacity-50 cursor-not-allowed"
                            : "cursor-pointer"
                        }
                  
                          
                      }`}
                    >
                      Click to Add{" "}
                      <span className="font-bold border">items-center</span> to
                      the Logo Container{" "}
                    </button>
                  </ul>
                )}
                {logoContainer.length > 1 && (
                  <ul>
                    <div className="my-3">
                      <li>Awesome, But we need some gap right ?</li>
                      <li>
                        To fix this, we want to add{" "}
                        <i>gap between the elements</i>.
                      </li>
                    </div>
                    <button
                      onClick={() =>
                        setLogoContainer((prev) => [...prev, "gap-3"])
                      }
                      disabled={logoContainer.length > 2}
                      className={`
                        ${
                          logoContainer.length > 2
                            ? "opacity-50 cursor-not-allowed"
                            : "cursor-pointer"
                        }
                  
                          
                      }`}
                    >
                      To do so, Click to Add{" "}
                      <span className="font-bold border">gap-3</span> to the
                      Logo Container{" "}
                    </button>
                  </ul>
                )}
              </div>
            </div>
          )}

          {/* Navbar items container */}

          {logoContainer.length === 3 && (
            <div className="border-l-2 border-gray-400 px-3">
              <h1 className="text-orange-500 border p-1 inline-block">
                Navbar Items Container
              </h1>

              <div className="py-5">
                <div className="mb-2">
                  <h1>It`s time to fix the Navbar Items Container.</h1>
                  <h1 className="my-3">
                    Now, we know that how to fix it right?🙂
                  </h1>
                </div>
                <button
                  onClick={() =>
                    setNavbarItemsContainer((prev) => [...prev, "flex"])
                  }
                  disabled={navbarItemsContainer.length > 0}
                  className={` ${
                    navbarItemsContainer.length > 0
                      ? "opacity-50 cursor-not-allowed"
                      : "cursor-pointer"
                  }`}
                >
                  Click Add <span className="font-bold border">Flex</span> to
                  the Navbar Items Container
                </button>
                {navbarItemsContainer.length > 0 && (
                  <ul>
                    <div className="my-3">
                      <li>
                        We Almost Done 🎇! But we need some gap and alignment{" "}
                      </li>
                      <li>
                        To fix this, we want them to <i>align center</i>.
                      </li>
                    </div>

                    <button
                      onClick={() => {
                        setNavbarItemsContainer((prev) => [
                          ...prev,
                          "items-center gap-5",
                        ]);
                        setParty(true);
                      }}
                      disabled={navbarItemsContainer.length > 1}
                      className={`
                        ${
                          navbarItemsContainer.length > 1
                            ? "opacity-50 cursor-not-allowed"
                            : "cursor-pointer"
                        }`}
                    >
                      Click to Add{" "}
                      <span className="font-bold border">
                        gap-5 & items-center
                      </span>{" "}
                      to the Navbar Items Container{" "}
                    </button>
                  </ul>
                )}
              </div>
            </div>
          )}
        </div>

        {/* <div className="marquee-container">
          {party && (
            <div className="marquee-image">
              <Image src={Gif} alt="gif" />
            </div>
          )}
        </div> */}
      </section>
    </div>
  );
}
