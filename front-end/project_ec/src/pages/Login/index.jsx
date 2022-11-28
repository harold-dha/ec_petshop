import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import {
  Box,
  Button,
  Paper,
  TextField,
  Typography,
  Checkbox,
} from "@mui/material";
import { Link, Navigate } from "react-router-dom";
import petshop from "../../assets/img/petshop.jpg";
import { post } from "../../services";
import Swal from "sweetalert2";

const Login = () => {
  const { authLogin, isAuth } = useContext(AuthContext);

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  if (isAuth()) return <Navigate to="/" />;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await post("users/login", values);

    if (data.ok) {
      authLogin(data.data);
      Swal.fire({
        icon: "success",
        text: "Usuario correcto",
      });
      setValues({
        email: "",
        password: "",
      });
    } else {
      Swal.fire({
        icon: "error",
        text: data.message,
      });
    }
  };
  return (
    <Box
      display="flex"
      height="100vh"
      alignItems="center"
      justifyContent="center"
      backgroundColor="#C7CDF0"
    >
      <Box
        display="flex"
        width="1000px"
        height="500px"
        alignItems="center"
        justifyContent="center"
      >
        <Paper
          sx={{
            width: "50%",
            height: "100%",
          }}
        >
          <img src={petshop} height="90%" width="100%" />
        </Paper>
        <Paper
          sx={{
            width: "50%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            p={3}
            width="70%"
            component="form"
            method="post"
            onSubmit={handleSubmit}
          >
            <Typography textAlign="center" variant="h4">
              Login
            </Typography>
            <Box my={3}>
              <TextField
                sx={{ fontSize: "12px" }}
                fontSize="12px"
                type="email"
                label="E-mail"
                fullWidth
                name="email"
                value={values.email}
                onChange={handleInputChange}
              />
            </Box>
            <Box my={3}>
              <TextField
                sx={{ fontSize: "12px" }}
                type="password"
                label="Password"
                fullWidth
                name="password"
                value={values.password}
                onChange={handleInputChange}
              />
            </Box>
            <Box display="flex" alignItems="center">
              <Checkbox sx={{ padding: 0, marginRight: 1 }} />
              <Typography sx={{ fontSize: 12 }}>Recordar password </Typography>
            </Box>
            {/* <Box display="flex" justifyContent="end">
              <Link
                to="/recorpass"
                color="primary"
                sx={{ fontSize: 12, textDecoration: "none" }}
              >
                <Typography sx={{ textDecoration: "none" }}>
                  ¿Olvidaste tu contraseña?
                </Typography>
              </Link>
            </Box> */}
            <Box my={3}>
              <Button
                fullWidth
                variant="contained"
                sx={{ backgroundColor: "#3191CE" }}
                type="submit"
              >
                Ingresar
              </Button>
            </Box>
            <Box display="flex" justifyContent="center">
              <Typography sx={{ fontSize: 12 }}>
                ¿No tienes una cuenta?{" "}
                <Button
                  component={Link}
                  to="/sign-up"
                  sx={{ textTransform: "capitalize", fontSize: "12px" }}
                >
                  Registrate
                </Button>
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default Login;
