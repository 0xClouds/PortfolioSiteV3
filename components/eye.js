import styles from "../styles/Eye.module.scss";
import { useEffect, useState } from "react";

export default function Eye() {
  const [isFollow, setIsFollow] = useState();
  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const anchor = document.getElementById("anchor");
    });
  });
  function follow() {}
  return (
    <div className={styles.stage}>
      <div className={styles.ball}></div>
      <span className={styles.shadow}></span>
      <span className={styles.iris}></span>
    </div>
  );
}
