import Link from "next/link";
import styles from "../page.module.css";
import LastSeen from "./lastSeen/lastSeen";
import { returnCookies } from "@/actions/cookies";
import SearchBar from "./SearchBar/SearchBar";

const Header = async () => {
  const lastCookie = await returnCookies({ type: "CHARACTER" });

  return (
    <div className={styles.header}>
      <div className={styles.headerContent}>
        <Link href={"/"}>Home</Link>
        <Link href={"/list?page=1"}>All characters</Link>
        {lastCookie ? <LastSeen /> : null}
        <SearchBar />
      </div>
    </div>
  );
};

export default Header;
