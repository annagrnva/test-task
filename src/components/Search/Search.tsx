import styles from "./style.module.scss";
import icon from "./img/icon-1.png";

type Props = {
    children: React.ReactNode;
    data: string;
};

export const Search = () => {


    return (
        <>
            <div className={styles.searchContainer}>
                <input
                    className={styles.formSearch}
                    type="text"
                    placeholder="Painting title"
                // value={} 
                />
                <img className={styles.icon} src={icon} alt="magnifier" />
            </div>
        </>
    )
}