import styles from "./style.module.scss";

type Props = {
    children: React.ReactNode;
    type: "captionBoldUppercase12" | "captionBoldUppercase8"
}

export const Caption = ({ children, type }: Props) => {
    const textClassName = styles[type];
    return <div className={textClassName}>{children}</div>
}