"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const router = useRouter();

  const [query, setQuery] = useState<string>();

  const handleChange = (event: { target: { value: string | undefined } }) => {
    setQuery(event.target.value);
  };

  const handleSubmitSearch = (event: React.FormEvent<HTMLFormElement>) => {
    setQuery("");
    event.preventDefault();
    router.push(`/list?search=${query}`);
  };

  return (
    <form onSubmit={handleSubmitSearch}>
      <label>Search by name:</label>
      <input
        placeholder="search"
        onChange={handleChange}
        type="text"
        value={query}
      />
      <button type="submit">Search</button>
    </form>
  );
}
