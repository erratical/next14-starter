import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>lamadev</div>
      <div className={styles.text}>
        JM creative thoughts agency. All lefts reserved.
      </div>
    </div>
  );
};

export default Footer;
