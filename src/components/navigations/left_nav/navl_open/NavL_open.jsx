import styles from "./NavL_open.module.css";
import { IoIosHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import Section from "./Section";
import { FaHistory } from "react-icons/fa";
import { MdOutlinePlaylistPlay } from "react-icons/md";
import { MdOutlineWatchLater } from "react-icons/md";
import { SlLike } from "react-icons/sl";
import { CiYoutube } from "react-icons/ci";
import { PiDownloadSimpleBold } from "react-icons/pi";




const NavL_open = () => {

  const subscriptions_list = {
    "skill bangla" : "./public/demo.jpg",
    "code with herry" : "./public/demo.jpg",
    "I am ready to do it but i dont have mood" : "./public/demo.jpg",
    "code with me" : "./public/demo.jpg",
    "wscubetech" : "./public/demo.jpg",
    "technical guruji" : "./public/demo.jpg",
  };

  const You_list = {
    "history" : <FaHistory className={styles.shape}/>, 
    "playlist" : <MdOutlinePlaylistPlay className={styles.shape}/> ,
    "watch later" : <MdOutlineWatchLater className={styles.shape}/>,
    "liked videos" : <SlLike className={styles.shape}/>,
    "your videos" : <CiYoutube className={styles.shape} />,
    "Downloads" : <PiDownloadSimpleBold className={styles.shape}/>,
   }

  return (
    <>
      <nav className={styles.left_nav}>
        <ul className={styles.nav_open_ul}>
          <li>
            <button className="btn">
              <IoIosHome className={styles.shape} />
              <p>home</p>
            </button>
          </li>
          <li>
            <button className="btn">
              <SiYoutubeshorts className={styles.shape} />
              <p>shorts</p>
            </button>
          </li>
          <hr />
          <li>
            <Section
              list={subscriptions_list}
              sectionName="Subscriptions"
              asButton="true"
              showMore="true"
            />
          </li>

          <hr />

          <li>
            <Section
              list={You_list}
              sectionName="You"
              asButton="true"
              showMore="true"

            />
          </li>

          <hr />

          <li>
            <Section
              list={subscriptions_list}
              sectionName="Subscriptions"
            />
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavL_open;
