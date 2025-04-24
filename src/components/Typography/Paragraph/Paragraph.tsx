import styles from "./style.module.scss";

type Props = {
    children: React.ReactNode;
    type: "bigLight" | "bigMedium" | "baseLight" | "baseSmall";
}
export const Paragraph = ({ children, type }: Props) => {
    const textClassName = styles[type];
    return <div className={textClassName}>{children}</div>
}