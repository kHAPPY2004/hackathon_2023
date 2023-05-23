import React from "react";
import Image from "next/image";
const Front = () => {
  return (
    <>
      <section className="bg-gradient-to-r from-teal-500 from-10% via-cyan-500 via-30% to-sky-500 to-90%  dark:from-slate-700 dark:via-gray-700 dark:to-zinc-700">
        <div className="space-x-10 lg:space-x-40 justify-center flex">
          <div className=" m-auto mx-2 md:mx-0 md:w-1/2 lg:w-1/2 lg:h-1/2 xl:w-2/5 ">
            <div className="my-5">
              <h1 className="flex justify-center items-center text-center flex-col md:block font-semibold tracking-wider brightness-105 text-gray-700 dark:text-gray-300 leading-relaxed lg:text-2xl md:text-lg">
                Transform ideas into reality: Hack your way to success at the
                <span className="text-blue-800 dark:text-blue-500 font-bold mx-2">
                  HACK-A-THON ...
                </span>
              </h1>
              <p className="text-zinc-100 my-2 lg:my-5 -mx-2 font-bold lg:text-xl italic flex justify-center">
                Innovate solutions that make a difference.
              </p>
              <button className="bg-gradient-to-r from-orange-500 to-amber-300 hover:from-pink-500 hover:to-yellow-500 text-slate-700 dark:bg-white p-1 md:p-2 px-5  border-4 border-double dark:border-gray-300 dark:shadow-white text-base font-semibold flex justify-center text-center mx-auto rounded-lg">
                REGISTER NOW
              </button>
              <div className="flex justify-center text-center mt-3 md:mt-7 md:text-lg lg:text-xl font-semibold text-slate-200">
                Event Date: 28th July 2023
              </div>
            </div>
          </div>
          <div className="my-10 md:mr-3 lg:mr-5 xl:mr-0 hidden md:block">
            <Image
              src={
                "https://barakahit.net/html/techmax/assets/img/home-font.png"
              }
              className="h-auto w-auto md:h-72 md:72 lg:h-96 lg:w-96 xl:h-fit xl:w-fit "
              width={1000}
              height={1000}
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
