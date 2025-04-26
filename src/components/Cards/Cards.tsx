import styles from "./style.module.scss";


type Props = {
    children: React.ReactNode;
    names: string[];
    dates: string[];
}

export const Cards = ({ children, names, dates }: Props) => {
    return (
        <>
            <div className={styles.position}>
                <div className={styles.cardsContainer}>
                    {children}
                    {names.map((name, index) => (

                        <div
                            className={styles.cardsContainer}
                            title={name}
                            key={index}>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}