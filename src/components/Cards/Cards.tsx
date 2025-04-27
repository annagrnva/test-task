import styles from "./style.module.scss";
import { Caption } from "../Typography";


type Props = {
    children: React.ReactNode;
    image: string;
    name: string;
    date: string;
}

export const Cards = ({ image, name, date}: Props) => {
    return (
        <>
            <div className={styles.card}>
                <img
                    src={image}
                    alt={name}
                   datatype={date}
                    className={styles.cardImage}
                />
                <div className={styles.lable}>
                    <div className={styles.cardTitle}>{name}</div>
                   <Caption type="captionBoldUppercase12">{date}</Caption>
                   {/* className={styles.cardDate} */}
                    
                </div>
            </div>
        </>
    )
}