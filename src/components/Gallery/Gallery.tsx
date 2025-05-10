import styles from "./style.module.scss";
import { Cards } from "../Cards";
import axios from "axios";
import { useEffect, useState, createContext, useContext } from "react";
import { BASE_BACKEND_URL, REQUEST_URLS } from "../../constants";
import { Loader } from "../Loader";
import { GalleryContext } from "../../context/GalleryContext";

export const Gallery = () => {
  const { images, updateImages } = useContext(GalleryContext);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    updateImages();
    // <GalleryContext></GalleryContext>;
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className={styles.imageContainer}>
      {images.map((image) => (
        <Cards
          key={image.id}
          image={`${BASE_BACKEND_URL}${image.imageUrl}`}
          title={image.name}
          date={image.created}
          hoverName={"image.hoverName"}
          hoverDate={"image.hoverDate"}
        />
      ))}
    </div>
  );
};
