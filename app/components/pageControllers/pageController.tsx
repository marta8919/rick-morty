import Link from "next/link";
import style from "./pageControllers.module.css";

export default function PageControllers({
  currentPage,
  totalPages,
}: {
  currentPage: number;
  totalPages: number;
}) {
  const renderMinusBtn = currentPage > 1;
  const renderPlusBtn = currentPage < totalPages;
  return (
    <div className={style.controllersWrapper}>
      {renderMinusBtn ? (
        <Link href={`/list?page=${currentPage - 1}`} className={style.btn}>
          -
        </Link>
      ) : null}

      <p>
        {currentPage}/{totalPages}
      </p>

      {renderPlusBtn ? (
        <Link href={`/list?page=${currentPage + 1}`} className={style.btn}>
          +
        </Link>
      ) : null}
    </div>
  );
}
