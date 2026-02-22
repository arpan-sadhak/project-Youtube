import styles from "./NavL_close.module.css"
import { IoIosHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { CgProfile } from "react-icons/cg";



const NavL_close = () => {
    return (
        <>
          <nav id={styles.left_nav}>
            <ul id={styles.nav_close_ul}>
              <li>
                <button className="btn">
                  <IoIosHome className={styles.shape} />
                </button>
              </li>
              <li>
                <button className="btn">
                  <SiYoutubeshorts className={styles.shape}/>
                </button>
              </li>
              <li>
                <button className="btn">
                  <MdOutlineSubscriptions className={styles.shape}/>
                </button>
              </li>
              <li>
                <button className="btn">
                  <CgProfile className={styles.shape} />
                </button>
              </li>
            </ul>
          </nav>
        </>
    );
}

export default NavL_close;