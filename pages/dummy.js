import React, { useState } from "react";
import { faqdata } from "@/components/faqdata";

const Faq = () => {
  const [hiddenItems, setHiddenItems] = useState(
    faqdata.map((item) => item.id)
  );

  const toggle = (itemId) => {
    if (hiddenItems.includes(itemId)) {
      setHiddenItems(hiddenItems.filter((id) => id !== itemId));
    } else {
      setHiddenItems([...hiddenItems, itemId]);
    }
  };

  return (
    <>
      <section className="dark:bg-slate-800">
        <div className="text-center font-semibold text-lg py-8">FAQ</div>
        <div className="container w-3/4 mx-auto flex flex-wrap pb-10">
          {faqdata.map((item) => (
            <div
              key={item.id}
              className={`w-full md:w-1/2 lg:w-1/2  px-8 pb-7 mb-5 transition-all ${
                hiddenItems.includes(item.id)
                  ? "h-20 overflow-hidden"
                  : "h-auto"
              }`}
            >
              <div
                onClick={() => toggle(item.id)}
                className="text-white h-72 rounded-md bg-gradient-to-r from-teal-500 from-30% via-cyan-500 via-60% to-fuchsia-500 to-100%  dark:from-slate-700 dark:via-gray-700 font-bold text-lg flex justify-start pl-5 items-center cursor-pointer"
              >
                {item.data_id}
              </div>
              <div className="bg-slate-400">{item.data_title}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Faq;
