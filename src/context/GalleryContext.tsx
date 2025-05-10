import axios from "axios";
import { useState, createContext, useContext } from "react";
import { PaintType } from "../types";
import { REQUEST_URLS } from "../constants";

export const GalleryContext = createContext();

export const GalleryProvider = () => {
  const [images, setImages] = useState<PaintType[]>([]);

  const updateImages = () => {
    axios
      .get(`${REQUEST_URLS.PAINTINGS}?_page=1&_limit=6 `)
      .then((response) => {
        setImages(response.data);
      });
  };

  return (
    <GalleryContext.Provider
      value={{ images, updateImages }}
    ></GalleryContext.Provider>
  );
};
