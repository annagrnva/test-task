import styles from "./style.module.scss";

type Props = {
  children: React.ReactNode;
  type: "captionBoldUppercase12" | "captionBoldUppercase8";
  className: string;
};

export const Caption = ({ children, type, className }: Props) => {
  const textTypeClassName = styles[type];
  return <div className={`${textTypeClassName} ${className}`}>{children}</div>;
};
