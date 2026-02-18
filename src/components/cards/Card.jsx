import styles from "./Card.module.css"

export const Card = () => {
  return (
    <>
      <div className={styles.video_card}>
        <img src="/dog5.jpg" alt="" className={styles.video_thumbnail} />
        <div className={styles.video_info}>
          <img src="/demo.jpg" alt="" className={styles.channel_profile} />
          <div className={styles.video_text}>
            <h6 className={styles.video_title}>Video Title somthing new | bolbo na</h6>
            <p className={styles.channel_name}>Channel Name</p>
            <p className={styles.video_views}>1M views • 1 day ago</p>
          </div>
        </div>
      </div>
    </>
  );
};
