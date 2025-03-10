import Image from "next/image";
import React from "react";

export default function Card() {
  return (
    <div className="w-[600px] mx-auto rounded-3xl flex overflow-hidden shadow-xl mt-20">
      <div className="">
        <Image
          src="https://images.unsplash.com/photo-1528208079124-a2387f039c99?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-4 flex flex-col gap-4">
        <h1 className="font-bold">Eat , Work, Sleep</h1>

        <p className="text-gray-700">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur
          beatae voluptatibus magnam, suscipit sit provident voluptatum autem
          obcaecati porro necessitatibus deserunt tenetur totam natus voluptatem
          iure, officia molestias praesentium sequi dolorem qui at debitis nihil
          animi dolor. Quasi, hic impedit.
        </p>

        <div className="flex gap-2 items-center">
          <div>
            <Image
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fHww"
              alt=""
              className="rounded-full w-10 h-10 object-cover"
            />
          </div>

          <div className="text-sm">
            <h1 className="font-semibold">Anabella</h1>
            <p className="text-gray-400">28 June 2022</p>
          </div>
        </div>
      </div>
    </div>
  );
}
