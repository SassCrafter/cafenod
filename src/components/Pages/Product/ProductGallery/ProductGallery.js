import React from "react";
import { ImageGallery } from "../../../index";
import productImages from "../../../../fixtures/productImages.json";
import classes from "./ProductGallery.module.scss";

function ProductGallery() {
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
      items={productImages}
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
