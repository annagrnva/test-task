import styles from "./style.module.scss";
import { Cards } from "../Cards";
import image1 from "../../assets/images/image1.png";
import image2 from "../../assets/images/image2.png";
import image3 from "../../assets/images/image3.png";
import image4 from "../../assets/images/image4.png";
import image5 from "../../assets/images/image5.png";
import image6 from "../../assets/images/image6.png";

const images = [
  { src: image1, name: "CASCATE DI TIVOLI", date: 1761 },
  { src: image2, name: "PORTRAIT OF VINCENT VAN GOGH", date: 1886 },
  { src: image3, name: "UNEQUAL MARRIAGE", date: 1862 },
  { src: image4, name: "THE HAPPY VIOLINIST", date: 1624 },
  { src: image5, name: "THE ARCADIAN", date: 1834 },
  { src: image6, name: "GOLFO DI NAPOLI", date: 1845 },
];

export const Gallery = () => {
  return (
    <div className={styles.imageContainer}>
      {images.map((image, index) => (
        <Cards
          key={index}
          image={image.src}
          name={image.name}
          date={image.date}
        />
      ))}
    </div>
  );
};
