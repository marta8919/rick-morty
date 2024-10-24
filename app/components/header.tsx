import Link from "next/link";
import styles from "../page.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerContent}>
        <Link href={"/"}>Home</Link>
        <Link href={"/list"}>Go to the list</Link>

        <div>Your last three detail pages</div>

        <div>Search field</div>
      </div>
    </div>
  );
};

export default Header;
