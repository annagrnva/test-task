import styles from "./style.module.scss";
import logo from "./svg/logo-white-1440.svg"
import icon from "./svg/light-icon.svg"

type Props = {
    children: React.ReactNode;
}

export const Header = ({ children }: Props) => {
    return (
        <header className={styles.flexbox}>
            {children}
            <img src={logo} alt="logo" />

            <div className={styles.themeButton}>
                <img src={icon} alt="icon" />
            </div>
        </header>
    )
}
