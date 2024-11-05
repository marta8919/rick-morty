import style from "./loader.module.css";
export default function Loader() {
  return (
    <div className={style.ldsRoller} data-testid="loader-testid">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
