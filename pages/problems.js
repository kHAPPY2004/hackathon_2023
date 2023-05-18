import { useState } from "react";
import React from "react";
import { data } from "./data";
import Pagination from "@/components/Pagination";
import { paginate } from "@/components/paginate";
const Problems = () => {
  const [search, setSearch] = useState("");
  const [value, setValue] = useState("2");
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (page) => {
    setCurrentPage(page);
  };
  console.log("currentPage", currentPage);
  console.log("value", value);
  const paginatedPosts = paginate(data, currentPage, value);
  console.log("paginatedPosts", paginatedPosts);
  return (
    <>
      <label>
        Show
        <select
          onChange={(e) => {
            setValue(e.target.value);
            setCurrentPage(1);
          }}
        >
          <option value="2">10</option>
          <option value="6">25</option>
          <option value="8">50</option>
          <option value="12">100</option>
          <option value="16">125</option>
        </select>
        entries
      </label>
      <label>
        Search:
        <input
          type="search"
          className=""
          placeholder="Hello"
          aria-controls="example"
          onChange={(e) => setSearch(e.target.value)}
        />
      </label>
      <div className="relative rounded-xl overflow-auto">
        <div className="shadow-sm overflow-hidden my-8">
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
            <tbody className="bg-white dark:bg-slate-800">
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
                    className="even:bg-slate-100 odd:bg-emerald-50"
                  >
                    <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                      {item.id}
                    </td>
                    <td className="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">
                      {item.ps_id}
                    </td>
                    <td className="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-blue-500 dark:text-slate-400">
                      {item.ps_title}
                    </td>
                    <td className="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">
                      {item.category}
                    </td>
                    <td className="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">
                      {item.domain}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>

      <Pagination
        items={data.length} // 100
        currentPage={currentPage} // 1
        pageSize={value} // 10
        onPageChange={onPageChange}
      />
    </>
  );
};

export default Problems;
