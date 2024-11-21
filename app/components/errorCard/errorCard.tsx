import Link from "next/link";
import IconSad from "../Icon/IconSad";
import style from "./errorCard.module.css";

export default function CustomError() {
  return (
    <div className={style.cardWrapper}>
      <p>Oops! Seems like something went wrong</p>
      <IconSad />
      <Link href={`/`} className={style.goBackBtn}>
        Go back to Homepage
      </Link>
    </div>
  );
}
