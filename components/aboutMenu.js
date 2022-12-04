import styles from "../styles/AboutMenu.module.scss";
import ListItem from "./listItem";

export default function AboutMenu() {
  return (
    <div className={styles.main}>
      <h2 className={styles.header}>Communities</h2>
      <ul className={styles.aboutList}>
        <ListItem
          text="ETH San Diego"
          href="https://www.ethsd.org/"
          isLink={true}
        ></ListItem>
        <ListItem
          text="Developer DAO"
          href="https://www.developerdao.com/"
          isLink={true}
        ></ListItem>
      </ul>

      <h2 className={styles.header}>Course Work</h2>
      <ul className={styles.aboutList}>
        <ListItem
          text="Patrick Collins 32hr Blockchain Fullstack"
          href="https://stratosnft.io/0x07dd9A64697CB2D46754995C011B7Ec460663D8E"
          isLink={true}
        ></ListItem>
        <ListItem
          text="Alchemy Uni"
          href="https://university.alchemy.com/home"
          isLink={true}
        ></ListItem>
        <ListItem
          text="freeCodeCamp Responsive Web Design"
          href="https://www.freecodecamp.org/certification/fcce5f3abd3-12f0-492c-97be-8fbdc0eea823/responsive-web-design"
          isLink={true}
        ></ListItem>
      </ul>
      <h2 className={styles.header}>Hobbies &amp; Interest</h2>
      <ul className={styles.aboutList}>
        <ListItem text="Cryptocurrency/NFTs/DAOs/Decentrilization"></ListItem>
        <ListItem text="Hiking"></ListItem>
        <ListItem text="Reading &amp; Manga"></ListItem>
        <ListItem text="Travel"></ListItem>
      </ul>
    </div>
  );
}
