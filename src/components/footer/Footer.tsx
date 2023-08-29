import styles from './page.module.css';
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={styles.container}>
      <div>2023 MyApp. All rights reserved</div>
      <div className={styles.social}>
        <Image src='/vk.png' width={25} height={25} className={styles.icon} alt='vk.com' />
        <Image src='/inst.png' width={25} height={25} className={styles.icon} alt='instagram.com' />
        <Image src='/twitter.png' width={25} height={25} className={styles.icon} alt='twitter.com' />
        <Image src='/yt.png' width={25} height={25} className={styles.icon} alt='youtube.com' />
      </div>
    </footer>
  );
}