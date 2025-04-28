import styles from "./style.module.scss";

type Props = {
  children: React.ReactNode;
  type: "h1MediumUppercase" | "h2MediumUppercase";
  className: string;
};

export const Heading = ({ children, type, className }: Props) => {
  const textClassName = styles[type];
  return <div className={`${textClassName} ${className}`}>{children}</div>;
};
