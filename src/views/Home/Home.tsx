import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ImageGroup, Image } from "react-fullscreen-image";
import useSplashList from "hooks/useSplashList";
import { Flex } from "components/Box";
import { Button } from "components/Button";

const Home: React.FC = () => {
  const [searchString, setSearchString] = useState("");
  const [resetFlag, setResetFlag] = useState(0);

  //Custom hook for image list data and getList and search list
  const { imageList, getImageList, handleSearch } = useSplashList();

  useEffect(() => {
    getImageList();
  }, [getImageList, resetFlag]);

  //Work when search value change and also for no empty value
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (searchString) {
        handleSearch(searchString);
      }
    }, 500);

    return () => clearInterval(timeout);
  }, [handleSearch, searchString]);

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
