import Link from "next/link";
import styles from "../page.module.css";
import LastSeen from "./lastSeen/lastSeen";
import { returnCookies } from "@/actions/cookies";

const Header = async () => {
  const lastCookie = await returnCookies({ type: "CHARACTER" });

  return (
    <div className={styles.header}>
      <div className={styles.headerContent}>
        <Link href={"/"}>Home</Link>
        <Link href={"/list?page=1"}>All characters</Link>
        {lastCookie ? <LastSeen /> : null}

        <div>Search</div>
      </div>
    </div>
  );
};

export default Header;
