import React from "react";
import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import { Button } from "../../styles/Button";
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";

const Footer = () => {
  return (
    <>
      <Wrapper>
        {/* footer section */}

        <footer>
          <div className="container grid grid-four-column">
            <div className="footer-about">
              <h3>Petshop</h3>
              <p>
                Delivery para mascotas. De todo para tu mascota: comida,
                antipulgas, arena. Compra Gran Plus, Simparica, Bravecto,
                Advance, Brit y más.{" "}
              </p>
              <h3 style={{ marginTop: "15px", fontWeight: "700" }}>Contacto</h3>
              <div style={{ display: "flex", alignItems: "center" }}>
                <div className="btn-wha">
                  <a
                    href="https://api.whatsapp.com/send?phone=51970793132&text=Quiero%20comprar%20un%20producto%20"
                    target="_blank"
                  >
                    <WhatsAppIcon
                      sx={{
                        color: "#fff",
                        fontSize: "20px",
                        marginRight: "10px",
                      }}
                    />
                  </a>
                  {/* <Link to={{ pathname: "https://herewecode.io/" }} target="_blank">Click to open HereWeCode (new tab)</Link> */}
                </div>
                <a
                  href="https://api.whatsapp.com/send?phone=51970793132&text=Quiero%20comprar%20un%20producto%20"
                  target="_blank"
                  style={{ color: "#fff" }}
                >
                  +51 970793132
                </a>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <a>
                  <EmailIcon
                    sx={{
                      color: "#fff",
                      fontSize: "20px",
                      marginRight: "10px",
                    }}
                  />
                </a>
                <a style={{ color: "#fff" }}>petshoptventas@gmail.com</a>
              </div>
              <h3 style={{ marginTop: "15px", fontWeight: "700" }}>
                Lugar de Recojo
              </h3>
              <div style={{ color: "#fff" }}>
                Av. Ventanilla N° 500 - ref: Costado de plaza vea
              </div>
            </div>
            <div className="footer-subscribe">
              <h3>TIENDA ONLINE PARA MASCOTAS</h3>
              <div style={{ marginBottom: "15px" }}>
                <a style={{ color: "#fff" }} href="">
                  Perro
                </a>
              </div>
              <div style={{ marginBottom: "15px" }}>
                <a style={{ color: "#fff", marginBottom: "5px" }} href="">
                  Gato
                </a>
              </div>
              <div style={{ marginBottom: "15px" }}>
                <a style={{ color: "#fff", marginBottom: "5px" }} href="">
                  Aves
                </a>
              </div>
              <div>
                <h3 style={{ marginTop: "20px" }}>PROMOCIONES</h3>
                <div>
                  <div style={{ marginBottom: "15px" }}>
                    <a style={{ color: "#fff", marginBottom: "5px" }} href="">
                      Promoción ALIMENTO
                    </a>
                  </div>
                  <div style={{ marginBottom: "15px" }}>
                    <a style={{ color: "#fff", marginBottom: "5px" }} href="">
                      Promoción ARENA
                    </a>
                  </div>
                  <div style={{ marginBottom: "15px" }}>
                    <a style={{ color: "#fff", marginBottom: "5px" }} href="">
                      Promoción VERANO
                    </a>
                  </div>
                  <div style={{ marginBottom: "15px" }}>
                    <a style={{ color: "#fff", marginBottom: "5px" }} href="">
                      Promoción NUEVO
                    </a>
                  </div>
                  <div style={{ marginBottom: "15px" }}>
                    <a style={{ color: "#fff", marginBottom: "5px" }} href="">
                      Promoción ANTIGUO
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-subscribe">
              <h3>INFORMACIÓN</h3>
              <div style={{ marginBottom: "15px" }}>
                <a style={{ color: "#fff", marginBottom: "5px" }} href="">
                  ¿Quiénes somos?
                </a>
              </div>
              <div>
                <h3>POLÍTICAS Y LEGAL</h3>
                <div style={{ marginBottom: "15px" }}>
                  <a style={{ color: "#fff", marginBottom: "5px" }} href="">
                    Política de Privaciidad
                  </a>
                </div>
                <div style={{ marginBottom: "15px" }}>
                  <a style={{ color: "#fff", marginBottom: "5px" }} href="">
                    Política de Delivery y Web
                  </a>
                </div>
                <div style={{ marginBottom: "15px" }}>
                  <a style={{ color: "#fff", marginBottom: "5px" }} href="">
                    Política de Cambio
                  </a>
                </div>
                <div style={{ marginBottom: "15px" }}>
                  <a style={{ color: "#fff", marginBottom: "5px" }} href="">
                    Política de Promociones
                  </a>
                </div>
                <div style={{ marginBottom: "15px" }}>
                  <a style={{ color: "#fff", marginBottom: "5px" }} href="">
                    Política de Cookies
                  </a>
                </div>
                <div style={{ marginBottom: "15px" }}>
                  <a style={{ color: "#fff", marginBottom: "5px" }} href="">
                    Terminos y Condiciones
                  </a>
                </div>
              </div>
            </div>
            <div className="footer-contact">
              <h3>REDES SOCIALES</h3>
              <div style={{ display: "flex" }}>
                <div
                  style={{
                    color: "#fff",
                    fontSize: "2rem",
                    marginRight: "20px",
                  }}
                >
                  <FaDiscord sx={{ color: "#fff", fontSize: "5rem" }} />
                </div>
                <div
                  style={{
                    color: "#fff",
                    fontSize: "2rem",
                    marginRight: "20px",
                  }}
                >
                  <FaInstagram className="icons" />
                </div>
                <div
                  style={{
                    color: "#fff",
                    fontSize: "2rem",
                    marginRight: "20px",
                  }}
                >
                  <a
                    style={{
                      color: "#fff",
                      fontSize: "2rem",
                      padding: "20px",
                    }}
                    href=""
                  >
                    <FaYoutube />
                  </a>
                </div>
              </div>
              <h3 style={{ marginTop: "5rem" }}>
                ¿Qué encontrarás en Petshop?
              </h3>
              <div>
                <div style={{ marginBottom: "15px" }}>
                  <a style={{ color: "#fff" }} href="">
                    Gran plus gatos
                  </a>
                </div>
                <div style={{ marginBottom: "15px" }}>
                  <a style={{ color: "#fff" }} href="">
                    Anuncios de campañas
                  </a>
                </div>
                <div style={{ marginBottom: "15px" }}>
                  <a style={{ color: "#fff" }} href="">
                    Reuniones perrunos
                  </a>
                </div>
                <div style={{ marginBottom: "15px" }}>
                  <a style={{ color: "#fff" }} href="">
                    Accesorios para fiestas
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom--section">
            <hr />
            <div className="container ">
              <div style={{ color: "#fff", textAlign: "center" }}>
                <AutoStoriesIcon sx={{ fontSize: "5rem" }} />
                <div style={{ margin: "2rem 0" }}>Libro de reclamaciones</div>
              </div>
              <div
                className="pagos"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <p style={{ fontSize: "25px", marginLeft: "15px" }}>
                  Paga con:
                </p>
                <div style={{ padding: "0 15px" }}>
                  <img
                    src="https://pe-soapros-demos.s3.amazonaws.com/petshop/KitCan-petshop-YAPE.jpg.webp"
                    alt=""
                    width="60px"
                    height="60px"
                  />
                </div>
                <div style={{ padding: "0 15px" }}>
                  <img
                    src="https://pe-soapros-demos.s3.amazonaws.com/petshop/KitCan-petshop-plin.png.webp"
                    alt=""
                    width="60px"
                    height="60px"
                  />
                </div>
                <div style={{ padding: "0 15px" }}>
                  <img
                    src="https://pe-soapros-demos.s3.amazonaws.com/petshop/KitCan-petshop-VISA.jpg.webp"
                    alt=""
                    width="60px"
                    height="60px"
                  />
                </div>
                <div style={{ padding: "0 15px" }}>
                  <img
                    src="https://pe-soapros-demos.s3.amazonaws.com/petshop/KitCan-petshop-MASTERCARD.jpg.webp"
                    alt=""
                    width="60px"
                    height="60px"
                  />
                </div>
                <div style={{ padding: "0 15px" }}>
                  <img
                    src="https://pe-soapros-demos.s3.amazonaws.com/petshop/KitCan-petshop-American-Express.jpg.webp"
                    alt=""
                    width="60px"
                    height="60px"
                  />
                </div>
                <div style={{ padding: "0 15px" }}>
                  <img
                    src="https://pe-soapros-demos.s3.amazonaws.com/petshop/KitCan-petshop-DINERS.jpg.webp"
                    alt=""
                    width="60px"
                    height="60px"
                  />
                </div>
              </div>
            </div>
          </div>
        </footer>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.section`
  .grid-four-column {
    grid-template-columns: 1fr 1fr 1fr 0.8fr;
  }
  .iSIFGq {
    margin: 0;
  }
  .btn-wha:hover {
    cursor: pointer;
  }
  .footer-about {
    margin-left: 10px;
  }
  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 5rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);
    .grid div:last-child {
      justify-self: end;
      align-self: center;
    }
  }
  footer {
    font-size: 14px;
    padding: 5rem 0 0 0;
    background-color: #1b699b;
    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
      font-weight: 700;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
      font-size: 14px;
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;
      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};
        .icons {
          color: #fff;
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }
  }
  .footer-bottom--section {
    padding-top: 2rem;
    hr {
      margin-bottom: 2rem;
      color: ${({ theme }) => theme.colors.hr};
      height: 0.1px;
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-four-column {
      grid-template-columns: 1fr;
    }
    .contact-short {
      max-width: 80vw;
      margin: 4.8rem auto;
      transform: translateY(0%);
      text-align: center;
      .grid div:last-child {
        justify-self: center;
      }
    }
    footer {
      padding: 5rem 0 3rem 0;
    }
    .footer-bottom--section {
      padding-top: 4.8rem;
    }
    .pagos {
      display: flex;
      flex-direction: column;
    }
  }
`;

export default Footer;
