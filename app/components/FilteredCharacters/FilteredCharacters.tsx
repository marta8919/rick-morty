import { FILTER_CHARACTERS } from "@/queries/queries";
import style from "./FilteredCharacters.module.css";
import { useQuery } from "@apollo/client";
import Loader from "../loader/loader";
import Error from "../../components/errorCard/errorCard";
import Card from "../Card/Card";

interface Character {
  __typename: string;
  name: string;
  id: number;
  image: string;
}

export default function FilteredCharacters({ query }: { query: string }) {
  const { data, loading, error } = useQuery(FILTER_CHARACTERS, {
    variables: { name: query },
  });

  if (loading) {
    return (
      <div>
        <h2>Filtered Characters:</h2>
        <Loader />
      </div>
    );
  }

  if (data) {
    return (
      <div className={style.filteredWrapper}>
        <h2>Filtered Characters:</h2>

        <div className={style.filteredCards}>
          {data?.characters.results.length ? (
            data.characters.results.map((one: Character, idx: number) => (
              <div key={idx}>
                <Card character={one} />
              </div>
            ))
          ) : (
            <p>No results found try again</p>
          )}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h2>Filtered Characters:</h2>

        <Error />
      </div>
    );
  }
}
