import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import {
  Comentarios,
  Ingreso,
  ListaImagen,
  Sliders,
  Marcas,
  Footer,
} from "../../components";
import { get } from "../../services";

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
      <Ingreso />
      <ListaImagen />
      <Comentarios />
      <Marcas />
      <Footer />
    </>
  );
}

export default Home;
