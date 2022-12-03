import styles from "../styles/Project.module.scss";
import ProjectImage from "../components/projectImage";
export default function Project({ projectTitle, alt, href }) {
  return (
    <div className={styles.main}>
      <a href={href} target="_blank" rel="noreferrer">
        <ProjectImage alt={alt}></ProjectImage>
      </a>
      <span className={styles.projectTitle}>{projectTitle}</span>
    </div>
  );
}
