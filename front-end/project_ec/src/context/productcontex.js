// import { createContext, useContext, useEffect, useReducer } from "react";
// // import axios from "axios";
// import reducer from "../reducer/productReducer";

// const AppContext = createContext();
// const url = "https://6363105f66f75177ea3c9364.mockapi.io/products";
// const API = "https://6363105f66f75177ea3c9364.mockapi.io/products";
// const initialState = {
//   isLoading: false,
//   isError: false,
//   products: [],
//   featureProducts: [],
//   isSingleLoading: false,
//   singleProduct: {},
// };

// const AppProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   const getProducts = async () => {
//     dispatch({ type: "SET_LOADING" });
//     try {
//       const res = await fetch(`${url}`);
//       const products = await res.json();
//       dispatch({ type: "MY_API_DATA", payload: products });
//     } catch (error) {
//       dispatch({ type: "API_ERROR" });
//     }
//   };

//   // busqueda para producto unico
//   const getSingleProduct = async () => {
//     dispatch({ type: "SET_SINGLE_LOADING" });
//     try {
//       const res = await fetch(`${url}`);
//       const singleProduct = await res.json();
//       dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
//       //   return singleProduct;
//     } catch (error) {
//       dispatch({ type: "SET_SINGLE_ERROR" });
//     }
//   };

//   useEffect(() => {
//     getProducts(API);
//   }, []);

//   return (
//     <AppContext.Provider value={{ ...state, getSingleProduct }}>
//       {children}
//     </AppContext.Provider>
//   );
// };
// // Hooks

// const useProductContext = () => {
//   return useContext(AppContext);
// };

// export { AppProvider, AppContext, useProductContext };
