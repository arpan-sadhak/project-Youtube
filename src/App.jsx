import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Filter from "./components/filter_buttons/Filter";
import Videos from "./components/result_videos/Videos";
import NavL from "./components/left_nav/NavL";
import NavU from "./components/upper_nav/NavU";

function App() {
  return (
    <>
      {" "}
      <div id="body">
        <NavU />

        <div className="content">
          <NavL />
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
