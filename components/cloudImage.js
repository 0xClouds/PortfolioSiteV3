import Image from "next/image";
import styles from "../styles/CloudImage.module.scss";
export default function CloudImage() {
  return (
    <div className={styles.main}>
      <div className={styles.imgContainer}>
        <Image
          src="/Cloud.avif"
          alt="Cloud NFT avatar"
          fill
          className={styles.img}
        ></Image>
      </div>
    </div>
  );
}
