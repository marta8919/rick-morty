"use client";

import { gql, useQuery } from "@apollo/client";
import { useParams } from "next/navigation";
import style from "../../page.module.css";
import Loader from "@/app/components/loader/loader";

export const GET_CHARACTER = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      name
      gender
    }
  }
`;

export default function Detail() {
  const { id } = useParams<{ id: string }>();

  const { data, loading, error } = useQuery(GET_CHARACTER, {
    variables: { id },
  });

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

  if (data && data.character) {
    return (
      <div className={style.listPage}>
        <h1>Detail page</h1>
        <div>
          <p>{data.character.name}</p>
          <p>{data.character.gender}</p>
        </div>
      </div>
    );
  }

  if (error) {
    return <div>Custom Error</div>;
  }

  return <div>default</div>;
}
