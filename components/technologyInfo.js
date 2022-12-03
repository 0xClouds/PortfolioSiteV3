import styles from "../styles/TechnologyInfo.module.scss";

export default function TechnologyInfo() {
  return (
    <div className={styles.info}>
      <span className={styles.listHeader}>Languages:</span>
      <ul className={styles.list}>
        <li className={styles.listItem}>HTML</li>
        <li className={styles.listItem}>CSS/SCSS</li>
        <li className={styles.listItem}>Javascript/Typescript</li>
        <li className={styles.listItem}>Solidity</li>
      </ul>
      <span className={styles.listHeader}>Frameworks &amp; Libraries:</span>
      <ul className={styles.list}>
        <li className={styles.listItem}>React/Next.js</li>
        <li className={styles.listItem}>Node.js</li>
        <li className={styles.listItem}>Ethers.js</li>
        <li className={styles.listItem}>Hardhat</li>
        <li className={styles.listItem}>Tailwind</li>
      </ul>
    </div>
  );
}
