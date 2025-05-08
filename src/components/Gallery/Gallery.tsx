import styles from "./style.module.scss";
import { Cards } from "../Cards";
import axios from "axios";
import { useEffect, useState } from "react";
import { PaintType } from "../../types";
import { BASE_BACKEND_URL, REQUEST_URLS } from "../../constants";
import { Loader } from "../Loader";

export const Gallery = () => {
  // const [images, setImages] = useState<PaintType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    // axios
    //   .get(`${REQUEST_URLS.PAINTINGS}?_page=1&_limit=6 `)
    //   .then((response) => {
    //     setImages(response.data);
    setIsLoading(false);
    // });
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
