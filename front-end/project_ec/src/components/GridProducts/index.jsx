import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Paper,
  Typography,
} from "@mui/material";

function GridProducts(props) {
  const { list } = props;
  return (
    <>
      <Grid container spacing={4}>
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
                    Atractivas camas y con gran espacio para que tu mascota
                    disfrute sus noches
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
                  }}
                >
                  <Typography>1</Typography>
                  <Box>
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
                  </Box>
                  <Box>
                    <Button variant="contained" fullWidth>
                      Agregar
                    </Button>
                  </Box>
                </Box>
              </Card>
            </Grid>
          ))}
      </Grid>
    </>
  );
}

export default GridProducts;
