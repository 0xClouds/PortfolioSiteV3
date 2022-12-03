import styles from "../styles/NavLinks.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

export default function NavLinks() {
  const router = useRouter();
  return (
    <ul className={styles.navList}>
      <li className={styles.listItem}>
        <Link href="/">{router.pathname == "/" ? "☁" : "Home"}</Link>
      </li>
      <li className={styles.listItem}>
        <Link href="/projects">
          {router.pathname == "/projects" ? "☁" : "Projects"}
        </Link>
      </li>
      <li className={styles.listItem}>
        <Link href="/about">{router.pathname == "/about" ? "☁" : "About"}</Link>
      </li>
      <li className={styles.listItem}>
        <Link href="/contact">
          {router.pathname == "/contact" ? "☁" : "Contact"}
        </Link>
      </li>
    </ul>
  );
}
