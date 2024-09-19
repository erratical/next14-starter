import Image from "next/image";
import React from "react";
import styles from "./postCard.module.css";
import Link from "next/link";

const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            src="https://images.pexels.com/photos/26771102/pexels-photo-26771102/free-photo-of-bride-holding-mirror-with-glass-and-flowers.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
            alt=""
            fill
          />
        </div>
        <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>
          Lorem ipsum odor amet, consectetuer adipiscing elit. Varius consequat
          adipiscing tincidunt penatibus nibh cursus habitant. Amet laoreet
          vulputate class est pharetra feugiat. Non vestibulum tellus fames
          commodo volutpat lacus arcu quis. Netus lacinia vulputate ad eros
          ridiculus facilisis. Hac mi hendrerit tempus lobortis interdum purus
          volutpat tempus. Urna accumsan vulputate proin diam odio; hendrerit
          aenean pulvinar amet. Aenean malesuada dui facilisis at suscipit
          volutpat euismod montes. Curae habitasse convallis neque natoque
          himenaeos etiam.
        </p>
        <Link className={styles.link} href="/blog/post">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
