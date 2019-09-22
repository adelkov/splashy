import React from "react";

import {
  Column,
  Favo,
  Heading,
  Image,
  ImageCard,
  Row,
  CenteredConainer
} from "../design-system/primitives";
import { divideImagesToColumns } from "../utils/utilities";

function ImageBoard({ images, toggleFavorite }) {
  if (images.length === 0) {
    return (
      <CenteredConainer>
        <Heading color='text'>No images to show! </Heading>
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
                onClick={() => toggleFavorite(image.url)}
                key={image + idx}
              >
                <Image src={image.url} alt={image.url} />
                <Favo>{image.isFavorite ? "Favorite!" : "Add to Favorites!"}</Favo>
              </ImageCard>
            ))}
        </Column>
      ))}
    </Row>
  );
}

export default ImageBoard;
