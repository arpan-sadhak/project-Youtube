import styles from "./NavU.module.css";
import { FaAlignJustify } from "react-icons/fa";
import { TbBrandYoutubeFilled } from "react-icons/tb";
import { FaSearch } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { IoNotificationsOutline } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";
import Search_history from "../search_history/Search_history";
import { useState } from "react";

const NavU = ({ open_close_leftPanel }) => {

  const [focused, setFocused] = useState(false);

  const handleOnChange = (e) => {
    setFocused(!focused)
  }

  return (
    <>
      <nav className={`navbar ${styles.uppar_nav}`}>
        <div className={styles.container_nav}>
          <div className={styles.left_nav_div}>
            <button
              className={`btn ${styles.nav_justify}`}
              onClick={open_close_leftPanel}>
              <FaAlignJustify style={{width: "70%",height:"70%"}}/></button>
            <div>
              <TbBrandYoutubeFilled className={styles.nav_logo} />
              <p>
                <b>Youtube</b>
              </p>
            </div>
          </div>

          <span>
            <form className={`d-flex ${styles.search_nav}`} role="search">
              <input
                className="form-control"
                name="search"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onFocus={handleOnChange}
                onBlur={handleOnChange}
              />
              <button className="btn btn-outline-light" type="submit">
                <FaSearch />
              </button>
            </form>
            {focused && <Search_history />}
          </span>

          <div className={styles.right_nav_div}>
            <button type="button" className={`btn btn-outline-light ${styles.effect}`}>
              <FaPlus />
              &nbsp; create
            </button>
            <IoNotificationsOutline className={`${styles.notification_button} ${styles.effect}`} />
            <VscAccount className={`${styles.notification_button} ${styles.effect}`} />
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavU;
