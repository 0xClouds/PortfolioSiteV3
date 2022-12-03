import styles from "../styles/NavMenu.module.scss";
import Header from "./header";
import NavLinks from "./navLinks";

export default function NavMenu(currentPage) {
  return (
    <div className={styles.main}>
      <Header></Header>
      <NavLinks></NavLinks>
    </div>
  );
}
