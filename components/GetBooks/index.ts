import React from "react";

export const SearchBooks = async (query : string, pageNumber: number) => {
    try {
        const response = await fetch(`https://openlibrary.org/search.json?q=${query}&limit=10&offset=${pageNumber*10}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        return -1;
    }
};

export const SearchTrending = async (setBooks: React.Dispatch<any>, search: string, page:number ) => {
    setBooks((prev:any) => ({...prev, loading: true}));
    let data = await SearchBooks(search, page);
    setBooks((prev:any) => ({docs:data.docs, loading: false}));
    return;
};

// not working because of CORS
export const SearchSubjectBooks = async (query : string, pageNumber: number) => {
    try {
        const response = await fetch(`https://openlibrary.org//subjects/${query}.json?limit=10&offset=${pageNumber*10}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        return -1;
    }
};

export const paginatedData = async (setBooks : React.Dispatch<any>, page: number, search: string) => {
    setBooks((prev:any) => ({...prev, loading: true}));
    let data = await SearchBooks(search, page);
    setBooks((prev:any) => ({docs:data.docs, loading: false}));
  }

export const handleSubmit = async (e : React.MouseEvent, setBooks: React.Dispatch<any>, search: string, page:number ) => {
    e.preventDefault();
    setBooks((prev:any) => ({...prev, loading: true}));
    if (!search) return alert("Please enter title or author of book to search");
    let data = await SearchBooks(search, page);
    setBooks((prev:any) => ({docs:data.docs, loading: false}));
    return;
  };

export const handleSubjectSubmit = async (e : React.FormEvent, setBooks: React.Dispatch<any>, search: string, page:number ) => {
    e.preventDefault();
    setBooks((prev:any) => ({...prev, loading: true}));
    if (!search) return alert("Please enter title or author of book to search");
    let data = await SearchSubjectBooks(search, page);
    setBooks((prev:any) => ({docs:data.docs, loading: false}));
    return;
  };