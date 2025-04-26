import styles from "./style.module.scss";
// import { Cards } from "../Cards";
type Props = {
    children: React.ReactNode;
    images: string[];
}

export const Gallery = ({ images, children }: Props) => {

    // const names = ["CASCATE DI TIVOLI"]
    return (
        <div className={styles.imageContainer}>
            {children}
            {images.map(( image, index ) => (

                < img
                    key={index}
                    src={image}
                    className={styles.image} 
                    />
            ))}
            {/* <Cards names={names}/> */}
        </div >
    )
}