import Link from "next/link";
import styles from "../page.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerContent}>
        <Link href={"/"}>Home</Link>
        <Link href={"/list"}>All characters</Link>

        <div>Your last three</div>

        <div>Search</div>
      </div>
    </div>
  );
};

export default Header;
