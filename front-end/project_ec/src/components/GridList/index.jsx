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

function GridList(props) {
  const { list } = props;
  return (
    <>
      <Grid container spacing={4}>
        {list.length > 0 &&
          list.map((product, index) => (
            <Grid item xs={12} sm={12} md={12} lg={12} key={index}>
              <Card sx={{ maxWidth: 1000, margin: "20px 0" }}>
                <Box sx={{ display: "flex" }}>
                  <Box sx={{ width: "400px" }}>
                    <CardMedia
                      component="img"
                      height="250"
                      sx={{ width: "100%" }}
                      image={product.url_producto}
                    />
                  </Box>
                  <Box>
                    <CardContent>
                      <Typography gutterBottom variant="h3" component="div">
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
                        marginTop="25px"
                      >
                        S/ {product.precio_producto}
                      </Typography>
                    </CardContent>
                    <Box
                      sx={{
                        margin: "20px",
                      }}
                    >
                      <Button variant="contained" size="large">
                        Leer mas
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Card>
            </Grid>
          ))}
      </Grid>
    </>
  );
}

export default GridList;
