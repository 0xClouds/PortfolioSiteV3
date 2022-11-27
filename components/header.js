import styles from "../styles/Header.module.scss";
import CloudImage from "./cloudImage";
export default function Header() {
  return (
    <div className={styles.main}>
      <CloudImage></CloudImage>
      <div className={styles.headerContainer}>
        <h1 className={styles.header}>Cloud</h1>
        <span className={styles.title}>Blockchain Developer</span>
      </div>
    </div>
  );
}
