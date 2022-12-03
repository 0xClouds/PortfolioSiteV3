import styles from "../styles/Home.module.scss";
import TechnologyInfo from "../components/technologyInfo";

export default function Home() {
  return (
    <div className={styles.container}>
      <TechnologyInfo></TechnologyInfo>
    </div>
  );
}
