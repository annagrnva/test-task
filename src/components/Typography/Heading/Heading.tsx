import styles from "./style.module.scss";

type Props = {
    children: React.ReactNode;
    type: "h1MediumUppercase" | "h2MediumUppercase";
}

export const Heading = ({ children, type }: Props) => {
    const textClassName = styles[type];
    return <div className={textClassName}>{children}</div>
}