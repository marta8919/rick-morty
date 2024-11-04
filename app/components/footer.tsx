import Link from "next/link";
import style from "../page.module.css";

export default function Footer() {
  return (
    <div className={style.footer}>
      <p>
        © 2024 Created by <Link href="https://martagg.com/">Marta</Link>
      </p>
    </div>
  );
}
