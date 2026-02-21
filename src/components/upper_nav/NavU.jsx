import styles from "./NavU.module.css";
import { FaAlignJustify } from "react-icons/fa";
import { TbBrandYoutubeFilled } from "react-icons/tb";
import { FaSearch } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { IoNotificationsOutline } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";
import Search_history from "../search_history/Search_history";
import { useState } from "react";

const NavU = () => {

  let [focused, setFocused] = useState(false);

  const handleOnChange = (e) => {
    setFocused(!focused)
  }

  return (
    <>
      <nav className="navbar" id={styles.uppar_nav}>
        <div className={styles.container_nav}>
          <div className={styles.left_nav_div}>
            <FaAlignJustify id={styles.nav_justify} />
            <div>
              <TbBrandYoutubeFilled id={styles.nav_logo} />
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

          <div id={styles.right_nav_div}>
            <button type="button" className="btn btn-outline-light">
              <FaPlus />
              &nbsp; create
            </button>
            <IoNotificationsOutline className={styles.notification_button} />
            <VscAccount className={styles.notification_button} />
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavU;
