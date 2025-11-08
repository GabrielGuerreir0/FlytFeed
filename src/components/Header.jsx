import styles from "./Header.module.css";
import FlytLogo from "../assets/flyt-logo.svg";
export function Header() {
  return (
    <header className={styles.header}>
      <img src={FlytLogo} alt="Flyt Logo" />
      <strong>Flyt Feed</strong>
    </header>
  );
}
