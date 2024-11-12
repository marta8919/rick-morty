"use client";
import { gql, useQuery } from "@apollo/client";
import Card from "@/app/components/card/card";
import Loader from "@/app/components/loader/loader";
import style from "../page.module.css";

export const GET_ALL_CHARACTERS = gql`
  query GetAllCharacters {
    characters {
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
  const { data, loading, error } = useQuery(GET_ALL_CHARACTERS);

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
      </div>
    );
  }

  if (error) {
    return <div>Error</div>;
  }
}
