import { Button, Divider, Paper, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import GridProducts from "../GridProducts";
import { getProducts } from "../../services";
import GridList from "../GridList";
import { BsFillGridFill, BsList } from "react-icons/bs";
import { Box } from "@mui/system";

const ProductList = () => {
  const { user } = useContext(AuthContext);
  const [products, setProducts] = useState([]);

  let grid_view = true;

  async function getProductos() {
    const response = await getProducts("listar");
    return setProducts(response.data);
  }

  const handleChangeEvento = (e) => {
    const value = e.target;
    console.log(value);
    if (e.value === "true") {
      grid_view = true;
    }
  };
  const handleChangeEvento2 = (e) => {
    const value = e.target;
    console.log(value);
    if (e.value === "false") {
      grid_view = false;
    }
  };

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;

  //   setValues({
  //     ...values,
  //     [name]: value,
  //   });
  // };

  useEffect(() => {
    getProductos();
  }, []);

  if (grid_view === true) {
    return (
      <>
        <Box sx={{ margin: "20px 0" }}>
          <Button
            value="true"
            className="sort-btn"
            onClick={handleChangeEvento}
          >
            <BsFillGridFill className="icon" />
          </Button>

          <Button value="false" className="active sort-btn">
            <BsList className="icon" />
          </Button>
        </Box>
        <GridProducts list={products} />
      </>
    );
  }
  if (grid_view === false) {
    return (
      <>
        <Box sx={{ margin: "20px 0" }}>
          <Button className="sort-btn" onClick={handleChangeEvento2}>
            <BsFillGridFill className="icon" />
          </Button>

          <Button className="active sort-btn">
            <BsList className="icon" />
          </Button>
        </Box>
        <GridList list={products} />
      </>
    );
  }
};

export default ProductList;
