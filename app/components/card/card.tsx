import Image from "next/image";
import style from "./card.module.css";
import Link from "next/link";

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
    <Link className={style.cardWrapper} href={`/detail/${id}`}>
      <div className={style.card}>
        <Image
          src={image}
          alt={name}
          width={60}
          height={60}
          className={style.cardImage}
        />
        <p>{name}</p>
      </div>
    </Link>
  );
}
