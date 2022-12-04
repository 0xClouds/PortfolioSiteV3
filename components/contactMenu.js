import styles from "../styles/ContactMenu.module.scss";
import ListItem from "./listItem";
export default function ContactMenu() {
  return (
    <ul className={styles.contactList}>
      <ListItem
        href="https://twitter.com/Clouds9x"
        text="Twitter"
        isLink={true}
      ></ListItem>
      <ListItem
        href="https://github.com/0xClouds"
        text="Github"
        isLink={true}
      ></ListItem>
      <ListItem
        href="https://www.linkedin.com/in/ryan-morning/"
        text="LinkedIn"
        isLink={true}
      ></ListItem>
    </ul>
  );
}
