import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
const Front = () => {
  return (
    <>
      <Navbar />
      <section className="bg-gradient-to-r from-teal-500 from-10% via-cyan-500 via-30% to-sky-500 to-90%  dark:from-slate-700 dark:via-gray-700 dark:to-zinc-700">
        <div className="container m-auto flex ">
          <div className=" m-auto w-2/5">
            <div className="my-5">
              <h1 className="font-semibold tracking-wider brightness-105 text-gray-700 dark:text-gray-300 leading-relaxed text-2xl">
                Transform ideas into reality: Hack your way to success at the
                <span className="text-blue-800 dark:text-blue-500 font-bold text-2xl mx-2">
                  HACK-A-THON ...
                </span>
              </h1>
              <p className="text-zinc-100 my-5 font-bold text-xl italic flex justify-center">
                Innovate solutions that make a difference.
              </p>
              <button className="bg-gradient-to-r from-orange-500 to-amber-300 hover:from-pink-500 hover:to-yellow-500 text-slate-700 dark:bg-white p-2 px-5  border-4 border-double dark:border-gray-300 dark:shadow-white text-base font-semibold flex justify-center text-center mx-auto rounded-lg">
                REGISTER NOW
              </button>
              <div className="flex justify-center text-center mt-7 text-xl font-semibold text-slate-200">
                Event Date: 28th July 2023
              </div>
            </div>
          </div>
          <div className="my-10 h-auto w-auto">
            <Image
              src={
                "https://barakahit.net/html/techmax/assets/img/home-font.png"
              }
              width={600}
              height={600}
              alt="img"
              priority
            ></Image>
          </div>
        </div>
      </section>
    </>
  );
};

export default Front;
