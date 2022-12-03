import Image from "next/image";
import styles from "../styles/ProjectImage.module.scss";
export default function ProjectImage({ alt }) {
  return (
    <div className={styles.main}>
      <div className={styles.imgContainer}>
        <Image src="/file.png" alt={alt} fill className={styles.img}></Image>
      </div>
    </div>
  );
}
