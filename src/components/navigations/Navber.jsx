import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Navber.module.css"
import NavL_close from "./left_nav/navl_close/NavL_close";
import NavL_open from "./left_nav/navl_open/NavL_open";
import NavU from "./upper_nav/NavU";
import { useState } from "react";



function Navber({children}) {

  const [leftPanel, setleftPanel] = useState(false);

  const open_close_leftPanel = () => {
    setleftPanel(!leftPanel)
  }


  return (
    <>
      {" "}
      <div className={styles.body}>
        <NavU open_close_leftPanel={open_close_leftPanel} />
        <div className={styles.content}>
          {leftPanel ? <NavL_open /> : <NavL_close /> }
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
              overflow: "hidden",
            }}
          >
            {children}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navber;
