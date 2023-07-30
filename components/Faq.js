import React, { useState } from "react";
import faqdata from "/components/faqdata.json";

const Faq = () => {
  const [openItemId, setOpenItemId] = useState(null);

  const toggle = (itemId) => {
    setOpenItemId((prevItemId) => (prevItemId === itemId ? null : itemId));
  };

  return (
    <div id="faq" className="dark:bg-slate-800 md:pt-16 pt-7">
      <div className="text-center font-bold text-2xl py-8">FAQ</div>
      <div className="flex flex-wrap lg:w-11/12 pb-20 mx-auto">
        {faqdata.map((item) => (
          <div
            key={item.id}
            className={`w-full md:w-1/2 lg:w-1/2 pb-4 transition-all ${
              openItemId === item.id ? "" : "h-auto"
            }`}
          >
            <div
              onClick={() => toggle(item.id)}
              className="text-white py-2 mx-5 md:mx-6 pl-5 cursor-pointer rounded-md bg-gradient-to-r from-teal-500 from-30% via-cyan-500 via-60% to-sky-400 to-100% dark:from-gray-600 dark:via-slate-700 dark:to-neutral-600 font-bold text-sm md:text-lg"
            >
              {item.data_id}
            </div>

            {openItemId === item.id && (
              <div className="bg-gray-100 rounded-lg text-sm md:text-lg font-medium p-4 mx-5 md:mx-6 dark:bg-slate-700">
                {item.data_title.split("\n").map((line, index) => (
                  <div key={index}>{line}</div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
