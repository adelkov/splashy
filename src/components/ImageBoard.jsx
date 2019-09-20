import React from "react";
import {
  Favo,
  ImageCard,
  Image,
  Row,
  Column
} from "../design-system/primitives";
import { divideImagesToColumns } from "../utils/utilities";

function ImageBoard({ images, makeFavorite }) {
  if (!images) {
    return <div>No images to show! </div>;
  }

  return (
    <Row>
      {divideImagesToColumns(images).map((col, idx) => (
        <Column key={col + idx}>
          {images &&
            col.map((image, idx) => (
              <ImageCard
                onClick={() => makeFavorite(image.url)}
                key={image + idx}
              >
                <Image src={image.url} alt={image.url} />
                <Favo>{image.isFavorite ? "Favorite!" : "Make Favorite!"}</Favo>
              </ImageCard>
            ))}
        </Column>
      ))}
    </Row>
  );
}

export default ImageBoard;
