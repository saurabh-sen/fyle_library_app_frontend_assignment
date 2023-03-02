"use client"
import React, { useState } from "react";
import { useRouter } from 'next/navigation';
import { handleSubjectSubmit } from "../GetBooks";

const index = () => {

  const router = useRouter();

  const [search, setSearch] = useState<string>("");
  const [page, setPage] = useState<number>(0);
  const [books, setBooks] = useState<any>({
    docs: [],
    loading: false,
  });

  let popularSubjects = [
    "JavaScript",
    "Harry Potter",
    "Indian History",
    "Crypto Currency",
    "Criminal Law",
  ];

  return (
    <div className="sidebar md:min-h-screen flex flex-col gap-3 md:border-r-2 md:border-gray-300 p-4 w-min md:w-auto md:m-0 m-auto">
      <p className="sidebar__header text-2xl font-semibold">
        Trending Subjects
      </p>
      <form onSubmit={(e : React.FormEvent) => handleSubjectSubmit(e, setBooks, search, page)}>
        <input
          type="search"
          className="sidebar__subject__search p-2 border border-gray-300 rounded-md outline-0"
          placeholder="Search Subjects"
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <div className="sidebar__popular__subject text-center md:text-left">
        {popularSubjects.map((subject, index) => (
          <p key={index} onClick={() => router.push(`/${subject}`)} className="popular__subjects cursor-pointer">
            {subject}
          </p>
        ))}
      </div>
    </div>
  );
};

export default index;
