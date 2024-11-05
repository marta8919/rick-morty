import Image from "next/image";
import Link from "next/link";
import style from "../page.module.css";

interface CardProps {
  character: Character;
  key: number;
}
interface Character {
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
      </Link>
    </div>
  );
}
