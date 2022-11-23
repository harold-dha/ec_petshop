import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomeView } from "../pages";
import { MainLayout } from "../layouts";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomeView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
