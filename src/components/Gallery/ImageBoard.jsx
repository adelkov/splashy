import React from "react";
import styled from "styled-components";

import { CenteredConainer, Heading } from "../../design-system/primitives";
import { divideImagesToColumns } from "../../utils/utilities";

function ImageBoard({ images, toggleFavorite }) {
  if (images.length === 0) {
    return (
      <CenteredConainer>
        <Heading color="text">No images to show!</Heading>
      </CenteredConainer>
    );
  }

  return (
    <Row>
      {divideImagesToColumns(images).map((col, idx) => (
        <Column key={col + idx}>
          {images &&
            col.map((image, idx) => (
              <ImageCard
                id={image.url}
                onClick={() => toggleFavorite(image.url)}
                key={image + idx}
              >
                <Image src={image.url} alt={image.url} />
                <Favo>
                  {image.isFavorite ? "Favorite!" : "Add to Favorites!"}
                </Favo>
              </ImageCard>
            ))}
        </Column>
      ))}
    </Row>
  );
}

export default ImageBoard;

export const ImageCard = styled.div`
  cursor: pointer;
  height: fit-content;
  margin-right: 6%;
  margin-bottom: 6%;
  box-shadow: 0.3rem 0.4rem 0.4rem rgba(0, 0, 0, 0.4);
  overflow: hidden;
  @media screen and (max-width: 600px) {
    margin-left: 6%;
  }
  position: relative;
`;

export const Favo = styled.div`
  font-family: "Londrina Shadow", cursive;
  font-size: 60px;
  position: absolute;
  opacity: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  ${ImageCard}:hover & {
    color: white;
    opacity: 1;
  }
`;

const Image = styled.img`
  object-fit: cover;
  transition: transform 400ms ease-out;
  vertical-align: middle;
  width: 100%;
`;

const Column = styled.div`
  flex: 33%;
  max-width: 33%;
  @media screen and (max-width: 600px) {
    flex: 100%;
    max-width: 100%;
  }
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-left: 1%;
  @media screen and (max-width: 600px) {
    padding-left: 0%;
  }
`;
