import styles from "./NavU.module.css"

const NavU = () => {
    return (
        <>
        <nav className="navbar" id={styles.uppar_nav}>
              <div className={styles.container_nav}>
                <div className={styles.left_nav_div}>
                  <img src="/icons8-align-justify-96.png" alt="" id={styles.nav_justify} />
                  <div>
                    <img src="/icons8-youtube-96.png" alt="" id={styles.nav_logo} />
                    <p><b>Youtube</b></p>
                  </div>
                </div>

                <form className={`d-flex ${styles.search_nav}`} role="search">
                  <input
                    className="form-control"
                    name="search"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button className="btn btn-outline-light" type="submit">
                    Search
                  </button>
                </form>

                <div id={styles.right_nav_div}>
                  <button type="button" className="btn btn-outline-light">
                    create
                  </button>
                  <button type="button" className="btn btn-outline-light">
                    notification
                  </button>
                  <button type="button" className="btn btn-outline-light">
                    profile
                  </button>
                </div>
              </div>
            </nav>
        </>
    );
}

export default NavU;