import styles from "./Filter.module.css"

const Filter = () => {
  const filters = [
    "All",
    "Music",
    "Art",
    "Gaming",
    "Coding",
    "Bike",
    "Cars",
    "Electronics",
    "Laptop",
    "Mobile",
    "Factory",
    "Dancing",
    "Tech",
  ];

  return (
    <>
      <nav className={styles.suggestion}>
        <ul>
          {filters.map((items) => (
            <li key={items}>
              <button type="button" className="btn btn-outline-light">
                {items}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Filter;
