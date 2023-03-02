"use client";
import React, { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import TableContainer from "../components/TableContainer";
import { handleSubmit, paginatedData } from "@/components/GetBooks";

export default function Home() {
  const [search, setSearch] = useState<string>("");
  const [page, setPage] = useState<number>(0);
  const [books, setBooks] = useState<any>({
    docs: [],
    loading: false,
  });

  useEffect(() => {
    paginatedData(setBooks, page, search);
  }, [page])

  return (
    <main className="home flex text-black flex-col md:flex-row">
      <SideBar />
      <div className="right__container w-full">
        <div className="right__header border-t-2 md:border-t-0 border-b-2 border-gray-300">
          <div className="input__container my-5 w-max p-2 border border-gray-300 rounded-md flex mx-auto">
            <input
              type="search"
              className="input__text w-[17rem] outline-0"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search Book By Titles or By Author"
            />
            {/* {search && <svg className="mx-3 cursor-pointer" width={15} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" onClick={() => setSearch(prev => prev="")}>
              <path fill="gray" d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/></svg>} */}
            <button className="input__search" onClick={(e : React.MouseEvent) => handleSubmit(e, setBooks, search, page)}>
              <svg
                width={20}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path fill="gray" d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
              </svg>
            </button>
          </div>
        </div>
        <TableContainer books={books} setPage={setPage} page={page} />
      </div>
    </main>
  );
}
