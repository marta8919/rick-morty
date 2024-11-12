import Image from "next/image";
import style from "./card.module.css";
import { createCookie } from "@/actions/cookies";
import { useRouter } from "next/navigation";

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
  const router = useRouter();

  const handleDetailClick = () => {
    createCookie({ name: character.name, id: character.id });
    router.push(`/detail/${id}`);
  };
  return (
    <div className={style.cardWrapper} onClick={handleDetailClick}>
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
    </div>
  );
}
