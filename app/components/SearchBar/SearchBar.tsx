"use client";

import { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
// import Link from "next/link";

export default function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const [query, setQuery] = useState();

  const handleChange = (event: { target: { value: string | undefined } }) => {
    setQuery(event.target.value);
  };

  const handleSubmitSearch = () => {
    // router.push("/list/search");
    // window.location.assign(`/list?search=${query}`);
    // router.push("/details");

    //esto no funciona y nose porqué

    const params = new URLSearchParams(searchParams);
    params.set("search", "rick");
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <form onSubmit={handleSubmitSearch}>
      <label>Search by name:</label>
      <input placeholder="search" onChange={handleChange} />

      {/* Esta guarrada sí funciona */}
      {/* <Link href={`/list?search=${query}`}>button test link</Link> */}
    </form>
  );
}
