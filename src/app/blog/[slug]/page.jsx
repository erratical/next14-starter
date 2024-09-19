import Image from "next/image";
import styles from "./singlepost.module.css";

const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          className={styles.img}
          src="https://images.pexels.com/photos/26771102/pexels-photo-26771102/free-photo-of-bride-holding-mirror-with-glass-and-flowers.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
          alt=""
          fill
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image
            className={styles.avatar}
            src="https://images.pexels.com/photos/26771102/pexels-photo-26771102/free-photo-of-bride-holding-mirror-with-glass-and-flowers.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
            alt=""
            height={50}
            width={50}
          />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Terry Davis</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>09/20/2024</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum odor amet, consectetuer adipiscing elit. Varius platea
          neque adipiscing quam primis; nunc placerat integer. Dapibus
          scelerisque nullam leo per ipsum dis dictumst. Nullam aenean aenean
          enim aptent; ornare nam at aliquam. Taciti vehicula curabitur, sodales
          morbi accumsan venenatis sagittis. Nec suscipit orci laoreet eleifend,
          iaculis suspendisse imperdiet non. Lacinia finibus eros ante cursus
          maecenas in. Imperdiet vivamus ante pulvinar porttitor rhoncus at.
          Afringilla conubia fames bibendum commodo pulvinar dignissim
          vestibulum. Ridiculus sagittis curae ad natoque consequat est
          pellentesque at. Orci mattis proin integer cursus quam duis velit.
          Felis congue vestibulum nascetur hac placerat sollicitudin sagittis
          curae. Orci adipiscing arcu fames malesuada maximus. Aenean porta ad
          penatibus ac nullam mattis ex blandit. Efficitur ipsum efficitur erat
          etiam nostra justo dolor. Blandit ac sollicitudin mi platea hendrerit
          viverra lorem. Dictum curabitur quam urna urna sollicitudin commodo
          vel fusce.
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
