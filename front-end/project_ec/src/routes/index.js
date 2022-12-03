import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../GlobalStyle";
import { MainLayout } from "../layouts";
import {
  HomeView,
  LoginView,
  SignUpView,
  SingleProductView,
  QuienesView,
  ProductsView,
  ContactView,
  Cart,
} from "../pages";
const Router = () => {
  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgba(29 ,29, 29, .8)",
      white: "#fff",
      black: " #212529",
      helper: "#8490ff",

      bg: "#F6F8FA",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomeView />} />
            <Route path="/quienes" element={<QuienesView />} />
            <Route path="/products" element={<ProductsView />} />
            <Route path="/contact" element={<ContactView />} />
            <Route path="/singleproduct/:id" element={<SingleProductView />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
          <Route path="/login" element={<LoginView />} />
          <Route path="/sign-up" element={<SignUpView />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};
export default Router;
