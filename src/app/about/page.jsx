import styles from "./about.module.css";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About Agency</h2>
        <h1 className={styles.title}>We like to move it move it.</h1>
        <p className={styles.desc}>
          Okane kasegu watashiwasta, I am Monkey D. Luffy and I will be king of
          the pirates! Watch and learn and you'll see.
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Years of Experience</p>
          </div>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Years of Experience</p>
          </div>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Years of Experience</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image className={styles.img} src="/about.png" alt="" fill />
      </div>
    </div>
  );
};

export default AboutPage;
