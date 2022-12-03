import styled from "styled-components";
import { Button } from "../../styles/Button";

const FilterSection = () => {
  return (
    <Wrapper>
      <div className="filter-search">
        <form onSubmit={(e) => e.preventDefault()}>
          <input type="text" name="text" placeholder="Busque un producto" />
        </form>
      </div>

      <div className="filter-category">
        <h3>Categoría</h3>
        <div>
          <button
            type="button"
            name="category"
            // className={curElem === category ? "active" : ""}
          >
            Perro
          </button>
          <button
            type="button"
            name="category"
            // className={curElem === category ? "active" : ""}
          >
            Gato
          </button>
        </div>
      </div>

      <div className="filter-company">
        <h3>Marcas</h3>

        <form action="#">
          <select
            name="company"
            id="company"
            className="filter-company--select"
          >
            <option name="company">Dog Chow</option>
            <option name="company">Proplan</option>
            <option name="company">Canbo</option>
            <option name="company">Barker</option>
            <option name="company">Hill's</option>
            <option name="company">Ricocan</option>
          </select>
        </form>
      </div>

      <div className="filter_price">
        <h3>Precio</h3>
        <div className="precio__flex">
          <div className="precio__flex__p">{1}</div>
          <div className="precio__flex__p">{1000}</div>
        </div>
        <input type="range" name="price" />
      </div>

      <div className="filter-clear">
        <Button className="btn">Limpiar Filtros</Button>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  .precio__flex {
    display: flex;
    justify-content: space-between;
  }
  .precio__flex__p {
    font-size: 1.6rem;
  }
  h3 {
    padding: 2rem 0;
    font-size: bold;
  }
  .filter-search {
    input {
      padding: 0.6rem 1rem;
      width: 80%;
    }
  }
  .filter-category {
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.4rem;
      button {
        border: none;
        background-color: ${({ theme }) => theme.colors.white};
        text-transform: capitalize;
        cursor: pointer;
        &:hover {
          color: ${({ theme }) => theme.colors.btn};
        }
      }
      .active {
        border-bottom: 1px solid #000;
        color: ${({ theme }) => theme.colors.btn};
      }
    }
  }
  .filter-company--select {
    padding: 0.3rem 1.2rem;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.text};
    text-transform: capitalize;
  }
  .filter-color-style {
    display: flex;
    justify-content: center;
  }
  .color-all--style {
    background-color: transparent;
    text-transform: capitalize;
    border: none;
    cursor: pointer;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
  }
  .active {
    opacity: 1;
  }
  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }
  .filter_price {
    input {
      margin: 0.5rem 0 1rem 0;
      padding: 0;
      box-shadow: none;
      cursor: pointer;
    }
  }
  .filter-shipping {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .filter-clear .btn {
    background-color: #ec7063;
    color: #000;
  }
`;
export default FilterSection;
