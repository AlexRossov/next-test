import styles from "./page.module.css";
import Link from "next/link";

interface buttonProps {
  text: string,
  url: string
}

const Button = ({text, url}: buttonProps) => {
  return (
    <Link href={url}>
      <button className={styles.container}>{text}</button>
    </Link>
  );
};

export default Button;