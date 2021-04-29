import React from "react";
import { ImageGallery } from "../../../index";
import productImages from "../../../../fixtures/productImages.json";
import classes from "./ProductGallery.module.scss";

function ProductGallery({ image }) {
  const imageIdx = productImages.findIndex((el) => el.image === image);
  const updatedImages = [...productImages];
  updatedImages.splice(imageIdx, 1);
  updatedImages.unshift({ id: Math.random(), image });

  console.log(updatedImages);
  const renderLeftNav = (onClick, disabled) => {
    return (
      <button
        className={`${classes.Btn} ${classes.Prev || ""}`}
        disabled={disabled}
        onClick={onClick}
      >
        <i className="fas fa-arrow-left"></i>
      </button>
    );
  };
  const renderRightNav = (onClick, disabled) => {
    return (
      <button
        className={`${classes.Btn} ${classes.Next}`}
        disabled={disabled}
        onClick={onClick}
      >
        <i className="fas fa-arrow-right"></i>
      </button>
    );
  };
  return (
    <ImageGallery
      items={updatedImages}
      showPlayButton={false}
      originalClass={classes.Original}
      thumbnailClass={classes.Thumbnail}
      thumbnailPosition="right"
      showFullscreenButton={false}
      renderLeftNav={renderLeftNav}
      renderRightNav={renderRightNav}
      additionalClass={classes.Container}
    />
  );
}

export default ProductGallery;
