import styles from "../styles/NavMenu.module.scss";

export default function NavMenu() {
  return (
    <div className={styles.main}>
      <ul className={styles.navList}>
        <li className={styles.listItems}>Home</li>
        <li className={styles.listItems}>Projects</li>
        <li className={styles.listItems}>About</li>
        <li className={styles.listItems}>Contact</li>
      </ul>
    </div>
  );
}
