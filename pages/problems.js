import { useEffect, useState } from "react";
import React from "react";
import { RxCross2 } from "react-icons/rx";
import data from "/components/data.json";
import Pagination from "@/components/Pagination";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
const Problems = () => {
  function blur() {
    let elems1 = document.querySelectorAll(".lll");
    [].forEach.call(elems1, function (el) {
      el.classList.toggle("blur-lg");
      el.classList.toggle("pointer-events-none");
    });

    if (elems1.length > 0 && elems1[0].classList.contains("blur-lg")) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }

  const [search, setSearch] = useState("");
  const [value, setValue] = useState("8");
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (page) => {
    setCurrentPage(page);
  };
  const onPrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };
  const onNext = () => {
    if (currentPage < Math.ceil(filteredData.length / value))
      setCurrentPage(currentPage + 1);
  };

  const { ref, inView } = useInView({
    threshold: 0.28,
  });
  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        y: 0,
        opacity: 1,
        transition: { type: "spring", duration: 2, bounce: 0.05 },
      });
    }
    if (!inView) {
      animation.start({
        x: "-5vw",
        y: 10,
        opacity: 0,
        transition: { type: "spring", duration: 2, bounce: 0.05 },
      });
    }
  }, [inView]);

  // Filter data for

  const filteredData = data.filter((item) => {
    const searchTerm = search.trim().toLowerCase();

    return (
      searchTerm === "" ||
      item.ps_id.toLowerCase().includes(searchTerm) ||
      item.ps_title.toLowerCase().includes(searchTerm) ||
      item.category.toLowerCase().includes(searchTerm) ||
      item.domain.toLowerCase().includes(searchTerm)
    );
  });
  // show seaching data on web
  const paginate1 = (items, pageNumber, pageSize) => {
    const startIndex = (pageNumber - 1) * pageSize;
    return items.slice(startIndex, parseInt(startIndex) + parseInt(pageSize));
  };
  const paginate2 = (items, pageNumber, pageSize) => {
    const startIndex = (pageNumber - 1) * pageSize;
    return items.slice(startIndex, parseInt(startIndex) + parseInt(pageSize));
  };
  const searchTerm = search.trim().toLowerCase();
  //for seaching paginate1
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm.length > 1]);
  const paginatedPosts =
    searchTerm.length > 1
      ? paginate1(filteredData, currentPage, value)
      : paginate2(data, currentPage, value);

  // Calculate counts
  const hardwareCount = data.filter(
    (item) => item.category === "Hardware"
  ).length;
  const softwareCount = data.filter(
    (item) => item.category === "Software"
  ).length;

  return (
    <>
      <section
        id="problem_statement"
        className=" bg-gray-50 lll dark:bg-slate-700"
      >
        <div>
          <img src="/problem_statement.png" alt="" className="mx-auto pt-16" />
        </div>
        <div className="flex items-center justify-center md:w-2/3 md:mx-auto mx-2 md:mt-5">
          <div className="w-1/3 bg-slate-300 dark:bg-slate-600 mx-auto md:p-4 p-3 rounded-l-lg">
            <p className="md:text-3xl font-bold text-center text-orange-400">
              TOTAL STATEMENTS
            </p>
            <p className="text-center hidden md:block">As per available data</p>
          </div>
          <div className="flex justify-around w-2/3 bg-gray-300 dark:bg-slate-600 md:p-2 p-1 rounded-r-lg">
            <div className="w-2/5 text-center bg-slate-100 dark:bg-slate-500 py-2 rounded-full">
              <p className="md:text-3xl font-bold">{hardwareCount}</p>
              <p>Hardware</p>
            </div>
            <div className="w-2/5 text-center bg-slate-100 dark:bg-slate-500 py-2 rounded-full">
              <p className="md:text-3xl font-bold">{softwareCount}</p>
              <p>Software</p>
            </div>
          </div>
        </div>
      </section>
      <section
        id="problem_statement1"
        className="relative lll overflow-auto bg-gray-50 dark:bg-slate-700 md:pt-8 pt-7"
      >
        {/* <div className="font-bold text-lg md:text-2xl flex justify-center text-center mt-10 underline-offset-4 underline">
          Problem Statements
        </div> */}
        <motion.div
          ref={ref}
          animate={animation}
          className="shadow-sm overflow-hidden mt-0 md:my-8"
        >
          <div className="flex flex-col md:flex-row justify-between my-6 mx-1 md:mx-10 xl:w-4/5 xl:mx-auto">
            <div className="font-medium text-xs md:text-base">
              Show
              <select
                onChange={(e) => {
                  setValue(e.target.value);
                  setCurrentPage(1);
                }}
                className="mx-2 px-1 md:text-lg rounded-sm"
              >
                <option value="8">8</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>
              entries
            </div>
            <div className="font-medium text-xs md:text-base mt-4 md:mt-0">
              Search:
              <input
                type="search"
                className="border-2 rounded-md mx-2 p-1 px-2 dark:bg-gray-700"
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
          <div className="overflow-auto">
            <table className="border-collapse table-fixed mx-1 md:mx-10 xl:w-4/5 xl:mx-auto font-medium text-xs md:text-base">
              <thead>
                <tr>
                  <th className="w-1/12 border-b dark:border-slate-600 font-bold md:p-4 md:pb-6 md:pl-8 pt-0 pb-3 text-slate-600 dark:text-slate-200 text-left">
                    S.NO.
                  </th>
                  <th className="w-1/6 border-b dark:border-slate-600 font-bold p-4 pt-0 pb-3 text-slate-600 dark:text-slate-200 text-left">
                    PS.ID
                  </th>
                  <th className="w-1/3 border-b dark:border-slate-600 font-bold p-4 pr-8 pt-0 pb-3 text-slate-600 dark:text-slate-200 text-left">
                    Problem_Statement_Title
                  </th>
                  <th className="w-1/6 border-b dark:border-slate-600 font-bold p-4 pr-8 pt-0 pb-3 text-slate-600 dark:text-slate-200 text-left">
                    Category
                  </th>
                  <th className="w-1/6 border-b dark:border-slate-600 font-bold p-4 pr-8 pt-0 pb-3 text-slate-600 dark:text-slate-200 text-left">
                    Domain
                  </th>
                </tr>
              </thead>
              <tbody>
                {paginatedPosts.filter((item) => {
                  const searchTerm = search.trim().toLowerCase();
                  return (
                    item.ps_id.toLowerCase().includes(searchTerm) ||
                    item.ps_title.toLowerCase().includes(searchTerm) ||
                    item.category.toLowerCase().includes(searchTerm) ||
                    item.domain.toLowerCase().includes(searchTerm)
                  );
                }).length === 0 ? (
                  <tr>
                    <td
                      colSpan="5"
                      className="text-center md:font-bold md:text-lg py-7 text-red-400"
                    >
                      No results found
                    </td>
                  </tr>
                ) : (
                  paginatedPosts
                    .filter((item) => {
                      const searchTerm = search.trim().toLowerCase(); // Trim white spaces
                      return (
                        searchTerm === "" ||
                        item.ps_id.toLowerCase().includes(searchTerm) ||
                        item.ps_title.toLowerCase().includes(searchTerm) ||
                        item.category.toLowerCase().includes(searchTerm) ||
                        item.domain.toLowerCase().includes(searchTerm)
                      );
                    })
                    .map((item) => (
                      <tr
                        key={item.id}
                        className="even:bg-slate-100 odd:bg-emerald-50 dark:even:bg-gray-600 dark:odd:bg-slate-500"
                      >
                        <td className="border-b border-slate-100 dark:border-slate-700 pl-2 md:p-4 md:pl-8 text-slate-500 dark:text-slate-100">
                          {String(item.id).split("_")[1]}
                        </td>
                        <td className="border-b border-slate-100 dark:border-slate-700 pl-3 md:p-4 md:pl-8 text-slate-500 dark:text-slate-100">
                          {item.ps_id}
                        </td>
                        <motion.td
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.95 }}
                          key={item.id}
                          onClick={() => {
                            const elems = document.querySelectorAll(
                              `.${item.id}`
                            );
                            [].forEach.call(elems, function (el) {
                              el.classList.toggle("hidden");
                            });
                            blur();
                          }}
                          className="border-b cursor-pointer border-slate-100 dark:border-slate-700 pl-1 md:p-4 md:pl-8 text-blue-500 dark:text-blue-300"
                        >
                          {item.ps_title}
                        </motion.td>
                        <td className="border-b border-slate-100 dark:border-slate-700 pl-5 md:p-4 md:pl-8 text-slate-500 dark:text-slate-100">
                          {item.category}
                        </td>
                        <td className="border-b border-slate-100 dark:border-slate-700 pl-1 md:p-4 md:pl-8 text-slate-500 dark:text-slate-100">
                          {item.domain}
                        </td>
                      </tr>
                    ))
                )}
              </tbody>
            </table>
          </div>
          <div className="xl:flex justify-between my-6 mx-1 md:w-10/12 lg:w-11/12 xl:w-4/5 md:mx-auto">
            <div className="font-semibold flex text-sm md:text-base justify-center md:justify-start">
              <div className="mr-2">Showing</div>
              <div>
                {paginatedPosts.length > 0 && (
                  <>
                    {paginatedPosts[0].id.split("_")[1]} to{" "}
                    {paginatedPosts[paginatedPosts.length - 1].id.split("_")[1]}{" "}
                    of {data.length}
                  </>
                )}
              </div>
              <div className="ml-2">entries</div>
            </div>

            <Pagination
              items={filteredData.length} // 100
              currentPage={currentPage} // 1
              pageSize={value} // 10
              onPageChange={onPageChange}
              onPrev={onPrev}
              onNext={onNext}
            />
          </div>
        </motion.div>
      </section>
      {/* pop up data */}
      <div className="flex flex-wrap justify-center items-center">
        {paginatedPosts.map((item) => {
          return (
            <div
              key={item.id}
              className={`container ${item.id} hidden bg-white dark:bg-gray-700 md:mx-auto rounded-xl md:top-28 top-20 fixed z-50 justify-center text-center md:w-4/5 lg:w-full bottom-3 overflow-auto shadow-2xl dark:shadow-white shadow-slate-700`}
            >
              <div className="flex sticky top-0 z-10 bg-white/100 dark:bg-gray-800 items-start justify-between md:p-4 p-2 border-b rounded-t dark:border-gray-600">
                <h3 className="md:text-xl font-semibold text-gray-900 dark:text-white">
                  PROBLEM STATEMENT DETAILS
                </h3>
                <div
                  onClick={() => {
                    const elems = document.querySelectorAll(`.${item.id}`);
                    [].forEach.call(elems, function (el) {
                      el.classList.toggle("hidden");
                    });
                    blur();
                  }}
                  className="text-gray-800 dark:text-white bg-gray-50 dark:bg-slate-700 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-lg md:text-2xl font-bold p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
                >
                  <RxCross2 />
                </div>
              </div>
              <div className="flex w-full md:my-2 my-1">
                <div className="flex-1 overflow-auto md:mx-2 mx-1">
                  <div className="flex w-full bg-slate-100 dark:bg-gray-600">
                    <div className="w-1/5 text-sm md:text-base md:px-4 px-0 md:py-2 py-1 text-left border-b border-r border-t border-l border-slate-600 dark:border-slate-200 font-medium md:font-bold text-slate-600 dark:text-slate-200">
                      Problem Statement ID
                    </div>
                    <div className="w-4/5 text-sm md:text-base md:px-4 px-1 md:py-2 py-1 text-left border-b border-r border-t border-slate-600 dark:border-slate-200 font-normal md:font-bold text-slate-600 dark:text-slate-200">
                      {item.ps_id}
                    </div>
                  </div>
                  <div className="flex w-full bg-emerald-50 dark:bg-slate-500">
                    <div className="w-1/5 text-sm md:text-base md:px-4 px-0 md:py-2 py-1 text-left border-b border-r  border-l border-slate-600 dark:border-slate-200 font-medium md:font-bold text-slate-600 dark:text-slate-200">
                      Problem Statement Title
                    </div>
                    <div className="w-4/5 text-sm md:text-base md:px-4 px-1 md:py-2 py-1 text-left border-b border-r border-slate-600 dark:border-slate-200 font-normal md:font-bold text-slate-600 dark:text-slate-200">
                      {item.ps_title}
                    </div>
                  </div>
                  <div className="flex w-full bg-slate-100 dark:bg-gray-600">
                    <div className="w-1/5 text-sm md:text-base md:px-4 px-0 text-left border-b border-r border-l border-slate-600 dark:border-slate-200 font-medium md:font-bold text-slate-600 dark:text-slate-200">
                      Description
                    </div>
                    <div className="w-4/5 text-sm md:text-base md:px-4 px-1 text-left border-b border-r border-slate-600 dark:border-slate-200 font-normal md:font-bold text-slate-600 dark:text-slate-200">
                      {item.ps_data}
                    </div>
                  </div>
                  <div className="flex w-full bg-emerald-50 dark:bg-slate-500">
                    <div className="w-1/5 text-sm md:text-base md:px-4 px-0 text-left border-b border-r border-l border-slate-600 dark:border-slate-200 font-medium md:font-bold text-slate-600 dark:text-slate-200">
                      Category
                    </div>
                    <div className="w-4/5 text-sm md:text-base md:px-4 px-1 text-left border-b border-r border-slate-600 dark:border-slate-200 font-normal md:font-bold text-slate-600 dark:text-slate-200">
                      {item.category}
                    </div>
                  </div>
                  <div className="flex w-full bg-slate-100 dark:bg-gray-600">
                    <div className="w-1/5 text-sm md:text-base md:px-4 px-0 text-left border-b border-r border-l border-slate-600 dark:border-slate-200 font-medium md:font-bold text-slate-600 dark:text-slate-200">
                      Domain Bucket
                    </div>
                    <div className="w-4/5 text-sm md:text-base md:px-4 px-1 text-left border-b border-r border-slate-600 dark:border-slate-200 font-normal md:font-bold text-slate-600 dark:text-slate-200">
                      {item.domain}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Problems;
