import styles from "./style.module.scss";

type Props = {
    children: React.ReactNode;
    type: "white" | "black" | "grey";
}

export const Secondary = ({ children, type }: Props) => {
    const textClassName = styles[type];
    return <div className={textClassName}>{children}</div>
}