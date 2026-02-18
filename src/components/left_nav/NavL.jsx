import styles from "./NavL.module.css"
import { IoIosHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { CgProfile } from "react-icons/cg";



const NavL = () => {
    return (
        <>
          <nav id={styles.left_nav}>
            <ul id={styles.nav_close_ul}>
              <li>
                <button className="btn">
                  <IoIosHome className={styles.shape} />
                  <h6>home</h6>
                </button>
              </li>
              <li>
                <button className="btn">
                  <SiYoutubeshorts className={styles.shape}/>
                  <h6>shorts</h6>
                </button>
              </li>
              <li>
                <button className="btn">
                  <MdOutlineSubscriptions className={styles.shape}/>
                  <h6>subscriptions</h6>
                </button>
              </li>
              <li>
                <button className="btn">
                  <CgProfile className={styles.shape} />
                  <h6>library</h6>
                </button>
              </li>
            </ul>
          </nav>
        </>
    );
}

export default NavL;