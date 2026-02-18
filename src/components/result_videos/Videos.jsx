import { Card } from "../cards/Card";
import styles from "./Videos.module.css"

const Videos = () => {

    const count=[1,2,3,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]

    return (
        <>  <div className={styles.main_body}>
                {count.map((item)=>(
                    <Card key={item}/>
                ))}
            </div>
        </>
    );
}

export default Videos;