import styles from "./NavL.module.css"

const NavL = () => {
    return (
        <>
          <nav id={styles.left_nav}>
            <ul id={styles.nav_close_ul}>
              <li>
                <button className="btn">
                  <img src="/house-regular-full.svg" alt="" />
                  <h6>home</h6>
                </button>
              </li>
              <li>
                <button className="btn">
                  <img src="/icons8-youtube-shorts-96.png" alt="" />
                  <h6>shorts</h6>
                </button>
              </li>
              <li>
                <button className="btn">
                  <img src="/icons8-video-playlist-96.png" alt="" />
                  <h6>subscriptions</h6>
                </button>
              </li>
              <li>
                <button className="btn">
                  <img src="/icons8-test-account-96.png" alt="" />
                  <h6>library</h6>
                </button>
              </li>
            </ul>
          </nav>
        </>
    );
}

export default NavL;