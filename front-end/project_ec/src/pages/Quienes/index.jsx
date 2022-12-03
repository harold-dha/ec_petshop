import React from "react";
import { Footer } from "../../components";
import styled from "styled-components";

const Quienes = () => {
  return (
    <>
      <Wrapper>
        <div className="contenedor">
          <h2>¿Quienes Somos?</h2>
          <div className="mision">
            <h3>Mision</h3>
            <p>
              Todo lo que integramos en este proyecto amamos los animales , esta
              pagina fue creadaa para integrar sus necesidades creado productos
              unicos y modernoas para ellos y tu hogar
            </p>
          </div>
          <div className="vision">
            <h3>Vision</h3>
            <p>
              Tenemos la certeza que seremos reconocidos por nuestra calidad y
              la original en nuestros productos , que haran que sus mascotas
              podran disfrutarlo{" "}
            </p>
          </div>
          <div className="pasion">
            <h3>Pasión</h3>
            <p>
              La pasion por los animales es el motor de nuestro trabajo,somos
              entusiasta del mundo animal
            </p>
          </div>
        </div>
      </Wrapper>
      <Footer />
    </>
  );
};
const Wrapper = styled.section`
  .contenedor {
    margin: 2rem auto;
    padding: 15px;
  }
  .mision {
    margin: 20px 0;
    padding: 15px;
  }
  .vision {
    margin: 20px 0;
    padding: 15px;
  }
  .pasion {
    margin: 20px 0;
    padding: 15px;
  }
`;
export default Quienes;
