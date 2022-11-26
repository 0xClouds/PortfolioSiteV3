import styles from "../styles/Cube.module.scss";
import Image from "next/image";
import { useState } from "react";

export default function Cube() {
  const [isActive, setActive] = useState(true);

  function handleClick() {
    setActive(!isActive);
    console.log(isActive);
  }

  return (
    <div className={styles.main}>
      <div className={styles.scene}>
        <div className={`${styles.cube} ${styles.spin}`} onClick={handleClick}>
          <div
            className={`${styles.cube__face} ${styles.cube__face__front}`}
          ></div>
          <div
            className={`${styles.cube__face} ${styles.cube__face__back}`}
          ></div>
          <div
            className={`${styles.cube__face} ${styles.cube__face__right}`}
          ></div>
          <div
            className={`${styles.cube__face} ${styles.cube__face__left}`}
          ></div>
          <div
            className={`${styles.cube__face} ${styles.cube__face__top}`}
          ></div>
          <div
            className={`${styles.cube__face} ${styles.cube__face__bottom}`}
          ></div>
        </div>
      </div>
    </div>
  );
}
