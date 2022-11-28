import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Link } from "react-router-dom";
import { useState } from "react";
import { post } from "../../services";
import Swal from "sweetalert2";

const SignUp = () => {
  const [values, setValues] = useState({
    name: "",
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await post("users/signup", values);
    if (data.ok) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Usuario Registrado",
        showConfirmButton: false,
      });
      setValues({
        name: "",
        email: "",
        password: "",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: data.message.detail,
      });
    }
    console.log(data);
  };

  return (
    <Box
      display="flex"
      height="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <Paper sx={{ width: 400 }}>
        <Box p={3} component="form" onSubmit={handleSubmit} method="post">
          <Typography textAlign="center" variant="h4">
            Sing Up
          </Typography>
          <Box>
            <Button
              component={Link}
              to="/login"
              sx={{ textTransform: "capitalize", marginTop: 5 }}
            >
              <ArrowBackIosIcon />
              Volver
            </Button>
          </Box>
          <Box my={3}>
            <TextField
              name="name"
              value={values.name}
              onChange={handleInputChange}
              label="Nombre"
              fullWidth
              required
            />
          </Box>
          <Box my={3}>
            <TextField
              name="email"
              value={values.email}
              onChange={handleInputChange}
              type="email"
              label="Correo"
              fullWidth
              required
            />
          </Box>
          <Box my={3}>
            <TextField
              name="password"
              value={values.password}
              onChange={handleInputChange}
              type="password"
              label="Password"
              fullWidth
              required
            />
          </Box>
          <Box my={3}>
            <Button type="submit" fullWidth variant="outlined">
              Registrarte
            </Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default SignUp;
