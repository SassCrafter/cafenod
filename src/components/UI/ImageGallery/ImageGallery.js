import React from "react";
import Gallery from "react-image-gallery";
import "react-image-gallery/styles/scss/image-gallery.scss";

function ImageGallery({
  items,
  originalClass,
  thumbnailClass,
  className,
  ...restProps
}) {
  const images = items.map((item) => ({
    id: item.id,
    original: item.image,
    thumbnail: item.image,
    height: "60",
    width: 60,
    originalClass,
    thumbnailClass,
  }));
  return <Gallery items={images} {...restProps} />;
}

export default ImageGallery;
