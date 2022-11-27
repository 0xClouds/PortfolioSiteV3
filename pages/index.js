import styles from "../styles/Home.module.scss";
import Header from "../components/header";
import NavMenu from "../components/navMenu";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header></Header>
      <NavMenu></NavMenu>
    </div>
  );
}
