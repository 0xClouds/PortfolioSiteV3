import styles from "../styles/ListItem.module.scss";
import { useState } from "react";

export default function ListItem({ href, text, isLink }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
      className={styles.listItem}
    >
      <a
        href={href}
        target="blank"
        style={isHovered && isLink ? { color: "#808080" } : {}}
      >
        {text}
        {isHovered && isLink ? " →" : ""}
      </a>
    </li>
  );
}
