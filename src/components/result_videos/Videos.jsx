import { Card } from "../cards/Card";
import styles from "./Videos.module.css";

const Videos = () => {
  const count = [
    {
      video_thumbnail: "dog5.jpg",
      channel_profile: "demo.jpg",
      video_title: "ami kichu jni na | ami bolbo na",
      channel_name: "chanel name",
      video_views: "1M",
    },
    {
      video_thumbnail: "dog5.jpg",
      channel_profile: "demo.jpg",
      video_title: "ami kichu jni na | ami bolbo na",
      channel_name: "chanel name",
      video_views: "1M",
    },
    {
      video_thumbnail: "dog5.jpg",
      channel_profile: "demo.jpg",
      video_title: "ami kichu jni na | ami bolbo na",
      channel_name: "chanel name",
      video_views: "1M",
    },
    {
      video_thumbnail: "dog5.jpg",
      channel_profile: "demo.jpg",
      video_title: "ami kichu jni na | ami bolbo na",
      channel_name: "chanel name",
      video_views: "1M",
    },
    {
      video_thumbnail: "dog5.jpg",
      channel_profile: "demo.jpg",
      video_title: "ami kichu jni na | ami bolbo na",
      channel_name: "chanel name",
      video_views: "1M",
    },
    {
      video_thumbnail: "dog5.jpg",
      channel_profile: "demo.jpg",
      video_title: "ami kichu jni na | ami bolbo na",
      channel_name: "chanel name",
      video_views: "1M",
    },
    {
      video_thumbnail: "dog5.jpg",
      channel_profile: "demo.jpg",
      video_title: "ami kichu jni na | ami bolbo na",
      channel_name: "chanel name",
      video_views: "1M",
    },
    {
      video_thumbnail: "dog5.jpg",
      channel_profile: "demo.jpg",
      video_title: "ami kichu jni na | ami bolbo na",
      channel_name: "chanel name",
      video_views: "1M",
    },
    {
      video_thumbnail: "dog5.jpg",
      channel_profile: "demo.jpg",
      video_title: "ami kichu jni na | ami bolbo na",
      channel_name: "chanel name",
      video_views: "1M",
    },
  ];

  return ( 
    <>
      {" "}
      <div className={styles.main_body}>
        {count.map((item) => (
          <Card
            key={item}
            video_thumbnail={item.video_thumbnail}
            channel_profile={item.channel_profile}
            video_title={item.video_title}
            channel_name={item.channel_name}
            video_views={item.video_views}
          />
        ))}
      </div>
    </>
  );
};

export default Videos;
