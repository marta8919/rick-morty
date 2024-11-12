"use client";
import Image from "next/image";
import Link from "next/link";
import style from "./card.module.css";
import { createCookie } from "@/actions/cookies";

interface CardProps {
  character: Character;
}
interface Character {
  __typename: string;
  name: string;
  id: number;
  image: string;
}

export default function Card({ character }: CardProps) {
  const { name, id, image } = character;
  return (
    <div className={style.cardWrapper}>
      <Link href={`/detail/${id}`} className={style.card}>
        <Image
          src={image}
          alt={name}
          width={60}
          height={60}
          className={style.cardImage}
        />
        <p>{name}</p>
        <button
          onClick={() =>
            createCookie({ name: character.name, id: character.id })
          }
        >
          add to cookies
        </button>
      </Link>
    </div>
  );
}
