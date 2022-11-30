import styled from "styled-components";
// import { useParams } from "react-router-dom";
import { useEffect } from "react";
// import { useProductContext } from "./context/productcontex";
// import PageNavigation from "./components/PageNavigation";
// import MyImage from "./components/MyImage";
import { Container } from "../../styles/Container";
// import FormatPrice from "./FormatPrice";
import { MdSecurity } from "react-icons/md";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import { Footer } from "../../components";
// import Star from "./components/Star";
// import AddToCart from "./components/AddToCart";

// const API = "https://api.pujakaitem.com/api/products";

const SingleProduct = () => {
  //   const { getSingleProduct, isSingleLoading, singleProduct } =
  //     useProductContext();
  //   const { id } = useParams();

  //   const {
  //     id: alias,
  //     name,
  //     company,
  //     price,
  //     description,
  //     category,
  //     stock,
  //     stars,
  //     reviews,
  //     image,
  //   } = singleProduct;

  useEffect(() => {
    // getSingleProduct(`${API}?id=${id}`);
  }, []);

  //   if (isSingleLoading) {
  //     return <div className="page-loading">Loading...</div>;
  //   }
  return (
    <Wrapper>
      {/* <PageNavigation title={name} /> */}
      <Container className="container">
        <div className="grid grid-two-column">
          {/* Lista de imagen */}
          <div className="product_images">{/* <MyImage imgs={image} /> */}</div>

          {/* Datos del producto  */}
          <div className="product-data">
            <h2>{0}</h2>
            {/* <Star stars={stars} reviews={reviews} /> */}

            <p className="product-data-price">
              Pre.Antes:
              <del>{/* <FormatPrice price={price + 250000} /> */}</del>
            </p>
            <p className="product-data-price product-data-real-price">
              Oferta por hoy:
              {/* <FormatPrice price={price} /> */}
            </p>
            <p>{0}</p>
            <div className="product-data-warranty">
              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Entrega Gratis</p>
              </div>

              <div className="product-warranty-data">
                <TbReplace className="warranty-icon" />
                <p>Delver producto hasta 30 días</p>
              </div>

              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Delivery </p>
              </div>

              <div className="product-warranty-data">
                <MdSecurity className="warranty-icon" />
                <p>2 años de garantia </p>
              </div>
            </div>

            <div className="product-data-info">
              <p>
                Disponible:
                <span> {1 > 0 ? "In Stock" : "Not Available"}</span>
              </p>
              <p>
                ID : <span> {0} </span>
              </p>
              <p>
                Marca :<span> {0} </span>
              </p>
            </div>
            <hr />
            {/* {stock > 0 && <AddToCart product={singleProduct} />} */}
            <div></div>
          </div>
        </div>
      </Container>
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
  }
  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;

    .product-data-warranty {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      margin-bottom: 1rem;

      .product-warranty-data {
        text-align: center;

        .warranty-icon {
          background-color: rgba(220, 220, 220, 0.5);
          border-radius: 50%;
          width: 4rem;
          height: 4rem;
          padding: 0.6rem;
        }
        p {
          font-size: 1.4rem;
          padding-top: 0.4rem;
        }
      }
    }

    .product-data-price {
      font-weight: bold;
    }
    .product-data-real-price {
      color: ${({ theme }) => theme.colors.btn};
    }
    .product-data-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.8rem;

      span {
        font-weight: bold;
      }
    }

    hr {
      max-width: 100%;
      width: 90%;
      /* height: 0.2rem; */
      border: 0.1rem solid #000;
      color: red;
    }
  }

  .product-images {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0 2.4rem;
  }
`;

export default SingleProduct;
