import { Flex } from "components/Box";
import React, { useEffect, useState } from "react";
import { Button } from "components/Button";
import { ImageGroup, Image } from "react-fullscreen-image";
import styled from "styled-components";
import useSplashList from "hooks/useSplashList";

const Home: React.FC = () => {
  const [searchString, setSearchString] = useState("");
  const [resetFlag, setResetFlag] = useState(0);

  //Custom hook for image list data and getList and search list
  const { imageList, getImageList, handleSearch } = useSplashList();

  useEffect(() => {
    getImageList();
    // eslint-disable-next-line
  }, [resetFlag ]);

  //Work when search value change and also for no empty value
  useEffect(() => {
    if (searchString) {
      handleSearch(searchString);
    }
    // eslint-disable-next-line
  }, [searchString]);

  return (
    <Flex flexDirection="column" mr={["8px", 0]}>
      <Flex width="100%" my={"20px"}>
        <Input
          type="text"
          value={searchString}
          onChange={(e) => {
            if (e.target.value) {
              setSearchString(e.target.value);
            } else {
              setResetFlag(Math.random());
              setSearchString("");
            }
          }}
        />
        <Flex marginLeft={"auto"}>
          <Button
            onClick={() => {
              setResetFlag(Math.random());
              setSearchString("");
            }}
          >
            Clear
          </Button>
        </Flex>
      </Flex>
      <ImageGroup>
        <ul className="images">
          {imageList.map((image) => (
            <li key={Math.random()}>
              <Image
                src={image.urls.regular}
                alt="nature"
                //this image component support Inline style to show image on Full-screen
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                }}
              />
            </li> 
          ))}
        </ul>
      </ImageGroup>
    </Flex>
  );
};

const Input = styled.input`
  padding: 0.4rem 0.8rem;
  border-radius: 40px;
  border: solid 1px #000;
  width: 100%;
  border-color: blue;
`;

export default Home;
