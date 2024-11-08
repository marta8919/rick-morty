"use client";

import { gql, useQuery } from "@apollo/client";
import { useParams } from "next/navigation";
import style from "../../page.module.css";
import Loader from "@/app/components/loader/loader";
import DetailCard from "@/app/components/detailCard/detailCard";
import Link from "next/link";

export const GET_CHARACTER = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      name
      gender
      species
      origin {
        name
      }
      image
      episode {
        name
        episode
      }
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
        <h1>Detail page</h1>
        <div className={style.loaderWrapper}>
          <Loader />
        </div>
      </div>
    );
  }

  if (data) {
    return (
      <div className={style.listPage}>
        <h1 className={style.header1}>Detail page</h1>
        <DetailCard character={data.character} />
        <Link href={"/list"}>
          <div className={style.backBtn}>Go back to the list</div>
        </Link>
      </div>
    );
  }

  if (error) {
    return <div>Custom Error</div>;
  }
}
