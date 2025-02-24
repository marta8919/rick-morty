import styles from "./page.module.css";
import Carousel from "./components/carousel";

export default function Home() {
  return (
    <div className={styles.carrouselPage}>
      <h1>Rick & Morty</h1>
      <Carousel />
    </div>
  );
}
