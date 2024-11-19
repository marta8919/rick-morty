"use client";
import { gql, useQuery } from "@apollo/client";
import Card from "@/app/components/card/card";
import Loader from "@/app/components/loader/loader";
import style from "../page.module.css";
import Error from "../components/errorCard/errorCard";
import { useSearchParams } from "next/navigation";
import PageControllers from "../components/pageControllers/pageController";
import { useEffect } from "react";
import { createCookie } from "@/actions/cookies";

export const GET_ALL_CHARACTERS = gql`
  query GetAllCharacters($page: Int) {
    characters(page: $page) {
      info {
        pages
      }
      results {
        name
        id
        image
        __typename
      }
    }
  }
`;

interface Character {
  __typename: string;
  name: string;
  id: number;
  image: string;
}

export default function ListPage() {
  const searchParams = useSearchParams();

  const page = Number(searchParams.get("page"));

  const { data, loading, error } = useQuery(GET_ALL_CHARACTERS, {
    variables: { page },
  });

  useEffect(() => {
    createCookie({ type: "PAGE", page: page });
  }, [page]);

  if (loading) {
    return (
      <div className={style.listPage}>
        <h1>Characters</h1>
        <div className={style.loaderWrapper}>
          <Loader />
        </div>
      </div>
    );
  }

  if (data) {
    return (
      <div className={style.listPage}>
        <h1>Characters</h1>

        <div className={style.allCardsWrapper}>
          {data.characters.results.map((one: Character, index: number) => (
            <div key={index}>
              <Card character={one} />
            </div>
          ))}
        </div>

        <PageControllers
          currentPage={page}
          totalPages={data?.characters?.info?.pages}
        />
      </div>
    );
  }

  if (error) {
    return (
      <div className={style.listPage}>
        <Error />
      </div>
    );
  }
}
