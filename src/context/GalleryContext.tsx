import axios from "axios";
import { useEffect, useState, createContext } from "react";
import { PaintType } from "../types";
import { BASE_BACKEND_URL, REQUEST_URLS } from "../constants";

const PaintingContext = createContext({
  images: [],
});

const GalleryContext = () => {
  const [images, setImages] = useState<PaintType[]>([]);

  axios.get(`${REQUEST_URLS.PAINTINGS}?_page=1&_limit=6 `).then((response) => {
    setImages(response.data);
  });
};

GalleryContext();
