import styles from "./style.module.scss";
import { Cards } from "../Cards";

type Props = {
    // children: React.ReactNode;
    images: {src:string, name:string, date:string}[]
}

export const Gallery = ({ images }: Props) => {

    return (
        <div className={styles.imageContainer}>

            {images.map(( image, index ) => (

                < Cards
                    key={index}
                    image={image.src}
                    name={image.name}  
                    date={image.date}
                    />
            ))}
        </div >
    )
}