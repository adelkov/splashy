import React, { useContext } from "react";
import ImageContext from "../providers/ImagesContext";
import styled from "styled-components";

function Gallery() {
  const ImageCard = styled.div`
    cursor: pointer;
    height: fit-content;
    margin-right: 4%;
    margin-bottom: 4%;
    box-shadow: 0.3rem 0.4rem 0.4rem rgba(0, 0, 0, 0.4);
    overflow: hidden;
    @media screen and (max-width: 800px) {
      margin-left: 4%;
    }
    position: relative;
  `;

  const Favo = styled.div`
    font-family: "Londrina Shadow", cursive;
    font-size: 60px;
    position: absolute;
    z-index: 100;
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
    @media screen and (max-width: 800px) {
      flex: 100%;
      max-width: 100%;
    }
  `;

  const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding-left: 1%;
    @media screen and (max-width: 800px) {
      padding-left: 0%;
    }
  `;

  const { images, makeFavorite } = useContext(ImageContext);
  return (
    <Row>
      <Column>
        {images &&
          images.slice(0, 7).map((image, idx) => (
            <ImageCard
              onClick={() => !image.isFavorite && makeFavorite(image.url)}
              key={image + idx}
            >
              <Image src={image.url} alt={image.url} />
              <Favo>
                {image.isFavorite ? "Your Favorite!" : "Make Favorite!"}
              </Favo>
            </ImageCard>
          ))}
      </Column>
      <Column>
        {images &&
          images.slice(8, 15).map((image, idx) => (
            <ImageCard
              onClick={() => !image.isFavorite && makeFavorite(image.url)}
              key={image + idx}
            >
              <Image src={image.url} alt={image.url} />
              <Favo>
                {image.isFavorite ? "Your Favorite!" : "Make Favorite!"}
              </Favo>
            </ImageCard>
          ))}
      </Column>
      <Column>
        {images &&
          images.slice(16, 24).map((image, idx) => (
            <ImageCard
              onClick={() => !image.isFavorite && makeFavorite(image.url)}
              key={image.url + idx}
            >
              <Image src={image.url} alt={image} />
              <Favo>
                {image.isFavorite ? "Your Favorite!" : "Make Favorite!"}
              </Favo>
            </ImageCard>
          ))}
      </Column>
    </Row>
  );
}

export default Gallery;
