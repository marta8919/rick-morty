"use client";
import { useSearchParams } from "next/navigation";
import AllCharacters from "../components/AllCharacters/AllCharacters";
import FilteredCharacters from "../components/FilteredCharacters/FilteredCharacters";

export default function ListPage() {
  const searchParams = useSearchParams();

  const page = Number(searchParams.get("page"));
  const query = searchParams.get("search");

  if (page >= 1) {
    return <AllCharacters page={page} />;
  }

  if (query) {
    return <FilteredCharacters query={query} />;
  }
}
