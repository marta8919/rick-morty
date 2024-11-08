import style from "./detailCard.module.css";
import Image from "next/image";

interface Character {
  name: string;
  gender: string;
  image: string;
  species: string;
  origin: { name: string };
  episode: [{ name: string; episode: string }];
}
export default function DetailCard({ character }: { character: Character }) {
  const episodes = character.episode;
  return (
    <div className={style.detailCard}>
      <Image
        src={character.image}
        width="450"
        height="500"
        alt={character.name}
        className={style.image}
      />
      <div className={style.infoWrapper}>
        <div className={style.info}>
          <div>
            <p className={style.title}>Name: </p>
            <p>{character.name}</p>
          </div>
          <div>
            <p className={style.title}>Gender: </p>
            <p>{character.gender}</p>
          </div>
          <div>
            <p className={style.title}>Species: </p>
            <p>{character.species}</p>
          </div>
          <div>
            <p className={style.title}>Origin: </p>
            <p>{character.origin.name}</p>
          </div>
        </div>
        <div className={style.episodesWrapper}>
          <p className={style.title}>Episodes:</p>
          {episodes.map((singleEpisode, index) => (
            <p key={index}>{singleEpisode.name}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
