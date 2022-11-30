import { Typography, Box } from "@mui/material";
import React from "react";

const Marcas = () => {
  return (
    <>
      <Box>
        <Typography textAlign="center" marginY="5rem" variant="h3">
          Marcas
        </Typography>
        <Box display="grid" gridTemplateColumns="repeat(6, 1fr)" gap={2}>
          <Box
            gridColumn="span 2"
            sx={{ textAlign: "center", padding: "15px" }}
          >
            <img
              src="https://pe-soapros-demos.s3.amazonaws.com/petshop/marca1.jpg"
              alt=""
              width="100px"
              height="100px"
            />
            <Typography textAlign="center" variant="h6">
              Proplan
            </Typography>
          </Box>
          <Box
            gridColumn="span 2"
            sx={{ textAlign: "center", padding: "15px" }}
          >
            <img
              src="https://pe-soapros-demos.s3.amazonaws.com/petshop/marca2.jpg"
              alt=""
              width="100px"
              height="100px"
            />
            <Typography textAlign="center" variant="h6">
              Canbo
            </Typography>
          </Box>
          <Box
            gridColumn="span 2"
            sx={{ textAlign: "center", padding: "15px" }}
          >
            <img
              src="https://pe-soapros-demos.s3.amazonaws.com/petshop/marca3.jpg"
              alt=""
              width="100px"
            />
            <Typography textAlign="center" variant="h6">
              Barker
            </Typography>
          </Box>
          <Box
            gridColumn="span 2"
            sx={{ textAlign: "center", padding: "15px" }}
          >
            <img
              src="https://pe-soapros-demos.s3.amazonaws.com/petshop/marca4.jpg"
              alt=""
              width="100px"
              height="100px"
            />
            <Typography textAlign="center" variant="h6">
              Hill's
            </Typography>
          </Box>
          <Box
            gridColumn="span 2"
            sx={{ textAlign: "center", padding: "15px" }}
          >
            <img
              src="https://pe-soapros-demos.s3.amazonaws.com/petshop/marca5.jpg"
              alt=""
              width="100px"
              height="100px"
            />
            <Typography textAlign="center" variant="h6">
              Dog Chow
            </Typography>
          </Box>
          <Box
            gridColumn="span 2"
            sx={{ textAlign: "center", padding: "15px" }}
          >
            <img
              src="https://pe-soapros-demos.s3.amazonaws.com/petshop/marca6.jpg"
              alt=""
              width="100px"
            />
            <Typography textAlign="center" variant="h6">
              Ricocan
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Marcas;
