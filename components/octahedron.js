import styles from "../styles/Octahedron.module.css";

export default function octahedron() {
  return (
    <div className={styles.camera}>
      <div className={styles.space}>
        <div className={styles.box1}>
          <div className={styles.face1}></div>
          <div className={styles.face2}></div>
          <div className={styles.face3}></div>
          <div className={styles.face4}></div>
        </div>
        <div className={styles.box2}>
          <div className={styles.face1}></div>
          <div className={styles.face2}></div>
          <div className={styles.face4}></div>
          <div className={styles.face3}></div>
        </div>
      </div>
    </div>
  );
}
