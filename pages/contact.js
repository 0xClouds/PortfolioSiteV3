import styles from "../styles/Contact.module.scss";
import ContactMenu from "../components/contactMenu";
export default function Contact() {
  return (
    <div className={styles.main}>
      <ContactMenu></ContactMenu>
    </div>
  );
}
