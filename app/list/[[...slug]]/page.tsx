"use client";
import { gql, useQuery } from "@apollo/client";
import style from "../../page.module.css";
import Card from "@/app/components/card";
import Loader from "@/app/components/loader/loader";

export const GET_ALL_CHARACTERS = gql`
  query GetAllCharacters {
    characters {
      results {
        name
        id
        image
      }
    }
  }
`;

interface Character {
  name: string;
  id: number;
  image: string;
}

export default function ListPage() {
  const { data } = useQuery(GET_ALL_CHARACTERS);

    return (
      <div className={style.listPage}>
        <h1>Characters</h1>

        {data && data.characters.results.length ? (
          <div className={style.allCardsWrapper}>
            {data.characters.results.map((one: Character, index: number) => (
              <Card character={one} key={index} />
            ))}
          </div>
        ) : (
          <div className={style.loaderWrapper}>
            <Loader />
          </div>
        )}
      </div>
    );

}
