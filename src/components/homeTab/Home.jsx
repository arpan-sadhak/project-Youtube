import "bootstrap/dist/css/bootstrap.min.css";
import Navber from "../navigations/Navber";
import Filter from "../homeTab/filter_buttons/Filter";
import Videos from "../homeTab/result_videos/Videos";



function Home() {


  return (
    <>
      <Navber>
        <Filter />
        <Videos />
      </ Navber>
    </>
  );
}

export default Home;
