import React from "react";
import { Footer } from "../../components";
import styled from "styled-components";
 

const Contac = () => {
  return (
    <Wrapper>
      <h2 className="common-heading">Ubícanos</h2>

      <iframe
              style={{
                 
                display: "flex",
                justifyContent: "center",
                margin: "10px 0 20px 0",
              }}
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15617.868808734102!2d-77.1267362!3d-11.8725209!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xda0ba406dc10ae3c!2splazaVea%20Ventanilla%20%7C%20Televisores%2C%20Laptops%2C%20Celulares%20y%20m%C3%A1s!5e0!3m2!1ses-419!2spe!4v1670001672712!5m2!1ses-419!2spe"
              width="100%"
              height="600"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>

      <div className="container">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/mdojyrar"
            method="POST"
            className="contact-inputs"
          >
            <input
              type="text"
              placeholder="usuario"
              name="username"
              required
              autoComplete="off"
            />

            <input
              type="email"
              name="Email"
              placeholder="correo"
              autoComplete="off"
              required
            />

            <textarea
              name="Message"
              cols="30"
              rows="10"
              required
              autoComplete="off"
              placeholder="Ingrese un mensaje"
            ></textarea>

            <input type="submit" value="Enviar" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 9rem 0 5rem 0;
  text-align: center;
  .container {
    margin-top: 6rem;
    .contact-form {
      max-width: 50rem;
      margin: auto;
      .contact-inputs {
        display: flex;
        flex-direction: column;
        gap: 3rem;
        input[type="submit"] {
          cursor: pointer;
          transition: all 0.2s;
          &:hover {
            background-color: ${({ theme }) => theme.colors.white};
            border: 1px solid ${({ theme }) => theme.colors.btn};
            color: ${({ theme }) => theme.colors.btn};
            transform: scale(0.9);
          }
        }
      }
    }
  }
`;

export default Contac;
