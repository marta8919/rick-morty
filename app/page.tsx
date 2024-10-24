import styles from "./page.module.css";
import Carousel from "./components/carousel";

export default function Home() {
  return (
    <div className={styles.page}>
      <Carousel />
    </div>
  );
}
