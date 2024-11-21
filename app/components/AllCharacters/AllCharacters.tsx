import { useQuery } from "@apollo/client";
import style from "./AllCharacters.module.css";
import { createCookie } from "@/actions/cookies";
import { useEffect } from "react";
import Loader from "../loader/loader";
import PageControllers from "../pageControllers/pageController";
import Error from "../errorCard/errorCard";
import { GET_ALL_CHARACTERS } from "@/queries/queries";
import Card from "../Card/Card";

interface Character {
  __typename: string;
  name: string;
  id: number;
  image: string;
}

export default function AllCharacters({ page }: { page: number }) {
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
