import styles from "./style.module.scss";
import logo from "./svg/logo-white-1440.svg"

type Props = {
    children: React.ReactNode;
}

export const Header = ({ children }: Props) => {

    return (
        <header>
            {children}
            <img src={logo} alt="logo" />
        </header>
    )
}
