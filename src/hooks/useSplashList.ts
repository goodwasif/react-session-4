import { useState } from "react";
import axios from "axios";
import { SEARCH_LIST_API_URL, SPLASH_LIST_API_URL } from "config";

const useSplashList = () => {
  const [imageList, setImageList] = useState([]);

  //function to get splash list
  const getImageList = () => {
    axios
      .get(SPLASH_LIST_API_URL)
      .then((res) => {
        console.log("res => ", res);
        setImageList(res.data);
      })
      .catch((e) => console.log(e));
  };

//function to search from list splash list
  const handleSearch = (searchString: string) => {
    axios
      .get(`${SEARCH_LIST_API_URL}${searchString}`)
      .then((res) => {
        console.log("res => ", res);
        setImageList(res.data.results);
      })
      .catch((e) => console.log(e));
  };

  return { imageList, getImageList, handleSearch };
};
export default useSplashList;
