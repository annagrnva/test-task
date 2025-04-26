import styles from "./style.module.scss";
type Props = {
    children: React.ReactNode;
    images: string[];
}

export const Gallery = ({ images, children }: Props) => {

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
        </div >
    )
}