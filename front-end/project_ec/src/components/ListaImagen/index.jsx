import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

const ListaImagen = () => {
  return (
    <ImageList sx={{ display: "flex", marginTop: "5rem" }}>
      <ImageListItem sx={{ width: "40%", height: 100 }}>
        <img
          src={`https://pe-soapros-demos.s3.amazonaws.com/petshop/banner1.jpg`}
          srcSet={``}
          loading="lazy"
        />
      </ImageListItem>
      <ImageListItem sx={{ width: "60%", height: 100 }}>
        <img
          src={`https://pe-soapros-demos.s3.amazonaws.com/petshop/banner2.png`}
          srcSet={``}
          loading="lazy"
        />
      </ImageListItem>
    </ImageList>
  );
};

export default ListaImagen;
