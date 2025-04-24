import styles from "./style.module.scss";

type Props = {
    children: React.ReactNode;
    type: "red" | "gold";
}

export const Accent = ({ children, type }: Props) => {
    const textClassName = styles[type];
    return <div className={textClassName}>{children}</div>
}