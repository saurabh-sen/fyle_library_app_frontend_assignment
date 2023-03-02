"use client"

import { handleSubmit, SearchTrending } from '@/components/GetBooks'
import React, { useEffect, useState } from 'react'
import SideBar from "../../components/SideBar"
import TableContainer from "../../components/TableContainer"

const page = ({ params } : any) => {

  
  const [search, setSearch] = useState<string>("");
  const [page, setPage] = useState<number>(0);
  const [books, setBooks] = useState<any>({
    docs: [],
    loading: false,
  });
  
  useEffect(() => {
    SearchTrending(setBooks, params.slug.replace(/%20/g, " "), page);
  }, [page])

  return (
    <main className="home flex text-black flex-col md:flex-row">
      <SideBar />
      <div className="right__container w-full">
        <div className="right__header border-t-2 md:border-t-0 border-b-2 border-gray-300">
          <h1 className='text-3xl font-bold my-4 mx-4'>{params.slug.replace(/%20/g, " ")}</h1>
        </div>
        <TableContainer books={books} setPage={setPage} page={page} />
      </div>
    </main>
  )
}

export default page