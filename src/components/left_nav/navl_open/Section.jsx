import styles from "./Section.module.css";

const Section = ({
  sectionName,
  asButton = false,
  list,
  showMore = false,
}) => {
  return (
    <>
      <div className={styles.nav_open_ul_section}>
        {" "}
        {asButton ? (
          <button className={`btn`}>
            <p>
              {sectionName} {`>`}
            </p>
          </button>
        ) : (

          <p className={styles.sectionName_astext}>
            {sectionName}
          </p>

        )}
        <ul className={styles.subscriptions}>
          {Object.keys(list).map((key) => (
            <li key={key}>
              {typeof list[key] === "string" ?
                <button className={styles.btn1}>
                  <img
                    src={list[key]}
                    alt=""
                    className={styles.nav_sub_profileImg_ico}
                  />
                  <p>{key}</p>
                </button> : <button className="btn">
                  {list[key]}
                  <p>{key}</p>
                </button>}
            </li>
          ))}
        </ul>
        {showMore && (
          <button className={`btn ${styles.set_alingment}`}>
            <p> show more </p>
          </button>
        )}
      </div>
    </>
  );
};

export default Section;
