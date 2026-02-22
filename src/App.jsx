import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Filter from "./components/filter_buttons/Filter";
import Videos from "./components/result_videos/Videos";
import NavL_close from "./components/left_nav/navl_close/NavL_close";
import NavL_open from "./components/left_nav/navl_open/NavL_open";
import NavU from "./components/upper_nav/NavU";
import { useState } from "react";



function App() {

  const [leftPanel, setleftPanel] = useState(false);

  const open_close_leftPanel = () => {
    setleftPanel(!leftPanel)
  }


  return (
    <>
      {" "}
      <div id="body">
        <NavU open_close_leftPanel={open_close_leftPanel} />
        <div className="content">
          {leftPanel ? <NavL_open /> : <NavL_close /> }
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
              overflow: "hidden",
            }}
          >
            <Filter />
            <Videos />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
