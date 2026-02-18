import styles from "./Card.module.css"

export const Card = ({video_thumbnail ,channel_profile, video_title, channel_name, video_views}) => {
  return (
    <>
      <div className={styles.video_card}>
          <img src={`/${video_thumbnail}`} alt="" className={styles.video_thumbnail} />
        <div className={styles.video_info}>
          <img src={`/${channel_profile}`} alt="" className={styles.channel_profile} />
          <div className={styles.video_text}>
            <h6 className={styles.video_title}>{video_title}</h6>
            <p className={styles.channel_name}>{channel_name}</p>
            <p className={styles.video_views}>{video_views} views • 1 day ago</p>
          </div>
        </div>
      </div>
    </>
  );
};
