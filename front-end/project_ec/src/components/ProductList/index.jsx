import { Button } from "@mui/material";
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
  console.log("TRAEDATOS", grid_view);

  async function getProductos() {
    const response = await getProducts("listar");
    return setProducts(response.data);
  }

  const handleChangeEvento = (e) => {
    const value = e.target.value;
    console.log(typeof value);
    if (value === "true") {
      console.log("entro");
      grid_view = true;
    } else {
      console.log("no entro");
      grid_view = false;
    }
    console.log("grid", grid_view);
  };

  useEffect(() => {
    getProductos();
  }, []);

  // handleChangeEvento();
  if (grid_view === true) {
    console.log("verdadero", grid_view);
    return (
      <>
        {/* <Box sx={{ margin: "20px 0" }}>
          <Button
            value="true"
            className="sort-btn"
            onClick={handleChangeEvento}
          >
            <BsFillGridFill className="icon" />
          </Button>

          <Button
            value="false"
            className="active sort-btn"
            onClick={handleChangeEvento}
          >
            <BsList className="icon" />
          </Button>
        </Box> */}
        <GridProducts sx={{ marginTop: "20px" }} list={products} />
      </>
    );
  }
  return (
    <>
      {/* <Box sx={{ margin: "20px 0" }}>
        <Button className="sort-btn" onClick={handleChangeEvento} value="true">
          <BsFillGridFill className="icon" />
        </Button>

        <Button
          value="false"
          className="active sort-btn"
          onClick={handleChangeEvento}
        >
          <BsList className="icon" />
        </Button>
      </Box> */}
      <GridList list={products} />
    </>
  );
  // if (grid_view == false) {
  //   console.log("falso", grid_view);
  //   return (
  //     <>
  //       <Box sx={{ margin: "20px 0" }}>
  //         <Button
  //           className="sort-btn"
  //           onClick={handleChangeEvento}
  //           value="true"
  //         >
  //           <BsFillGridFill className="icon" />
  //         </Button>

  //         <Button
  //           value="false"
  //           className="active sort-btn"
  //           onClick={handleChangeEvento}
  //         >
  //           <BsList className="icon" />
  //         </Button>
  //       </Box>
  //       <GridList list={products} />
  //     </>
  //   );
  // }
};

export default ProductList;
