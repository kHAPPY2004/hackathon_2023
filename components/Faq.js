import React, { useState } from "react";
import { faqdata } from "./faqdata";

const Faq = () => {
  const [openItemId, setOpenItemId] = useState(null);

  const toggle = (itemId) => {
    setOpenItemId((prevItemId) => (prevItemId === itemId ? null : itemId));
  };

  return (
    <>
      <div className="text-center font-bold text-2xl mb-8">FAQ</div>
      <div className="flex flex-wrap w-3/4 mx-auto my-10">
        {faqdata.map((item) => (
          <div
            key={item.id}
            className={`w-full md:w-1/2 lg:w-1/2 pb-9 mb-4 transition-all ${
              openItemId === item.id ? "" : "h-0 overflow-hidden"
            }`}
          >
            <div
              onClick={() => toggle(item.id)}
              className="text-white py-1 mx-10 pl-5 cursor-pointer rounded-md bg-gradient-to-r from-teal-500 from-30% via-cyan-500 via-60% to-fuchsia-500 to-100%  dark:from-slate-700 dark:via-gray-700 font-bold text-lg"
            >
              {item.data_id}
            </div>
            {openItemId === item.id && (
              <div className="bg-gray-100 text-lg font-medium p-4 mx-10 ">{item.data_title}</div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Faq;
