"use client"
import React from "react";
import Loader from "../Loader";

const index = ({books, page, setPage}: any) => {
  return (
    <div className="table__container mx-8 my-4">
      {books?.loading 
      ?
       <Loader />
        :
        books?.docs.length > 0 && (
          <>
            <div className="table__content">
              <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                      <table className="min-w-full text-left text-sm ">
                        <thead className="border-b border-b-neutral-500">
                          <tr>
                            <th scope="col" className="px-6 py-4">
                              Title and Sub Title
                            </th>
                            <th scope="col" className="px-6 py-4">
                              Author
                            </th>
                            <th scope="col" className="px-6 py-4">
                              Latest Published year
                            </th>
                            <th scope="col" className="px-6 py-4">
                              First Published year
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {books?.docs.map((book: any, index: number) => {
                            return (
                              <tr key={index} className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 border-b-neutral-500">
                                <td className="whitespace-nowrap px-6 py-4">
                                  {book.title.length > 30 ? book.title.slice(0, 30)+'...' : book.title}
                                </td>
                                <td className="whitespace-nowrap px-6 py-4">
                                  {book.author_name ? book.author_name[0] : book.author_name}
                                </td>
                                <td className="whitespace-nowrap px-6 py-4">
                                  {book.publish_year? book.publish_year[0].toString(): "N/A"}
                                </td>
                                <td className="whitespace-nowrap px-6 py-4">
                                  {book.first_publish_year}
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="table__buttons flex gap-6 justify-end">
              <button
                onClick={() => setPage((prev : number) => prev - 1)}
                type="button"
                disabled = {page === 0}
                className="flex gap-2 rounded border-2 border-blue-400 px-6 pt-2 pb-[6px] text-xs font-medium uppercase leading-normal text-blue-400 transition duration-150 ease-in-out hover:border-blue-400 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-blue-400 focus:border-blue-400 focus:text-blue-400 focus:outline-none focus:ring-0 active:border-blue-400 active:text-blue-400 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10 disabled:border-blue-200 disabled:text-blue-200 items-center"
              >
                <span>
                  <svg
                    width={12}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 512"
                  >
                    <path
                      fill="currentColor"
                      d="M9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l128-128c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 256c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-128-128z"
                    />
                  </svg>
                </span>
                <span>Previous</span>
              </button>
              <button
              onClick={() => setPage((prev : number) => prev + 1)}
                type="button"
                className="rounded border-2 border-blue-400 px-6 pt-2 pb-[6px] text-xs font-medium uppercase leading-normal text-blue-400 transition duration-150 ease-in-out hover:border-blue-400 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-blue-400 focus:border-blue-400 focus:text-blue-400 focus:outline-none focus:ring-0 active:border-blue-400 active:text-blue-400 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10 disabled:border-blue-200 disabled:text-blue-200 flex gap-2 items-center"
              >
                <span>Next</span>
                <span>
                  <svg
                    width={12}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 512"
                  >
                    <path
                      fill="currentColor"
                      d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </>
        )
        }
    </div>
  );
};

export default index;
