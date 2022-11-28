import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Sliders } from "../../components";
import { get } from "../../services";
import { Box, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import "../../App.css";
import { Grid } from "@mui/material";

function Home() {
  const { user } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  const [refresh, setRefresh] = useState(0);
  function addRefresh() {
    setRefresh(refresh + 1);
  }
  async function getProducts() {
    const response = await get("products");
    if (response.ok) {
      setProducts(response.data);
    }
  }

  useEffect(() => {
    getProducts();
  }, [refresh]);

  return (
    // <>
    //   <Paper sx={{ padding: 3 }}>
    //     <Typography variant="h4" textAlign="center">
    //       Marketplace App
    //     </Typography>
    //   </Paper>
    //   <GridActions sx={{ margin: 3 }} user={user} addRefresh={addRefresh} />
    //   <Divider sx={{ margin: 3 }} />

    //   <GridProducts list={products} />
    // </>
    <>
      <Sliders />
      <Box>
        <Typography sx={{ marginTop: "5rem" }} variant="h3" textAlign="center">
          Nuevo Ingreso
        </Typography>
        <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={4}>
            <Card
              className="card"
              sx={{
                display: "flex",
                width: "350px",
                marginTop: "20px",
              }}
            >
              <CardMedia
                component="img"
                sx={{ width: 151 }}
                image="https://pe-soapros-demos.s3.amazonaws.com/petshop/pr01.jpg"
                alt=""
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "20px",
                }}
              >
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography component="div" variant="h4">
                    Pañal de Entramiento
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    Esta hecho a base de carbon, tiene una medida de: 60 x 60 cm
                    -
                    <br />
                    <br />
                    Diponible: 15 und
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Button size="medium" variant="text">
                    16 -15 -2022
                  </Button>
                  <Button size="medium" variant="outlined">
                    Comprar
                  </Button>
                </CardActions>
                <Box
                  sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
                ></Box>
              </Box>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card
              className="card"
              sx={{ display: "flex", width: "350px", marginTop: "20px" }}
            >
              <CardMedia
                component="img"
                sx={{ width: 151 }}
                image="https://pe-soapros-demos.s3.amazonaws.com/petshop/pr01.jpg"
                alt=""
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "20px",
                }}
              >
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography component="div" variant="h4">
                    Pañal de Entramiento
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    Esta hecho a base de carbon, tiene una medida de: 60 x 60 cm
                    -
                    <br />
                    <br />
                    Diponible: 15 und
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Button size="medium" variant="text">
                    16 -15 -2022
                  </Button>
                  <Button size="medium" variant="outlined">
                    Comprar
                  </Button>
                </CardActions>
                <Box
                  sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
                ></Box>
              </Box>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card
              className="card"
              sx={{ display: "flex", width: "350px", marginTop: "20px" }}
            >
              <CardMedia
                component="img"
                sx={{ width: 151 }}
                image="https://pe-soapros-demos.s3.amazonaws.com/petshop/pr01.jpg"
                alt=""
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "20px",
                }}
              >
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography component="div" variant="h4">
                    Pañal de Entramiento
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    Esta hecho a base de carbon, tiene una medida de: 60 x 60 cm
                    -
                    <br />
                    <br />
                    Diponible: 15 und
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Button size="medium" variant="text">
                    16 -15 -2022
                  </Button>
                  <Button size="medium" variant="outlined">
                    Comprar
                  </Button>
                </CardActions>
                <Box
                  sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
                ></Box>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Home;
