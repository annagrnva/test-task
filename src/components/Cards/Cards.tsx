import styles from "./style.module.scss";


type Props = {
    children: React.ReactNode;
    image: string;
    name: string;
    // date: string;
}

export const Cards = ({ image, name, }: Props) => {
    return (
        <>
            <div className={styles.card}>
                <img
                    src={image}
                    alt={name}
                    className={styles.cardImage}
                />
                <div className={styles.lable}>
                    <div className={styles.cardTitle}>{name}</div>
                </div>
            </div>
        </>
    )
}