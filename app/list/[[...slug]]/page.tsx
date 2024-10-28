import Link from "next/link";
import { gql } from "@apollo/client";
import client from "@/lib/apolloClient";

const getAllCharactersQuery = gql`
  query GetAllCharacters {
    characters {
      results {
        name
        id
      }
    }
  }
`;

interface Character {
  name: string;
  __typename: string;
  id: number;
}

export default async function ListPage() {
  const { data, loading } = await client.query({
    query: getAllCharactersQuery,
  });

  if (data.characters.results.length) {
    return (
      <div style={{ marginLeft: "250px" }}>
        <h1>List page</h1>
        {data.characters.results.map((one: Character, index: number) => (
          <Link href={`/detail/${one.id}`} key={index}>
            <p>{one.name}</p>
          </Link>
        ))}
      </div>
    );
  }

  if (loading) {
    return (
      <div style={{ marginLeft: "250px" }}>
        <p>Loading</p>
      </div>
    );
  }

  return (
    <div style={{ marginLeft: "250px" }}>
      <h1>List page</h1>
      <Link href="/detail">Detail page</Link>
    </div>
  );
}
