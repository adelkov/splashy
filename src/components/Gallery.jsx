import React, { useContext } from "react";
import ImageContext from "../providers/ImagesContext";
import styled from "styled-components";

function Gallery() {
  const Image = styled.img`
    object-fit: cover;
    transition: transform 400ms ease-out;
    &:hover {
      transform: scale(1.15);
      opacity: .5;
    }
    vertical-align: middle;
    width: 100%;
  `;

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

    $: click
  `;
  

  const Favo = styled.div`
    position: absolute;
    z-index: 100;
    bottom: 48%;
    left: 48%;

    opacity: 0;

    ${ImageCard}:hover & {
      color: white;
      opacity: 1;
    }
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

  const images = useContext(ImageContext);

  return (
    <Row>
      <Column>
        {images &&
          images.slice(0, 7).map((image, idx) => (
            <ImageCard
              onClick={() => console.log("like" + image)}
              key={image + idx}
            >
              <Image src={image} alt={image} />
              <Favo>Favo</Favo> 
            </ImageCard>
          ))}
      </Column>
      <Column>
        {images &&
          images.slice(8, 15).map((image, idx) => (
            <ImageCard key={image + idx}>
              <Image src={image} alt={image} />
            </ImageCard>
          ))}
      </Column>
      <Column>
        {images &&
          images.slice(16, 24).map((image, idx) => (
            <ImageCard key={image + idx}>
              <Image src={image} alt={image} />
            </ImageCard>
          ))}
      </Column>
    </Row>
  );
}

export default Gallery;
