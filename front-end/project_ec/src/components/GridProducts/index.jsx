import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

function GridProducts(props) {
  const { list } = props;

  const { cart, addCart, removeCart } = useContext(CartContext);

  function handleSutm() {}
  return (
    <>
      <Grid sx={{ marginTop: "20px" }} container spacing={4}>
        {list.length > 0 &&
          list.map((product, index) => (
            <Grid item xs={12} sm={6} md={6} lg={4} key={index}>
              <Card sx={{ maxWidth: 600 }}>
                <CardMedia
                  component="img"
                  height="250"
                  image={product.url_producto}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    textAlign="center"
                  >
                    {product.nombre_producto}
                  </Typography>
                  <Typography>
                    {product.descripcion_producto.slice(0, 90)}...
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="h4"
                    component="div"
                    textAlign="right"
                    marginTop="25px"
                  >
                    S/ {product.precio_producto}
                  </Typography>
                </CardContent>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    marginBottom: "20px",
                    padding: "20px",
                  }}
                >
                  <TextField
                    sx={{ margin: "0 10px" }}
                    variant="outlined"
                    type="number"
                    minHeight="15"
                    value="1"
                  ></TextField>
                  {/* <Box>
                    <CardActions>
                      <Button
                        variant="contained"
                        sx={{ minWidth: "10px", backgroundColor: "#F25253" }}
                      >
                        +
                      </Button>
                    </CardActions>
                    <CardActions>
                      <Button
                        variant="contained"
                        sx={{ minWidth: "10px", backgroundColor: "#F25253" }}
                      >
                        -
                      </Button>
                    </CardActions>
                  </Box> */}
                  <>
                    {cart.find((item) => item.id === product.id) ===
                    undefined ? (
                      <Button
                        variant="contained"
                        fullWidth
                        sx={{ height: "50px" }}
                        onClick={() => addCart(product)}
                      >
                        Agregar
                      </Button>
                    ) : (
                      <Button
                        variant="contained"
                        fullWidth
                        sx={{ height: "50px" }}
                        onClick={() => removeCart(product.id)}
                        color="error"
                      >
                        Quitar
                      </Button>
                    )}
                  </>
                </Box>
              </Card>
            </Grid>
          ))}
      </Grid>
    </>
  );
}

export default GridProducts;
