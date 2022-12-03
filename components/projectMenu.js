import styles from "../styles/ProjectMenu.module.scss";
import Project from "../components/project";

export default function ProjectMenu() {
  return (
    <div className={styles.main} id="test">
      <Project
        projectTitle="Cosmies"
        alt="Navigate to a NFT project created by Cloud"
        href="https://comsies-frontend-nextjs-dapp.vercel.app/"
      ></Project>
      <Project
        projectTitle="Smart Contract Lottery"
        alt="Navigate to a Decentralized Smart Contract lottery created by Cloud"
        href="https://cool-grass-7457.on.fleek.co/"
      ></Project>
      <Project
        projectTitle="Random Image Generator"
        alt="Navigate to a Randome Image Generator created by Cloud"
        href="https://github.com/0xClouds/generative_art/blob/main/index.js"
      ></Project>
      <Project
        projectTitle="Lofi-Defi"
        alt="Navigate to Lofi-Defi a freelance project by Cloud"
        href="https://www.bscscan.com/token/0x17D8519F57450E2B7E6aE1163E0E448322a8aF17#code"
      ></Project>
      <Project
        projectTitle="Github"
        alt="navigate to Clouds Github"
        href="https://github.com/0xClouds"
      ></Project>
    </div>
  );
}
