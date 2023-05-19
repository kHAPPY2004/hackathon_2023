import { useState } from "react";
import React from "react";
import data from "/components/data.json";
import Pagination from "@/components/Pagination";
import { paginate } from "@/components/paginate";
import Faq from "@/components/Faq";
const Problems = () => {
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
    if (currentPage < Math.ceil(data.length / value))
      setCurrentPage(currentPage + 1);
  };
  const paginatedPosts = paginate(data, currentPage, value);
  return (
    <>
      <section className="relative overflow-auto bg-gray-50 dark:bg-slate-700">
        <div className="font-bold text-2xl flex justify-center text-center mt-10">
          Problem Statements
        </div>
        <div className="shadow-sm overflow-hidden my-8">
          <div className="flex justify-between my-6 w-4/5 mx-auto">
            <div className="font-semibold text-base">
              Show
              <select
                onChange={(e) => {
                  setValue(e.target.value);
                  setCurrentPage(1);
                }}
                className="mx-2 px-1 text-lg"
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
            <div className="font-medium text-base">
              Search:
              <input
                type="search"
                className="border-2 rounded-md mx-2 p-1 px-2 dark:bg-gray-700"
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
          <table className="border-collapse table-fixed w-4/5 mx-auto font-medium text-base">
            <thead>
              <tr>
                <th className="w-1/12 border-b dark:border-slate-600 font-bold p-4 pl-8 pt-0 pb-3 text-slate-600 dark:text-slate-200 text-left">
                  S.NO.
                </th>
                <th className="w-1/6 border-b dark:border-slate-600 font-bold p-4 pt-0 pb-3 text-slate-600 dark:text-slate-200 text-left">
                  PS ID
                </th>
                <th className="w-1/3 border-b dark:border-slate-600 font-bold p-4 pr-8 pt-0 pb-3 text-slate-600 dark:text-slate-200 text-left">
                  Problem Statement Title
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
              {paginatedPosts
                .filter((item) => {
                  return search.toLowerCase() === ""
                    ? item
                    : item.ps_id.toLowerCase().includes(search) ||
                        item.ps_title.toLowerCase().includes(search) ||
                        item.category.toLowerCase().includes(search) ||
                        item.domain.toLowerCase().includes(search);
                })

                .map((item) => (
                  <tr
                    key={item.id}
                    className="even:bg-slate-100 odd:bg-emerald-50 dark:even:bg-gray-600 dark:odd:bg-slate-500"
                  >
                    <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-100">
                      {item.id}
                    </td>
                    <td className="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-100">
                      {item.ps_id}
                    </td>
                    <td className="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-blue-500 dark:text-slate-100">
                      {item.ps_title}
                    </td>
                    <td className="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-100">
                      {item.category}
                    </td>
                    <td className="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-100">
                      {item.domain}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          <div className="flex justify-between my-6 w-4/5 mx-auto">
            <div className="font-semibold text-base">
              Showing {paginatedPosts[0].id} to{" "}
              {paginatedPosts[paginatedPosts.length - 1].id} of {data.length}{" "}
              entries
            </div>
            <div>
              <Pagination
                items={data.length} // 100
                currentPage={currentPage} // 1
                pageSize={value} // 10
                onPageChange={onPageChange}
                onPrev={onPrev}
                onNext={onNext}
              />
            </div>
          </div>
        </div>
      </section>
      <Faq />
    </>
  );
};

export default Problems;
