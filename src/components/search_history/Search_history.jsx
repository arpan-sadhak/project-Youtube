import { LuHistory } from "react-icons/lu";
import styles from "./Search_history.module.css";

const Search_history = () => {
  const history_list = [
    "hindi songs",
    "cartoon",
    "movies",
    "avangers",
    "city mall",
    "hindi songs",
    "cartoon",
    "movies",
    "avangers",
    "city mall",
    "hindi songs",
    "cartoon",
    "movies",
    "avangers",
    "city mall",
    "hindi songs",
    "cartoon",
    "movies",
    "avangers",
    "city mall",
  ];

  return (
    <>
      <div className={styles.f}>
        <ul>
          {history_list.map((items,index)=>(
            <li key={index}>
            {" "}
            <LuHistory className={styles.history_icon}/>
            {items }
          </li>
          ))}
          
        </ul>
      </div>
    </>
  );
};

export default Search_history;
